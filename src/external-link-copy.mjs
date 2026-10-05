export const externalLinkWarningCopy = {
  root: {
    heading: "Leave Awesome Site?",
    explanation: "You are about to visit an external website. We do not control its content or privacy practices.",
    destination: "Destination",
    stay: "Stay on Awesome Site",
    continue: "Continue to website",
    invalid: "This website address is invalid or contains sign-in information, so it cannot be opened here.",
    fallback: "You are leaving Awesome Site. We do not control this website. Continue to:",
  },
  "zh-CN": {
    heading: "离开 Awesome Site？",
    explanation: "你即将访问外部网站。我们无法控制其内容或隐私惯例。",
    destination: "目标地址",
    stay: "留在 Awesome Site",
    continue: "继续访问网站",
    invalid: "此网站地址无效或包含登录信息，因此无法从这里打开。",
    fallback: "你即将离开 Awesome Site。我们无法控制此网站。是否继续访问：",
  },
  "zh-Hant": {
    heading: "要離開 Awesome Site 嗎？",
    explanation: "您即將前往外部網站。我們無法控制其內容或隱私慣例。",
    destination: "目的地",
    stay: "留在 Awesome Site",
    continue: "繼續前往網站",
    invalid: "此網站地址無效或包含登入資訊，因此無法從這裡開啟。",
    fallback: "您即將離開 Awesome Site。我們無法控制此網站。要繼續前往：",
  },
  "fr-FR": {
    heading: "Quitter Awesome Site ?",
    explanation: "Vous allez visiter un site externe. Nous ne contrôlons ni son contenu ni ses pratiques de confidentialité.",
    destination: "Site de destination",
    stay: "Rester sur Awesome Site",
    continue: "Continuer vers le site",
    invalid: "Cette adresse de site est invalide ou contient des identifiants ; elle ne peut pas être ouverte ici.",
    fallback: "Vous quittez Awesome Site. Nous ne contrôlons pas ce site. Continuer vers :",
  },
  "de-DE": {
    heading: "Awesome Site verlassen?",
    explanation: "Du bist dabei, eine externe Website aufzurufen. Wir haben keine Kontrolle über deren Inhalte oder Datenschutzpraktiken.",
    destination: "Ziel",
    stay: "Auf Awesome Site bleiben",
    continue: "Zur Website wechseln",
    invalid: "Diese Webadresse ist ungültig oder enthält Anmeldedaten und kann daher hier nicht geöffnet werden.",
    fallback: "Du verlässt Awesome Site. Wir kontrollieren diese Website nicht. Weiter zu:",
  },
  "es-ES": {
    heading: "¿Salir de Awesome Site?",
    explanation: "Estás a punto de visitar un sitio web externo. No controlamos su contenido ni sus prácticas de privacidad.",
    destination: "Destino",
    stay: "Seguir en Awesome Site",
    continue: "Continuar al sitio web",
    invalid: "Esta dirección web no es válida o contiene datos de acceso, por lo que no se puede abrir aquí.",
    fallback: "Vas a salir de Awesome Site. No controlamos este sitio web. Continuar a:",
  },
  "ja-JP": {
    heading: "Awesome Site を離れますか？",
    explanation: "外部のウェブサイトに移動しようとしています。そのサイトのコンテンツやプライバシーの取り扱いは管理していません。",
    destination: "移動先",
    stay: "Awesome Site に戻る",
    continue: "ウェブサイトに進む",
    invalid: "このウェブアドレスは無効かログイン情報を含むため、ここから開くことはできません。",
    fallback: "Awesome Site を離れます。このウェブサイトは管理していません。次に進みますか：",
  },
  "ko-KR": {
    heading: "Awesome Site를 떠나시겠어요?",
    explanation: "외부 웹사이트로 이동하려고 합니다. 해당 사이트의 콘텐츠와 개인정보 처리 방식을 관리하지 않습니다.",
    destination: "목적지",
    stay: "Awesome Site에 머무르기",
    continue: "웹사이트로 계속하기",
    invalid: "웹 주소가 올바르지 않거나 로그인 정보가 포함되어 있어 여기서 열 수 없습니다.",
    fallback: "Awesome Site를 떠납니다. 이 웹사이트는 관리하지 않습니다. 다음 주소로 이동할까요:",
  },
  "pt-BR": {
    heading: "Sair do Awesome Site?",
    explanation: "Você está prestes a visitar um site externo. Não controlamos o conteúdo nem as práticas de privacidade dele.",
    destination: "Destino",
    stay: "Ficar no Awesome Site",
    continue: "Continuar para o site",
    invalid: "Este endereço é inválido ou contém informações de login e não pode ser aberto aqui.",
    fallback: "Você está saindo do Awesome Site. Não controlamos este site. Continuar para:",
  },
  "ru-RU": {
    heading: "Покинуть Awesome Site?",
    explanation: "Вы собираетесь перейти на внешний сайт. Мы не контролируем его содержимое и правила конфиденциальности.",
    destination: "Адрес назначения",
    stay: "Остаться на Awesome Site",
    continue: "Перейти на сайт",
    invalid: "Этот веб-адрес недействителен или содержит данные для входа, поэтому его нельзя открыть отсюда.",
    fallback: "Вы покидаете Awesome Site. Мы не контролируем этот сайт. Перейти по адресу:",
  },
};

/**
 * @param {string} locale
 * @returns {typeof externalLinkWarningCopy.root}
 */
export function getExternalLinkWarningCopy(locale) {
  if (!Object.hasOwn(externalLinkWarningCopy, locale)) {
    throw new Error(`Unsupported external-link warning locale "${locale}"`);
  }
  return externalLinkWarningCopy[locale];
}
