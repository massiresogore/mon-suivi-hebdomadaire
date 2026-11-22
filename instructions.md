**Projet :
Mini-site web de suivi hebdomadaire des activités et bilan personnel**

**1. Objectif
du projet**

Développer un mini-site web personnel
permettant de suivre rigoureusement l'exécution de mon emploi du temps
hebdomadaire.

## fichier source
- se référer du fichier source avant de faire quoi que ce soit.
- ne jamais sortir du cadre de la source
- ne jamais inventer les données

Le site doit me permettre de :

- Consulter
     les activités prévues chaque jour, avec leurs horaires.
- Cocher
     une activité lorsqu'elle est terminée.
- Décocher
     une activité si elle n'a pas encore été réalisée ou si son état doit être
     corrigé.
- Sauvegarder
     automatiquement l'état d'avancement de chaque journée.
- Consulter
     le bilan complet de chaque semaine.
- Identifier
     précisément les activités réalisées et celles qui ne l'ont pas été.

Le projet doit fonctionner entièrement en
local, sans serveur, sans API externe et sans base de données.

**2.
Technologies imposées**

Utiliser exclusivement :

- HTML5
- CSS3
- JavaScript
     natif (Vanilla JS)

Ne pas utiliser :

- React
- Angular
- Vue.js
- Bootstrap
- Tailwind
- Node.js
- PHP
- Python
- Une
     base de données
- Un
     service externe de stockage

L'architecture doit rester simple, propre,
modulaire et facile à maintenir.

**3.
Organisation du site**

Créer deux pages principales accessibles
depuis une navigation claire.

**PAGE 1 :
Suivi hebdomadaire – Période avec cours**

Cette page présente mon emploi du temps du
lundi au dimanche.

Chaque journée doit être présentée dans une
carte contenant :

- Le nom
     du jour et sa date.
- Les
     horaires.
- Les
     activités prévues.
- Une
     case à cocher pour chaque activité.
- Un
     indicateur de progression quotidien.

Emploi du temps à intégrer :

**Du lundi au vendredi**

17 h 00 – 18 h 15 : Retour, repas et repos.

18 h 15 – 19 h 15 : Préparation TOEFL.

19 h 15 – 19 h 30 : Pause.

19 h 30 – 20 h 30 : Étude principale selon le
jour :

 
**Jour** | **Activité**

 
Lundi | Spring
  Boot

 
Mardi | Scénarisation
  et design d'interface

 
Mercredi | Spring
  Boot – pratique

 
Jeudi | Angular

 
Vendredi | Intelligence
  artificielle générative

20 h 30 – 21 h 15 : Lecture de 15 pages.

Répartition des lectures :

- Lundi
     : Pro Spring Boot 4.
- Mardi
     : Livre de scénarisation d'Hélène Sellier.
- Mercredi
     : IA générative, Espace latent, mécanismes et illusions cognitives.
- Jeudi
     : Angular 18 et suivantes.
- Vendredi
     : Kotlin, Du code au Play Store.

21 h 15 – 21 h 30 : Expression orale,
communication ou virelangues.

**Samedi**

 
**Horaire** | **Activité**

 
08 h 30 –
  10 h 00 | TOEFL :
  exercices chronométrés

 
10 h 15 –
  12 h 00 | Développement
  Android avec Kotlin

 
12 h 00 –
  14 h 00 | Repas et
  repos

 
14 h 00 –
  15 h 30 | Travaux
  universitaires : scénarisation et design

 
15 h 45 –
  16 h 30 | Lecture
  de La Dramaturgie de Yves Lavandier

 
16 h 30 –
  17 h 00 | Expression
  orale

**Dimanche**

 
**Horaire** | **Activité**

 
09 h 00 –
  10 h 00 | TOEFL :
  correction et révision

 
10 h 15 –
  11 h 00 | Théâtre :
  Shakespeare ou Racine

 
11 h 00 –
  12 h 00 | Vocabulaire
  et dictionnaire Le Robert

 
Après-midi | Repos,
  lecture complémentaire et préparation de la semaine

Le dimanche doit également proposer un bilan
personnel de la semaine.

**PAGE 2 :
Journée sans cours**

Cette page présente mon emploi du temps
lorsque je ne suis pas en période universitaire.

Je dispose alors de journées libres en dehors
de 8 h 30 réservées au travail et aux déplacements.

Horaires :

 
**Horaire** | **Activité**

 
06 h 45 –
  07 h 30 | TOEFL

 
07 h 30 –
  08 h 00 | Préparation
  et départ

 
08 h 00 –
  16 h 30 | Travail
  et déplacements

 
16 h 30 –
  18 h 00 | Retour,
  repas et repos

 
18 h 00 –
  19 h 15 | Étude
  principale

 
19 h 15 –
  19 h 30 | Pause

 
19 h 30 –
  20 h 10 | Lecture
  de 15 pages

 
20 h 10 –
  20 h 25 | Communication
  ou virelangues

 
À partir
  de 20 h 25 | Repos

Répartition de l'étude principale :

 
**Jour** | **Activité**

 
Lundi | Spring
  Boot

 
Mardi | Scénarisation

 
Mercredi | Spring
  Boot – pratique

 
Jeudi | Angular

 
Vendredi | Intelligence
  artificielle générative

 
Samedi | Kotlin et
  dramaturgie

 
Dimanche | Théâtre
  et bilan hebdomadaire

La préparation TOEFL du matin doit être
maintenue.

Les activités de lecture doivent suivre la
répartition des ouvrages indiquée dans la page précédente.

**4. Système
de cases à cocher**

Chaque activité doit disposer d'une case à
cocher interactive.

Comportement attendu :

- Une
     activité non réalisée apparaît comme « À faire ».
- Une
     activité cochée apparaît comme « Terminée ».
- L'utilisateur
     peut décocher une activité à tout moment avant la clôture de la semaine.
- Chaque
     changement doit être sauvegardé immédiatement.
- Après
     actualisation du navigateur, les coches doivent être conservées.
- La
     progression quotidienne doit être recalculée automatiquement.

Afficher un indicateur global :

- Nombre
     d'activités terminées.
- Nombre
     d'activités restantes.
- Pourcentage
     de réalisation.

Ne jamais considérer automatiquement une
activité comme terminée uniquement parce que son horaire est passé.

**5. Système
de sauvegarde locale des semaines**

C'est une fonctionnalité essentielle du
projet.

Je souhaite organiser les données dans des
dossiers distincts sur mon ordinateur.

À la première utilisation, le site doit me
demander de sélectionner un dossier racine de sauvegarde et d'autoriser son
accès.

Utiliser l'API File System Access du
navigateur, notamment showDirectoryPicker(), pour
créer les dossiers et écrire les fichiers directement sur mon ordinateur.

Exemple d'organisation :

SAUVEGARDE_EMPLOI_DU_TEMPS/

│

└──
11_2026_novembre/

    │

    └── 23_11_2026_semaine_1/

        │

        ├── suivi_quotidien/

        │  
├── lundi.json

        │  
├── mardi.json

        │  
├── mercredi.json

        │  
├── jeudi.json

        │  
├── vendredi.json

        │  
├── samedi.json

        │  
└── dimanche.json

        │

        └── bilan/

            ├── bilan_semaine.json

            └── bilan_semaine.html

Créer automatiquement les dossiers du mois et
de la semaine.

Convention de nommage :

MM_YYYY_mois/

Puis :

JJ_MM_YYYY_semaine_N/

Exemples :

- 11_2026_novembre
- 12_2026_decembre
- 23_11_2026_semaine_1

Utiliser le numéro réel du mois : novembre =
11, décembre = 12.

La semaine commence toujours le lundi et se
termine le dimanche.

Le numéro de semaine doit être attribué de
manière cohérente et unique dans les sauvegardes du mois.

**6.
Sauvegarde quotidienne automatique**

À chaque changement de case à cocher :

1. Enregistrer
     immédiatement l'état de la journée.
2. Enregistrer
     le nom de l'activité.
3. Enregistrer
     son horaire.
4. Enregistrer
     son statut : terminée ou non terminée.
5. Enregistrer
     la date et l'heure de la dernière modification.

Les fichiers quotidiens doivent être mis à
jour sans intervention manuelle.

Ne jamais effacer les données d'une journée
précédente.

**7. Clôture
automatique du dimanche à 23 h 00**

Fonctionnalité particulièrement importante.

Tous les dimanches à 23 h 00, le site doit
clôturer la semaine en cours.

À ce moment :

1. Récupérer
     toutes les données enregistrées du lundi au dimanche.
2. Identifier
     les activités terminées.
3. Identifier
     les activités non terminées.
4. Calculer
     le nombre total d'activités prévues.
5. Calculer
     le nombre d'activités terminées.
6. Calculer
     le nombre d'activités non terminées.
7. Calculer
     le taux global de réalisation.
8. Générer
     un bilan hebdomadaire.

Le bilan doit être sauvegardé dans le dossier bilan/ de la
semaine correspondante.

Exemple :

bilan/

│

├──
bilan_semaine.json

└──
bilan_semaine.html

Le fichier HTML doit présenter un rapport
lisible et imprimable.

Le bilan doit notamment contenir :

**Résumé général**

- Semaine
     concernée.
- Date
     de début.
- Date
     de fin.
- Nombre
     d'activités prévues.
- Nombre
     d'activités terminées.
- Nombre
     d'activités non terminées.
- Pourcentage
     de réalisation.

**Détail journalier**

Pour chaque jour, afficher :

- Les
     activités prévues.
- Les
     activités réalisées.
- Les
     activités non réalisées.
- Le
     pourcentage de réalisation de la journée.

**Liste des activités non réalisées**

Présenter clairement toutes les tâches qui
n'ont pas été cochées.

Ne jamais modifier les données historiques
après la clôture.

La semaine clôturée devient consultable en
lecture seule.

La nouvelle semaine doit commencer avec des
cases décochées.

**Important :
fonctionnement à 23 h 00**

Le site étant entièrement local, il ne peut
pas exécuter un traitement si le navigateur est complètement fermé.

Implémenter donc deux mécanismes :

- Un
     contrôle périodique de l'heure lorsque le site est ouvert, afin de
     déclencher la clôture le dimanche à 23 h 00.
- Une
     vérification à chaque ouverture du site : si une semaine précédente aurait
     dû être clôturée, effectuer automatiquement la clôture manquante à partir
     des données sauvegardées.

La clôture ne doit jamais être effectuée deux
fois pour la même semaine.

Utiliser l'heure locale de l'ordinateur.

**8. Tableau
de bord**

Ajouter sur la page d'accueil un tableau de
bord simple présentant :

- La
     semaine actuelle.
- Le
     jour actuel.
- Le
     nombre d'activités terminées cette semaine.
- Le
     nombre d'activités restantes.
- Le
     taux de progression hebdomadaire.
- Une
     barre de progression visuelle.

Ajouter également un accès aux anciennes
semaines sauvegardées pour consulter leurs bilans.

Ne pas ajouter de fonctionnalités inutiles.

**9.
Interface graphique**

Je souhaite une interface sobre, élégante,
moderne et professionnelle.

Exigences :

- Design
     minimaliste.
- Navigation
     intuitive.
- Typographie
     lisible.
- Cartes
     distinctes pour chaque journée.
- Cases
     à cocher suffisamment visibles.
- Couleurs
     discrètes pour distinguer les activités terminées et celles restant à
     faire.
- Barres
     de progression.
- Affichage
     responsive pour ordinateur, tablette et téléphone.

L'interface doit être agréable à utiliser
quotidiennement.

**10.
Architecture des fichiers**

Organiser le projet de cette manière :

mon-suivi/

│

├──
index.html

├──
styles.css

├── app.js

│

├── js/

│   ├── schedule.js

│   ├── storage.js

│   ├── weekly-report.js

│   ├── weekly-closure.js

│   └── dashboard.js

│

└──
README.md

Responsabilités :

- index.html : structure des pages.
- styles.css : mise en forme.
- app.js : initialisation et navigation.
- schedule.js : définition des horaires et activités.
- storage.js : sauvegarde et lecture des fichiers
     locaux.
- weekly-report.js : génération des bilans.
- weekly-closure.js : clôture automatique des semaines.
- dashboard.js : indicateurs et progression.
- README.md : instructions d'installation et
     d'utilisation.

Le code doit être commenté lorsque cela est
utile.

**11. Gestion
des erreurs et fiabilité**

Prévoir les situations suivantes :

- Refus
     de l'autorisation d'accès au dossier.
- Navigateur
     incompatible avec File System Access API.
- Erreur
     pendant l'écriture d'un fichier.
- Fermeture
     inattendue de la page.
- Actualisation
     du navigateur.
- Réouverture
     du site plusieurs jours après.
- Tentative
     de clôture d'une semaine déjà clôturée.

Utiliser localStorage comme
cache de secours et pour éviter la perte des modifications non encore écrites
dans les fichiers.

Si le navigateur ne prend pas en charge
l'accès direct aux dossiers, proposer une exportation des données en JSON et
informer clairement l'utilisateur que la sauvegarde directe dans les dossiers
n'est pas disponible.

Ne jamais afficher un message de sauvegarde
réussie avant d'avoir vérifié que l'écriture du fichier a effectivement abouti.

Ne pas utiliser IndexedDB, ni aucun système de
base de données.

**12.
Résultat attendu**

Je souhaite recevoir un projet fonctionnel et
complet, et non une simple maquette graphique.

Les fonctionnalités doivent être réellement
opérationnelles :

- Navigation
     entre les deux pages.
- Affichage
     des horaires et activités.
- Cases
     à cocher et décocher.
- Sauvegarde
     automatique quotidienne.
- Organisation
     automatique des dossiers.
- Consultation
     des anciennes semaines.
- Bilan
     hebdomadaire généré le dimanche à 23 h 00.
- Récupération
     des semaines dont la clôture aurait été manquée.

Commencer par concevoir une architecture
cohérente, puis développer les fichiers HTML, CSS et JavaScript.

Tester les fonctionnalités de sauvegarde, de
restauration, de clôture hebdomadaire et de génération du bilan avant de
considérer le projet terminé.

**Priorité absolue : la fiabilité de la
sauvegarde des données et l'exactitude du bilan hebdomadaire.**


# Ajout d'une page : Gestion et configuration de l'emploi du temps

Je souhaite ajouter au site existant une nouvelle page entièrement dédiée à la gestion et à la modification de mon emploi du temps.

Cette page doit être indépendante de la page de suivi quotidien. Son rôle est de me permettre de modifier la structure même de mon planning sans avoir à intervenir dans le code source.

## 1. Gestion des deux types d'emploi du temps

La page doit permettre de basculer entre deux modes :

- Emploi du temps pendant les périodes de cours.
- Emploi du temps pendant les périodes sans cours.

Je dois pouvoir gérer séparément les deux plannings.

## 2. Modification des activités

Pour chaque jour de la semaine, du lundi au dimanche, je dois pouvoir :

- Modifier le nom d'une activité.
- Modifier son heure de début.
- Modifier son heure de fin.
- Modifier sa description.
- Ajouter une nouvelle activité.
- Supprimer une activité.
- Modifier l'ordre des activités par glisser-déposer ou avec des boutons de déplacement.
- Activer ou désactiver temporairement une activité sans la supprimer.

Chaque activité doit être présentée dans un formulaire de modification intuitif.

## 3. Gestion des journées

Je dois pouvoir sélectionner un jour précis et modifier exclusivement son programme.

Exemple :

Lundi :

- 18 h 15 – 19 h 15 : TOEFL.
- 19 h 30 – 20 h 30 : Spring Boot.
- 20 h 30 – 21 h 15 : Lecture.

Je dois pouvoir changer ces informations, ajouter une activité entre deux créneaux ou supprimer une activité devenue inutile.

Prévoir également la possibilité de copier le programme d'une journée vers une autre journée.

## 4. Sauvegarde des modifications

Toutes les modifications doivent être sauvegardées automatiquement dans un fichier JSON dédié à la configuration de l'emploi du temps.

Exemple d'organisation :

```
SAUVEGARDE_EMPLOI_DU_TEMPS/
│
├── configuration/
│   ├── emploi_du_temps_avec_cours.json
│   └── emploi_du_temps_sans_cours.json
│
└── sauvegardes/
    └── ...
```

Utiliser l'API File System Access déjà prévue dans le projet pour enregistrer directement les modifications dans les fichiers locaux.

Prévoir également une sauvegarde de secours dans localStorage.

À chaque modification, afficher clairement l'état de sauvegarde : « Modifications enregistrées » ou « Échec de la sauvegarde ».

## 5. Impact sur le suivi hebdomadaire

Les modifications apportées au planning doivent automatiquement être répercutées dans la page de suivi hebdomadaire.

Toutefois, respecter impérativement les règles suivantes :

- Les semaines déjà clôturées ne doivent jamais être modifiées.
- Les anciens bilans doivent conserver les activités et horaires qui étaient applicables à leur semaine.
- Les nouvelles modifications doivent s'appliquer aux semaines futures.
- Pour une semaine en cours, demander explicitement si les modifications doivent être appliquées à cette semaine ou uniquement à partir de la semaine suivante.
- Les cases cochées et les activités déjà réalisées ne doivent jamais être supprimées accidentellement lors d'une modification du planning.

Conserver une copie du planning applicable à chaque semaine afin de garantir la fiabilité des archives et des bilans.

## 6. Fonctionnalités supplémentaires

Ajouter :

- Un bouton « Ajouter une activité ».
- Un bouton « Enregistrer les modifications ».
- Un bouton « Annuler les modifications ».
- Un bouton « Restaurer le planning initial » avec confirmation.
- Un aperçu du planning avant validation.
- Une confirmation avant toute suppression.
- Une validation des horaires pour éviter les incohérences et les chevauchements.

## 7. Interface utilisateur

Concevoir une interface moderne, sobre et professionnelle, cohérente avec le design existant.

La navigation doit permettre d'accéder facilement à :

1. Suivi hebdomadaire.
2. Journée sans cours.
3. Gestion de l'emploi du temps.
4. Bilans et archives.

Sur la page de gestion, privilégier une présentation claire, avec une sélection des jours et des formulaires faciles à utiliser.

## 8. Contraintes techniques

Respecter impérativement l'architecture et les technologies déjà utilisées dans le projet :

- HTML5.
- CSS3.
- JavaScript natif.
- API File System Access.
- localStorage comme mécanisme de secours.

Ne pas introduire de framework, de serveur ou de base de données.

Avant toute modification, examiner le code existant et réutiliser les fonctions de stockage déjà développées. Ne pas créer un second système de sauvegarde concurrent.

**Résultat attendu :** une véritable interface d'administration de mon emploi du temps, me permettant de faire évoluer librement mes horaires, mes matières et mes activités, sans modifier manuellement les fichiers HTML ou JavaScript.

-    cette page est le seul endroit où je modifirai la structure de mon planning : les autres pages se contenteront de l'afficher et de suivre son exécution.
