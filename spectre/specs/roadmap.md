# Feuille de route

## Règle de source

Avant toute modification du planning, consulter [calendrier_hebdomadaire_etudiant.pdf](/Users/msr/Documents/plan-2026-2027/website/resources/calendrier_hebdomadaire_etudiant.pdf). Ce PDF contient les véritables données horaires. Ses données ne doivent jamais être modifiées ni remplacées par des informations inventées.

Les phases sont ordonnées pour livrer d’abord les données fiables, puis les interfaces et les fonctions avancées.

## Phase 1 : Fondation

- établir la structure HTML, CSS et JavaScript ;
- définir les horaires fixes initiaux ;
- afficher les deux pages principales ;
- créer la navigation ;
- mettre en place la mise en page responsive.

**Terminée lorsque :** le planning initial est visible sur ordinateur, tablette et téléphone.

## Phase 2 : Suivi quotidien

- afficher les activités sous forme de cartes ;
- ajouter une case à cocher à chaque activité ;
- afficher « À faire » ou « Terminée » ;
- calculer la progression quotidienne ;
- calculer les indicateurs globaux.

**Terminée lorsque :** chaque activité peut être cochée, décochée et mise à jour immédiatement.

## Phase 3 : Sauvegarde locale

- ajouter `localStorage` comme cache ;
- demander l’autorisation d’un dossier racine ;
- créer les dossiers mensuels et hebdomadaires ;
- écrire les données quotidiennes ;
- gérer les erreurs d’autorisation et d’écriture.

**Terminée lorsque :** les changements survivent à une actualisation et sont écrits dans les fichiers locaux.

## Phase 4 : Tableau de bord

- afficher la semaine et le jour actuels ;
- afficher les activités terminées, restantes et la progression ;
- ajouter une barre de progression ;
- ajouter l’accès aux anciennes semaines.

**Terminée lorsque :** les indicateurs sont calculés à partir des données réelles de la semaine.

## Phase 5 : Bilans hebdomadaires

- générer les détails du lundi au dimanche ;
- calculer les totaux et pourcentages ;
- produire `bilan_semaine.json` ;
- produire `bilan_semaine.html` imprimable ;
- afficher les activités non réalisées.

**Terminée lorsque :** un bilan complet peut être consulté et sauvegardé.

## Phase 6 : Clôture automatique

- contrôler périodiquement l’heure ;
- clôturer le dimanche à 23 h 00 ;
- vérifier les clôtures manquées à l’ouverture ;
- empêcher une clôture double ;
- rendre les semaines clôturées en lecture seule ;
- repartir avec des cases décochées.

**Terminée lorsque :** une semaine clôturée ne peut plus être modifiée et n’est jamais clôturée deux fois.

## Phase 7 : Gestion du planning

- ajouter une page de configuration ;
- basculer entre les modes avec cours et sans cours ;
- modifier, ajouter, supprimer, réordonner et désactiver les activités ;
- copier le programme d’un jour vers un autre ;
- ajouter l’aperçu, l’annulation et la restauration.

**Terminée lorsque :** les emplois du temps peuvent être administrés sans modifier le code source.

## Phase 8 : Impact sur les semaines

- conserver une copie du planning applicable à chaque semaine ;
- protéger les semaines clôturées ;
- demander si les changements s’appliquent à la semaine en cours ;
- appliquer les nouvelles configurations aux semaines futures ;
- préserver les activités déjà réalisées.

**Terminée lorsque :** les modifications futures n’altèrent pas les archives historiques.

## Phase 9 : Fiabilité et validation

- tester l’autorisation du dossier ;
- tester les erreurs d’écriture ;
- tester la restauration après actualisation ;
- tester les ouvertures tardives ;
- tester la clôture et les bilans ;
- vérifier l’affichage responsive et les erreurs.

**Terminée lorsque :** les données sont fiables et les principaux parcours sont validés.
