# Awesome Bash [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) <!-- omit in toc -->

> Une liste organisée de délicieux scripts et ressources Bash.

En plus de cette liste, vous devriez lire la liste [awesome-shell](https://github.com/alebcay/awesome-shell). Il s'agit d'une liste organisée de superbes frameworks de ligne de commande, de boîtes à outils, de guides et de gadgets. Vous pouvez également consulter [awesome-zsh](https://github.com/unixorn/awesome-zsh-plugins) ou [awesome-fish](https://github.com/bucaran/awesome-fish). Si vous recherchez plus de listes, consultez [sindresorhus/awesome](https://github.com/sindresorhus/awesome).

## Contenu <!-- omit in toc -->

- [Books and Resources](#books-and-resources)
- [Command-Line Productivity](#command-line-productivity)
- [Customization](#customization)
- [For Developers](#for-developers)
- [Downloading and Serving](#downloading-and-serving)
- [Applications](#applications)
- [Games](#games)
- [Website](#website)
- [Shell Package Management](#shell-package-management)
- [Shell Script Development](#shell-script-development)
- [Just for fun](#just-for-fun)
- [Community](#community)
- [Other Awesome Lists](#other-awesome-lists)
- [Contribute](#contribute)
- [License](#license)

## Livres et ressources

- [The Bash-Hackers Wiki](https://web.archive.org/web/20230406205817/https://wiki.bash-hackers.org/) - Documentation lisible par l'homme de toute nature sur GNU Bash.
- [Bash beginner's mistakes](https://web.archive.org/web/20230330234404/https://wiki.bash-hackers.org/scripting/newbie_traps) - Liste des erreurs de débutant Bash (par le wiki Bash-Hackers).
- [Bash Guide](http://mywiki.wooledge.org/BashGuide) - Un guide bash pour les débutants (par Lhunath).
- [Bash FAQ](http://mywiki.wooledge.org/BashFAQ) - Répond à la plupart de vos questions (par Lhunath).
- [Bash Pitfalls](http://mywiki.wooledge.org/BashPitfalls) - Répertorie les pièges courants dans lesquels tombent les débutants et comment les éviter.
- [Bash manual](http://www.gnu.org/software/bash/manual/) - Manuel Bourne-Again Shell.
- [Bash FAQ](http://tiswww.case.edu/php/chet/bash/FAQ) (par [Chet Ramey](http://tiswww.case.edu/php/chet/))
- [Advanced Bash-Scripting Guide](http://tldp.org/LDP/abs/html/) - Une exploration approfondie de l'art des scripts shell.
- [Bash Guide for Beginners](http://www.tldp.org/LDP/Bash-Beginners-Guide/html/) - Guide Bash pour débutants (par Machtelt Garrels).
- [Bash Programming - Intro/How-to](http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html#toc)
- [bash-handbook](https://github.com/denysdovhan/bash-handbook) - Un manuel pour ceux qui veulent apprendre Bash sans plonger trop profondément.
- [Google's Shell Style Guide](https://google.github.io/styleguide/shellguide.html) - Conseils raisonnables sur le style de code.
- [Sobell's Book](http://www.sobell.com/CR3/index.html) - Un guide pratique des commandes, des éditeurs et de la programmation shell.
- [WikiBooks: Bash Shell Scripting](https://en.wikibooks.org/wiki/Bash_Shell_Scripting)
- [Use the Unofficial Bash Strict Mode (Unless You Looove Debugging)](http://redsymbol.net/articles/unofficial-bash-strict-mode/)
- [Defensive BASH Programming](https://web.archive.org/web/20180917174959/http://www.kfirlavi.com/blog/2012/11/14/defensive-bash-programming) - Méthodes pour empêcher vos programmes de se briser et pour garder le code bien rangé et propre.
- [Pure Bash Bible](https://github.com/dylanaraps/pure-bash-bible) - Une collection d'alternatives pures bash aux processus externes.
- [explainshell](https://explainshell.com) - Un site Web qui décompose et explique les commandes shell (Bash) (y compris leurs indicateurs et options).
- [Safe ways to do things in bash](https://github.com/anordal/shellharden/blob/master/how_to_do_things_safely_in_bash.md) - Comment faire les choses en toute sécurité dans Bash.

## Productivité en ligne de commande

*Recherche, signets, multiplexage et autres outils qui rendent votre expérience de terminal plus productive.*

- [aliases](https://github.com/sebglazebrook/aliases) - Alias ​​contextuels, dynamiques et organisés pour le bash shell.
- [bashhub-server](https://github.com/nicksherron/bashhub-server) - Serveur bashhub open source hébergé en privé.
- [bashhub](https://github.com/rcaloras/bashhub-client) - Historique de Bash dans le cloud. Indexé et consultable :cloud:.
- [bashmarks](https://github.com/huyng/bashmarks) - Signets de répertoire pour le shell.
- [bashmount](https://github.com/jamielinux/bashmount) - Gérez facilement les supports amovibles.
- [ble.sh](https://github.com/akinomyoga/ble.sh) - Remplacement de ligne de lecture convivial et riche en fonctionnalités, avec coloration syntaxique, meilleure complétion des commandes et édition multiligne améliorée.
- [commacd](https://github.com/shyiko/commacd) - Un moyen plus rapide de se déplacer dans Bash.
- [forkrun](https://github.com/jkool702/forkrun) - Un outil pur bash pour exécuter du code en parallèle. Similaire en termes de syntaxe et de vitesse à `xargs -P`, mais avec plus de fonctionnalités et une prise en charge native de la fonction Bash.
- [has](https://github.com/kdabir/has) - `has` vous aide à vérifier la présence de divers outils de ligne de commande et leurs versions sur le chemin.
- [hstr](https://github.com/dvorka/hstr) - Bash Boîte de suggestions d'historique.
- [sshrc](https://github.com/cdown/sshrc) - Apportez votre .bashrc, .vimrc, etc. avec vous lorsque vous utilisez SSH.
- [utility-bash-scripts](https://github.com/aviaryan/utility-bash-scripts) - Scripts bash utiles pour effectuer des tâches automatisables avec une seule commande.
- [zoxide](https://github.com/ajeetdsouza/zoxide) - Une meilleure façon de naviguer dans votre système de fichiers. Écrit en Rust, cross-shell et beaucoup plus rapide que les autres autojumpers.

## Personnalisation

*Invites personnalisées, thèmes de couleurs, etc.*

- [aphrodite-terminal-theme](https://github.com/win0err/aphrodite-terminal-theme) - Thème minimaliste (invite) pour les terminaux sexy.
- [bash-git-prompt](https://github.com/magicmonty/bash-git-prompt) - Une invite Bash informative et sophistiquée pour les utilisateurs de Git.
- [bash-powerline](https://github.com/riobard/bash-powerline) - Invite Bash de style Powerline dans un script Bash pur.
- [bashstrap](https://github.com/barryclark/bashstrap) - Un moyen rapide d'améliorer le terminal macOS.
- [git-prompt](https://github.com/lvv/git-prompt) - Invite Bash avec les modules Git, SVN et HG.
- [gittify](https://github.com/momeni/gittify) - Une invite Bash colorée + des alias Git personnalisés.
- [liquidprompt](https://github.com/nojhan/liquidprompt) - Une invite adaptative complète et soigneusement conçue pour Bash et Zsh.
- [LS_COLORS](https://github.com/trapd00r/LS_COLORS) - Une collection de définitions LS_COLORS.
- [oh-my-git](https://github.com/arialdomartini/oh-my-git) - Une invite git opiniâtre pour bash et zsh.
- [oh-my-bash](https://github.com/ohmybash/oh-my-bash) - Un délicieux framework communautaire pour gérer votre configuration bash.
- [progress-bar.sh](https://github.com/edouard-lopez/progress-bar.sh) - Barre de progression simple et sexy pour `bash`, donnez-lui une durée et elle fera le reste.
- [sexy-bash-prompt](https://github.com/twolfson/sexy-bash-prompt) - Invite Bash avec couleurs, statuts Git et branches Git.
- [bash-sensible](https://github.com/mrzool/bash-sensible) - Une tentative de valeurs par défaut plus saines de Bash.

## Pour les développeurs

*Développement en ligne de commande, contrôle de version et déploiement.*

- [bocker](https://github.com/p8952/bocker) - Docker implémenté dans 100 lignes de bash.
- [git-sh](https://github.com/rtomayko/git-sh) - Un environnement Bash personnalisé adapté au travail Git.
- [mkdkr](https://github.com/rosineygp/mkdkr) - Créer + Docker + Shell = Pipeline CI.

## Téléchargement et service

*Serveurs légers auto-hébergés et outils réseau écrits dans des scripts shell.*

- [Bash-web-server](https://github.com/dzove855/Bash-web-server) - Un serveur Web purement bash, pas de socat, netcat, etc.
- [Dropbox-Uploader](https://github.com/andreafabrizi/Dropbox-Uploader) - Dropbox Uploader est un script Bash qui peut être utilisé pour télécharger, répertorier ou supprimer des fichiers de Dropbox.
- [balls](https://github.com/jneen/balls) - Bash sur les balles.
- [bashbro](https://github.com/victrixsoft/bashbro/) - Un navigateur de fichiers Web basé sur Bash - vous permettant de parcourir, diffuser, visualiser des documents et enregistrer des fichiers à distance via votre navigateur Web.
- [bash-stack](https://github.com/cgsdev0/bash-stack) - Framework Web moderne dans bash.
- [bashttpd](https://github.com/avleen/bashttpd) - Un serveur Web écrit en Bash.
- [httpd.sh](https://github.com/cemeyer/httpd.sh) - Un serveur Web trivial dans bash, utilisant ctypes.sh.
- [ngincat](https://github.com/jaburns/ngincat) - Petit serveur Bash HTTP utilisant netcat.
- [sherver](https://github.com/remileduc/sherver) - Serveur Web léger pur Bash.
- [xiringuito](https://github.com/ivanilves/xiringuito) - VPN basé sur SSH pour les pauvres.

## Applications

*Applications basées sur la ligne de commande ou accès en ligne de commande aux services existants.*

- [bashblog](https://github.com/cfenollosa/bashblog) - Un script Bash qui gère la publication de blogs.
- [pushbullet-bash](https://github.com/Red5d/pushbullet-bash) - Interface Bash avec l'API PushBullet.
- [todo.sh](https://github.com/todotxt/todo.txt-cli) - Un script shell simple et extensible pour gérer votre fichier todo.txt.
- [cheapci](https://github.com/ianmiell/cheapci) - Un cadre d'intégration continue implémenté dans bash.

## Jeux

*Tout travailler et ne pas jouer est une façon grossière de passer votre journée.*

- [bash2048](https://github.com/mydzor/bash2048) - Implémentation de Bash du jeu 2048.
- [minesweeper](https://github.com/feherke/Bash-script/tree/master/minesweeper) - Bash implémentation du dragueur de mines.
- [wordle](https://gist.github.com/huytd/6a1a6a7b34a0d0abcac00b47e3d01513) - Wordle en moins de 50 lignes de Bash.

## Site web

- [Bash One-Liners](http://www.bashoneliners.com/) - Une collection de one-liners awesome bash pratiques ou tout simplement purs ([repos](https://github.com/janosgyerik/bashoneliners) par @[janosgyerik](https://github.com/janosgyerik)).
- [commandlinefu](http://www.commandlinefu.com/) - Un référentiel pour les commandes UNIX les plus élégantes et les plus utiles.

## Shell Gestion des packages

*Outils pour gérer plusieurs configurations shell.*

- [bash-it](https://github.com/Bash-it/bash-it) - Un framework communautaire Bash.
- [basher](https://github.com/basherpm/basher) - Un gestionnaire de packages pour les scripts shell.
- [bpkg](https://github.com/bpkg/bpkg) - Un gestionnaire de packages léger bash.
- [homeshick](https://github.com/andsens/homeshick) - Synchroniseur de fichiers de points Git écrit en Bash.

## Shell Développement de scripts

*Outils pour écrire, améliorer ou organiser Bash ou d'autres scripts shell*

- [alinex bashlib](https://gitlab.com/alinex/bash-lib) - Bibliothèque modulaire bash pour l'administration de serveur, le traitement de données et les scripts à distance.
- [ansi](https://github.com/fidian/ansi) - Codes d'échappement ANSI en pur bash - changez la couleur du texte, positionnez le curseur, bien plus encore.
- [argbash](https://github.com/matejak/argbash) - Générateur de code d'analyse d'arguments Bash.
- [assert.sh](https://github.com/lehmannro/assert.sh) - Cadre de tests unitaires Bash.
- [async-bash](https://github.com/zombieleet/async-bash) - Implémentation de fonctions asynchrones dans bash.
- [bats](https://github.com/bats-core/bats-core) - Bash Système de test automatisé.
- [bash3boilerplate](https://github.com/kvz/bash3boilerplate) - Modèles pour écrire de meilleurs scripts Bash.
- [bashful](https://github.com/jmcantrell/bashful) - Une collection de bibliothèques pour simplifier l'écriture de scripts Bash.
- [bashify](https://github.com/zombieleet/bashify) - Peu de fonctions d'assistance dans bash (en particulier les fonctions de manipulation de chaînes).
- [bashing](https://github.com/xsc/bashing) - Briser Bash en morceaux - Cadre Bash pour créer des outils de ligne de commande.
- [bashly](https://github.com/DannyBen/bashly) - Cadre de ligne de commande Bash et générateur CLI.
- [bashmanager](https://github.com/lingtalfi/bashmanager) - Mini framework bash pour créer des outils de ligne de commande.
- [Bashmatic](https://github.com/kigster/bashmatic) - Une bibliothèque DSL facile à utiliser pour créer des outils et des installateurs basés sur BASH (plus de 900 fonctions).
- [bunit](https://github.com/rafritts/bunit) - Un framework de tests unitaires pour les scripts Bash.
- [Bash Infinity](https://github.com/niieani/bash-oo-framework) - Un passe-partout/framework/bibliothèque standard moderne pour bash.
- [bash-modules](https://github.com/vlisivka/bash-modules) - Une collection de modules pour le mode strict non officiel.
- [bash_unit](https://github.com/pgrange/bash_unit) - Bash cadre d'édition d'entreprise de tests unitaires pour les professionnels.
- [bashunit](https://github.com/TypedDevs/bashunit) - Une bibliothèque de test simple pour les scripts bash.
- [lobash](https://github.com/adoyle-h/lobash) - Un utilitaire/bibliothèque moderne, sûr et puissant pour le développement de scripts Bash.
- [mo](https://github.com/tests-always-included/mo) - Modèles de moustache en pur bash.
- [semver_bash](https://github.com/cloudflare/semver_bash) - Gestion des versions sémantiques dans Bash.
- [shellcheck](https://github.com/koalaman/shellcheck) - Un outil d'analyse statique pour les scripts shell.
- [shellharden](https://github.com/anordal/shellharden) - Le surligneur de syntaxe correctif bash.
- [shfmt](https://github.com/mvdan/sh) - Formater les programmes bash.
- [shunit2](https://github.com/kward/shunit2) - Un framework de tests unitaires pour les scripts Bash avec une version de JUnit/PyUnit.
- [DevOps-Bash-tools](https://github.com/HariSekhon/DevOps-Bash-tools) - 750+ Scripts DevOps Shell et environnement avancé Bash.
- [modernish](https://github.com/modernish/modernish) - Bibliothèque avec diverses fonctionnalités pour les scripts shell.
- [json.bash](https://github.com/h4l/json.bash) - Bibliothèque Bash et outil de ligne de commande qui crée du JSON.
- [timep](https://github.com/jkool702/timep) - Un profileur de nouvelle génération et un générateur FlameGraph pour le code bash.

## Juste pour le plaisir

- [Bash Screensavers](https://github.com/attogram/bash-screensavers?) - Une collection d'économiseurs d'écran entièrement écrits en bash.
- [pokeget](https://github.com/talwat/pokeget) - Affiche les sprites de Pokémon dans le terminal.

## Communauté

- [Stack Overflow](http://stackoverflow.com/questions/tagged/bash) - Balise Bash sur Stack Overflow.
- [/r/bash](https://www.reddit.com/r/bash) - Un subreddit dédié aux scripts bash.
- [/r/commandline](https://www.reddit.com/r/commandline) - Pour tout ce qui concerne la ligne de commande, dans n'importe quel système d'exploitation.
- [#bash](https://web.libera.chat/?nick=Guest&#bash) - Chaîne IRC sur Libera.​Chat. Les principaux contributeurs du BashGuide, BashFAQ, BashPitfalls et ShellCheck traînent là-bas.

## Autres listes impressionnantes

D'autres listes incroyablement impressionnantes peuvent être trouvées dans [awesome-awesome](https://github.com/emijrp/awesome-awesome) et [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness).

## Contribuer

Les contributions sont les bienvenues ! Lisez d'abord le [contribution guidelines](contributing.md).

## Licence

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

Dans la mesure du possible par la loi, aloisdg a renoncé à tout droit d'auteur et droits voisins ou voisins sur cette œuvre.
