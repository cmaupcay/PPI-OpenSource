# Introduction

Avant de commencer, il est primordial de définir le concept d'___open source___ et expliquer pourquoi il ne faut pas le confondre avec le __[logiciel libre](#open-source--éthique--logiciel-libre)__, ou encore pire, avec les __[logiciels gratuits](#gratuit-ne-veut-pas-dire-open-source)__.

---

## Qu'est-ce que l'open source ?

Le terme « _open source_ », ou « _code source ouvert_ » en français, renvoi à l'origine au fait de __rendre accessible aux utilisateurs le code source du logiciel__ que l'on distribue. Si cette idée ne parle pas à la plupart des utilisateurs d'aujourd'hui, cette pratique a __toujours existé en informatique__.
Dans les années 60, les ordinateurs étaient livrés avec des logiciels dédiés et destinés, la plupart du temps, à des utilisateurs avisés qui n'acceptaient pas forcément de faire tourner des logiciels dont il ne pouvait __vérifier et comprendre le fonctionnement en détails__. Ainsi, les éditeurs fournissaient les codes source gratuitement sur demande des utilisateurs, qui pouvait alors __explorer et modifier le code__ selon leurs besoins.

Plus formellement, on parle de __logiciel _open source___ lorsque la [licence](#limportance-des-licences) du dit-logiciel respecte l'___[open source Definition](https://opensource.org/osd/)___ établit par l'___open source Initiative___, à partir des ___Debian Free Software Guidelines___ (_DFSG_) considérées elles comme appartenant au __[logiciel libre](#open-source--éthique--logiciel-libre)__. Cette définition inclut __dix principes__ :

1. __Redistribution libre :__ _N'importe qui peut redistribuer, gratuitement ou non, le logiciel en tant que composant de son propre logiciel. L'auteur du logiciel redistribué ne peut exiger de redevance._
2. __Garantie d'accès au code source :__ _Une distribution du logiciel doit toujours inclure le code source, ou bien indiquer comment se procurer le code source. Celui-ci doit être accessible gratuitement et ne doit pas être obscurci (rendu compliqué volontairement) de quelques manières._
3. __Oeuvres dérivées :__ _N'importe qui doit pouvoir créer une version dérivée du code source et le distribuer sous une licence respectant les termes de la licence du logiciel original._
4. __Clause d'intégrité du code :__ _La liberté de distribution de version dérivée peut-être restreinte uniquement s'il est possible de distribuer des versions correctives du code source._
5. __Non-discrimination contre des personnes ou des groupes :__ _La licence ne doit pas discriminer des personnes ou des groupes de personnes (__ex :__ interdire l'utilisation de son logiciel à Google)._
6. __Non-discrimination à l'égard des champs d'applications :__ _L'utilisation du logiciel ne peut pas être limité à certains champs d'applications (__ex :__ bannir l'utilisation à des fins militaires)._
7. __Distribution de la licence :__ _Les droits attachés au logiciel doivent s'appliquer à tous ceux à qui il est redistribué, sans besoin de souscrire à une autre licence._
8. __Licence non-spécifique :__ _Les droits attachés au logiciel ne peuvent pas dépendre de sa distribution (__ex :__ si on distribue un logiciel dans un package, les droits attachés au logiciel doivent être le même que lorsqu'il est distribué hors du package)._
9. __Licence non-restrictive :__ _Le logiciel ne peut pas "imposer ses droits" aux autres logiciels d'une distribution (__ex :__ imposer que tous les logiciels de la distribution soient open source)._
10. __Neutralité technologique :__ _La licence ne doit pas discriminer quelconque technologie ou style d'interface._

Ces principes se posent en __opposition aux logiciels propriétaires__, ou autrement dit à __code source fermé__. La compagnie ___[Red Hat](https://www/redhat.com/fr/)___, l'une des plus grandes entreprises dédiées aux logiciels _open source_, les définis comme suit :

> Un logiciel fermé est __strictement protégé__. Seuls les propriétaires du code source sont en droit d'accéder à ce code. Un code source fermé __ne peut pas être modifié ni copié__ de manière légale, et l'utilisateur paie uniquement pour pouvoir utiliser le logiciel conformément à l'usage prévu par le propriétaire. Il ne peut ni le modifier pour d'autres usages, ni le partager avec ses communautés.

Cette définition regroupe par exemple les produits ___Microsoft___ (_Windows, Office_) ou ___Apple___ (_iOS, macOS_). À noter qu'__un logiciel propriétaire n'est pas forcément payant__ (___ex :__ Facebook, Google Search_), tout comme __[un logiciel _open source_ n'est pas forcément gratuit](#open-source-ne-veut-pas-dire-gratuit)__.

### Code machine VS Code source

Si vous n'avez jamais fait de développement informatique, vous vous demandez peut-être __qu'est-ce que le code source__ ? Et quelle différence y a-t-il entre le logiciel que vous utilisez et son code source ? Voici quelques explications :

#### Le code machine

Lorsque que vous installez un logiciel (_sur ordinateur, smartphone ou même télévision_), vous téléchargez sur votre machine une version du code écrite dans un __langage adapté à votre machine__. Celui-ci sera lu par votre processeur et __peut varier selon le modèle__ de ce dernier. Pour maximiser les performances, ce code est __écrit en binaire__ (_des 0 et des 1_) et est donc difficilement compréhensible et manipulable par un humain.

> Pour faire une comparaison, si le logiciel était une voiture, le code machine équivaudrait à __toutes les pièces et aux clés du véhicule__ : vous pouvez démarrer, mais, en cas d'incident, pas sûr que vous puissiez soulever le capot puis comprendre où est le problème.

#### Le code source

Vous imaginez bien que les développeurs de logiciels ne vont pas s'amuser à écrire une version de leurs logiciels pour chacun des processeurs existants, c'est pourquoi les informaticiens ont rapidement inventé des __langages de programmation__ adaptés aux humains. Il en existe des milliers, possédant chacun leurs spécificités et répondant à différents besoins, certains pouvant être __traduit directement en code machine__. Ces langages sont donc beaucoup plus compréhensibles et manipulables, bien qu'il nécessite tout de même une maîtrise évidente de la programmation.

> Pour reprendre l'analogie de la voiture, avoir accès au code source d'un logiciel, c'est comme avoir accès aux __plans de fabrication__ du véhicule : certes, pour la plupart des automobilistes, l'usage serait limité, mais pour les plus bricoleurs cela permettrait d'entretenir, réparer, ou améliorer le véhicule librement, et même d'en faire une activité professionnelle.

##### La documentation

Il est important de préciser que la simple consultation du code source d'un logiciel plus ou moins complexe, même pour les développeurs les plus expérimentés, ne permet pas forcément de tout comprendre au fonctionnement du dit-logiciel. C'est pourquoi le code source est souvent accompagné d'une __documentation à destination des développeurs__ expliquant les fonctionnalités des différentes parties du code (___ex:__ pour ouvrir un fichier, utiliser telle fonction_), à ne pas confondre avec les __documentations à destination des utilisateurs__ qui détaillent les fonctionnalités dans le logiciel (___ex:__ pour ouvrir un fichier, aller dans tel menu_).

> Toujours pour reprendre l'exemple de la voiture, on parlerait ici des __notices__ du véhicule, qui peuvent se révéler plus utile que les plans de fabrication pour la plupart des utilisateurs.

#### L’ingénierie inversée

Il me paraît important de préciser que, bien qu'il soit destiné aux machines, le code machine peut-être transformer en texte via des __méthodes d'ingénierie inversée__, dont certains développeurs ont fait leur spécialité.
Ces techniques sont notamment très utilisées en __cyber-sécurité__ pour comprendre les modes d'actions des pirates. Cependant, elles demandent des connaissances poussées, notamment en algorithmie, et plusieurs techniques existent pour rendre ces investigations plus compliquées.
De plus, si le code source n'est pas fourni, ces pratiques peuvent se révéler illégales au regard de la propriété intellectuelle. À noter que la rétro-ingénierie s'étend aussi à l'électronique et à l'industrie en général.

> Pour finir sur la voiture, il est évident que, si vous souhaitez comprendre comment fonctionne votre véhicule, vous pouvez le __démonter pièce par pièce__. Cependant, on peut attendre des constructeurs qu'ils vous fournissent des outils de compréhensions (_documentation, plans techniques_) pour éviter d'en arriver à ces extrémités. C'est là que l'___open source___ entre en jeu !

### D'accord, mais pourquoi faire ?

L'_open source_ est souvent considérée comme « _un problème de geek_ » et, de fait, cette problématique à du mal à s'étendre au grand public. Cependant, s'y intéresser, à titre personnel ou professionnel, peut présenter plusieurs avantages, même si certains dangers persistent de par la nature même de l'_open source_.

#### Avantages

L'_open source_ présente de nombreux atouts reconnus vis-à-vis des logiciels propriétaires. Au-delà des __coûts d'utilisation inférieurs__, puisque le code est gratuit, les logiciels respectant ces principes offrent plusieurs garanties, notamment en termes de __[qualité](#qualité)__, d'__[indépendance](#indépendance)__ et de __[sécurité](#sécurité)__.

##### Qualité

D'abord, l'écosystème _open source_ repose beaucoup sur le système d'__examen par les pairs__, que l'on retrouve dans la recherche scientifique. Ainsi, le code source d'un logiciel peut-être constamment vérifié et amélioré.
De plus, un logiciel propriétaire est entièrement dépendant de l'avenir de son entreprise, là où un logiciel _open source_ peut largement __survivre à son auteur d'origine__, [tant qu'il existe une communauté assez active pour le maintenir](#lexemple-heartbleed).

##### Indépendance

Ensuite, l'_open source_ permet de __limiter la dépendance__ à des tiers puisqu'il permet à tout le monde de gérer soit même son utilisation des logiciels.
Ces solutions sont aussi très __flexibles__ puisque chacun peut les adapter selon ses besoins, et, la plupart du temps, une solution a déjà été partagées par la communauté.
Ce pont explique notamment l'intérêt particulier des __pays émergents__ (_Chine, Inde, Brésil..._) pour l'_open source_, dans lequel ils voient un moyen de garantir leur indépendance technologique.

##### Sécurité

Enfin, la __sécurité__ des produits est souvent supérieure : une faille sur un logiciel _open source_, maintenu par des centaines de développeurs, à potentiellement plus de chance d'être corrigé rapidement que sur un logiciel propriétaire, qui dépend d'une équipe limitée.
La __collaboration ouverte__ prônée par l'_open source_ permet également à tous les utilisateurs d'accéder facilement à de l'aide ou des ressources en ligne, ce qui permet de partager les bonnes pratiques.
Aussi, la __transparence__ inhérente à ce mode de production garantit une __sécurité des données__ qui peut être vérifiée par les utilisateurs eux-mêmes.

#### Dangers

Ce mode de production particuliers présente évidemment plusieurs défauts, principalement dus au fait qu'il est __entièrement basé sur la communauté__, qui n'est pas toujours disposée à contribuer suffisamment.

##### L'exemple _Heartbleed_

En avril 2014, un faille critique dans la bibliothèque de chiffrement ___OpenSSL___, utilisée sur presque l'ensemble des machines formant l'Internet, est découverte par l'équipe de sécurité de ___Google___ et la société ___Codenomicon___. Introduite par erreur en 2012 par un développeur bénévole de la communauté, on découvrira qu'un demi-million de serveurs webs auraient été touchés au moment de sa découverte.
Cet événement à révéler le __manque de moyens__ de projets _open source_ pourtant cruciaux et très utilisés comme ___OpenSSL___. Cela a notamment mené à la création du ___Core Infrastructure Iniative___ (_aujourd'hui remplacé par l'__[open source Security Foundation](https://openssf.org/)___) à l'initiative de la ___Linux Foundation___, en collaboration avec plusieurs grandes entreprises des technologies de l'information, et dont l'objectif est de financer ces __projets _open source_ critiques__.

---

## 50 nuances d'open source

Si vous parlez avec des développeurs, il est possible que, malgré l'existence de définitions officielles comme l'___OSD___, leurs significations du terme _open source_ divergent. Là où des néophytes pourraient penser que « _[open source = gratuit](#open-source-ne-veut-pas-dire-gratuit)_ », les développeurs eux-mêmes peuvent parfois confondre _open source_ et __[logiciel libre](#open-source--éthique--logiciel-libre)__.

### Open Source ne veut pas dire gratuit

He oui, même si cela peut paraître contre-intuitif, tous les projets ___open source___ ne sont pas forcément gratuit. Si on reprend les principes de l'_open source_, on voit bien que rien n'empêche la distribution payante d'un logiciel.

Vous devez sûrement vous dire que, si on donne le code source gratuitement, rien n'empêche aux clients de l'utiliser directement plutôt que de nous acheter la version distribuée, et vous n'avez pas tort. Mais il y a plusieurs raisons pour lesquelles les produits _open source_ payants existent encore :

1. D'abord, selon le logiciel vendu, il n'est certain que tous les clients aient les compétences pour utiliser votre logiciel à partir du code source ;
2. Ensuite, beaucoup d'entreprises souhaitent généralement s'assurer un support sur les logiciels qu'ils utilisent, même sur les logiciels _open source_, et c'est généralement ce qui est compris dans le prix (___ex :__ Red Hat Entreprise Linux_).

### Gratuit ne veut pas dire open source

De même, un logiciel gratuit n'est pas forcément _open source_, et c'est particulièrement vrai pour les sites et applications web. Les codes sources de ___Facebook___, ___Google Search___, ___Instagram___ ou ___YouTube___ ne sont certainement pas accessibles, pourtant, vous n'en payez jamais l'entrée. La plupart de ces sites sont financés grâce à la vente d'espaces et/ou de données publicitaires.

### Sources ouvertes mais pas open source

Il existe aussi des logiciels dont le code source est accessible gratuitement, mais dont les termes de la licence ne respectent pas tous les principes de l'___OSD___. C'est par exemple le cas du moteur de jeu ___Unreal Engine___ derrière ___Fortnite___, dont le code est consultable en ligne. L'utilisation du logiciel est gratuite, mais la licence définie plusieurs conditions en cas d'utilisation commerciale.

Avec le succès de l'_open source_, ce terme est même devenu un argument commercial convaincant menant à plusieurs scandales. On peut par exemple citer la campagne de promotion de ___Windows 10___, durant laquelle on laissait supposer un passage à l'_open source_ pour le système d'exploitation le plus utilisé au monde à l'occasion des 40 ans de ___Microsoft___, et, ce, afin d'élargir sa clientèle auprès des développeurs sensibles à l'_open source_. Un jour qui ne vint jamais...

### Open Source + éthique = logiciel libre

L'_open source_ a été créé pour lever l’ambiguïté sur le terme ___free software___ qui, en anglais, peu aussi bien vouloir dire __logiciel libre__ que __logiciel gratuit__. L'idée était donc de __créer un cadre favorable à l'application des libertés d'accès au code source dans une activité d'entreprise__. Or, certains acteurs comme ___GNU___ se revendique du logiciel libre plutôt que de l'_open source_. Bien que la différence soit parfois assez fine, plusieurs structures, comme l'association française ___Framasoft___, préfère voir dans le logiciel libre une __combinaison des valeurs de l'_open source_ et d'une éthique morale__ : ___open source_ + éthique = logiciel libre__ (_ou plutôt __logiciel libre - éthique = open source___).

### L'importance des licences

Le degrés d'« _ouverture_ » d'un logiciel est donc avant tout défini par les termes de la licence sous laquelle il est distribué. Cet élément est indispensable pour les créateurs de logiciels qui souhaitent protéger leur code, c'est pourquoi il important de [bien choisir sa licence logicielle](https://www.gnu.org/licenses/license-recommendations.fr.html) avant de distribuer son code.

---

## L'open source aujourd'hui

Les projets _open source_ sont aujourd'hui __au cœur des technologies de l'information__, et notamment de l'Internet. Pour preuve, ce site est presque entièrement réalisé à l'aide de technologies _open source_ ! La __méthode _open source___, quant à elle, s'exporte [au-delà des logiciels](#au-delà-des-logiciels).

### Une pratique plus que courante

L'_open source_ en entreprise a pris de plus en plus d'importance, notamment depuis la pandémie du _COVID-19_. Une étude menée par ___Open UK___ sur 273 entreprises britanniques montre que __97% d'entre elles utilisent au moins un logiciel _open source___ et __65% contribuent à au moins un projet__. Cela s'explique notamment par la __réduction des coûts__ évoquée [plus haut](#avantages).

De nombreux projets bénéficient aussi du support des __grandes entreprises technologiques__, à la fois très consommatrices et contributrices d'_open source_. En effet, ___Microsoft___, ___Google___  et ___Apple___ étaient dans le top 5 des contributeurs sur la plateforme ___GitHub___ (_propriété de __Microsoft___) en 2019. De plus, __41% des développeurs les plus actifs étaient affiliés à une entreprise__ sur la même période, contre 19% d'organisations _open source_ et autant de développeurs indépendants.

### Un marché français en pleine croissance

Oui, il est possible de gagner de l'argent en France en faisant de l'__open source__. C'est en tout cas l'avis du cabinet ___Pierre Audoin Consultants___ qui, en 2011, évaluait le marché français de l'_open source_ à __2,5 milliards d'euros__, soit 6% du marché total des logiciels et services, avec une __croissance de 30% par an__.

Une prévision qui semble s'être confirmée en partie puisqu'en 2022, selon ___MARKESS___, l'_open source_ en France représentait __6 milliards d'euros de revenu__ et __60 000 emplois directs__, faisant du pays le leader de l'_open source_ en Europe. Une situation favorable qui devrait perdurer avec une __croissance prévue de 8% par an__ entre 2022 et 2027.

### Au-delà des logiciels

Le concept d'_open source_ s'étant aujourd'hui bien au-delà des logiciels informatiques. Des __[composant électroniques](#open-hardware)__ jusqu'à la __[gouvernance publique](#open-government)__, en passant par la __[finance]([#open-banking--open-finance](https://www2.deloitte.com/fr/fr/pages/services-financier/articles/open-banking-vers-open-finance.html))__, la méthode _open source_ semble définitivement en voie d'adoption.

#### Open Hardware

La volonté d'étendre les principes de l'_open source_ à l'électronique est notamment incarnée par la ___[open source Hardware Association](https://www.oshwa.org/)___ (_OSHWA_), dans un secteur où la quasi-totalité des produits est propriétaire malgré des standards ouverts. Cette initiative fait écho, plus généralement, au mouvement du __matériel libre__.

Les enjeux sont de tailles, notamment lorsqu'on sait, suite aux révélations d'Edward Snowden et d'autres, que certains composants d'ordinateurs commerciaux cachent des __portes dérobées__ (_faille de sécurité volontairement dissimulée pour être exploitée_).

Cependant, selon Alicia Gibb, co-fondatrice de l'___OSHWA___, avec le physique, la recette ne peut être exactement la même que dans le virtuel pour deux raisons principales :

1. Pour les logiciels, le code source donnera toujours le résultat escompté (_pour peu d'avoir la bonne configuration_) sur tous les ordinateurs. Or, pour les objets physiques, __le résultat produit ne dépend pas que des plans de fabrication__, mais également de la matière première, des outils, des contraintes physiques...
2. Les __législations entourant la propriété intellectuelle__ pour les logiciels et les composants électroniques sont fondamentalement différentes : pour les premiers, c'est le __droit d'auteur__ qui s'applique presque automatiquement ; pour les seconds, ce sont les __brevets__ qui prévalent et qui représentent un certain coût.

#### Open Government

La forme finale de la pensée _open source_ est à trouver dans l'idée de __gouvernement ouvert__ dont l'objectif est, notamment à l'aide de logiciels libres, de promouvoir la __transparence__ et la __collaboration citoyenne__ dans les modes de gouvernance publique.
De plus en plus de projets voient le jour partout dans le monde, avec par exemple la plateforme ouverte des données publiques ___[Etalab](https://www.etalab.gouv.fr/)___ en France, ou encore le projet ___[g0v](https://g0v.tw/intl/en/)___ à Taïwan.
