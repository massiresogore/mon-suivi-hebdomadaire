# Exigences fonctionnelles

## Source obligatoire des données

- Les véritables données de l’emploi du temps sont contenues dans [calendrier_hebdomadaire_etudiant.pdf](/Users/msr/Documents/plan-2026-2027/website/resources/calendrier_hebdomadaire_etudiant.pdf).
- Ce PDF doit être consulté avant toute modification ou implémentation concernant les horaires ou les activités.
- Ses données ne doivent jamais être modifiées.
- Ne jamais inventer, compléter ou remplacer des données du planning sans confirmation dans le PDF.

## Portée

Développer un mini-site complet de suivi hebdomadaire des activités, avec sauvegarde locale, bilans, archives et gestion configurable des emplois du temps.

## 1. Objectif du projet

Le site doit permettre à l’utilisateur de :

- consulter les activités prévues chaque jour ;
- afficher les horaires ;
- marquer une activité terminée ;
- corriger une activité en la décochant ;
- sauvegarder l’avancement ;
- consulter les bilans ;
- modifier le planning depuis une interface dédiée.

Le fonctionnement doit rester entièrement local.

## 2. Technologies

Utiliser exclusivement HTML5, CSS3 et JavaScript natif.

Ne pas utiliser React, Angular, Vue.js, Bootstrap, Tailwind, Node.js, PHP, Python, une base de données ou un stockage externe.

## 3. Emploi du temps avec cours

Du lundi au vendredi :

- 17 h 00 – 18 h 15 : Retour, repas et repos.
- 18 h 15 – 19 h 15 : Préparation TOEFL.
- 19 h 15 – 19 h 30 : Pause.
- 19 h 30 – 20 h 30 : Étude principale.
- 20 h 30 – 21 h 15 : Lecture de 15 pages.
- 21 h 15 – 21 h 30 : Expression orale, communication ou virelangues.

Répartition de l’étude principale :

- lundi : Spring Boot ;
- mardi : Scénarisation et design d’interface ;
- mercredi : Spring Boot – pratique ;
- jeudi : Angular ;
- vendredi : Intelligence artificielle générative.

Répartition des lectures :

- lundi : Pro Spring Boot 4 ;
- mardi : livre de scénarisation d’Hélène Sellier ;
- mercredi : IA générative, Espace latent, mécanismes et illusions cognitives ;
- jeudi : Angular 18 et suivantes ;
- vendredi : Kotlin, Du code au Play Store.

Samedi :

- 08 h 30 – 10 h 00 : TOEFL, exercices chronométrés.
- 10 h 15 – 12 h 00 : Développement Android avec Kotlin.
- 12 h 00 – 14 h 00 : Repas et repos.
- 14 h 00 – 15 h 30 : Travaux universitaires, scénarisation et design.
- 15 h 45 – 16 h 30 : Lecture de La Dramaturgie de Yves Lavandier.
- 16 h 30 – 17 h 00 : Expression orale.

Dimanche :

- 09 h 00 – 10 h 00 : TOEFL, correction et révision.
- 10 h 15 – 11 h 00 : Théâtre, Shakespeare ou Racine.
- 11 h 00 – 12 h 00 : Vocabulaire et dictionnaire Le Robert.
- Après-midi : repos, lecture complémentaire et préparation de la semaine.
- Bilan personnel de la semaine.

## 4. Emploi du temps sans cours

- 06 h 45 – 07 h 30 : TOEFL.
- 07 h 30 – 08 h 00 : préparation et départ.
- 08 h 00 – 16 h 30 : travail et déplacements.
- 16 h 30 – 18 h 00 : retour, repas et repos.
- 18 h 00 – 19 h 15 : étude principale.
- 19 h 15 – 19 h 30 : pause.
- 19 h 30 – 20 h 10 : lecture de 15 pages.
- 20 h 10 – 20 h 25 : communication ou virelangues.
- À partir de 20 h 25 : repos.

Étude principale :

- lundi : Spring Boot ;
- mardi : Scénarisation ;
- mercredi : Spring Boot – pratique ;
- jeudi : Angular ;
- vendredi : Intelligence artificielle générative ;
- samedi : Kotlin et dramaturgie ;
- dimanche : Théâtre et bilan hebdomadaire.

La préparation TOEFL du matin et la lecture quotidienne doivent être maintenues.

## 5. Cases à cocher

- une activité non réalisée est « À faire » ;
- une activité cochée est « Terminée » ;
- l’utilisateur peut décocher avant la clôture ;
- chaque changement est sauvegardé immédiatement ;
- les coches doivent être conservées après actualisation ;
- la progression quotidienne doit être recalculée automatiquement ;
- les indicateurs doivent montrer les terminées, les restantes et le pourcentage ;
- aucune activité ne devient terminée seulement parce que son horaire est passé.

## 6. Organisation des sauvegardes

Le dossier racine est demandé à la première utilisation.

Organisation attendue :

```text
SAUVEGARDE_EMPLOI_DU_TEMPS/
├── configuration/
│   ├── emploi_du_temps_avec_cours.json
│   └── emploi_du_temps_sans_cours.json
└── 11_2026_novembre/
    └── 23_11_2026_semaine_1/
        ├── suivi_quotidien/
        │   ├── lundi.json
        │   ├── mardi.json
        │   └── dimanche.json
        └── bilan/
            ├── bilan_semaine.json
            └── bilan_semaine.html
```

Convention mensuelle : `MM_YYYY_mois`.

Convention hebdomadaire : `JJ_MM_YYYY_semaine_N`.

Exemples :

- `11_2026_novembre`
- `12_2026_decembre`
- `23_11_2026_semaine_1`

La semaine commence lundi et finit dimanche. Son numéro dans le mois doit être unique et cohérent.

## 7. Sauvegarde quotidienne

À chaque changement, enregistrer :

- l’état terminé ou non terminé ;
- le nom de l’activité ;
- son horaire ;
- la date ;
- l’heure de la dernière modification.

Ne jamais effacer les données d’une journée précédente.

## 8. Clôture hebdomadaire

À chaque dimanche à 23 h 00 :

- récupérer les données du lundi au dimanche ;
- identifier les activités réalisées ;
- identifier les activités non réalisées ;
- calculer le total prévu ;
- calculer les terminées ;
- calculer les restantes ;
- calculer le taux global ;
- générer le bilan hebdomadaire ;
- sauvegarder le bilan dans le dossier `bilan/`.

Le bilan HTML doit être lisible et imprimable.

Il doit contenir :

- la semaine ;
- la date de début ;
- la date de fin ;
- les totaux ;
- le pourcentage ;
- le détail quotidien ;
- les activités réalisées ;
- les activités non réalisées ;
- la liste clairement séparée des tâches non réalisées.

Ne jamais modifier les données historiques après clôture.

## 9. Récupération et prévention des doublons

Comme le navigateur fermé ne peut pas exécuter le traitement :

- contrôler périodiquement l’heure lorsque le site est ouvert ;
- vérifier à chaque ouverture si une clôture manquée existe ;
- utiliser l’heure locale de l’ordinateur ;
- ne jamais clôturer deux fois la même semaine.

Les anciennes semaines sont consultables en lecture seule.

## 10. Tableau de bord

Afficher :

- la semaine actuelle ;
- le jour actuel ;
- les activités terminées ;
- les activités restantes ;
- le taux de progression ;
- une barre de progression ;
- un accès aux anciennes semaines et bilans.

## 11. Interface graphique

- design minimaliste ;
- navigation intuitive ;
- typographie lisible ;
- cartes distinctes pour chaque jour ;
- cases à cocher visibles ;
- couleurs discrètes pour les états ;
- barres de progression ;
- affichage responsive sur ordinateur, tablette et téléphone.

## 12. Gestion du planning

Une nouvelle page dédiée doit permettre de gérer séparément les deux modes :

- période avec cours ;
- période sans cours.

Pour chaque jour, permettre :

- de modifier le nom ;
- de modifier l’heure de début ;
- de modifier l’heure de fin ;
- de modifier la description ;
- d’ajouter une activité ;
- de supprimer une activité ;
- de réordonner les activités ;
- d’activer ou désactiver une activité ;
- de copier le programme d’une journée vers une autre.

Ajouter :

- aperçu du planning ;
- bouton d’enregistrement ;
- bouton d’annulation ;
- restauration du planning initial avec confirmation ;
- confirmation avant toute suppression ;
- validation des horaires ;
- détection des chevauchements.

## 13. Sauvegarde de la configuration

Les configurations doivent être enregistrées dans :

- `configuration/emploi_du_temps_avec_cours.json`
- `configuration/emploi_du_temps_sans_cours.json`

Afficher explicitement :

- `Modifications enregistrées`
- `Échec de la sauvegarde`

La configuration utilise le même stockage direct déjà prévu, avec `localStorage` comme secours.

## 14. Impact sur le suivi

- les nouvelles modifications doivent s’appliquer aux semaines futures ;
- les semaines clôturées ne doivent jamais être modifiées ;
- les anciens bilans doivent conserver les activités applicables ;
- une modification en cours de semaine doit demander explicitement si elle s’applique à la semaine en cours ou uniquement à la suivante ;
- les activités réalisées ne doivent pas être supprimées accidentellement ;
- conserver une copie du planning applicable à chaque semaine ;
- cette page est le seul endroit où la structure du planning est modifiée.
