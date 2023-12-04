# IMPORTANT

- Accédez aux paramètres et configurez les pages, déployez à partir de la branche, puis sélectionnez le dossier racine. SI VOUS NE LE FAITES PAS, VOTRE PAGE NE SERA PAS CONSTRUITE.
- En cas de problèmes avec l'utilisateur de votre référentiel qui ne peuvent pas être résolus, ce qui entraîne la non-construction de la page, procédez comme suit : au lieu du « référentiel : votreNomHere » habituel dans la section du référentiel, écrivez « référentiel : usr/votreNomHere ».
  
## Noms de fichiers

- Pour nommer un fichier, utilisez la structure suivante (Notez que les dates ne doivent jamais être dans le futur et doivent toujours être au format AAAA-MM-JJ) :
- Assurez-vous que les blocs-notes se trouvent dans le dossier des blocs-notes et que les publications se trouvent dans le dossier des publications.
  - Pour les fichiers markdown dans _posts :
    - année-mois-jour-fileName.md
      - BON EXEMPLE : 2021-08-02-First-Day.md
      - MAUVAIS EXEMPLE : 2021-8-2-first-day.md
      - MAUVAIS EXEMPLE : first-day.md
      - MAUVAIS EXEMPLE : 2069-12-31-First-Day.md

  - Pour les notebooks Jupyter dans _notebooks :
    - année-mois-jour-fileName.ipynb
      - BON EXEMPLE : 2021-08-02-First-Day.ipynb
      - MAUVAIS EXEMPLE : 2021-8-2-first-day.ipynb
      - MAUVAIS EXEMPLE : first-day.ipynb
      - MAUVAIS EXEMPLE : 2069-12-31-First-Day.ipynb


## NIGHTHAWK-Pages CHANGEMENTS

### NOUVEAU POUR NIGHTHAWK-Pages - TAGS

- Les balises sont utilisées pour organiser les pages par balise. La façon d'ajouter des balises consiste à ajouter ce qui suit à votre introduction, comme dans l'exemple vu ici « catégories : [C1.4] », chaque élément de la même catégorie sera regroupé pour être visible facilement sur la page des balises.

### NOUVEAU POUR NIGHTHAWK-Pages - RECHERCHE

- Toutes les pages peuvent être recherchées à l'aide de la barre de recherche intégrée. Cette barre de recherche recherchera n'importe quel mot dans le titre d'une page ou dans la page elle-même. Cela permet de trouver facilement les pages et les informations que vous recherchez. Cependant, parfois cela n'est pas souhaitable, donc pour masquer une page de la recherche, vous pouvez ajouter « search_exclude : true » au début de la page. Cela empêchera la page d'apparaître lorsque le spectateur utilise la recherche.

### NOUVEAU POUR NIGHTHAWK-Pages - BARRE DE NAVIGATION

- Pour ajouter des pages à la barre de navigation, ajoutez-les au répertoire principal général, puis ajoutez la balise alpha qui les ordonnera comme vous le souhaitez, par exemple AA étant la première page et ZZ étant la dernière page.

### NOUVEAU POUR NIGHTHAWK-Pages - PAGE D'ACCUEIL

- Il existe une nouvelle page d'accueil conçue avec toutes les pages contenant des images et une description de l'objet de la page. Il s'agit d'aider le spectateur à comprendre de quoi parle la page et ce qu'il peut s'attendre à trouver sur la page. La façon d'ajouter des images à une page est d'avoir la préface suivante « image : /images/file.jpg » puis le nom de l'image que vous souhaitez utiliser. L'image doit être dans le dossier « images ». De plus, si vous souhaitez que le fichier n'apparaisse pas sur la page principale, « hide : true » peut être ajouté au début.

### NOUVEAU POUR NIGHTHAWK-Pages - CHANGEMENTS SASS

- NIGHTHAWK-Pages prend en charge une variété de thèmes différents qui sont chacun superposés aux minima. Pour utiliser chaque thème, accédez au fichier custom-styles.scss et décommentez simplement le thème que vous souhaitez utiliser. Pour désactiver le thème, commentez la ligne qui importe le thème dans le fichier. Pour ajouter vos propres thèmes, recherchez le référentiel Github du thème souhaité et créez un nouveau dossier dans le répertoire sass nommé du nom de votre thème. Copiez le format de l'instruction d'importation des autres styles sur custom-styles.scss, ajoutez votre propre instruction d'importation et vous avez terminé. Notez que l’ajout de vos propres thèmes peut entraîner des problèmes et que la compatibilité d’un thème donné avec NIGHTHAWK-Pages peut être sous-optimale. Pour ajouter votre propre touche de style, ajoutez votre propre fichier .scss aux styles personnalisés via l'importation. Voici un exemple d'importation `@import "minima/NIGHTHAWK-Pages-styles";`. Notez que vous pouvez également ajouter votre propre SCSS dans le fichier lui-même, dans une zone spécialement conçue à cet effet. Vous pouvez également mélanger différents styles dans les pages NIGHTHAWK, mais les effets peuvent varier.

### NOUVEAU POUR NIGHTHAWK-Pages - COMPREND

- NIGHTHAWK-Pages utilise Liquid pour importer de nombreux éléments de page courants présents dans tout le référentiel. Ces éléments communs sont importés du répertoire _includes. Si vous souhaitez ajouter l'un de ces éléments communs, utilisez la syntaxe liquide pour importer l'élément souhaité dans votre fichier. Voici un exemple de syntaxe liquide utilisée pour importer : `{%- include post_list.html -%}` Notez que la syntaxe liquide est entourée d'accolades et de signes de pourcentage. Cela peut être utilisé n’importe où dans le référentiel.

### NOUVEAU POUR NIGHTHAWK-Pages - MISE EN PAGE
- Pour créer votre propre mise en page, créez votre propre page HTML dans le répertoire _layouts, et lorsque vous souhaitez utiliser cette mise en page dans un fichier, utilisez la présentation suivante : [votre mise en page ici]` Utilisation d'une autre mise en page préexistante utilise la même syntaxe de présentation que celle définie ci-dessus. Cette mise en page devra être écrite dans votre propre liquide personnalisé définissant la structure de la page.


### NOUVEAU POUR NIGHTHAWK-Pages - CONFIG.YML

- NIGHTHAWK-Pages permet d'ajouter des liens sociaux au bas de chaque page, entre autres. Pour modifier les liens sociaux et les noms prédéfinis, accédez au fichier _config.yml et remplacez la catégorie souhaitée par la nomenclature souhaitée. Il n’existe que quelques liens sociaux pris en charge parmi lesquels vous pouvez choisir.


## Site de blog utilisant GitHub Pages et Jekyll

> Ce site est destiné aux étudiants. Il s'agit d'enregistrer des plans, de réaliser des hacks et de travailler pour vos apprentissages.

- Ceci peut être personnalisé pour prendre en charge l'informatique tout au long de votre parcours (JavaScript, Python/Flask, Java/Spring)
- Tout le travail sur les artefacts tangibles se trouve dans un _posts|_notebooks.
- Les éléments préliminaires (alias métadonnées) dans les fichiers ipynb et md sont utilisés pour organiser les informations en fonction de la semaine et de la colonne dans le site Web en cours d'exécution.

## Pages GitHub
Tous les sites Web « Pages GitHub » sont gérés sur l'infrastructure GitHub. GitHub utilise « Jekyll » pour transformer votre contenu en sites Web et blogs statiques. Chaque fois que nous modifions des fichiers dans GitHub, une action GitHub est lancée qui reconstruit et publie le site avec Jekyll.
- GitHub Pages est alimenté par : [Jekyll](https://jekyllrb.com/).
- Site Web publié pour l'enseignant : [nighthawkcoders.github.io/teacher](https://nighthawkcoders.github.io/teacher/)

## Préparation d'un site d'aperçu

Dans tout développement, il est recommandé de tester votre code avant le déploiement. Le processus de développement des pages GitHub est optimisé en testant votre développement sur votre machine locale, avant les fichiers sur GitHub.

Cycle de développement. Pour les pages GitHub, les outils décrits ci-dessous créeront un cycle de développement « make-code-save-preview ». Dans le cycle de développement, il est obligatoire de prévisualiser le travail localement, avant d'effectuer un « commit » VSCode sur git.

Cycle de déploiement. Dans le cycle de déploiement, `sync-github-action-review`, il est obligatoire de terminer le cycle de développement avant d'effectuer une `sync` VSCode. La synchronisation déclenche la mise à jour du référentiel github. L'action démarre la build jekyll pour publier le site Web. Toute étape peut contenir des erreurs et vous obligera à effectuer une révision.

### Configuration requise pour l'installation de WSL et/ou Ubuntu

- Le résultat de ces étapes est des outils Ubuntu pour exécuter le serveur de prévisualisation. Ces procédures ont été créées à l'aide de [jekyllrb.com](https://jekyllrb.com/docs/installation/ubuntu/)
- Exécutez des scripts dans le répertoire des scripts du dépôt étudiant : setup_ubuntu.sh et activate.sh. Le nom attendu du référentiel pour exécuter ces scripts est « étudiant ».

### Configuration requise pour l'installation de MacOs

- Le résultat de ces étapes sont des outils MacOS pour exécuter le serveur de prévisualisation. Ces procédures ont été créées à l'aide de [jekyllrb.com](https://jekyllrb.com/docs/installation/macos/). Exécutez des scripts dans le répertoire de scripts du dépôt étudiant : setup_macos.sh et activate_macos.sh. Le nom attendu du référentiel pour exécuter ces scripts est « étudiant ».

### Aperçu

- Le résultat de ces étapes est un serveur fonctionnant sur : http://0.0.0.0:4100/teacher/. Les messages de régénération s'exécuteront dans le terminal à chaque sauvegarde. Appuyez à tout moment sur la touche Entrée ou Retour du terminal pour saisir des commandes.

-Installation complète

```bash
installation groupée
```

- Exécutez le serveur. Cela nécessite l'exécution des commandes de terminal « make », « make stop », « make clean » ou « make convert » pour gérer le serveur en cours d'exécution. La journalisation des détails apparaîtra dans le terminal. Un « Makefile » a été créé dans le projet pour prendre en charge les commandes et démarrer les processus.

  - Démarrer le serveur de prévisualisation dans le terminal

    ```bash
    cd ~/vscode/teacher # emplacement de mon projet, adapter si nécessaire
    faire
    ```

  - Sortie du terminal affichant l'adresse du serveur. Cmd ou Ctl cliquez sur l'emplacement http pour ouvrir le serveur d'aperçu dans le navigateur. Exemple de message d'adresse du serveur...

    ```texte
    Adresse du serveur : http://0.0.0.0:4100/teacher/
    ```

    - Enregistrer sur ipynb ou md active la "régénération". Actualisez le navigateur pour voir les mises à jour. Exemple de message de terminal...
    ```
    Régénération : 1 fichier(s) modifié(s) le 2023-07-31 06:54:32
        _notebooks/2024-01-04-cockpit-setup.ipynb
    ```

  - Les messages du terminal sont générés à partir de processus en arrière-plan. Cliquez sur Retour ou Entrée pour obtenir une invite et utiliser le terminal si nécessaire pour d'autres tâches. Revenez toujours à la racine du projet `cd ~/vscode/teacher` pour toutes les actions "make".


  - Arrêtez le serveur de prévisualisation, mais laissez les fichiers construits dans le projet pour votre révision.

    ```bash
    faire arrêter
    ```

  - Arrêtez le serveur et "nettoyez" les fichiers construits, le meilleur choix pour renommer des fichiers afin d'éliminer les doublons potentiels dans les fichiers construits.

    ```bash
    rendre propre
    ```

  - Testez les conversions de notebooks, le meilleur choix pour voir si la conversion IPYNB fonctionne.

    ```bash
    faire une conversion
    ```

### Métadonnées (Front Matter)

- Les métadonnées, également connues sous le nom de liminaires, sont un ensemble de paires clé-valeur qui peuvent fournir des informations supplémentaires aux pages github sur les fichiers .md et .ipynb. Cela peut et sera probablement utilisé dans d'autres types de fichiers (c'est-à-dire doc, pdf), si nous les ajoutons au système.

- Dans le préambule, vous pouvez également définir des éléments tels qu'un titre et une description pour la page. Des éléments préliminaires supplémentaires sont définis pour placer le contenu sur la page « Computer Science Lab Notebook ». La clé « courses : » placera les données sur une page spécifique avec la « semaine : » imbriquée plaçant les données sur une ligne spécifique de la page. La clé « type : » devant le sujet placera le blog dans la colonne des plans, des hacks (ToDo) et des éléments tangibles.

- Dans nos fichiers, le liminaire est défini en haut de la page ou dans la première cellule de démarque.

  - Ouvrez d'abord l'un des fichiers .md ou .ipynb déjà inclus dans votre dossier _posts|_notebooks.

  - Dans le fichier .md, vous devriez remarquer quelque chose de similaire en haut de la page. Pour voir cela dans vos fichiers .ipynb, vous devrez double-cliquer sur la cellule de démarque en haut du fichier.

    ```yaml
    ---
    toc : vrai
    commentaires : faux
    mise en page : message
    titre : Exemple de plan quotidien
    description : Exemple de blog !!! Cela montre la planification et les notes des hacks.
    type : plans
    cours : { compsci : {semaine : 0} }
    ---
    ```

- Les éléments préliminaires auront toujours '---' en haut et en bas pour le distinguer et chaque paire clé-valeur sera séparée par un ':'.

- Ici, nous pouvons modifier des éléments comme le titre et la description.

- La valeur du type nous indiquera dans quelle colonne cela va apparaître, valeurs prises en charge : `plans`, `hacks`, `tangibles`.

- Les cours nous indiquent sous quel élément de menu il se trouvera, dans ce cas le menu `compsci`, et la `semaine` lui indique dans quelle ligne (semaine) il apparaîtra sous ce menu.

- Dans nos exemples, hacks(ToDo) contient des références à nos fichiers IPYNB ; ceux-ci sont stockés dans GitHub sous le dossier « _notebooks ». Les plans et tangibles contiennent des références à nos dossiers MD ; ceux-ci sont stockés dans GitHub sous le dossier `_posts`.

### Key files in Computer Science Lab Notebook

- `compsci.md` - this is the "Computer Science Lab Notebook" page and is the link `https://nighthawkcoders.github.io/student/compsci`.  It contains the Title and Number of units on the page.
- `_data/compsci.yml` - this contains the supporting data that helps organize the units on the page.
- `_layouts`\schedule.html - this contains code, in the Liquid language, that generates the HTML for all the rows and columns.
- fyi, the schedule.html could work for another type of page.  For instance, you could make a csa.md, _data/csa.yml, and tag files with `csa: {week: 0}` under courses.
