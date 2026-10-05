```
 █████╗ ██╗    ██╗███████╗███████╗ ██████╗ ███╗   ███╗███████╗
██╔══██╗██║    ██║██╔════╝██╔════╝██╔═══██╗████╗ ████║██╔════╝
███████║██║ █╗ ██║█████╗  ███████╗██║   ██║██╔████╔██║█████╗
██╔══██║██║███╗██║██╔══╝  ╚════██║██║   ██║██║╚██╔╝██║██╔══╝
██║  ██║╚███╔███╔╝███████╗███████║╚██████╔╝██║ ╚═╝ ██║███████╗
╚═╝  ╚═╝ ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝
███████╗██╗  ██╗███████╗██╗     ██╗
██╔════╝██║  ██║██╔════╝██║     ██║
███████╗███████║█████╗  ██║     ██║
╚════██║██╔══██║██╔══╝  ██║     ██║
███████║██║  ██║███████╗███████╗███████╗
╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝
```

# Sélection de ressources Shell [![Awesome][awesome-badge]][awesome-link]

Une liste soignée de supers cadres de ligne de commande, boîtes à outils, guides et gizmos. Inspiré par super-php. Cette collection impressionnante est également disponible sur [Unix-Shell.ZEEF.com](https://unix-shell.zeef.com/caleb.xu).
- [Coques](#shells)
- [Productivité en ligne de commande](#command-line-productivity)
  - [Navigation des répertoires](#directory-navigation)
- [Personnalisation](#customization)
- [Pour les développeurs](#for-developers)
- [Services publics](#system-utilities)
- [Téléchargement et service](#downloading-and-serving)
- [Formats multimédia et fichiers](#multimedia-and-file-formats)
- [Demandes](#applications)
- [Jeux](#games)
- [Gestion des paquets Shell](#shell-package-management)
- [Développement de Shell Script](#shell-script-development)
- [Guides](#guides)
- [**Awesome Zsh**][awesome-zsh]&nbsp; [![Awesome][awesome-badge]][awesome-zsh]
- [**Awesome Fish**][awesome-fish] [![Awesome][awesome-badge]][awesome-fish]
- [**Awesome Bash**][awesome-bash] [![Awesome][awesome-badge]][awesome-bash]
- [Autres listes impressionnantes](#other-awesome-lists)

## Shells

*Choisissez votre coquille de base.*

* [bash](https://www.gnu.org/software/bash/) - shell du projet GNU (Bourne à nouveau SHell)
* [elvish](https://elv.sh/) - Des fonctions shell conviviales et expressives comme des fonctions anonymes et des structures de données
* [es](https://wryun.github.io/es-shell/) - La coque extensible, basée sur le Plan 9 [rc](https://github.com/rakitzis/rc) coque
* [fish](https://fishshell.com) - shell de ligne de commande intelligent et convivial
* [ion](https://github.com/redox-os/ion) - Un shell système moderne avec une syntaxe simple mais puissante. Il est écrit entièrement dans Rust.
* [ksh93](https://github.com/att/ast) - Korn Shell
* [mksh](https://github.com/MirBSD/mksh) - MirBSD Korn Shell
* [murex](https://github.com/lmorg/murex) - Un shell plus intelligent et un environnement de script avec des fonctionnalités avancées conçues pour l'utilisation, la sécurité et la productivité (par exemple l'outillage DevOps plus intelligent)
* [ngs](https://github.com/ngs-lang/ngs) - Le langage de script complet créé spécifiquement pour Ops. REPL est en cours de développement.
* [nushell](https://github.com/nushell/nushell) - Une coquille moderne écrite en Rust
* [oksh](https://github.com/ibara/oksh) - Portable OpenBSD ksh
* [osh](https://www.oilshell.org) - Compatible Bash, avec le nouveau langage Unix shell appelé Oil
* [pdksh](https://cvsweb.openbsd.org/cgi-bin/cvsweb/src/bin/ksh/) - Domaine public Korn shell
* [powershell](https://docs.microsoft.com/en-us/powershell/scripting/overview) un cadre d'automatisation des tâches et de gestion de configuration multiplateforme, composé d'un shell en ligne de commande et d'un langage de script
* [shell++](https://github.com/alexst07/shell-plus-plus) - langage de script shell convivial et moderne, fonctionnel et orienté objet
* [shenv](https://github.com/shenv/shenv) - Gestion simple des versions shell
* [tcsh](https://www.tcsh.org/) - C shell avec le nom du fichier et l'édition en ligne de commande
* [xonsh](https://xon.sh) - Python-ish, BASHwards-Fair shell langue et invite de commande
* [yash](https://github.com/magicant/yash) - Un shell de ligne de commande conforme à POSIX avec un support intégré pour l'achèvement et la prévision basé sur l'historique des commandes
* [zsh](https://www.zsh.org) - shell puissant avec langage de script

## Productivité en ligne de commande

*Recherche, signets, multiplexage et autres outils qui rendent votre expérience de terminal plus productive.*

* [AdvancedNewFile](https://github.com/tanrax/terminal-AdvancedNewFile) - Création rapide de fichiers et de répertoires de manière récursive. Inspiré par le plugin Vim.
* [ag](https://github.com/ggreer/the_silver_searcher) - Recherche de chaînes super rapides dans une hiérarchie de répertoires
* [aliases](https://github.com/sebglazebrook/aliases) - Contextuel, dynamique, alias organisés pour bash
* [arttime](https://github.com/reportaman/arttime) - La beauté de l'art texte répond aux fonctionnalités de l'horloge, minuterie, pomodoro++ time manager
* [autoenv](https://github.com/hyperupcall/autoenv) - Environnements basés sur l'annuaire.
* [await](https://github.com/slavaGanzin/await) - binaire unique qui exécute la liste des commandes en parallèle et attend leur terminaison
* [bartib](https://github.com/nikolassv/bartib) - Un traqueur de temps simple pour la ligne de commande. Il enregistre un journal de toutes les activités suivies comme un fichier texte simple et vous permet de créer des rapports flexibles.
* [bashhub](https://github.com/rcaloras/bashhub-client) - :cloud : Histoire de la masse dans le nuage. Indexé et consultable.
* [boilr](https://github.com/tmrts/boilr) - Un outil CLI très rapide pour créer des projets à partir de modèles de plaques de chaudière.
* [boom](https://github.com/holman/boom) - Stocker les liens et les extraits dans la ligne de commande
* [borg](https://github.com/ok-borg/borg) - Un moteur de recherche terminal pour les commandes bash
* [broot](https://github.com/Canop/broot) - Une meilleure façon de naviguer dans les répertoires
* [browsh](https://github.com/browsh-org/browsh) - Le navigateur texte moderne
* [Buku](https://github.com/jarun/Buku) - Puissant gestionnaire de signets en ligne de commande
* [byobu](https://www.byobu.org) - Gestionnaire de fenêtres texte et multiplexeur terminal
* [cod](https://github.com/dim-an/cod) — Un démon d'achèvement pour la coquille qui apprend quand vous invoquez `--help` commandes
* [CloudClip](https://github.com/skywind3000/CloudClip) - Votre propre presse-papiers dans le cloud, copiez et collez du texte avec le système général entre différents systèmes
* [ddgr](https://github.com/jarun/ddgr) - DuckDuckGo depuis le terminal
* [desk](https://github.com/jamesob/desk) - Un gestionnaire d'espace de travail léger pour la coque
* [direnv](https://github.com/direnv/direnv) - Un commutateur d'environnement pour la coque, comparer avec autoenv
* [dnote](https://github.com/dnote/dnote) - Un simple carnet de ligne de commande avec synchronisation multi-appareils et interface web
* [eureka](https://github.com/simeg/eureka/) - :bulb: outil CLI pour saisir et stocker vos idées sans quitter le terminal
* [fasd](https://github.com/clvv/fasd) - Booster de productivité en ligne de commande, offre un accès rapide aux fichiers et répertoires
* [fd](https://github.com/sharkdp/fd) - Une alternative simple, rapide et conviviale à trouver.
* [foxy](https://github.com/s-p-k/foxy) - Signets texte simples pour Firefox et navigateurs de surf.
* [fselect](https://github.com/jhspetersson/fselect) - Trouver des fichiers avec des requêtes SQL.
* [funky](https://github.com/bbugyi200/funky) - Extension de la fonctionnalité des fonctions shell les rendant plus puissants et flexibles.
* [fz](https://github.com/changyuheng/fz) - Finition de l'onglet flou sans couture pour z
* [fzf](https://github.com/junegunn/fzf) - Une ligne de commande floue trouver
* [gitmux](https://github.com/arl/gitmux) - Afficher l'état Git dans la barre d'état Tmux
* [googler](https://github.com/jarun/googler) - Recherche Google, Recherche Google Site, Nouvelles Google depuis le terminal
* [googlr](https://github.com/Astranno/googlr) - Outil de ligne de commande qui vous permet de rechercher Google depuis votre terminal.
* [has](https://github.com/kdabir/has) - `has` vous aide à vérifier la présence de divers outils en ligne de commande et leurs versions sur le chemin
* [how2](https://github.com/santinic/how2) - `how2` trouve la façon la plus simple de faire quelque chose dans un shell unix. Comme `man`, mais vous pouvez l'interroger en langage naturel.
* [navi](https://github.com/denisidoro/navi) - Un outil de triche interactif pour la ligne de commande
* [hhighlighter](https://github.com/paoloantinori/hhighlighter) - Coloriser les mots dans une sortie de commande
* [hr](https://github.com/LuRsT/hr) - `<hr />` pour votre terminal
* [hss](https://github.com/six-ddc/hss) - Un client ssh parallèle interactif avec exécution automatique et asynchrone
* [hstr](https://github.com/dvorka/hstr) - Boîte de suggestion historique de bash
* [k](https://github.com/supercrabtree/k) - k est un script Zsh pour rendre les listes de répertoire plus lisibles, ajoutant l'état Git, les couleurs de poids de fichier et les dates de pourriture
* [k alias](https://github.com/lingtalfi/k) - obtenir des alias kool (et plus) travailler avec un simple un-liner
* [lf](https://github.com/gokcehan/lf) - Gestionnaire de fichiers terminal écrit en Go, inspiré par ranger
* [lf.sh](https://github.com/suewonjp/lf.sh) - Recherche rapide de fichiers avec moins de frappes et faire beaucoup plus (gripping, copier le chemin vers le presse-papier, etc)
* [lowcharts](https://github.com/juan-leon/lowcharts) - Dessiner des graphiques à basse résolution en terminal
* [Lmod](https://lmod.readthedocs.io/en/latest/) - Modules d'environnement basés sur Lua qui améliorent les modules basés sur Tcl tout en étant rétrocompatibles (comparer aux modules)
* [loop](https://github.com/Miserlou/Loop) - Écrire et contrôler des boucles complexes avec un liner
* [marker](https://github.com/pindexis/marker) - Enregistrer vos commandes shell
* [mackup](https://github.com/lra/mackup/) - Gardez les paramètres de votre application synchronisés (OS X/Linux)
* [mcfly](https://github.com/cantino/mcfly) - Volez dans votre histoire. Grand Écossais !
* [modules](http://modules.sourceforge.net/) - Modules d'environnement classiques Tcl gérant l'environnement shell (comparer avec Lmod, direnv et autoenv)
* [nnn](https://github.com/jarun/nnn) - Le navigateur de fichiers et l'analyseur d'utilisation de disque avec une excellente intégration de bureau
* [ok-sh](https://github.com/secretGeek/ok-bash) - Vous travaillez sur de nombreux projets ? Et dans chaque projet, y a-t-il des commandes que vous utilisez qui sont spécifiques à ce projet ? Vous avez besoin d'un fichier .ok.
* [parallel](https://www.gnu.org/software/parallel/) - Construire et exécuter des lignes de commande shell à partir d'entrée standard en parallèle
* [pass](https://www.passwordstore.org/) - Gérer les mots de passe à partir de la ligne de commande avec chiffrement GPG et intégration git optionnelle.
* [pathpicker](https://github.com/facebook/PathPicker) - Accepte les entrées comme grep, searchs, git etc; permet de sélectionner des fichiers à partir du résultat de l'entrée, que vous pouvez alors ouvrir ou fournir comme argument à une commande.
* [pdd](https://github.com/jarun/pdd) - Petite date, calculatrice heure diff avec minuteries
* [percol](https://github.com/mooz/percol) - Ajoute la saveur du filtrage interactif au concept traditionnel de pipe de coque UNIX
* [q](https://github.com/cal2195/q) - Vim comme des registres macro pour votre Bash et Zsh Shell
* [qfc](https://github.com/pindexis/qfc) - Complètement de fichiers pour Bash et Zsh
* [resh](https://github.com/curusarn/resh) - Historique contextuel de la coquille pour Zsh et Bash
* [rg](https://github.com/BurntSushi/ripgrep) - ripprep est un outil de recherche orienté ligne qui combine la facilité d'utilisation de The Silver Searcher avec la vitesse brute de GNU grep
* [screen](https://www.gnu.org/software/screen/) - Multiplexeur terminal GNU
* [shell-history](https://github.com/pawamoy/shell-history) - Visualisez votre utilisation de shell avec Highcharts
* [SHML](https://github.com/odb/shml) - Cadre de style pour le terminal (Shell Markup Language)
* [slugify](https://github.com/benlinton/slugify) - Commande qui convertit les noms de fichiers et les répertoires en un format web convivial
* [sman](https://github.com/tokozedg/sman) - :bug: un gestionnaire d'extraits de ligne de commande
* [spark](https://github.com/holman/spark) - Dans ta coquille
* [spark.fish](https://github.com/jorgebucaran/spark.fish) - Générateur d'étincelles
* [sheet](https://github.com/oscardelben/sheet) - Extraits de texte pour la ligne de commande
* [spot](https://github.com/rauchg/spot) - utilitaire de recherche de fichier minuscule
- [snips](https://github.com/srijanshetty/snips) - Outil de ligne de commande pour gérer les extraits de code.
* [sqlline](https://github.com/julianhyde/sqlline) - Shell pour l'émission de SQL aux bases de données relationnelles via JDBC (multiligne, complétion, mise en valeur, support dialectique)
* [sshfs](https://github.com/osxfuse/sshfs) - Un outil pour le montage de systèmes de fichiers distants sur SSH
* [sudocabulary](https://github.com/badarsh2/Sudocabulary) - Apprendre le vocabulaire anglais depuis votre terminal
* [surfraw](https://gitlab.com/surfraw/Surfraw) - parcourez un site spécifique et recherchez le web depuis votre terminal sans navigateur.
* [task-manager](https://github.com/lingtalfi/task-manager) - Exécutez tous vos scripts avec seulement deux ou trois frappes.
* [td-cli](https://github.com/darrikonn/td-cli) - Un gestionnaire de ligne de commande todo pour organiser et gérer vos todos sur plusieurs projets.
* [tere](https://github.com/mgunyho/tere) - Une alternative plus rapide au cd + ls
* [thefuck](https://github.com/nvbn/thefuck) - Correction d'erreurs communes en utilisant une commande facile à mémoriser
* [tldr](https://github.com/raylee/tldr-sh-client) - Un client bash entièrement fonctionnel pour les pages homme tldr, simplifiées et communautaires
* [tmux](https://tmux.github.io/) - Multiplexeur terminal incroyable
* [undollar](https://github.com/xtyrrell/undollar) - un dollar mord le dollar signe le bout de la commande que vous venez de coller dans votre terminal
* [usql](https://github.com/xo/usql) - Interface en ligne de commande universelle pour les bases de données SQL.
* [v](https://github.com/rupa/v) - Z pour Vim.
* [wemux](https://github.com/zolrath/wemux) - Multi-utilisateur Tmux rendu facile
* [xiki](https://github.com/trogdoro/xiki) - rend la console shell plus conviviale et puissante
* [xplr](https://github.com/sayanarijit/xplr) - Un explorateur de fichiers TUI hackable, minimal, rapide
* [xsv](https://github.com/BurntSushi/xsv) - une boîte à outils rapide en ligne de commande CSV écrite dans Rust
* [xxh](https://github.com/xxh/xxh) - Apportez votre coquille préférée où que vous traversiez la SSH.

### Navigation dans les répertoires

* [aliasme](https://github.com/Jintin/aliasme) - alias helper to change directory rapidement
* [autojump](https://github.com/wting/autojump) - Une commande cd qui apprend à naviguer facilement les répertoires depuis la ligne de commande
* [bashmarks](https://github.com/huyng/bashmarks) - Signets de répertoire pour le shell
* [bd](https://github.com/vigneshwaranr/bd) - Retournez rapidement dans un répertoire parent
* [commacd](https://github.com/shyiko/commacd) - Une façon plus rapide de se déplacer à Bash
* [enhancd](https://github.com/b4b4r07/enhancd) - :rocket: Une commande cd de prochaine génération avec un filtre interactif
* [goto](https://github.com/iridakos/goto) - Un utilitaire shell pour la navigation vers les répertoires alias supportant l'auto-achèvement
* [jump](https://github.com/gsamokovarov/jump) - Jump vous aide à naviguer plus rapidement dans votre système de fichiers en apprenant vos habitudes.
* [lazy-cd](https://github.com/pedramamini/lazy-cd) - Commandes bash simples pour la navigation bookmarked du système de fichiers, complétées par bash-complement.
* [up](https://github.com/shannonmoeller/up) - Ascend les répertoires par nom ou par nombre; pour bash, zsh et poisson.
* [z](https://github.com/rupa/z) - Z est le nouveau j, yo
* [z.lua](https://github.com/skywind3000/z.lua) - Une nouvelle commande cd qui vous aide à naviguer plus rapidement en apprenant vos habitudes
* [zoxide](https://github.com/ajeetdsouza/zoxide) - Un moyen plus rapide de naviguer dans votre système de fichiers, écrit dans Rust
* [zpyi](https://github.com/sakshamsharma/zpyi) - Python en Zsh - scripts python en shell

## Personnalisation

*Invitations personnalisées, thèmes de couleur, etc.*

* [aphrodite-terminal-theme](https://github.com/win0err/aphrodite-terminal-theme) — Thème aphrodite minimaliste (prompt) pour terminaux sexy qui fonctionne en bash, poisson et zsh
* [base16-builder](https://github.com/base16-builder/base16-builder) - Base16-Builder
* [bash-full-of-colors](https://github.com/slomkowski/bash-full-of-colors) - L'invite puissante avec écran, tmux, git support et beaucoup plus
* [bash-git-prompt](https://github.com/magicmonty/bash-git-prompt) - Une invitation Bash informative et fantaisiste pour les utilisateurs Git
* [bash-powerline](https://github.com/riobard/bash-powerline) - L'invite Bash de style Powerline en script Bash pur
* [bashstrap](https://github.com/barryclark/bashstrap) - Un moyen rapide de monter le terminal OSX
* [bullet-train-oh-my-zsh-theme](https://github.com/caiogondim/bullet-train.zsh) - :bullettrain side: un thème shell oh-my-zsh basé sur le plugin Powerline Vim
* [emojify](https://github.com/mrowa44/emojify) Emoji sur la ligne de commande :scream:
* [flatui-terminal-theme](https://dribbble.com/shots/1021755-Flat-UI-Terminal-Theme) - Meilleures couleurs pour terminal
* [geometry](https://github.com/geometry-zsh/geometry) - Un thème ZSH minimal où toute fonction peut être ajoutée à l'invite de gauche ou (async) à droite à la volée.
* [git-prompt](https://github.com/lvv/git-prompt) - Invitation Bash avec modules Git, SVN et HG
* [gittify](https://github.com/momeni/gittify) - Une invite Bash colorée + des alias Git personnalisés
* [Gogh - Color Scheme](https://github.com/Mayccoll/Gogh) - Schéma de couleur pour terminal Gnome
* [liquidprompt](https://github.com/nojhan/liquidprompt) - Une vraie personnalité &prompt adaptatif soigneusement conçu pour Bash &Zsh
* [mysql-colorize](https://github.com/zpm-zsh/mysql-colorize) - Colorisation pour le client mysql comand-line
* [oh-my-git](https://github.com/arialdomartini/oh-my-git) - Un avis git prompt pour bash et zsh
* [oh-my-posh](https://ohmyposh.dev) - Moteur à thème rapide pour n'importe quel shell et plate-forme écrit en aller.
* [polyglot](https://github.com/agkozak/polyglot) - Une invitation Git informative qui fonctionne en bash, zsh, ksh, mksh, pdksh, oksh, dash, yash, busebox sh, et osh
* [powerlevel10k](https://github.com/romkatv/powerlevel10k) - Thème ZSH super flexible et puissant
* [sexy-bash-prompt](https://github.com/twolfson/sexy-bash-prompt) - Bash prompt avec des couleurs, des statuts Git et des branches Git
* [starship](https://starship.rs/) - Rapide, personnalisable, cross-shell prompt écrit en rouille
* [synth-shell](https://github.com/andresgongora/synth-shell) - Greeter avec un rapport d'état personnalisable et un appel de bash fantaisie

## Pour les développeurs

*Développement de ligne de commande, contrôle de version et déploiement.*

* [1Password SSH Agent](https://developer.1password.com/docs/ssh/) - Authentifier les workflows Git et SSH avec déverrouillage biométrique en utilisant 1Mot de passe
* [ack](https://beyondgrep.com/) - Un outil de recherche de type grep optimisé pour le code source.
* [add-gitignore](https://github.com/TejasQ/add-gitignore) - CLI interactif qui génère un .gitignore pour votre projet en fonction de vos besoins.
* [bcal](https://github.com/jarun/bcal) - Byte CALculator pour conversions et calculs de stockage
* [bitwise](https://github.com/mellowcandle/bitwise) - Manipulateur de bits interactif basé sur terminal dans les malédictions.
* [bocker](https://github.com/p8952/bocker) - Docker mis en œuvre dans 100 lignes de bash
* [cloc](https://github.com/AlDanial/cloc) - Lignes de code du compte
* [doclt](https://github.com/omgimanerd/doclt) - Une interface en ligne de commande vers Digital Ocean
* [dokku](https://github.com/dokku/dokku) - Docker a alimenté le mini-Heroku. La plus petite implémentation PaaS que vous ayez jamais vue.
* [forgit](https://github.com/wfxr/forgit) - Outil d'utilité pour `git` en profitant de fzf fzf.
* [git-extra-commands](https://github.com/unixorn/git-extra-commands) - Beaucoup de Git. Churn, branche coupée, meilleure fusion et bien d'autres.
* [git-extras](https://github.com/tj/git-extras) - Utilitaires Git -- résumé de repo, repl, population de changelog, pourcentages d'auteurs engagés et plus
* [git-open](https://github.com/paulirish/git-open) - Type `git open` ouvrir la page ou le site Web GitHub pour un dépôt dans votre navigateur
* [git-quick-stats](https://github.com/arzzen/git-quick-stats) - Les statistiques rapides Git sont un moyen simple et efficace d'accéder à diverses statistiques dans le dépôt git.
* [git-semver](https://github.com/markchalloner/git-semver) - plugin Git pour faciliter la version sémantique et la validation des changements
* [git-sh](https://github.com/rtomayko/git-sh) - Un environnement Bash personnalisé adapté au travail Git
* [gita](https://github.com/nosarthur/gita) - Un outil en ligne de commande pour gérer plusieurs repos git.
* [hub](https://github.com/github/hub) - hub vous aide à gagner à Git.
* [just](https://github.com/casey/just) - Coureur de tâches pour enregistrer et exécuter des commandes spécifiques au projet.
* [licins](https://github.com/dogoncouch/licins) - Insérez les licences de logiciels commentées dans le code source.
* [mkdkr](https://github.com/rosineygp/mkdkr) - Makefile + Docker = pipeline CI
* [mr](https://myrepos.branchable.com) - Outil de gestion de dépôts multiples
* [nve](https://github.com/ehmicky/nve) - Exécutez n'importe quelle commande sur des versions spécifiques de Node.js.
* [overcommit](https://github.com/sds/overcommit) - Un gestionnaire de crochets Git entièrement configurable et extensible
* [pre-commit](https://pre-commit.com) - Un cadre pour la gestion et le maintien des hameçons pré-engagement en plusieurs langues
* [rebound](https://github.com/shobrook/rebound) - Surveillez instantanément les résultats d'overflow de Stack dans votre terminal lorsque vous obtenez une erreur de compilateur
* [repren](https://github.com/jlevy/repren) - Couteau de l'armée suisse à la recherche et au remplacement de la ligne de commandement
* [slap](https://github.com/slap-editor/slap) - Éditeur de texte Sublime basé sur terminal qui fonctionne sur Node.js
* [shipit](https://github.com/sapegin/shipit) - Déploiement minimaliste de SSH
* [starring](https://github.com/ritz078/starring) - Surveille automatiquement les paquets de npm que vous utilisez sur GitHub.
* [tag](https://github.com/aykamko/tag) - Saute instantanément sur tes allumettes.
* [trunk](https://www.npmjs.com/package/@trunkio/launcher) - Contrôleur de méta-codes et de la matière
* [vmn](https://github.com/final-israel/vmn) - version automatique git et solution de récupération d'état agnostique au langage ou à l'architecture
* [wipe-modules](https://github.com/bntzio/wipe-modules) - Un petit agent qui supprime le dossier node modules des projets non actifs

## Utilitaires système

*Outils liés au système d'exploitation, y compris l'administration du système, le débogage du système et la gestion des fichiers et des processus*.

* [atop](https://www.atoptool.nl) - moniteur de performance à écran plein ASCII capable de signaler l'activité de tous les processus
* [bat](https://github.com/sharkdp/bat) - A `cat` clone avec ailes
* [bmon](https://github.com/tgraf/bmon) - moniteur de bande passante réseau en temps réel et estimateur de vitesse avec sortie visuelle conviviale
* [btop](https://github.com/aristocratos/btop) - moniteur de ressources Linux/OSX/FreeBSD
* [catcli](https://github.com/deadc0de6/catcli) - L'outil de catalogue en ligne de commande pour vos données hors ligne
* [ccat](https://github.com/owenthereal/ccat) - Ccat est le chat coloriant. Il fonctionne comme le chat, mais affiche du contenu avec une syntaxe en surbrillance.
* [exa](https://github.com/ogham/exa) - Une version moderne `ls`.
* [progress](https://github.com/Xfennec/progress) - Outil Linux pour montrer les progrès pour `cp`, `rm`, `dd`Et plus encore...
* [stronghold](https://github.com/alichtman/stronghold) - Configurez facilement les paramètres de sécurité MacOS depuis le terminal.
* [glances](https://github.com/nicolargo/glances) - Regarde ton système
* [goaccess](https://github.com/allinurl/goaccess) - GoAccess est un analyseur de journaux web en temps réel et un visionneur interactif qui fonctionne dans un terminal dans les systèmes \*nix.
* [hblock](https://github.com/hectorm/hblock) - Adblocker basé sur un fichier hôte
* [histstat](https://github.com/vesche/histstat) - Historique pour netstat
* [htop](https://github.com/hishamhm/htop) - Un visionneur de processus interactif basé sur ncurses qui vise à être un meilleur `top`
* [lnav](https://lnav.org) - Un visionneur de fichiers log avancé pour la petite échelle
* [logdissect](https://github.com/dogoncouch/logdissect) - Utilitaire CLI et API Python pour l'analyse des fichiers journaux et autres données.
* [ls++](https://github.com/trapd00r/ls--) - Coloris sur les stéroïdes
* [lsd](https://github.com/Peltoche/lsd) - LSDeluxe, réécriture de GNU ls avec beaucoup de fonctionnalités ajoutées comme les couleurs, les icônes, la vue arborescente et d'autres options de formatage.
* [lsp](https://github.com/dborzov/lsp) - Une amélioration `ls`, avec des descriptions de fichiers en langage simple et le regroupement de fichiers intelligents
* [maza](https://github.com/tanrax/maza-ad-blocking) - Un bloqueur local. Comme Pi-hole mais local et en utilisant votre système d'exploitation.
* [mtr](https://github.com/traviscross/mtr) - La fonctionnalité des programmes "traceroute" et "ping" en un seul outil de diagnostic réseau.
* [ncdu](https://dev.yorhel.nl/ncdu) - Utilisation du disque NCurses
* [nmtui](https://github.com/NetworkManager/NetworkManager) - Interface utilisateur texte pour contrôler NetworkManager
* [powertop](https://github.com/fenrus75/powertop) - L'utilisation de la batterie/puissance et l'outil de surveillance des statistiques de l'appareil, avec des options de réglage.
* [prettyping](https://github.com/denilsonsa/prettyping) - Faire la production de `ping` plus jolie, plus colorée, plus compacte et plus facile à lire.
* [procdog](https://github.com/jlevy/procdog) - Contrôle en ligne de commande léger des processus de longue durée comme les serveurs
* [quick-secure](https://github.com/marshyski/quick-secure) - Systèmes UNIX/Linux rapidement sécurisés et durcis
* [rng](https://github.com/nickolasburr/rng) - Copier la gamme de lignes du fichier ou stdin à stdout.
* [tiptop](https://github.com/nschloe/tiptop) - Moniteur graphique en ligne de commande.
* [wifi-wand](https://github.com/keithrbennett/wifiwand) - une application de ligne de commande Ruby pour la gestion du WiFi sur MacOS (installation par `gem install wifi-wand`)
* [xiringuito](https://github.com/ivanilves/xiringuito) - "VPN pour pauvres"

## Téléchargement et hébergement

*Serveurs autonomes, légers et outils de réseautage écrits en scripts shell.*

* [aria2](https://github.com/aria2/aria2) - aria2 est un multi-protocole léger &utilitaire de téléchargement multi-source, multi-plate-forme exploité en ligne de commande. Il prend en charge HTTP/HTTPS, FTP, BitTorrent et Metalink
* [balls](https://github.com/jneen/balls) - Bash on Balls
* [bashttpd](https://github.com/avleen/bashttpd) - Un serveur web écrit en Bash
* [bashhub-server](https://github.com/nicksherron/bashhub-server) - Historique des shells de nuages privés. Serveur open source pour bashhub
* [bitpocket](https://github.com/sickill/bitpocket) - "DIY Dropbox" ou "2-way directory (r)sync avec suppression appropriée"
* [Dropbox-Uploader](https://github.com/andreafabrizi/Dropbox-Uploader) - Dropbox Uploader est un script Bash qui peut être utilisé pour télécharger, télécharger, lister ou supprimer des fichiers de Dropbox
* [httpie](https://github.com/httpie/httpie) - HTTPie est un client HTTP en ligne de commande, un remplacement cURL convivial
* [HTTPLab](https://github.com/gchaincl/httplab) - Le serveur web interactif, vous permet d'inspecter les requêtes HTTP et de forger les réponses.
* [Kapow!](https://github.com/BBVA/kapow) - Si vous pouvez le scripter, vous pouvez le HTTP.
* [ngincat](https://github.com/jaburns/ngincat) - Serveur HTTP Tiny Bash utilisant netcat
* [resty](https://github.com/micha/resty) - Petite ligne de commande client REST que vous pouvez utiliser dans les pipelines
* [shell2http](https://github.com/msoap/shell2http) - Serveur HTTP pour exécuter les commandes shell. Conçu pour le développement, le prototypage ou la télécommande
* [tshare](https://github.com/trikko/tshare) - Partage de fichiers depuis la ligne de commande.
* [vesper](https://github.com/chris-rock/vesper) - Vesper est un framework HTTP pour Bash/Unix Shell
* [xh](https://github.com/ducaale/xh) - Outil convivial et rapide pour envoyer des requêtes HTTP
* [yt-dlp](https://github.com/yt-dlp/yt-dlp) - Programme en ligne de commande pour télécharger des vidéos de YouTube.com et d'autres sites vidéo

## Multimédia et formats de fichiers

*Outils pour le traitement des fichiers vidéo et audio.*

* [adb-export](https://github.com/sromku/adb-export) - Exporter les fournisseurs de contenu Android au format CSV
* [Android-Kitchen](https://github.com/dsixda/Android-Kitchen) - Une cuisine à base de texte pour la personnalisation ROM Android. Utilise des scripts shell et fonctionne avec Cygwin/OS X/Linux
* [Beets](https://github.com/beetbox/beets) - Gestionnaire de bibliothèque musicale et tagger MusicBrainz
* [cmus](https://github.com/cmus/cmus) - Lecteur audio multiplateforme.
* [dasel](https://github.com/tomwright/dasel) - Interroger et mettre à jour les structures de données en utilisant des sélecteurs depuis la ligne de commande. Comparaison avec [Jq](https://github.com/stedolan/jq) / [Yq](https://github.com/kislyuk/yq) mais prend en charge JSON, YAML, TOML et XML avec des dépendances d'exécution zéro.
* [dzr](https://github.com/yne/dzr) - Lecteur audio multiplateforme Deezer.com.
* [fx](https://github.com/antonmedv/fx) - Outil de traitement JSON en ligne de commande par anonymus
* [gifgen](https://github.com/lukechilds/gifgen) - Encodage simple de haute qualité GIF
* [image-scraper](https://github.com/sananth12/ImageScraper) - Un racleur d'image en ligne de commande cool avec beaucoup de fonctionnalités.
* [imgp](https://github.com/jarun/imgp) - Résizer et rotateur d'image par lots rapides
* [jc](https://github.com/kellyjonbrazil/jc) - Convertissez la sortie de commande, les types de fichiers et les chaînes communes en JSON ou YAML pour une utilisation plus facile dans les scripts.
* [jo](https://github.com/jpmens/jo) - Un petit utilitaire pour créer des objets JSON à partir d'arguments en ligne de commande.
* [jq](https://github.com/stedolan/jq) - Sed pour les données de Json. Vous pouvez l'utiliser pour couper, filtrer et cartographier et transformer des données structurées
* [korkut](https://github.com/oguzhaninan/korkut) - Traitement rapide et simple de l'image en ligne de commande.
* [library](https://github.com/chapmanjacobd/library) - Créer des bases de données SQLITE pour les dossiers de musique, vidéo, images ou médias en ligne. Jouer et suivre les médias comme Plex mais une interface uniquement CLI avec de nombreuses options de tri.
* [mpv](https://mpv.io/) - Permet de lire la plupart des formats audio et vidéo (en utilisant des caractères ASCII) dans le shell ainsi que dans une interface graphique.
* [nehm](https://github.com/bogem/nehm) - Outil Console, qui télécharge, définit les balises IDv3 et ajoute à votre iTunes (si vous l'utilisez) votre SoundCloud aime de manière pratique
* [PiCAST](https://github.com/lanceseidman/PiCAST) - PiCAST tourne votre $35 Raspberry Pi dans un appareil comme Chromecast
* [sejda](https://github.com/torakiki/sejda/) - Manipulation en ligne de commande de documents PDF (split, fusion, rotation, conversion en jpg, extrait du texte, etc)
* [visidata](https://github.com/saulpw/visidata) - Un outil de tableur terminal pour explorer et organiser les données (csv/json/xml/xls/yaml/etc)
* [xidel](https://github.com/benibela/xidel/) - Outil Cli pour filtrer, cartographier et créer des données HTML/XML/JSON avec (Turing-complete) XPath et XQuery.
* [xmlstarlet](http://xmlstar.sourceforge.net/) - Outil ancien mais puissant pour le formatage, le filtrage et la manipulation XML en ligne de commande.
* [yq](https://github.com/mikefarah/yq) - yq est un processeur YAML portable en ligne de commande

## Applications

*Applications basées sur la ligne de commande ou accès en ligne de commande aux services existants*.

* [ansiweather](https://github.com/fcambus/ansiweather) - Météo dans votre terminal, avec les couleurs ANSI et les symboles Unicode
* [awless](https://github.com/wallix/awless) - Un CLI puissant, innovant et de petite surface pour gérer AWS.
* [bashblog](https://github.com/cfenollosa/bashblog) - Un script Bash qui gère l'affichage de blogs
* [carbon-now-cli](https://github.com/mixn/carbon-now-cli) De belles images de votre code — depuis l'intérieur de votre terminal.
* [choosealicense-cli](https://github.com/lord63/choosealicense-cli) - Choisissez une licence OSS dans le confort de votre terminal
* [cointop](https://github.com/miguelmota/cointop) - L'application d'interface utilisateur terminal la plus rapide et interactive pour le suivi des cryptomonnaies
* [dstask](https://github.com/naggie/dstask) - Un seul gestionnaire de terminal binaire TODO avec synchronisation git + notes de balisage par tâche
* [editly](https://github.com/mifi/editly) - Éditeur vidéo en ligne de commande
* [facebook-cli](https://github.com/specious/facebook-cli) - Outil de ligne de commande Facebook
* [fanyi](https://github.com/afc163/fanyi) - Traduire l'anglais en chinois en terminal
* [gcalcli](https://github.com/insanum/gcalcli) - Interface de ligne de commande Google Calendar
* [geeknote](https://github.com/VitaliyRodnenko/geeknote) - Ligne de commande jamais noté client
* [haxor-news](https://github.com/donnemartin/haxor-news) - Parcourir les nouvelles Hacker comme un haxor
* [hn-cli](https://github.com/rafaelrinaldi/hn-cli) - Parcourir les nouvelles Hacker du confort de votre terminal
* [iponmap](https://github.com/nogizhopaboroda/iponmap) - Dessiner le point sur la carte du monde en utilisant l'adresse ip
* [isitup](https://github.com/lord63/isitup) - Vérifiez si un site est en haut ou en bas
* [jrnl](https://github.com/jrnl-org/jrnl) - Une simple application de journal en ligne de commande qui stocke votre journal dans un fichier texte
* [kanban.bash](https://github.com/coderofsalvation/kanban.bash) - la ligne de commande asciii kanban board pour les hackers bash de productivité minimaliste (basé sur csv)
* [ledger](https://github.com/ledger/ledger) - Comptabilité de ligne de commande
* [licen](https://github.com/lord63/licen) - Générez votre licence. Encore un poux, mais implémenter avec Jinja2 et docopt
* [md2png](https://github.com/weaming/md2png) - Convertir le balisage en image PNG
* [moviemon](https://github.com/iCHAIT/moviemon) - Tout sur vos films dans la ligne de commande.
* [nomino](https://github.com/yaa110/nomino) - utilitaire de renommer le lot en utilisant les options regex, trier et map.
* [pcalc](https://github.com/alt-romes/programmer-calculator) - Calculatrice conçue pour les programmeurs travaillant avec de multiples représentations de nombres, tailles et globalement proche des bits.
* [pockyt](https://github.com/achembarpu/pockyt) - Lire, gérer et automatiser votre [Poche](https://getpocket.com) recouvrement.
* [pushblast](https://github.com/alebcay/pushblast) - Obtenir les notifications PushBullet quand un programme shell sort
* [pushbullet-bash](https://github.com/Red5d/pushbullet-bash) - Interface Bash vers l'API PushBullet
* [ranger](https://github.com/ranger/ranger) - Un gestionnaire de fichiers consoles avec des attaches à clé VI.
* [Reddit Terminal Viewer](https://github.com/michael-lazar/rtv) - Parcourez Reddit depuis votre terminal
* [SAWS](https://github.com/donnemartin/saws) - Un CLI Supercharged
* [taskbook](https://github.com/klaussinani/taskbook) - Tâches, planches &notes pour l'habitat en ligne de commande
* [taskwarrior](https://taskwarrior.org/) - Un gestionnaire de listes TODO en ligne de commande
* [terjira](https://github.com/keepcosmos/terjira) - Outil d'alimentation en ligne de commande pour Jira
* [ticker](https://github.com/achannarasappa/ticker) — Ticker terminal avec mises à jour en direct et suivi de la position
* [vl](https://github.com/ellisonleao/vl) - Vérification des liens URL sur les documents texte
* [wego](https://github.com/schachmat/wego) - Application météo pour le terminal
* [whales](https://github.com/Gueils/whales) - Un outil pour dockeriser automatiquement vos applications
* [whereami](https://github.com/rafaelrinaldi/whereami) - Obtenez vos informations de géolocalisation de la CLI
* [wttr.in](https://github.com/chubin/wttr.in) - :partly sunny: La bonne façon de vérifier la météo (curl wttr.in)

## Jeux

*Tout le travail et aucune pièce n'est un moyen de passer votre journée.*

* [bash2048](https://github.com/mydzor/bash2048) - Mise en œuvre du jeu Bash de 2048
* [minesweeper](https://github.com/feherke/Bash-script/tree/master/minesweeper) - Mise en œuvre de mines de charbon en masse
* [nudoku](https://github.com/jubalh/nudoku) - ncurses base sudoku jeu écrit en C
* [piu-piu](https://github.com/vaniacer/piu-piu-SH) - Jeu de défileur horizontal en mode bash multijoueur !
* [sedtris](https://github.com/uuner/sedtris) - Tetris in sed
* [sed-scripts](https://github.com/aureliojargas/sed-scripts) - Arkanoid et Sokoban écrits avec sed
* [SHTAP](https://notimetoplay.org/engines/shtap/) - Moteur d'aventure texte réutilisable pour Bash 4
* [tty-solitaire](https://github.com/mpereira/tty-solitaire) - Jouez solitaire dans votre terminal !

## Gestion des paquets Shell

*Outils pour gérer plusieurs configurations de shell. Pour les outils spécifiques à zsh, voir la section Zsh.*

* [bash-it](https://github.com/Bash-it/bash-it) - Un cadre communautaire Bash
* [basher](https://github.com/basherpm/basher) - Un gestionnaire de paquets pour les scripts shell
* [bashing](https://github.com/xsc/bashing) - Frapper des morceaux
* [bpkg](https://www.bpkg.sh/) - JavaScript a npm, Ruby a Gems, Python a pip et maintenant Shell a bpkg
* [dotdrop](https://github.com/deadc0de6/dotdrop) - Enregistrez vos fichiers dot une fois, déployez-les partout
* [dotfiler](https://github.com/svetlyak40wt/dotfiler) – Shell agnostic git based dotfiles package manager, écrit en Python.
* [fresh](https://github.com/freshshell/fresh) - Gardez vos dotfiles frais
* [homeshick](https://github.com/andsens/homeshick) - Synchroniseur Git dotfile écrit en Bash
* [shallow-backup](https://github.com/alichtman/shallow-backup) - Créez facilement une documentation légère des paquets installés, des dotfiles, et plus encore
* [shundle](https://github.com/javier-lopez/shundle) - Gestionnaire de plugins pour scripts shell
* [vcsh](https://github.com/RichiH/vcsh) - Gestionnaire de Config basé sur Git
* [yadm](https://yadm.io/) - Git-based dotfiles manager supportant le chiffrement, les substituts, et bootstrapping

## Développement de scripts Shell

*Outils pour l'écriture, l'amélioration ou l'organisation des scripts Bash ou autres shell*

* [ansi](https://github.com/fidian/ansi) - Codes d'échappement ANSI en pur bash - changer la couleur du texte, positionner le curseur, beaucoup plus
* [assert.sh](https://github.com/lehmannro/assert.sh) - Cadre d'essai de l'unité Bash
* [bashew](https://github.com/pforret/bashew) - créateur de script bash - de petit script autonome à des projets complexes avec CI/CD et test
* [bashful](https://github.com/jmcantrell/bashful) - Une collection de bibliothèques pour simplifier l'écriture des scripts Bash
* [Bashlets](https://github.com/reale/bashlets) - Une boîte à outils modulaire extensible pour Bash
* [bashly](https://bashly.dannyb.co/) - Cadre de ligne de commande Bash et générateur CLI
* [bashmanager](https://github.com/lingtalfi/bashmanager) - mini cadre bash pour créer des outils en ligne de commande
* [bashwithnails](https://github.com/mindaugasbarysas/bashwithnails) - un cadre Bash écrit juste pour s'amuser avec les tests, la gestion de la dépendance &emballage
* [bash-language-server](https://github.com/bash-lsp/bash-language-server) - [LSP](https://microsoft.github.io/language-server-protocol/)-based Bash serveur de langue
* [bash-modules](https://github.com/vlisivka/bash-modules) - fonctions de développement avec [mode strict non officiel](http://redsymbol.net/articles/unofficial-bash-strict-mode/) activé.
* [bats](https://github.com/bats-core/bats-core) - Système d'essai automatisé Bash
* [composure](https://github.com/erichs/composure) - Composez, documentez, versionz et organisez vos fonctions shell
* [crash](https://github.com/molovo/crash) - Manipulation appropriée des erreurs, exceptions et essai / prise pour ZSH
* [critic.sh](https://github.com/Checksum/critic.sh) - Cadre de test simple mort pour Bash avec rapport de couverture
* [dispatch](https://github.com/Mosai/workshop/blob/master/doc/dispatch.md) - Un analyseur d'argument en ligne de commande dans 50 lignes de script shell portable.
* [esh](https://github.com/jirutka/esh) - Un simple moteur de templatation basé sur shell, mis en œuvre dans ~290 lignes de shell POSIX et awk.
* [Fishtape](https://github.com/jorgebucaran/fishtape) - Producteur TAP et harnais d'essai pour poissons
* [getoptions](https://github.com/ko1nksm/getoptions) - Une option élégante pour les scripts shell (sh, bash et toutes les coquilles POSIX)
* [getopts.fish](https://github.com/jorgebucaran/getopts.fish) - Analyseur CLI pour poissons
* [is.sh](https://github.com/qzb/is.sh) - Une alternative pour la commande de test intégrée, il rendra vos déclarations "si" assez
* [lumberjack](https://github.com/molovo/lumberjack) - Une interface de journalisation pour les scripts shell
* [mo](https://github.com/tests-always-included/mo) - Modèles de moustache en pur bash
* [optparse](https://github.com/nk412/optparse) - Un wrapper BASH pour getopts, pour des arguments en ligne de commande simples.
* [rerun](https://github.com/rerun/rerun) - Un cadre modulaire d'automatisation shell pour organiser vos scripts de gardien
* [revolver](https://github.com/molovo/revolver) - Un spinner de progrès réutilisable pour les scripts shell
* [phases](https://github.com/sorokine/phases) - Préprocesseur de bash minimal, sélectionnez les sections de votre script à exécuter
* [powscript](https://github.com/coderofsalvation/powscript) - transpilateur de bash écrit en bash (coffeescript pour bash)
* [semver_bash](https://github.com/cloudflare/semver_bash) - Version sémantique en Bash
* [sh-semver](https://github.com/qzb/sh-semver) - outil Semver pour bash - trouve des versions correspondant aux règles spécifiées
* [shellcheck](https://github.com/koalaman/shellcheck) - Outil d'analyse statique pour scripts shell
* [shellfire](https://github.com/shellfire-dev/shellfire) - Un dépôt de bibliothèques de fonctions namespaced, composable shell (bash, sh et dash)
* [shellspec](https://github.com/shellspec/shellspec) - Un cadre d'essai complet de l'unité BDD pour les cartouches POSIX en tiret, bash, ksh, zsh et toutes les coques POSIX
* [shfmt](https://github.com/mvdan/sh) - Un analyseur shell, la matière et l'interprète avec support bash; comprend shfmt
* [shpec](https://github.com/rylnd/shpec) - Un cadre d'essai de shell
* [shutit](https://ianmiell.github.io/shutit/) - Cadre d'automatisation basé sur bash et pexpect
* [sub](https://github.com/basecamp/sub) - Une façon délicieuse d'organiser les programmes
* [ts](https://github.com/thinkerbot/ts) - Un script de test shell
* [urchin](https://github.com/tlevine/urchin) - Un cadre de test shell idiomatique qui n'utilise que des commandes shell
* [shunit2](https://github.com/kward/shunit2) - Un cadre de test unitaire pour les scripts Bash avec une saveur de JUnit/PyUnit.
* [rebash](https://github.com/jandob/rebash) - Scénario bibliothèque/cadre. Caractéristiques: importations, exceptions, tests doc ...
* [zunit](https://github.com/zunit-zsh/zunit) - Un cadre de test puissant pour ZSH

# Guides

* [Bash Official Reference Manual](https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html)
* [Bash Hackers Wiki](https://web.archive.org/web/20230406205817/https://wiki.bash-hackers.org/)
* [Greg Wooledge's (aka "greycat") wiki](https://mywiki.wooledge.org).
  Plus précisément [Guide de trésorerie](https://mywiki.wooledge.org/BashGuide), [FAQ de Bash](https://mywiki.wooledge.org/BashFAQ) et [Pièges en vrac](https://mywiki.wooledge.org/BashPitfalls)
* [Google's Shell Style Guide](https://google.github.io/styleguide/shell.xml)
* [The Linux Documentation Project: Bash Programming - Intro/How-to](https://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html)
* [The Linux Documentation Project: Advanced Bash Scripting Guide](https://tldp.org/LDP/abs/html/)
* [WikiBooks: Bash Shell Scripting](https://en.wikibooks.org/wiki/Bash_Shell_Scripting)
* [Use the Unofficial Bash Strict Mode (Unless You Looove Debugging)](http://redsymbol.net/articles/unofficial-bash-strict-mode/)
* [The Art of Command Line](https://github.com/jlevy/the-art-of-command-line)
* [Learn Enough Command Line to Be Dangerous](https://www.learnenough.com/command-line-tutorial/basics)
* [A guide to learn bash](https://github.com/Idnan/bash-guide)
* [Shell Field Guide](https://raimonster.com/scripting-field-guide/)

# Autres listes Awesome

D'autres listes étonnamment impressionnantes peuvent être trouvées dans [Génial](https://github.com/emijrp/awesome-awesome) et [Génial](https://github.com/bayandin/awesome-awesomeness).

### Voir aussi

* [awesome-cli-apps](https://github.com/agarrharr/awesome-cli-apps)
* [awesome-fish][awesome-fish]
* [awesome-zsh][awesome-zsh]
* [awesome-bash][awesome-bash]
* [terminals-are-sexy](https://github.com/k4m4/terminals-are-sexy)

[awesome-badge]: https://raw.githubusercontent.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg
[awesome-fish]: https://github.com/jorgebucaran/awsm.fish
[awesome-link]: https://github.com/sindresorhus/awesome
[awesome-zsh]: https://github.com/unixorn/awesome-zsh-plugins
[awesome-bash]: https://github.com/awesome-lists/awesome-bash
