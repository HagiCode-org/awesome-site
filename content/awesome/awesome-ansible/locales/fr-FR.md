# Awesome Ansible [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
<!--lint disable double-link-->
[<img src="ansible_logo.svg" align="right" width="90">](https://www.ansible.com/)

Cette liste collaborative rassemble des ressources, outils, rôles et tutoriels Ansible sélectionnés par la communauté.

[Ansible](https://www.ansible.com/) est une boîte à outils open source écrite en Python pour gérer les configurations, déployer des applications, assurer la livraison continue et automatiser les infrastructures informatiques et d’autres tâches.

⚠️ Avant d’ajouter votre projet, consultez les [ressources de développement des projets de l’écosystème Ansible](https://docs.ansible.com/ansible/devel/community/ecosystem_project_resources.html). Offrons la meilleure expérience aux utilisateurs, contributeurs et responsables !

<!--lint enable double-link-->
<!--lint disable-->

## Sommaire

- [Awesome Ansible ](#awesome-ansible-)
  - [Sommaire](#contents)
  - [Ressources officielles](#official-resources)
  - [Communauté](#community)
  - [Tutoriels](#tutorials)
  - [Livres](#books)
  - [Vidéos](#videos)
  - [Outils](#tools)
  - [Articles de blog et opinions](#blog-posts-and-opinions)
    - [Allemand](#german)
    - [Français](#french)
  - [Playbooks, rôles et collections](#playbooks-roles-and-collections)
  - [Intégrations aux éditeurs et IDE](#editor-and-ide-integrations)

<!--lint enable-->

## Ressources officielles

> Ressources officielles d’Ansible et ressources pour Ansible.

- [Latest Ansible Documentation](https://docs.ansible.com/ansible/latest/user_guide/index.html) - Guide utilisateur et documentation Ansible les plus récents.
- [Ansible Galaxy Website](https://galaxy.ansible.com/) - Dépôt officiel et site communautaire des rôles Ansible.
- [Ansible Blog](https://www.ansible.com/blog) - Blog officiel d’Ansible.

## Communauté

Rejoignez le forum Ansible :

<!--lint disable double-link-->
- [Get Help](https://forum.ansible.com/c/help/6) - Forum de questions et réponses ; ajoutez des étiquettes aux discussions.
- [Bullhorn newsletter](https://docs.ansible.com/ansible/devel/community/communication.html#the-bullhorn) - Annonces des versions et changements importants.
- [Social Spaces](https://forum.ansible.com/c/chat/4) - Rencontrez d’autres passionnés.
- [News & Announcements](https://forum.ansible.com/c/news/5) - Suivez les annonces du projet et événements communautaires.

Pour en savoir plus, consultez le [guide de communication Ansible](https://docs.ansible.com/ansible/devel/community/communication.html).
<!--lint enable double-link-->

## Tutoriels

> Tutoriels et cours pour apprendre Ansible.

- [How To Manage Remote Servers with Ansible](https://www.digitalocean.com/community/tutorial_series/how-to-manage-remote-servers-with-ansible) - Tutoriel sur la gestion de serveurs distants avec Ansible.
- [Ansible Tutorial by leucos](https://github.com/leucos/ansible-tuto) - Tutoriel Ansible en 12 étapes.
- [Programming Community Curated Resources for learning Ansible](https://hackr.io/tutorials/learn-ansible) - Liste de ressources recommandées.
- [Ansible TopTechSkills.com Tutorial Series on Ansible](https://www.toptechskills.com/ansible-tutorials-courses/) - Tutoriels d’installation et d’utilisation d’Ansible.
- [Official Ansible labs by Red Hat](https://ansible.github.io/workshops/exercises/ansible_rhel/) - Formation à Ansible Automation Platform.
- [Ansible Tutorials on DigitalOcean](https://www.digitalocean.com/community/tags/ansible?subtype=tutorial) - Tutoriels Ansible de base sur DigitalOcean.
- [Ansible Tutorial by BlueBanquise team](http://bluebanquise.com/documentation/releases/1.5.0/training_ansible.html) - Tutoriel Ansible de base.
- [Ansible Tutorial for Beginners: Playbook & Examples](https://spacelift.io/blog/ansible-tutorial) - Introduction à Ansible pour débutants.
- [Ansible Tutorials for Beginners and Advanced](https://ansible.puzzle.ch/) - Atelier couvrant plusieurs sujets et niveaux.
- [Ansible For DevOps](https://github.com/geerlingguy/ansible-for-devops) - Exemples de Jeff Geerling accompagnant les chapitres de `Ansible for DevOps`, présenté dans la section des livres.
- [Ansible Tutorial by Compute Central](https://computecentral.in/ansible/) - Guide pratique sur les bases, playbooks, rôles, collections, développement personnalisé, production, dépannage et entretiens.

## Livres

> Livres sur Ansible.

- [Ansible for DevOps](https://www.ansiblefordevops.com/) - Ce livre aide à gérer avec Ansible de un à des milliers de serveurs. Extrait gratuit [ici](https://leanpub.com/ansible-for-devops/read_sample).
- [Ansible for Kubernetes](https://www.ansibleforkubernetes.com/) - Déployez et maintenez des applications réelles, évolutives et hautement disponibles avec Ansible.
- [How To Manage Remote Servers with Ansible eBook](https://www.digitalocean.com/community/books/how-to-manage-remote-servers-with-ansible-ebook) - Livre fondé sur la série « How To Manage Remote Servers with Ansible ».
- [The Tao of Ansible: Mastering Automation with Simplicity and Grace](https://www.amazon.co.uk/Tao-Ansible-Mastering-Automation-Simplicity/dp/B0DTTTM3XG) - Guide Ansible prônant simplicité, élégance et automatisation sans complexité.

## Vidéos

> Tutoriels vidéo et formations Ansible.

- [Ansible YouTube Channel](https://www.youtube.com/channel/UCPJo5UY1KsP7J1BuHmiWNzQ) - Chaîne YouTube officielle d’Ansible.
- [Introduction to Ansible](https://youtu.be/iVWmbStE1MM) - Présentation destinée aux débutants par Cloud Academy.
- [Ansible 101 by Jeff Geerling](https://www.jeffgeerling.com/blog/2020/ansible-101-jeff-geerling-youtube-streaming-series) - Excellente série vidéo Ansible de Jeff Geerling.
- [Ansible TopTechSkills.com Tutorial Series on YouTube](https://www.youtube.com/playlist?list=PLMyOob-UkeytIleCbMlFfCzaunOh27hm6) - Tutoriels vidéo sur Ansible.
- [Ansible Essentials - Course](https://www.redhat.com/en/services/training/do007-ansible-essentials-simplicity-automation-technical-overview) - Cours vidéo gratuit sur les bases d’Ansible par Red Hat.
- [Complete Ansible Course 2020 by DevOps Journey](https://www.youtube.com/watch?v=KuiAiUyuDY4&list=PLnFWJCugpwfzTlIJ-JtuATD2MBBD7_m3u&index=1) - Cours vidéo gratuit avec ateliers pratiques.
- [Getting started with Ansible](https://youtube.com/playlist?list=PLT98CRl2KxKEUHie1m24-wkyHpEsa4Y70) - Tutoriels YouTube de LearnLinuxTV.

## Outils

> Outils pour Ansible et utilisant Ansible.

- [Automation Controller](https://www.ansible.com/products/controller) - Anciennement Ansible Tower, ce produit Red Hat développe l’automatisation IT, gère les déploiements complexes et accroît la productivité pour toute l’équipe.
- [AWX](https://github.com/ansible/awx) - Interface Web, API REST et moteur de tâches basés sur Ansible ; projet amont d’Automation Controller.
- [Ansible Lint](https://github.com/ansible/ansible-lint) - Vérifie les bonnes pratiques et les améliorations possibles des playbooks.
- [ansible-static-lint](https://github.com/arhuman/ansible-static-lint) - Linter Go rapide et hors ligne, avec une partie des règles ansible-lint, sans Python ni environnement Ansible.
- [Ansible Doctor](https://github.com/thegeeklab/ansible-doctor) - Générateur de documentation annotée pour rôles Ansible basé sur Jinja2.
- [Ansible DocSmith](https://github.com/foundata/ansible-docsmith) - Génère la documentation des rôles depuis argument_specs.yml pour README et variables par défaut.
- [Ansible cmdb](https://github.com/fboender/ansible-cmdb) - Convertit les facts Ansible en page HTML statique.
- [ARA](https://github.com/ansible-community/ara) - Enregistre les playbooks et aide à les comprendre et dépanner via API, interface et CLI.
- [Ansible Inventory Grapher](https://github.com/willthames/ansible-inventory-grapher) - Affiche l’héritage de l’inventaire et le niveau de définition des variables.
- [Mitogen for Ansible](https://mitogen.networkgenomics.com/ansible_detailed.html) - Accélère considérablement Ansible avec Mitogen.
- [Molecule](https://docs.ansible.com/projects/molecule/) - Framework de développement et de test des rôles Ansible.
- [Packer Ansible Provisioner](https://www.packer.io/plugins/provisioners/ansible/ansible-local) - Provisioner créant des images de VM avec Packer et Ansible.
- [Excel Ansible Inventory](https://github.com/KeyboardInterrupt/ansible_xlsx_inventory) - Convertit tout tableur Excel en inventaire Ansible.
- [terraform.py](https://github.com/mantl/terraform.py) - Script d’inventaire dynamique analysant l’état Terraform.
- [Ansible101](https://ansible101.com) - Bac à sable interactif sans configuration pour concevoir et déboguer les playbooks en temps réel.
- [ansible-navigator](https://github.com/ansible/ansible-navigator) - Interface utilisateur textuelle (TUI) pour Ansible.
- [squest](https://hewlettpackard.github.io/squest/) - Portail libre-service des modèles de tâches Automation Controller.
- [ansible-bender](https://ansible-community.github.io/ansible-bender/build/html/index.html) - Transforme les conteneurs avec des playbooks en images de conteneur.
- [ansible-runner](https://github.com/ansible/ansible-runner) - Outil et bibliothèque Python pour utiliser Ansible directement ou dans un autre système, via conteneur, outil autonome ou module Python.
- [ansible-builder](https://ansible-builder.readthedocs.io/en/latest/) - Les dépendances non standard exigent des paquets sur chaque nœud, compatibles avec l’hôte et synchronisés.
- [kics](https://github.com/Checkmarx/kics) - Outil SAST détectant vulnérabilités, conformité et erreurs de configuration dans les playbooks Ansible.
- [ansible-security-scanner](https://github.com/cpeoples/ansible-security-scanner) - Analyseur statique de playbooks, rôles et collections : secrets codés en dur, RCE et risques de chaîne logistique ; produit SARIF, SBOM CycloneDX et GitLab SAST.
- [php-ansible Library](https://github.com/maschmann/php-ansible) - Wrapper orienté objet rendant Ansible disponible en PHP.
- [TD4A](https://github.com/cidrblock/td4a) - Outil de conception Jinja2 combinant des données YAML à un modèle et générant le résultat.
- [Ansible Playbook Grapher](https://github.com/haidaraM/ansible-playbook-grapher) - Outil CLI créant un graphe des plays, tâches et rôles d’un playbook.
- [ansible-doc-extractor](https://github.com/xlab-steampunk/ansible-doc-extractor) - Extrait les documents des modules Ansible en HTML.
- [Ansible Semaphore](https://github.com/ansible-semaphore/semaphore) - Interface moderne pour gérer et exécuter les playbooks Ansible.
- [Steampunk Spotter](https://steampunk.si/spotter/) - Outil d’assistance analysant les playbooks et proposant des recommandations.
- [ansible-roster](https://gitlab.com/jlecomte/ansible/ansible-roster) - Plugin Roster créant l’inventaire depuis YAML par hôte ; plages, noms regex, inclusions et fusion de variables.
- [Monkeyble](https://hewlettpackard.github.io/monkeyble/) - Plugin callback exécutant des tests de bout en bout Python/CI-CD pour détecter les régressions.
- [aar-doc - Automated Ansible Role Documentation](https://github.com/telekom-mms/Automated-Ansible-Role-Documentation) - Génère automatiquement la documentation depuis les métadonnées d’un rôle.
- [antsichaut](https://github.com/ansible-community/antsichaut) - Automatise le remplissage du changelog.yaml d’antsibull-changelog.
- [ansibledb](https://github.com/nbentoumi/ansibledb) - Serveur Flask API avec MongoDB pour les rapports et facts ; recherche hôtes, facts gérés et journaux Ansible.
- [Ansible Template Playground](https://tech-playground.com/playgrounds/ansible-template/) - Environnement en ligne pour exécuter, tester et partager des modèles Ansible.
- [YAML Validator](https://yamlvalidator.dev), [(chrome extension)](https://chromewebstore.google.com/detail/yaml-validator/gjgbohnlhijomhfiflapnlnmcpckgigg) - Validateur et formateur YAML avec schéma JSON Ansible ; l’extension Chrome replie aussi le YAML sur GitHub.

## Articles de blog et opinions

> Bonnes pratiques et autres avis sur Ansible.

- [Ansible (Real Life) Good Practices](https://reinteractive.com/posts/167-ansible-real-life-good-practices) - Recommandations de bonnes pratiques.
- [Testing Ansible Roles Against Windows with Test-Kitchen](https://hodgkins.io/testing-ansible-roles-windows-test-kitchen) - Test-Kitchen et Ansible appliquent les playbooks à Windows, puis [Pester](https://github.com/pester/Pester/) les teste.
- [Ansible Best Practices by AndiDog](https://andidog.de/blog/2017-04-24-ansible-best-practices) - Conseils sur la configuration Ansible et les environnements de test, préproduction et production.
- [Getting started with Ansible](https://steampunk.si/blog/getting-started-with-ansible/) - Présentation, installation et découverte interactive des fonctions de base : playbooks et contenu Ansible.
- [Taking Ansible apart](https://steampunk.si/blog/taking-ansible-apart/) - Décrit et montre le fonctionnement des composants Ansible courants.
- [Enhancing Ansible Development with SOLID Principles](https://github.com/kksat/SOLID-Ansible) - SOLID — responsabilité unique, ouvert/fermé, substitution de Liskov, ségrégation des interfaces et inversion des dépendances — améliore rôles et playbooks.
- [Functional programming design patterns in Ansible code](https://kksat.github.io/talks/2025/functional-ansible/) - La programmation fonctionnelle améliore le code Ansible ; fonctions pures, séparation des effets, immuabilité, composition et évaluation paresseuse facilitent test, débogage et évolution.

### Allemand

- [Ansible – Was ich am Ad-hoc-Modus schätze](https://www.my-it-brain.de/wordpress/ansible-was-ich-am-ad-hoc-modus-schaetze/) - Avis de l’auteur sur le mode Ad-Hoc d’Ansible.

### Français

- [Apprendre et Maitriser Ansible l'outil de gestion de configuration](https://blog.stephane-robert.info/post/introduction-ansible/) - Série de cours Ansible en français.

## Playbooks, rôles et collections

> Excellents playbooks, rôles et collections prêts pour la production pour démarrer.

- [Ansible Vagrant Examples by geerlingguy](https://github.com/geerlingguy/ansible-vagrant-examples) - Exemples Ansible déployant sur des VM locales avec Vagrant.
- [Ansible playbook for Linux machine setup](https://github.com/olivomarco/my-ansible-linux-setup) - Playbook pour une machine Debian/Ubuntu renforcée, auto-mise à jour et dotée du daemon Docker.
- [Ansible Lockdown](https://github.com/ansible-lockdown) - Contenu Ansible pour auditer et corriger les référentiels [CIS](https://www.cisecurity.org/#/) ou [STIG](https://public.cyber.mil/stigs/) des systèmes et applications.
- [DevSec Hardening Framework](https://dev-sec.io/) - DevSec renforce Linux, MySQL, NGINX et les services SSH.
- [T.A.D.S. boilerplate](https://github.com/Thomvaill/tads-boilerplate) - Provisionne et déploie Docker Swarm en développement et production selon Infrastructure as Code et DevOps.
- [Openstack Ansible](https://github.com/openstack/openstack-ansible) - Playbooks Ansible pour déployer [OpenStack](https://www.openstack.org/).
- [Robert de Bock](https://robertdebock.nl) - Vaste collection de rôles Ansible.
- [DebOps](https://docs.debops.org/en/master/) - Vaste collection de playbooks Ansible Debian.
- [ansible-ssm](https://github.com/HQarroum/ansible-ssm) - Rôle provisionnant hôtes physiques et virtuels avec AWS SSM agent.
- [BlueBanquise](https://github.com/bluebanquise/bluebanquise) - Rôles Ansible cohérents pour déployer des clusters.
- [redhat-cop](https://github.com/search?q=topic%3Aansible+org%3Aredhat-cop&type=Repositories&s=updated&o=desc) - Dépôts Red Hat Communities of Practice sur Ansible.
- [Linuxfabrik LFOps](https://github.com/Linuxfabrik/lfops) - Collection de 145+ playbooks et 160+ rôles pour Linux (RHEL 8/9/10, Debian, Ubuntu) : durcissement, MariaDB, Icinga2, Nextcloud, FreeIPA, KVM et Bitwarden.

## Intégrations aux éditeurs et IDE

> Intégrations aux éditeurs de texte et IDE facilitant le développement Ansible.

- [Ansible Language Server](https://github.com/ansible/ansible-language-server) - Serveur de langage ajoutant Ansible aux éditeurs compatibles.
- [VS Code - official Ansible Extension](https://marketplace.visualstudio.com/items?itemName=redhat.ansible) - Ajoute le langage Ansible à VS Code et aux éditeurs OpenVSX via ansible-language-server.
<!--lint disable -->
- [Vim](https://www.vim.org/) - Éditeur libre et open source en ligne de commande. Plugins Vim utiles :
  - [Ansible vim](https://github.com/pearofducks/ansible-vim) - Plugin Vim Ansible 2.x prenant en charge YAML, Jinja2 et fichiers d’hôtes.
  - [Ansible vim and neovim plugin](https://www.npmjs.com/package/@yaegassy/coc-ansible) - Plugin Vim (client LSP) pour Ansible : complétion, coloration, survol, diagnostics et navigation.
- [Emacs](https://www.gnu.org/software/emacs/) - Éditeur et IDE libres avec indentation automatique, coloration et shell intégré :
  - [lsp-mode](https://emacs-lsp.github.io/lsp-mode/page/lsp-ansible/) - Protocole Ansible Language Server pour Emacs : coloration, autocomplétion et diagnostics.
  - [yaml-mode](https://github.com/yoshiki/yaml-mode) - Coloration et vérification YAML.
  - [jinja2-mode](https://github.com/paradoxxxzero/jinja2-mode) - Coloration et vérification Jinja2.
  - [magit-mode](https://github.com/magit/magit) - Interface Git porcelain dans Emacs.
  - [flymake-ansible-lint](https://github.com/jamescherti/flymake-ansible-lint.el) - Ansible Lint signale automatiquement erreurs, avertissements et informations pendant l’édition.
- [PyCharm](https://www.jetbrains.com/pycharm/) - IDE complet de développement Python. Plugins utiles :
  - [Ansible Lint](https://plugins.jetbrains.com/plugin/20905-ansible-lint) - Ansible Lint signale automatiquement erreurs, avertissements et informations pendant l’édition.
  - [Ansible Vault Integration](https://plugins.jetbrains.com/plugin/14353-ansible-vault-integration) - Ansible Vault pour IntelliJ IDEA, avec actions contextuelles de chiffrement/déchiffrement.
<!--lint enable -->
- [OrchidE](https://www.orchide.dev) - Support complet du [langage Ansible](https://plugins.jetbrains.com/plugin/12626-orchide--ansible-language-support) dans les IDE IntelliJ : complétion, coloration, inspections, documentation, navigation playbooks/rôles/inventaires et Ansible Vault.
