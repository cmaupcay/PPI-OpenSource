# PPI

## Installation

Pour installer le projet ___NPM___, utilisez la commande ```make install```.

### Pré-requis

Les logiciels et bibliothèques suivantes sont nécessaires :

- ___Node Package Manager___ (_[installation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/)_) ;
- ___Make___ (_[téléchargement](https://www.gnu.org/software/make/#download)_) ;
- ___Pandoc___ (_[installation](https://pandoc.org/installing.html)_).

## Production

Pour générer le site, utilisez la commande ```make``` (_ou ```make all```_). Le PDF est d'abord créé dans le dossier ```src``` via ___Pandoc___, puis les fichiers du site sont générés dans le dossier ```dist``` par ___Webpack___.

> _Le site peut aussi être déployé automatiquement via __Vercel__._

### Générer uniquement le site

Pour générer uniquement les fichiers du sites (_tout sauf le PDF_), utilisez la commande ```make dist```.

### Générer uniquement le PDF

Pour créer le PDF depuis les fichiers ___Markdown___ (_```src/textes```_) via ___Pandoc___, utilisez la commande ```make pdf```. Le chemin du fichier généré est ```src/ppi.pdf```.

> _Le fichier sera automatiquement copié dans le dossier ```dist``` par __Webpack__._

#### Génération automatique du PDF

Le fichier est PDF est regénérer automatiquement à chaque poussée sur le dépôt via ___Github Actions___ (_voir ```.github/workflows/pdf.yaml```_).

## Développement

Pour passer en _"mode développement"_ (_rafraîchissement automatique_), utilisez la commande ```make dev```.

> _Le fichier PDF est régénéré avant le lancement de __Webpack__._