<!--lint disable awesome-heading awesome-toc double-link-->

<img src="/assets/banner.png" />
<blockquote align="center"> Jellyfin 主題與外掛精選清單</blockquote>

<p align="center">
[
  <a href="#-plugins">外掛</a> •
  <a href="#-companion-apps--tools">附屬應用與工具</a> •
  <a href="#-guides">指南</a> •
  <a href="#-snippets">程式碼片段</a> •
  <a href="#-related">相關項目</a> •
  <a href="#contribute">參與貢獻</a>
]
</p>

<table>
  <tr>
    <th width="500px" align="center">
      <h3><a href="THEMES.md">🖌️ 主題</a></h3>
      瀏覽社群主題合集<br />
      <img width="1" height="10" />
    </th>
    <th width="500px" align="center">
      <h3><a href="CLIENTS.md">📺 用戶端</a></h3>
      瀏覽適用於所有平台的可用用戶端<br />
      <img width="1" height="10" />
    </th>
  </tr>
</table>

## 🧩 外掛


### 🎨 介面與自訂

<!-- sort list:plugins-ui -->
- [Achievement Badges](https://github.com/ZL154/AchievementBadges_for_Jellyfin) - 可解鎖的觀看成就徽章，透過「首次觀看」「瘋狂追劇」「深夜觀影」等里程碑為 Jellyfin 增添遊戲化體驗，並提供群聊、私訊等社交功能。
- [Custom Cover Art](https://github.com/Bardesss/customcoverart) - 一個用於為媒體庫設計並套用自訂封面圖的 Jellyfin 外掛。 `✅ JF12`
- [HoverTrailer](https://github.com/Fovty/HoverTrailer) - 滑鼠懸停時顯示電影預告片。
- [InPlayerEpisodePreview](https://github.com/Namo2/InPlayerEpisodePreview) - 在影片播放器中新增影集列表。 `✅ JF12`
- [jellyfin-editors-choice-plugin](https://github.com/lachlandcp/jellyfin-editors-choice-plugin) - 在首頁新增 Netflix 風格的全寬內容輪播，用於展示精選內容。
- [Jellyfin-Enhanced](https://github.com/n00bcodr/Jellyfin-Enhanced) - 為 Jellyfin 新增鍵盤快速鍵、字幕樣式、TMDB 評論、Seerr 搜尋與請求整合等多項改進。 `✅ JF12`
- [jellyfin-icon-metadata](https://github.com/Druidblack/jellyfin-icon-metadata) - 為 Jellyfin 新增元資料提供者圖示。
- [Jellyfin-JavaScript-Injector](https://github.com/n00bcodr/Jellyfin-JavaScript-Injector) - 無需修改 index.html 即可將自訂 JavaScript 注入 Jellyfin 介面。 `✅ JF12`
- [jellyfin-media-preview-plugin](https://github.com/spkesDE/jellyfin-media-preview-plugin) - 使用 Trickplay 縮圖、本機預告片或 YouTube 預告片為 Jellyfin Web 新增滑鼠懸停預覽。 `✅ JF12`
- [Jellyfin-MonWUI-Plugin](https://github.com/G-grbz/Jellyfin-MonWUI-Plugin) - Jellyfin 介面強化工具包，提供可自訂的滑桿、懸停預告片、音樂播放器、通知等介面模組。
- [Jellyfin.Plugin.ActorPlus](https://github.com/Druidblack/Jellyfin.Plugin.ActorPlus) - 為演員頭像新增更多詳情和可懸停查看的影視作品列表，並在懸停電影或影集海報時顯示演員名單。
- [jellyfin-plugin-collection-sections](https://github.com/IAmParadox27/jellyfin-plugin-collection-sections) - 為 `jellyfin-plugin-home-sections` 新增合輯與播放清單區塊。
- [jellyfin-plugin-custom-logo](https://github.com/WimWamWom/jellyfin-plugin-custom-logo) - 將啟動畫面、頁首、管理側邊欄標誌和網站圖示替換為你自己的標誌和頁首文字，可在儀表板中設定。 `✅ JF12`
- [jellyfin-plugin-custom-tabs](https://github.com/IAmParadox27/jellyfin-plugin-custom-tabs) - 在 jellyfin-web 中新增個人化標籤頁，快速存取自訂內容。
- [jellyfin-plugin-GetAvatar](https://github.com/cedev-1/jellyfin-plugin-GetAvatar) - 允許使用者從一組圖片中選擇頭像。
- [jellyfin-plugin-home-sections](https://github.com/IAmParadox27/jellyfin-plugin-home-sections) - 允許使用者使用「因為你看過」和「最新電影」等動態區塊自訂 jellyfin-web 主畫面。
- [jellyfin-plugin-media-bar](https://github.com/IAmParadox27/jellyfin-plugin-media-bar) - 用於展示媒體合輯的精選內容欄。
- [jellyfin-plugin-pages](https://github.com/IAmParadox27/jellyfin-plugin-pages) - 讓其他外掛能夠建立與原生介面一致的 Jellyfin 自訂頁面。
- [jellyfin-plugin-ratings](https://github.com/K3ntas/jellyfin-plugin-ratings) - 為 Jellyfin 新增使用者評分、卡片疊加層、媒體請求、刪除流程、聊天和新媒體通知。
- [jellyfin-plugin-skin-manager](https://github.com/danieladov/jellyfin-plugin-skin-manager) - 協助你下載並安裝介面外觀主題（Skin）。
- [Jellyfin-Seasonals](https://github.com/CodeDevMLH/Jellyfin-Seasonals) - Jellyfin 的季節性主題和動畫合集。
- [jellyscrub](https://github.com/nicknsy/jellyscrub) - 流暢的滑鼠懸停影片進度拖動預覽。 `🔸 Stale`
  <!--lint ignore list-item-indent awesome-list-item-->
    -  **注意：** Jellyfin 10.9 現已原生支援 trickplay。
- [SeerrFin](https://github.com/varunaditya-plus/SeerrFin) - 直接在 Jellyfin 中透過 Seerr 探索和請求電影及電視劇。
- [StarTrack](https://github.com/ZL154/jellyfin-plugin-startrack) - 為 Jellyfin 新增每位使用者的評分、待看清單、觀影日記、清單和成員設定檔，並可選擇與 Letterboxd/Trakt/Simkl 同步。
- [Static Assets](https://github.com/cleverdevil/jelly-static-assets) - 直接從 Jellyfin 上傳和提供 CSS、JavaScript、圖片等靜態資源。 `🔸 Stale`


### 📂 合輯與播放清單

<!-- sort list:plugins-collections -->
- [AudioMuse-AI-Plugin](https://github.com/NeptuneHub/audiomuse-ai-plugin) - 使用 AudioMuse-AI 後端產生智慧播放清單並取代即時混音。 `✅ JF12`
- [jellyfin-favorited-songs-playlist](https://github.com/Saturn745/jellyfin-favorited-songs-playlist) - 自動建立並更新一個包含所有已收藏曲目的「收藏歌曲」播放清單。
- [jellyfin-harmonie](https://github.com/mxschll/jellyfin-harmonie) - 使用音訊嵌入向量產生智慧播放清單並取代即時混音。 `✅ JF12`
- [Jellyfin.Plugin.ACdb](https://github.com/jonjonsson/Jellyfin.Plugin.ACdb) - 從 [ACdb.tv](https://acdb.tv) 同步自動更新的合輯、海報和背景圖。 `🔺 Paid`
- [jellyfin-plugin-auto-collections](https://github.com/KeksBombe/jellyfin-plugin-auto-collections) - 根據靈活的條件自動建立和維護動態合輯。
- [jellyfin-plugin-collection-import](https://github.com/lostb1t/jellyfin-plugin-collection-import) - 透過從 *mdblist* 等外部來源匯入來建立和整理合輯。
- [jellyfin-plugin-mindthegaps](https://github.com/IDisposable/jellyfin-plugin-mindthegaps) - 尋找媒體庫中缺失的條目（合輯、影集分集、演職員作品），並將其整理成一份可逐項補全的報告。
- [jellyfin-plugin-provider-stuff](https://github.com/kamilkosek/jellyfin-plugin-provider-stuff) - 自動為媒體庫條目加上串流服務提供者標籤，並按提供者建立合輯。 `🔸 Stale`
- [jellyfin-smartlists-plugin](https://github.com/jyourstone/jellyfin-smartlists-plugin) - 在 Jellyfin 中建立動態合輯和播放清單，隨著媒體庫的變化按可自訂的規則自動更新。
- [playlist-generator](https://github.com/Eeeeelias/playlist-generator) - 根據你的聆聽歷史建立個人播放清單。
- [TheDwarfsHammer](https://github.com/Kamoba/jellyfin-plugin-thedwarfshammer) - 為 Jellyfin 提供強化的合輯管理和內容探索功能。
- [WikiEpisodeOrder](https://github.com/neilmanfredit/wikiepisodeorder-jellyfin-plugin) - 使用 Wiki 分集順序資料改進電視劇的分集排序和元資料匹配。


### ▶️ 播放

<!-- sort list:plugins-playback -->
- [intro-skipper](https://github.com/intro-skipper/intro-skipper) - 透過音訊指紋自動偵測 Jellyfin 中的片頭和片尾片段。 `✅ JF12`
- [jellyfin-plugin-cinemamode](https://github.com/CherryFloors/jellyfin-plugin-cinemamode) - 使用本機預告片和映前短片啟用 Jellyfin 的影院模式。
- [jellyfin-plugin-dedupe-continue-watching](https://github.com/SloMR/jellyfin-plugin-dedupe-continue-watching) - 為「繼續觀看」一列去除重複，讓每部影集只出現一次，並顯示最近播放的一集。
- [jellyfin-plugin-discontinue-watching](https://github.com/jon4hz/jellyfin-plugin-discontinue-watching) - 讓你在不重設觀看進度的情況下從「繼續觀看」清單中移除條目，並可在閒置一段時間後自動隱藏。
- [jellyfin-plugin-jellysleep](https://github.com/jon4hz/jellyfin-plugin-jellysleep) - 為 Jellyfin 新增睡眠計時器功能。
- [Jellyfin.Plugin.StreamLimit](https://github.com/JellyboxAD/Jellyfin.Plugin.StreamLimit) - 允許限制每位使用者的同時播放串流數量。
- [jellyfin-transcode-nag](https://github.com/voc0der/jellyfin-transcode-nag) - 當使用者因格式或編解碼器不受支援而觸發轉檔時進行提醒，同時允許基於位元速率的轉檔。
- [TheIntroDB](https://github.com/TheIntroDB/jellyfin-plugin) - 由社群維護的資料庫，收錄電影和電視劇的片頭、前情回顧、片尾和預覽片段。


### 🔗 整合與同步

<!-- sort list:plugins-integration -->
- [Gelato](https://github.com/lostb1t/Gelato) - 用基於 Stremio 的結果取代 Jellyfin 的預設搜尋，並可透過排程任務把整個目錄自動匯入你的媒體庫。
- [jellyfin-ani-sync](https://github.com/vosmiic/jellyfin-ani-sync) - 在 Jellyfin 與 [Anilist](https://anilist.co/) 及其他服務之間自動追蹤並同步動漫觀看進度。
- [jellyfin-plugin-animethemes](https://github.com/EusthEnoptEron/jellyfin-plugin-animethemes) - 從 [AnimeThemes.moe](https://animethemes.moe/) 取得動漫片頭曲和片尾曲，同時支援音訊和影片。
- [Jellyfin.Plugin.JF_To_Stash_Sync](https://github.com/Druidblack/Jellyfin.Plugin.JF_To_Stash_Sync) - 與 Stash 同步觀看活動。
- [jellyfin-plugin-letterboxd-sync](https://github.com/Gizmo091/jellyfin-plugin-letterboxd-sync) - 自動將你看過的電影歷史同步到 Letterboxd。
- [jellyfin-plugin-listenbrainz](https://github.com/lyarenei/jellyfin-plugin-listenbrainz) - 自動將你的音樂聆聽活動同步到 ListenBrainz。
- [jellyfin-plugin-streamyfin](https://github.com/streamyfin/jellyfin-plugin-streamyfin) - Streamyfin 的配套外掛，支援對 Streamyfin 應用程式進行集中設定。
- [jellyfin-rpc by *kennethsible*](https://github.com/kennethsible/jellyfin-rpc) - 在 Discord 上直接顯示你目前的 Jellyfin 活動。
- [jellyfin-rpc by *Radiicall*](https://github.com/JustRadical/jellyfin-rpc) - 在 Discord 上直接顯示你目前的 Jellyfin 活動。
- [jellynext](https://github.com/luall0/jellynext) - 建立按使用者隔離的虛擬媒體庫，提供個人化 Trakt 推薦和新季內容。
- [Moonbase](https://github.com/Moonfin-Client/Plugin) - Moonfin 用戶端的配套外掛，提供伺服器端設定同步、整合功能以及一個代管的 Moonfin Web 介面。
- [MyAnimeSync](https://github.com/iankiller77/MyAnimeSync) - 在 Jellyfin 和 MyAnimeList 之間自動同步動漫觀看進度。
- [Plexyfin](https://github.com/cleverdevil/plexyfin) - 自動將海報圖片和合輯從 Plex 同步到 Jellyfin。
- [Shokofin](https://github.com/ShokoAnime/Shokofin) - 將 [Shoko Server](https://shokoanime.com/downloads/shoko-server) 與 Jellyfin 整合，用於動漫媒體庫管理。 `✅ JF12`


### 🔔 通知

<!-- sort list:plugins-notifications -->
- [Jellyfin-Newsletter](https://github.com/Sanidhya30/Jellyfin-Newsletter) - 透過電子郵件、Discord 或 Telegram 發送媒體庫變動（新增、更新、刪除）的電子報和通知。
- [Jellyfin-Newsletter-Plugin](https://github.com/Cloud9Developer/Jellyfin-Newsletter-Plugin) - 為最近新增的媒體發送電子報。 `🔹 Beta`
- [jellyfin-plugin-DiscordNotifier](https://github.com/cedev-1/jellyfin-plugin-DiscordNotifier) - 將 Jellyfin 伺服器事件的通知發送到 Discord。
- [jellyfin-plugin-TelegramNotifier](https://github.com/RomainPierre7/jellyfin-plugin-TelegramNotifier) - 透過 Telegram 接收 Jellyfin 伺服器事件的通知。
- [NotifySync](https://github.com/peterdu1109/NotifySync) - 為 Jellyfin 新增一個顯示最近新增內容的通知鈴鐺。
- [Telefin](https://github.com/LoloZarro/Telefin) - 為 Jellyfin 事件啟用 Telegram 通知的外掛，並附帶許多附加功能。


### 🔐 驗證

<!-- sort list:plugins-auth -->
- [Jellyfin-Discord-Auth](https://github.com/EvanTrow/Jellyfin-Discord-Auth) - 允許使用者透過 Discord 登入。
- [jellyfin-plugin-ldapauth](https://github.com/jellyfin/jellyfin-plugin-ldapauth) - 允許使用 LDAP 作為驗證提供者。 `✅ JF12`
- [jellyfin-plugin-sso](https://github.com/9p4/jellyfin-plugin-sso) - 允許使用者透過 SSO 提供者登入。 `🔹 Beta` `🔸 Stale`
- [Jellyfin Security](https://github.com/ZL154/JellyfinSecurity) - 為 Jellyfin 原生新增 TOTP 和電子郵件兩步驟驗證、通行密鑰、OIDC/SSO 登入、防暴力破解、IP 允許清單、裝置配對、受信任瀏覽器和稽核日誌。
- [TeleJelly](https://github.com/hexxone/TeleJelly) - 允許使用者透過 [Telegram 登入小工具](https://core.telegram.org/widgets/login)登入。


### 📚 媒體庫管理

<!-- sort list:plugins-library -->
- [AniLiberty STRM Plugin](https://github.com/queukat/AniLibriaStrmPlugin) - 為 Jellyfin 產生帶有元資料、片頭標記和觀看進度同步的 AniLiberty STRM 媒體庫。
- [GhostLibrary](https://github.com/upchui/Jellyfin-GhostLibrary) - 從用戶端主畫面和媒體庫列表中隱藏選定的媒體庫，同時不會阻止伺服器端外掛或檔案系統存取。
- [Ignore Empty Items](https://github.com/Rijul-A/ignore-empty-items-jellyfin) - 隱藏或移除不包含任何媒體檔案的 Jellyfin 媒體庫條目，同時保留磁碟上的檔案和資料夾。 `✅ JF12`
- [Jellyfin Ignore](https://github.com/fdett/jellyfin-ignore/) - 在媒體庫掃描時忽略指定的檔案名稱模式。可用於防止專輯播放清單出現在媒體庫中。 `🔹 Beta` `✅ JF12`
- [jellyfin-local-posters](https://github.com/NooNameR/Jellyfin.Plugin.LocalPosters/) - 使用 TPDb 和 MediUX 檔案名稱格式自動比對並匯入本機海報。還支援從 Google Drive 同步海報。
- [jellyfin-musictags-plugin](https://github.com/jyourstone/jellyfin-musictags-plugin) - 自動擷取音訊檔案元資料並轉換為標準 Jellyfin 標籤。
- [jellyfin-plugin-air-times](https://github.com/k0d13/jellyfin-air-times) - 根據伺服器所在位置提供本地化的影集播出時間。 `🔸 Stale`
- [jellyfin-plugin-enigma2](https://github.com/knackebrot/jellyfin-plugin-enigma2) - 支援 Vu+ 和 Enigma2 直播電視串流裝置。 `🔸 Stale`
- [jellyfin-plugin-languageTags](https://github.com/TheXaman/jellyfin-plugin-languageTags) - 使用 FFmpeg 根據音軌為媒體新增語言標籤。
- [jellyfin-plugin-localrecs](https://github.com/rdpharr/jellyfin-plugin-localrecs) - 根據本機觀看歷史產生個人化的電影和電視劇推薦，無需外部服務。
- [jellyfin-plugin-media-cleaner](https://github.com/shemanaev/jellyfin-plugin-media-cleaner) - 在指定的期限過後自動刪除已看完的媒體。
- [jellyfin-plugin-MediathekViewDL](https://github.com/CatNoir2006/jellyfin-plugin-MediathekViewDL) - 將 MediathekViewDL 整合到 Jellyfin，允許使用者搜尋、下載和管理內容。
- [jellyfin-plugin-meilisearch](https://github.com/arnesacnussem/jellyfin-plugin-meilisearch) - 把搜尋查詢交給 Meilisearch 實例處理，提升 Jellyfin 搜尋的速度和準確性。 `✅ JF12`
- [jellyfin-plugin-pre-transcode](https://github.com/mugurc/jellyfin-plugin-pre-transcode) - 在背景把媒體庫中的媒體重新編碼為可設定的相容性基準，讓伺服器不必在每次播放時都對同樣的檔案進行即時轉檔。 `✅ JF12`
- [jellyfin-powertoys](https://github.com/lennykean/jellyfin-powertoys) - 一組為 Jellyfin 增加附加功能和工具的外掛合集。
- [JellyfinTweaks](https://github.com/n00bcodr/JellyfinTweaks) - 覆寫所有裝置上的 Jellyfin 設定，例如*啟用背景圖片*和*啟用主題音樂*。 `✅ JF12`
- [Jellyfin-Xtream-Library](https://github.com/firestaerter3/Jellyfin-Xtream-Library) - 透過 STRM 檔案將 Xtream 隨選視訊和影集內容同步到原生 Jellyfin 媒體庫，支援自動元資料查詢和直播電視。
- [JellySTRMprobe](https://github.com/firestaerter3/JellySTRMprobe) - 探測 STRM 檔案，擷取 Jellyfin 在媒體庫掃描時會略過的媒體資訊（編解碼器、解析度、時長、音軌）。
- [media-upload-plugin](https://github.com/GrandguyJS/media-upload-plugin) - 一款媒體管理器，在 Jellyfin 內提供上傳、按 URL 批次下載和目錄瀏覽功能。 `🔸 Stale`
- [quality-gate](https://github.com/GeiserX/quality-gate) - 透過可設定的基於路徑的策略將使用者限制在特定的媒體版本上，適合頻寬管理或分級存取。 `✅ JF12`
- [smart-covers](https://github.com/GeiserX/smart-covers) - 為圖書、有聲書、漫畫、雜誌和音樂媒體庫擷取封面，並可透過 Open Library 和 Google Books 線上備援取得。
- [whisper-subs](https://github.com/GeiserX/whisper-subs) - 使用由 Whisper 驅動的本機 AI 模型自動產生字幕，所有處理都在你的伺服器上完成。


### 🏷️ 元資料提供者

<!-- sort list:metadata-providers -->
- [jellyfin-imdb-rating-updater](https://github.com/voc0der/jellyfin-imdb-rating-updater) - 每天下載 IMDb 評分資料集，為帶有 IMDb ID 的媒體庫條目更新 CommunityRating 欄位，且不修改其他元資料。
- [Jellyfin Oscars](https://github.com/FizzyMUC/jellyfin-oscars-plugin) - 為電影詳情頁新增奧斯卡金像獎元資料和 Oscar 徽章。
- [Jellyfin.Plugin.Allocine](https://github.com/charlesbel/Jellyfin.Plugin.Allocine) - 在 Jellyfin 現有評分旁顯示 Allociné 的媒體評分和觀眾評分。 `✅ JF12`
- [jellyfin-plugin-AnimeMultiSource](https://github.com/webbster64/jellyfin-plugin-AnimeMultiSource) - 從多個來源（AniList、AniDB、MAL/Jikan、TVDB、Fanart.tv）匯聚動漫元資料、標籤、圖片和人物，附帶限流和持久快取，適合大型媒體庫。
- [jellyfin-plugin-applemusic](https://github.com/lyarenei/jellyfin-plugin-applemusic) - 從 Apple Music 取得專輯和藝人元資料。
- [Jellyfin.Plugin.ArtworkMultiSource](https://github.com/Druidblack/Jellyfin.Plugin.ArtworkMultiSource) - 合併來自 TMDb 和 TVDB 的海報和標誌，支援按語言設定優先順序和可設定的排序。
- [jellyfin-plugin-hikka](https://github.com/HotMasya/jellyfin-plugin-hikka) - 來自 Hikka 網站的動漫和漫畫元資料與圖片。
- [jellyfin-plugin-justwatch](https://github.com/IDisposable/jellyfin-plugin-justwatch) - 為電影、影集、季和分集新增 JustWatch 外部 ID 和串流服務提供者深層連結。 `✅ JF12`
- [jellyfin-plugin-kinopoisk](https://github.com/LinFor/jellyfin-plugin-kinopoisk) - [Kinopoisk](https://www.kinopoisk.ru/) 的元資料提供者。
- [Jellyfin.Plugin.MDBList_Ratings](https://github.com/Druidblack/Jellyfin.Plugin.MDBList_Ratings) - 使用 TMDb ID 從 MDBList 取得評分並整合進 Jellyfin 的評分欄位，還提供可選的介面強化以顯示來自多個來源的評分。
- [jellyfin-plugin-myanimelist](https://github.com/ryandash/jellyfin-plugin-myanimelist) - 為動漫提供 MyAnimeList 元資料。
- [jellyfin-plugin-onepace](https://github.com/jwueller/jellyfin-plugin-onepace) - 為 [One Pace](https://onepace.net) 專案提供元資料和封面圖。
- [Jellyfin Plugin PhoenixAdult](https://github.com/DirtyRacer1337/Jellyfin.Plugin.PhoenixAdult) - 面向多個網站成人內容的元資料提供者。 `🔸 Stale`
- [jellyfin-plugin-shikimori](https://github.com/te9c/jellyfin-plugin-shikimori) - shikimori.one 的元資料提供者。
- [Jellyfin Plugin Stash](https://github.com/DirtyRacer1337/Jellyfin.Plugin.Stash) - [Stash](https://github.com/stashapp/stash) 的元資料提供者。
- [Jellyfin Plugin ThePornDB](https://github.com/ThePornDatabase/Jellyfin.Plugin.ThePornDB) - ThePornDB 的元資料提供者。
- [jellyfin-youtube-metadata-plugin](https://github.com/ankenyr/jellyfin-youtube-metadata-plugin) - 為 YouTube 內容提供元資料。


## 👾 附屬應用與工具


### 🖼️ 海報與圖片

<!-- sort list:tools-artwork -->
- [CoverMaker](https://github.com/jeffersoncgo/CoverMaker) - 允許你為媒體合輯設計並產生自訂封面圖片。
- [Jellyfin-Cover-Maker](https://github.com/KartoffelChipss/Jellyfin-Cover-Maker) - 用於為 Jellyfin 媒體庫建立風格統一封面和海報的網站。
- [Jellyfin-Image-Exporter](https://github.com/Kurotaku-sama/Jellyfin-Image-Exporter) - 從 Jellyfin 元資料匯出圖片（海報、橫幅、縮圖）。
- [jellyfin-poster-hrd-logo](https://github.com/Druidblack/jellyfin-poster-hrd-logo/tree/main) - 自動從 TMDb 下載 HDR 電影封面，並在右上角套用 HDR 標誌。 `🔸 Stale`
- [jellyfin_ratings](https://github.com/Druidblack/jellyfin_ratings) - 用來自各種來源（IMDb、Trakt、Letterboxd 等）的評分取代 Jellyfin 評分。
- [jellyfin-tools](https://github.com/eebette/jellyfin-tools) - 產生具有 Jellyfin 風格的圖片，例如陰影疊加和媒體庫標題文字。 `🔸 Stale`
- [Jellyfin Update Poster](https://github.com/Iceshadow1404/JellyfinUpdatePoster) - 從 [ThePosterDB](https://theposterdb.com/) 和 [MediUX](https://mediux.pro) 批次匯入封面圖片，並支援從 MediUX 下載整套圖片。
- [jellytools](https://github.com/cleverdevil/jellytools) - 命令列工具，用於將海報圖片和合輯從 Plex 同步到 Jellyfin，並產生動畫媒體庫卡片影片。 `🔸 Stale`
- [pixelfin](https://github.com/nothing2obvi/pixelfin) - 檢查 Jellyfin 媒體庫中缺失、已有或低解析度的圖片，並支援匯出。
- [Posterizarr](https://github.com/fscorrupt/posterizarr) - 為 Plex、Jellyfin 和 Emby 自動製作海報、背景和標題卡，支援自訂疊加層。
- [TitleCardMaker](https://github.com/CollinHeist/TitleCardMaker) - 面向 Plex、Jellyfin 和 Emby 的自動化標題卡製作工具。


### 🔍 媒體請求與探索

<!-- sort list:tools-requests -->
- [Anchorr](https://github.com/openVESSL/Anchorr) - 用於 Jellyfin 媒體請求和新內容通知的 Discord 機器人。
- [AudioBookRequest](https://github.com/markbeep/AudioBookRequest) - 面向 Plex、Jellyfin 和 Audiobookshelf 有聲書的請求管理工具。
- [content-recommender](https://github.com/jeffersoncgo/content-recommender) - 根據觀看歷史從你的媒體庫中推薦電影或電視劇。
- [jellyfin-updoot](https://github.com/BobHasNoSoul/jellyfin-updoot) - 新增按讚推薦、單一條目評論和「使用者推薦」頁面。
- [List-Sync](https://github.com/Woahai321/list-sync) - 自動將 IMDB 或 Trakt 清單中的電影和電視劇匯入 [Seerr](https://github.com/seerr-team/seerr)。 `🔹 Beta`
- [Questorr](https://github.com/Jellyforge-Dev/Questorr) - 用於 Jellyfin 媒體請求的 Discord 機器人，附帶受管理的審核流程、每使用者配額和管理員稽核日誌。
- [reiverr](https://github.com/aleksilassila/reiverr) - Jellyfin、TMDB、Radarr 和 Sonarr 的整合介面。 `🔹 Beta`
- [scenepeek-android](https://github.com/Divinelink/scenepeek-android) - 一款 Android 應用程式，提供詳細的電影和電視劇資訊，並整合 TMDB 和 Seerr。
- [seerr](https://github.com/seerr-team/seerr) - 面向 Jellyfin、Plex 和 Emby 的請求管理與媒體探索工具。
- [SuggestArr](https://github.com/giuseppe99barchetta/SuggestArr) - 根據最近觀看的內容自動向 [Seerr](https://github.com/seerr-team/seerr) 請求推薦的電影和電視劇。
- [swiparr](https://github.com/m3sserstudi0s/swiparr) - 滑動瀏覽你的媒體庫，與好友在同一個工作階段中配對，找到大家都想看的內容。
- [whatseerr](https://github.com/SuFxGIT/whatseerr) - Seerr 的 WhatsApp 機器人，允許使用者透過 WhatsApp 訊息搜尋和請求媒體。


### 📊 統計與觀看歷史

<!-- sort list:tools-stats -->
- [Jellydash](https://github.com/themartz90/jellydash) - 自架主機的 Jellyfin 儀表板，顯示即時工作階段、播放歷史、統計和通知。
- [jellyfin-rewind](https://github.com/Chaphasilor/jellyfin-rewind) - 面向 Jellyfin 音樂聽眾的、類似 *Spotify Wrapped* 的年度回顧體驗。
- [jellyfin-watch-updater](https://github.com/Simon-Eklundh/jellyfin-watch-updater) - 當用戶端未能設定已看條目的 `lastPlayedDate` 時更新該欄位，讓媒體清理外掛等工具能夠正確識別已觀看的媒體。
- [JellyPlex-Watched](https://github.com/luigi311/JellyPlex-Watched) - 在 Jellyfin、Plex 和 Emby 伺服器之間同步觀看歷史。
- [Jellystat](https://github.com/CyferShepard/Jellystat) - Jellyfin 的統計和分析儀表板。
- [jelly-watch-wise](https://github.com/Joker-KP/jelly-watch-wise) - 監控並強制執行 Jellyfin 按使用者的觀看時數限制，提供 API 整合和簡單的圖形介面。 `🔸 Stale`
- [streamystats](https://github.com/fredrikburmester/streamystats) - Jellyfin 的統計服務，提供資料分析和視覺化。
- [watchstate](https://github.com/arabcoders/watchstate) - 在不同的媒體伺服器之間同步播放狀態。


### 👥 使用者管理

<!-- sort list:tools-users -->
- [Jellycord](https://github.com/SiddheshDongare/Jellycord) - 用於管理 JFA-GO 實例的 Discord 配套機器人。 `🔸 Stale`
- [jellyfin-telegram-channel-sync](https://github.com/GeiserX/jellyfin-telegram-channel-sync) - 將 Jellyfin 使用者存取權限與 Telegram 頻道成員身分同步，在成員離開時自動停用帳號。
- [jfa-go](https://github.com/hrfee/jfa-go) - Jellyfin 的使用者/邀請管理系統。
- [jf-avatars](https://github.com/kalibrado/jf-avatars) - 允許使用者從圖片庫中選擇頭像。
- [wizarr](https://github.com/wizarrrr/wizarr) - 功能完善的使用者邀請和管理系統。


### 📁 媒體整理

<!-- sort list:tools-organization -->
- [CineSync](https://github.com/sureshfizzy/CineSync) - 基於 Python 的媒體庫管理工具，無需 Sonarr 或 Radarr 即可整理 debrid 和本機媒體庫。
- [Fixarr](https://github.com/sachinsenal0x64/fixarr) - 跨平台的媒體重新命名和備份工具。 `🔹 Beta`
- [JellyCC](https://github.com/parkejunior/jellycc-cli) - 命令列工具，用於稽核、修復和最佳化媒體，確保在 Jellyfin 上直接播放。
- [Jellyfin-Auto-Collections](https://github.com/ghomasHudson/Jellyfin-Auto-Collections) - 根據 IMDb 和 Letterboxd 等網路清單自動建立和更新合輯的工具。
- [JellyfinEasyMetadataManager](https://github.com/CesarBianchi/JellyfinEasyMetadataManager) - 用於管理和編輯 Jellyfin 媒體庫元資料的桌面工具。
- [jellyfinmanager](https://github.com/Forceu/jellyfinmanager) - 用於管理 Jellyfin 已觀看狀態的命令列工具，支援備份/還原，並藉助 TVDB 偵測缺失分集。
- [jellysweep](https://github.com/jon4hz/jellysweep) - 透過分析觀看歷史和使用者請求，自動刪除陳舊的、未觀看的電影和電視劇。
- [mnamer](https://github.com/jkwill87/mnamer) - 可自訂的工具，自動重新命名和整理媒體檔案。
- [Multi-User Media Cleaner](https://github.com/terrelsa13/MUMC) - 從你的 Jellyfin 伺服器查詢並刪除不需要的媒體內容。
- [Squishy](https://github.com/cleverdevil/squishy) - 轉檔並下載你的 Jellyfin 媒體，提供完全可自訂的預設設定檔和硬體加速。


### 💬 字幕

<!-- sort list:tools-subtitles -->
- [bazarr-jellyfin](https://github.com/enoch85/bazarr-jellyfin) - 使用你的 Bazarr 實例，直接從 Jellyfin 原生字幕介面搜尋和下載字幕。
- [jellyfin-plugin-subtitleocr](https://github.com/IDisposable/jellyfin-plugin-subtitleocr) - 使用模式比對 OCR 將基於圖片的字幕（VobSub/DVD、PGS/藍光）轉換為 SRT 或 ASS 檔案。
- [LAPSE](https://github.com/Schwponaco-org/lapse-jellyfin-plugin) - 修復不同步的字幕，內建轉檔、翻譯、內嵌字幕擷取和易讀樣式。 `✅ JF12`
- [OpenSubtitlesDownload](https://github.com/emericg/OpenSubtitlesDownload) - 透過 CLI/Gnome/KDE 自動或手動下載字幕。
- [subgen](https://github.com/McCloudS/subgen) - 透過 Jellyfin 使用 OpenAI Whisper 模型自動產生字幕。


### 🎵 音樂

<!-- sort list:tools-music -->
- [AudioMuse-AI](https://github.com/NeptuneHub/AudioMuse-AI) - 利用聲音分析和 AI 叢集，透過 Jellyfin API 建立基於節奏和心情的播放清單。
- [jellyfin-theme-music-manager](https://github.com/akhilmulpurii/jellyfin-theme-music-manager) - 用於管理 Jellyfin 媒體庫主題歌曲和背景影片的 Web 應用程式。
- [jellyplist](https://github.com/kamilkosek/jellyplist) - 將 Spotify 播放清單同步到 Jellyfin 的實用工具。 `🔹 Beta`
- [JellyTunes](https://github.com/oriaflow-labs/jellytunes) - 將你的 Jellyfin 音樂庫同步到任意 USB 隨身碟或 SD 卡——並可選 FLAC 轉 MP3。
- [MusicBrainz-UserScripts](https://github.com/Druidblack/MusicBrainz-UserScripts) - 一鍵將 Jellyfin 中的專輯匯入 MusicBrainz。
- [Playlifin](https://gitlab.com/Krafting/playlifin-gtk) - 將 YouTube Music 播放清單轉換為 Jellyfin 播放清單。


### 📥 內容匯入

<!-- sort list:tools-import -->
- [calibre2jellyfin](https://github.com/shawn61cp/calibre2jellyfin) - 從 Calibre 媒體庫建構 Jellyfin 電子書媒體庫的 Python 腳本。
- [trailarr](https://github.com/nandyalu/trailarr) - 為你的 Radarr 和 Sonarr 媒體庫管理預告片下載。
- [trailerfin](https://github.com/Pukabyte/trailerfin) - 自動取得並建立指向 IMDb 預告片的 STRM 連結，並放到背景圖資料夾中，以便在詳情頁觀看預告片。
- [ytdlp2STRM](https://github.com/fe80Grau/ytdlp2STRM) - 透過 yt-dlp 將 YouTube、Twitch 等內容串流到 Jellyfin。
- [ytdl-sub](https://github.com/jmbannon/ytdl-sub) - 使用 yt-dlp 自動完成下載和元資料產生。


### 🔧 伺服器管理

<!-- sort list:tools-admin -->
- [ADRG](https://github.com/jaldertech/adrg) - 使用 cgroups v2 的動態 Docker 資源調控器，在媒體活動期間限制背景任務。
- [autopulse](https://github.com/dan-online/autopulse) - 輕量級自動化服務，根據 Sonarr 和 Radarr 等媒體整理工具的通知更新 Plex、Jellyfin 和 Emby 媒體庫。
- [autoscan](https://github.com/Cloudbox/autoscan) - 取代 Plex 和 Emby 偵測檔案系統變更的預設行為。 `🔸 Stale`
- [Cloud Seeder](https://github.com/ipv6rslimited/cloudseeder) - 面向 Windows、macOS 和 Linux 的 Jellyfin 一鍵安裝與維護工具。
- [declarative-jellyfin](https://github.com/Sveske-Juice/declarative-jellyfin) - 在 NixOS 上以宣告式方式設定你的 Jellyfin 伺服器。 `🔹 Beta`
- [jellyfin-helper](https://github.com/JellyPlugins/jellyfin-helper) - 伺服器管理儀表板，提供清理任務、媒體庫統計、健康檢查、Arr/Seerr 整合、備份、使用者洞察和裝置端神經網路推薦。
- [JellyGlance](https://github.com/Nerdy-Technician/JellyGlance) - 監控儀表板，可查看即時工作階段、使用者觀看統計、媒體庫、請求、下載佇列、日曆、Webhook 和備份。
- [jellyhub](https://github.com/Zigl3ur/jellyhub) - 將多個 Jellyfin 伺服器的媒體索引到一個可統一搜尋的樞紐中。
- [Jellyman](https://github.com/Smiley-McSmiles/jellyman) - 在 Linux 上安裝、管理和更新 Jellyfin 的命令列工具。
- [JellyRoller](https://github.com/LSchallot/JellyRoller) - 一個命令列 Jellyfin 控制器。 `🔹 Beta`
- [JellySearch](https://gitlab.com/DomiStyle/jellysearch) - 使用 Meilisearch 的快速 Jellyfin 全文搜尋代理。
- [Jellyswarrm](https://github.com/LLukas22/Jellyswarrm) - 反向代理，可把多個 Jellyfin 伺服器合併為一個虛擬實例。
- [quality-gate-encoder](https://github.com/GeiserX/quality-gate-encoder) - 基於 Docker 的自動 720p HEVC/AV1 轉檔服務，面向 Jellyfin 媒體庫，支援 NVIDIA 和 Intel 硬體加速。前身為 jellyfin-encoder。
- [Samsung-Jellyfin-Installer](https://github.com/Jellyfin2Samsung/Samsung-Jellyfin-Installer) - 幫助你在執行 Tizen OS 的三星智慧電視上安裝 Jellyfin 的跨平台工具。
- [Tracearr](https://github.com/connorgallopo/Tracearr) - 即時 Jellyfin 監控儀表板，用於追蹤播放串流和偵測帳號共享。
- [Universal Plugin Repo](https://github.com/0belous/universal-plugin-repo) - 整合眾多外掛存放庫，形成一個通用目錄。
- [xsrv.jellyfin](https://github.com/nodiscc/xsrv/tree/master/roles/jellyfin) - 用於部署和設定 Jellyfin 的 Ansible Role。


### 🧰 其他工具

<!-- sort list:tools-misc -->
- [Cliparr](https://github.com/TechSquidTV/Cliparr) - 從個人媒體伺服器上的媒體建立剪輯。
- [embyToLocalPlayer](https://github.com/kjtsune/embyToLocalPlayer) - 讓你使用本機影片播放器（如 VLC 和 MPV）觀看 Jellyfin 中的影片，並把觀看進度同步回去。
- [jelly-clipper](https://github.com/arnolicious/jelly-clipper) - 用於從 Jellyfin 媒體庫建立、分享和管理影片剪輯的 Web 應用程式。 `🔹 Beta`
- [Jellyfin Episodes Ratings Grid](https://github.com/Damocles-fr/jellyfin-imdb-episodes-heatmap-ratings-grid) - 在 Jellyfin 影集頁面以熱力圖樣式的網格顯示 IMDb 分集評分。
- [jellyfin-mods](https://github.com/BobHasNoSoul/jellyfin-mods) - 用於個人化 Jellyfin 的修改和自訂合集。
- [Jellyfin Notification System](https://github.com/Fahmula/jellyfin-telegram-notifier) - 每當有新電影、影集、季或分集新增到 Jellyfin 時，發送帶有媒體圖片的 Telegram 通知。 `🔸 Stale`
- [Jellyfin Segment Editor](https://github.com/intro-skipper/segment-editor) - 管理 Jellyfin 媒體片段（Media Segment）位置。
- [KefinTweaks](https://github.com/ranaldsgift/KefinTweaks) - 面向 Jellyfin 的介面強化和自訂調整合集。
- [macos-random-jellyfin-screensaver](https://github.com/ndom91/macos-random-jellyfin-screensaver) - 可播放隨機 Jellyfin 條目的 macOS 螢幕保護程式。
- [MPC-JF](https://github.com/Damocles-fr/MPC-JF) - 從 Jellyfin Web 或 Jellyfin Media Player 啟動外部媒體播放器（MPC-HC、MPC-BE、PotPlayer）。
- [Scyphomote](https://github.com/eiffelbeef/scyphomote) - 一款專用的 Jellyfin 遙控器，支援播放透明度、trickplay 預覽等更多功能。
- [tunarr](https://github.com/chrisbenincasa/tunarr) - 從你的 Plex 或 Jellyfin 媒體庫建立自訂直播電視頻道，附帶 Web 介面和 IPTV 支援。


### 📜 程式碼片段

<!--lint ignore awesome-list-item-->
- [snippets/language-overlay](snippets/language-overlay) - 為電影海報新增國旗角標的腳本。


## 📖 指南

<!-- sort list:guides -->
- [jellyfin-on-macos](https://github.com/Digital-Shane/jellyfin-on-macos) - 在 macOS 上託管 Jellyfin 的指南，涵蓋動態 DNS、地理過濾和監控儀表板。

## 🌌 相關項目

本節收錄的軟體、指南和工具並非*專門*為 Jellyfin 設計，但對於媒體管理相關任務或強化 Jellyfin 功能很有幫助。

<!-- sort list:related -->
- [Dispatcharr](https://github.com/Dispatcharr/Dispatcharr) - 自架主機的 M3U 代理，支援 IPTV、EPG 和隨選視訊管理。
- [ErsatzTV](https://github.com/ErsatzTV/ErsatzTV) - 使用你自己的媒體串流自訂直播頻道。 `🔹 Beta`
- [Explo](https://github.com/LumePart/Explo) - 自動化音樂探索工具，根據你的聆聽歷史推薦曲目。
- [locatarr](https://github.com/Locatarr/locatarr.github.io) - 用於自動化下載和整理媒體檔案的工具清單。
    - [radarr](https://github.com/Radarr/Radarr) - 自動化電影的下載與管理。
    - [sonarr](https://github.com/Sonarr/Sonarr) - 自動化電視劇的下載與管理。
    - [tdarr](https://github.com/HaveAGitGat/Tdarr) - 分散式轉檔自動化 + 媒體庫分析 + 影片健康檢查。 `🔺 Paid`
    - [recyclarr](https://github.com/recyclarr/recyclarr) - 自動將 TRaSH 指南同步到 Sonarr 和 Radarr 實例。
- [MediaTracker](https://github.com/bonukai/MediaTracker) - 媒體追蹤和使用者評分平台，附 [Jellyfin 整合](https://github.com/bonukai/jellyfin-plugin-mediatracker)。 `🔸 Stale`
- [Movary](https://github.com/leepeuker/movary) - 媒體追蹤和使用者評分平台。 `🔹 Beta`
- [Multi Scrobbler](https://github.com/FoxxMD/multi-scrobbler) - 把來自眾多來源的音樂聆聽記錄（scrobble）同步到眾多用戶端。 `🔹 Beta`
- [Quasarr](https://github.com/rix1337/Quasarr) - 模擬 usenet 索引器和下載用戶端，讓 sonarr/radarr 可以直接下載。
- [rffmpeg](https://github.com/joshuaboniface/rffmpeg) - 一個遠端 FFmpeg 包裝器，常用於在效能更強的機器上轉檔媒體。
- [speedrr](https://github.com/itschasa/speedrr) - 在特定事件（例如 Plex/Jellyfin 播放串流開始時）發生時動態調整 BT 下載用戶端的上傳速度。
- [Threadfin](https://github.com/Threadfin/Threadfin) - 面向 Jellyfin 的 M3U 代理（基於 xTeVe）。
- [TRaSH Guides](https://trash-guides.info/) - 面向 Sonarr、Radarr 和 Bazarr 的簡明易懂的指南，以及相關工具。

## 社群

本節包含專注於 Jellyfin 或相關主題的社群連結。

<!-- list:communities -->
- [Jellyfin Discord](https://discord.gg/zHBxVSXdBV) - 官方 Jellyfin Discord 伺服器。 `🔰 Official`
- [Jellyfin Forum](https://forum.jellyfin.org/) - 官方 Jellyfin 論壇。 `🔰 Official`
- [Jellyfin Matrix](https://matrix.to/#/#jellyfinorg:matrix.org) - 官方 Jellyfin Matrix 伺服器。 `🔰 Official`
- [r/Jellyfin](https://www.reddit.com/r/jellyfin/) - 官方 Jellyfin subreddit。 `🔰 Official`
- [r/JellyfinCommunity](https://www.reddit.com/r/JellyfinCommunity/) - 一個獨立運作的社群 subreddit。
- [JellyfinCommunity Discord](https://discord.gg/MTM8dkjr93) - 一個獨立運作的社群 Discord 伺服器。

## 參與貢獻

歡迎貢獻！但請先閱讀[貢獻指南](CONTRIBUTING.md)。
你也可以[建立一個新 issue](https://github.com/awesome-jellyfin/awesome-jellyfin/issues/new)。
