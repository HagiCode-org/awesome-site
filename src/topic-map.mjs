// Deterministic layout for the homepage topic map: one cluster per topic, one dot per collection, so the
// picture is a literal census of the catalog (76 dots for 76 collections). Computed at build time so the map
// renders without JavaScript, and the same input always yields the same picture so builds stay reproducible.

export const TOPIC_MAP_SIZE = 320;
export const TOPIC_MAP_DOT = 4.4;

const SPREAD = 5.7;
const GOLDEN_ANGLE = 2.399963229728653;
const WALL_PADDING = 22;
const CLUSTER_GAP = 17;

/** Radius of the circle that encloses a cluster of `count` dots. */
export function topicClusterRadius(count) {
  return count <= 1 ? TOPIC_MAP_DOT : SPREAD * Math.sqrt(count - 0.5) + TOPIC_MAP_DOT;
}

/** Dot centres of one cluster, relative to its centre (a sunflower spiral, turned by `turn` radians). */
export function clusterDots(count, turn = 0) {
  if (count <= 1) return [{ dx: 0, dy: 0 }];
  return Array.from({ length: count }, (_, i) => {
    const angle = i * GOLDEN_ANGLE + turn;
    const radius = SPREAD * Math.sqrt(i + 0.5);
    return { dx: Math.cos(angle) * radius, dy: Math.sin(angle) * radius };
  });
}

function round(value) {
  return Math.round(value * 10) / 10;
}

/**
 * @param {ReadonlyArray<ReadonlyArray<string>>} tagLists one list of topic ids per collection
 * @param {{ size?: number, iterations?: number }} [options]
 * @returns {{ size: number, nodes: Array<{ topic: string, count: number, r: number, x: number, y: number, dots: Array<{ x: number, y: number }> }> }}
 */
export function layoutTopicMap(tagLists, { size = TOPIC_MAP_SIZE, iterations = 420 } = {}) {
  const counts = new Map();
  for (const list of tagLists) {
    for (const tag of new Set(list)) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }

  const half = size / 2;
  const nodes = [...counts]
    .sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : 1))
    .map(([topic, count], index) => {
      const angle = index * GOLDEN_ANGLE;
      const spiral = 17 * Math.sqrt(index + 0.5);
      return {
        topic,
        count,
        r: topicClusterRadius(count),
        x: half + Math.cos(angle) * spiral,
        y: half + Math.sin(angle) * spiral,
        vx: 0,
        vy: 0,
      };
    });

  function wall(node) {
    const limit = half - WALL_PADDING - node.r;
    const dx = node.x - half;
    const dy = node.y - half;
    const d = Math.hypot(dx, dy);
    if (d > limit) {
      node.x = half + (dx / d) * limit;
      node.y = half + (dy / d) * limit;
    }
  }

  for (let step = 0; step < iterations; step++) {
    const alpha = 1 - step / iterations;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i];
        const b = nodes[j];
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        let d2 = dx * dx + dy * dy;
        if (d2 < 0.01) { dx = 0.1 * (j - i); dy = 0.1; d2 = dx * dx + dy * dy; }
        const d = Math.sqrt(d2);
        const push = (700 + (a.r + b.r) * 40) / d2;
        a.vx -= (dx / d) * push;
        a.vy -= (dy / d) * push;
        b.vx += (dx / d) * push;
        b.vy += (dy / d) * push;
      }
    }
    for (const node of nodes) {
      node.vx += (half - node.x) * 0.014;
      node.vy += (half - node.y) * 0.014;
      node.x += node.vx * alpha * 0.5;
      node.y += node.vy * alpha * 0.5;
      node.vx *= 0.55;
      node.vy *= 0.55;
      wall(node);
    }
  }

  // Resolve any remaining overlap, then keep every cluster inside the wall.
  for (let pass = 0; pass < 160; pass++) {
    let moved = false;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i];
        const b = nodes[j];
        const dx = b.x - a.x || 0.01;
        const dy = b.y - a.y;
        const d = Math.hypot(dx, dy);
        const min = a.r + b.r + CLUSTER_GAP;
        if (d < min) {
          const shift = (min - d) / 2;
          a.x -= (dx / d) * shift;
          a.y -= (dy / d) * shift;
          b.x += (dx / d) * shift;
          b.y += (dy / d) * shift;
          moved = true;
        }
      }
    }
    for (const node of nodes) wall(node);
    if (!moved) break;
  }

  return {
    size,
    nodes: nodes.map(({ topic, count, r, x, y }, index) => ({
      topic,
      count,
      r: round(r),
      x: round(x),
      y: round(y),
      dots: clusterDots(count, index * 0.9).map(({ dx, dy }) => ({ x: round(x + dx), y: round(y + dy) })),
    })),
  };
}

/** Rough text width in map units for 12px semi-bold labels; CJK glyphs are full-width. */
export function estimateLabelWidth(text) {
  let width = 0;
  for (const char of text) width += char.codePointAt(0) >= 0x2e80 ? 12 : 6.6;
  return width;
}

function hitsDot(box, dot) {
  const nearestX = Math.max(box.x0, Math.min(dot.x, box.x1));
  const nearestY = Math.max(box.y0, Math.min(dot.y, box.y1));
  return Math.hypot(dot.x - nearestX, dot.y - nearestY) < TOPIC_MAP_DOT + 3;
}

/**
 * Pick, per cluster, the side where its label covers the fewest dots while staying inside the map: under the
 * cluster, above it, then to either side, then a little farther out. The centre of the map is dense, so a label
 * is not always free of dots; the page gives labels a halo for that case and shows one at a time.
 * @param {ReturnType<typeof layoutTopicMap>["nodes"]} nodes
 * @param {number[]} widths estimated label widths, one per node
 */
export function placeLabels(nodes, widths, { size = TOPIC_MAP_SIZE } = {}) {
  const dots = nodes.flatMap((node) => node.dots);
  return nodes.map((node, index) => {
    const width = widths[index];
    const candidates = [
      { anchor: "middle", x: node.x, y: node.y + node.r + 14 },
      { anchor: "middle", x: node.x, y: node.y - node.r - 7 },
      { anchor: "start", x: node.x + node.r + 8, y: node.y + 4 },
      { anchor: "end", x: node.x - node.r - 8, y: node.y + 4 },
      { anchor: "middle", x: node.x, y: node.y + node.r + 30 },
      { anchor: "middle", x: node.x, y: node.y - node.r - 23 },
    ];
    let best = candidates[0];
    let bestScore = Infinity;
    for (const candidate of candidates) {
      const x0 = candidate.anchor === "start" ? candidate.x : candidate.anchor === "end" ? candidate.x - width : candidate.x - width / 2;
      const box = { x0, x1: x0 + width, y0: candidate.y - 12, y1: candidate.y + 3 };
      let score = dots.filter((dot) => hitsDot(box, dot)).length;
      if (box.x0 < 0 || box.x1 > size || box.y0 < 0 || box.y1 > size) score += 100;
      if (score < bestScore) {
        best = candidate;
        bestScore = score;
        if (score === 0) break;
      }
    }
    return { anchor: best.anchor, x: round(best.x), y: round(best.y) };
  });
}
