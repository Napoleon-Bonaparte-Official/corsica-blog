# https://napoleon-bonaparte-official.github.io/corsica-frontend/

# IMPORTANT

- Go to settings and configure pages, deploy from the branch, and then select the root folder. IF YOU DO NOT DO THIS YOUR PAGE WILL NOT BUILD. 

- Incase of issues with the user for your repository not being able to be resolved resulting in the page not building do the following: instead of the usual `repository: yourNameHere` in the repository section write `repository: usr/yourNameHere`

## File Names

- To name a file, use the following structure (Note that dates should never be in the future and should always be in the format YYYY-MM-DD):

- Make sure that notebooks are in the notebook folder and posts are in the posts folder.

  - For markdown files in _posts:
    - year-month-day-fileName.md
      - GOOD EXAMPLE: 2021-08-02-First-Day.md
      - BAD EXAMPLE: 2021-8-2-first-day.md
      - BAD EXAMPLE: first-day.md
      - BAD EXAMPLE: 2069-12-31-First-Day.md

  - For jupyter notebooks in _notebooks:
    - year-month-day-fileName.ipynb
      - GOOD EXAMPLE: 2021-08-02-First-Day.ipynb
      - BAD EXAMPLE: 2021-8-2-first-day.ipynb
      - BAD EXAMPLE: first-day.ipynb
      - BAD EXAMPLE: 2069-12-31-First-Day.ipynb


## NIGHTHAWK-Pages CHANGES

### NEW FOR NIGHTHAWK-Pages - TAGS

- Tags are used to organize pages by their tag the way to add tags is to add the following to your front matter such as the example seen here `categories: [C1.4]` each item in the same category will be lumped together to be seen easily on the tags page. 

### NEW FOR NIGHTHAWK-Pages - SEARCH
- All pages can be searched for using the built in search bar. This search bar will search for any word in the title of a page or in the page itself. This allows for easily finding pages and information that you are looking for. However, sometimes this may not be desirable so to hide a page from search you can add `search_exclude: true` to the front matter of the page. This will hide the page from appearing when the viewer uses search. 

### NEW FOR NIGHTHAWK-Pages -  NAVIGATION BAR

- To add pages to the navigation bar add them to general main directory then add the alpha tag that will order them in the way that you desire such as AA Being the first page and ZZ being the last page. 

### NEW FOR NIGHTHAWK-Pages - HOME PAGE 

- There is a new designed home page with all pages having images and a description of what the page is about. This is to help the viewer understand what the page is about and what they can expect to find on the page. The way to add images to a page is to have the following front matter `image: /images/file.jpg` and then the name of the image that you want to use. The image must be in the `images` folder. Furthermore if you would like the file to not show up on the main page `hide: true` can be added to the front matter.

### NEW FOR NIGHTHAWK-Pages -  SASS CHANGES

- NIGHTHAWK-Pages supports a variety of different themes that are each overlaid on top of minima. To use each theme, go to the custom-styles.scss file and simply uncomment the theme you want to use. To toggle the theme off, comment the line that imports the theme in the file. To add your own themes, find the desired theme’s Github repository and make a new folder in the sass directory that’s named the name of your theme. Copy the import statement format from the other styles on custom-styles.scss, add your own import statement, and you're done. Note that adding your own themes may cause things to break and a given theme’s compatibility with NIGHTHAWK-Pages may be suboptimal. To add your own styling twist, add your own .scss file to custom-styles via import. Here is an example import `@import "minima/NIGHTHAWK-Pages-styles";`. Note that you can also add your own SCSS in the file itself in area labeled specifically for that purpose. Also you can mix different styles together in NIGHTHAWK-Pages however the effects may vary. 

### NEW FOR NIGHTHAWK-Pages -  INCLUDES

- NIGHTHAWK-Pages uses liquid to import many common page elements that are present throughout the repository. These common elements are imported from the _includes directory. If you want to add one of these common elements, use liquid syntax to import the desired element to your file. Here’s an example of liquid syntax used to import: `{%- include post_list.html -%}` Note that the liquid syntax is surrounded by curly braces and percent signs. This can be used anywhere in the repository. 

### NEW FOR NIGHTHAWK-Pages -  LAYOUTS
- To create your own page layout, make your own html page inside the _layouts directory, and when you want to use that layout in a file, use the following front matter `layout: [your layout here]` Using another pre-existing layout uses the same front matter syntax as defined above. This layout will have to be written in your own custom liquid defining the structure of the page. 


### NEW FOR NIGHTHAWK-Pages - CONFIG.YML

- NIGHTHAWK-Pages allows for social links to be added at the bottom of every page, along with other things. To change the pre-set social links and names, go to the _config.yml file and change the desired category to the desired nomenclature. There are only a few supported social links that you can choose from. 


## Blog site using GitHub Pages and Jekyll

> This site is intended for Students.   This is to record plans, complete hacks, and do work for your learnings.

- This can be customized to support computer science as you work through pathway (JavaScript, Python/Flask, Java/Spring)
- All tangible artifact work is in a _posts|_notebooks.  
- Front matter (aka meta data) in ipynb and md files is used to organize information according to week and column in running web site.

## GitHub Pages
All `GitHub Pages` websites are managed on GitHub infrastructure. GitHub uses `Jekyll` to transform your content into static websites and blogs. Each time we change files in GitHub it initiates a GitHub Action that rebuilds and publishes the site with Jekyll.  
- GitHub Pages is powered by: [Jekyll](https://jekyllrb.com/).
- Published teacher website: [nighthawkcoders.github.io/teacher](https://nighthawkcoders.github.io/teacher/)

## Preparing a Preview Site 

In all development, it is recommended to test your code before deployment.  The GitHub Pages development process is optimized by testing your development on your local machine, prior to files on GitHub

Development Cycle. For GitHub pages, the tooling described below will create a development cycle  `make-code-save-preview`.  In the development cycle, it is a requirement to preview work locally, prior to doing a VSCode `commit` to git.

Deployment Cycle.  In the deployment cycle, `sync-github-action-review`, it is a requirement to complete the development cycle prior to doing a VSCode `sync`.  The sync triggers github repository update.  The action starts the jekyll build to publish the website.  Any step can have errors and will require you to do a review.

### WSL and/or Ubuntu installation requirements

- The result of these step is Ubuntu tools to run preview server.  These procedures were created using [jekyllrb.com](https://jekyllrb.com/docs/installation/ubuntu/)
- Run scripts in scripts directory of student repo: setup_ubuntu.sh and activate.sh. Expected name of the repository to run these scripts is 'student'.

### MacOs installation requirements 

- Ihe result of these step are MacOS tools to run preview server.  These procedures were created using [jekyllrb.com](https://jekyllrb.com/docs/installation/macos/). Run scripts in scripts directory of student repo: setup_macos.sh and activate_macos.sh. Expected name of the repository to run these scripts is 'student'.

### Preview

- The result of these step is server running on: http://0.0.0.0:4100/teacher/.  Regeneration messages will run in terminal on any save.  Press the Enter or Return key in the terminal at any time to enter commands.

- Complete installation

```bash
bundle install
```

- Run Server.  This requires running terminal commands `make`, `make stop`, `make clean`, or `make convert` to manage the running server.  Logging of details will appear in terminal.   A `Makefile` has been created in project to support commands and start processes.

  - Start preview server in terminal

    ```bash
    cd ~/vscode/teacher  # my project location, adapt as necessary
    make
    ```

  - Terminal output of shows server address. Cmd or Ctl click http location to open preview server in browser. Example Server address message... 

    ```text
    Server address: http://0.0.0.0:4100/teacher/
    ```

    - Save on ipynb or md activiates "regeneration". Refresh browser to see updates. Example terminal message...
    ```
    Regenerating: 1 file(s) changed at 2023-07-31 06:54:32
        _notebooks/2024-01-04-cockpit-setup.ipynb
    ```

  - Terminal message are generated from background processes.  Click return or enter to obtain prompt and use terminal as needed for other tasks.  Alway return to root of project `cd ~/vscode/teacher` for all "make" actions. 


  - Stop preview server, but leave constructed files in project for your review.

    ```bash
    make stop
    ```

  - Stop server and "clean" constructed files, best choice when renaming files to eliminate potential duplicates in constructed files.

    ```bash
    make clean
    ```

  - Test notebook conversions, best choice to see if IPYNB conversion is acting up.

    ```bash
    make convert
    ```

### Meta Data (Front Matter)

- Meta data also known as front matter is a set of key value pairs that can provide additional information to github pages about .md and .ipynb files. This can and probably will be used in other file types (ie doc, pdf), if we added them to the system.

- In the front matter you can also define things like a title and description for the page.  Additional front matter is defined to place content on "Computer Science Lab Notebook" page.  The `courses:` key will place data on a specific page with the nested `week:` placing data on a specific row on the page.  The `type:` key in front matter will place blog under the plans, hacks(ToDo), and tangibles column. 

- In our files the front matter is defined at the top of the page or the first markdown cell.

  - First open one of the .md or .ipynb files already included in either your _posts|_notebooks folder.

  - In the .md file you should notice something similar to this at the top of the page. To see this in your .ipynb files you will need to double click the markdown cell at the top of the file.

    ```yaml
    ---
    toc: true
    comments: false
    layout: post
    title: Daily Plan Sample
    description: Example Blog!!!  This shows planning and notes from hacks.
    type: plans
    courses: { compsci: {week: 0} }
    ---
    ```

- Front matter will always have '---' at the top and bottom to distinguish it and each key value pair will be separated by a ':'.

- Here we can modify things like the title and description.

- The type value will tells us which column this is going to appear under, supported values: `plans`, `hacks`, `tangibles`.

- The courses tells us which menu item it will be under, in this case the `compsci` menu, and the `week` tells it what row (week) it will appear under that menu.

- In our examples,  hacks(ToDo) contains references to our IPYNB files; these are stored in GitHub under the `_notebooks` folder.   The plans and tangibles contains references to our MD files; these are stored in GitHub under the `_posts` folder.

### Key files in Computer Science Lab Notebook

- `compsci.md` - this is the "Computer Science Lab Notebook" page and is the link `https://nighthawkcoders.github.io/student/compsci`.  It contains the Title and Number of units on the page.
- `_data/compsci.yml` - this contains the supporting data that helps organize the units on the page.
- `_layouts`\schedule.html - this contains code, in the Liquid language, that generates the HTML for all the rows and columns.
- fyi, the schedule.html could work for another type of page.  For instance, you could make a csa.md, _data/csa.yml, and tag files with `csa: {week: 0}` under courses.


\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\

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
