# Validation du projet

## Source de référence

Tout contrôle du contenu du planning doit être effectué à partir de [calendrier_hebdomadaire_etudiant.pdf](/Users/msr/Documents/plan-2026-2027/website/resources/calendrier_hebdomadaire_etudiant.pdf).

Le PDF contient les véritables données horaires et ne doit jamais être modifié. Aucun horaire ou aucune activité ne doit être validé sans comparaison avec cette source.

## Critères de livraison

Le projet est prêt lorsque tous les contrôles suivants passent.

## 1. Technologies

- aucun framework ou bibliothèque interdite n’est utilisé ;
- aucun serveur, PHP, Node.js, Python ou base de données n’est nécessaire ;
- l’application utilise HTML5, CSS3 et JavaScript natif ;
- `localStorage` sert uniquement de cache de secours ;
- le stockage direct utilise l’API File System Access.

## 2. Parcours principal

- l’utilisateur peut naviguer vers les périodes avec cours ;
- l’utilisateur peut naviguer vers les périodes sans cours ;
- les cartes journalières sont visibles ;
- les horaires et activités sont exacts ;
- les cases peuvent être cochées et décochées ;
- les états sont recalculés immédiatement ;
- une activité passée automatiquement ne devient pas terminée.

## 3. Sauvegarde

- le dossier racine peut être choisi ;
- les dossiers mensuels sont créés automatiquement ;
- les dossiers hebdomadaires sont créés automatiquement ;
- les fichiers du lundi au dimanche sont écrits dans `suivi_quotidien/` ;
- les fichiers contiennent le nom, l’horaire, le statut et la date de modification ;
- les modifications survivent à une actualisation ;
- les données sont conservées dans `localStorage` en cas d’échec direct ;
- aucun message de réussite n’est affiché avant une écriture vérifiée.

## 4. Tableau de bord

- la semaine courante est correcte ;
- le jour actuel est correct ;
- les terminées sont exactes ;
- les restantes sont exactes ;
- le pourcentage est exact ;
- la barre de progression correspond au pourcentage ;
- les anciennes semaines sont accessibles.

## 5. Bilans

- le bilan contient la semaine complète ;
- les dates de début et de fin sont exactes ;
- les totaux prévus, terminés et restants sont exacts ;
- le pourcentage global est exact ;
- chaque journée contient ses totaux et son pourcentage ;
- les activités réalisées sont identifiées ;
- les activités non réalisées sont identifiées ;
- les fichiers JSON et HTML sont produits.

## 6. Clôture

- la clôture intervient à 23 h 00 le dimanche ;
- les contrôles périodiques fonctionnent pendant l’ouverture ;
- les clôtures manquées sont récupérées à l’ouverture ;
- la clôture ne s’exécute pas deux fois ;
- une semaine clôturée devient consultable en lecture seule ;
- une nouvelle semaine démarre avec les cases décochées ;
- l’heure locale de l’ordinateur est utilisée.

## 7. Gestion du planning

- les périodes avec cours et sans cours sont séparées ;
- chaque jour peut être sélectionné ;
- les noms, horaires, descriptions et états peuvent être modifiés ;
- une activité peut être ajoutée ;
- une activité peut être supprimée ;
- l’ordre peut être modifié ;
- une activité peut être désactivée ;
- un programme peut être copié vers un autre jour ;
- les chevauchements sont détectés ;
- l’aperçu fonctionne ;
- l’annulation fonctionne ;
- la restauration demande confirmation ;
- la suppression demande confirmation.

## 8. Impact historique

- une semaine clôturée reste inchangée ;
- un ancien bilan conserve les anciennes activités ;
- une modification future ne modifie pas les archives ;
- une modification pendant la semaine en cours demande explicitement sa portée ;
- les activités déjà réalisées ne sont pas supprimées accidentellement.

## 9. Fiabilité

- refus d’autorisation correctement expliqué ;
- navigateur incompatible correctement expliqué ;
- erreur d’écriture correctement expliquée ;
- fermeture inattendue sans perte grâce au cache ;
- actualisation sans perte des coches ;
- réouverture tardive avec récupération possible ;
- tentative de double clôture sans modification historique.

## 10. Responsive

- aucun débordement horizontal involontaire ;
- lisibilité sur ordinateur ;
- lisibilité sur tablette ;
- lisibilité sur téléphone ;
- navigation utilisable sur tous les formats.

## 11. Documentation

Le `README.md` doit expliquer :

- l’ouverture du site ;
- le choix du dossier ;
- la sauvegarde locale ;
- l’export de secours ;
- la clôture hebdomadaire ;
- les limites du navigateur fermé ;
- la gestion des erreurs.
