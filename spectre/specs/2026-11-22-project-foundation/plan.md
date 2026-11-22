# Plan d’implémentation

Ce plan transforme les exigences du projet en une séquence de développement fondée sur les données locales, les modules existants et la protection des archives.

## Référence préalable obligatoire

Avant toute modification des horaires, jours ou activités, consulter [calendrier_hebdomadaire_etudiant.pdf](/Users/msr/Documents/plan-2026-2027/website/resources/calendrier_hebdomadaire_etudiant.pdf).

Ce PDF contient les véritables données du planning et ne doit jamais être modifié. Toute implémentation doit d’abord confirmer le contenu exact à afficher dans cette source.

## Groupe 1 : Architecture initiale

1. Vérifier le code déjà présent avant toute modification.
2. Consulter le PDF source avant toute modification du planning.
3. Réutiliser `schedule.js` pour les horaires et activités.
4. Réutiliser `storage.js` pour toute écriture locale.
5. Conserver `app.js` comme orchestrateur de navigation.
6. Préparer les surfaces pour les pages de suivi, de bilans et de gestion.

## Groupe 2 : Suivi hebdomadaire

1. Générer les cartes du lundi au dimanche.
2. Afficher les horaires, noms, descriptions et dates.
3. Ajouter les cases à cocher.
4. Différencier les états « À faire » et « Terminée ».
5. Recalculer les progressions quotidienne et globale.

## Groupe 3 : Persistance quotidienne

1. Lire les activités depuis `localStorage`.
2. Écrire chaque modification immédiatement.
3. Ajouter la date et l’heure de dernière modification.
4. Sélectionner le dossier racine avec `showDirectoryPicker()`.
5. Créer les dossiers mensuels, hebdomadaires, quotidiens et bilans.
6. Vérifier chaque écriture avant d’afficher un succès.

## Groupe 4 : Tableau de bord et archives

1. Calculer la semaine courante à partir de l’heure locale.
2. Calculer le jour courante.
3. Afficher les terminées, restantes et le pourcentage.
4. Ajouter une barre de progression.
5. Lire les bilans disponibles.
6. Afficher les anciennes semaines en lecture seule.

## Groupe 5 : Bilans

1. Agréger les données du lundi au dimanche.
2. Calculer les totaux prévus, terminés et restants.
3. Calculer le pourcentage global.
4. Calculer le pourcentage de chaque journée.
5. Produire la liste des activités non réalisées.
6. Générer `bilan_semaine.json`.
7. Générer `bilan_semaine.html`.

## Groupe 6 : Clôture

1. Vérifier l’heure toutes les minutes lorsque le site est ouvert.
2. Vérifier les semaines manquées à chaque ouverture.
3. Identifier chaque semaine par sa date de lundi.
4. Refuser toute nouvelle clôture si le bilan existe déjà.
5. Sauvegarder les fichiers avant de marquer la semaine clôturée.
6. Démarrer une nouvelle semaine avec les cases décochées.

## Groupe 7 : Gestion du planning

1. Ajouter la navigation vers « Gestion de l’emploi du temps ».
2. Séparer les configurations avec cours et sans cours.
3. Permettre la sélection d’un jour.
4. Construire les formulaires pour les horaires, noms et descriptions.
5. Ajouter les actions de création, suppression et réordonnancement.
6. Ajouter l’activation temporaire.
7. Ajouter la copie d’un programme journalier.
8. Valider les heures et les chevauchements.
9. Ajouter l’aperçu, l’annulation et la restauration.

## Groupe 8 : Application aux semaines

1. Conserver la configuration active actuelle.
2. Capturer une copie du planning avec chaque semaine.
3. Protéger les données clôturées.
4. Demander l’application immédiate ou différée en cas de modification de semaine en cours.
5. Garantir la continuité des cases cochées.

## Groupe 9 : Validation

1. Tester l’affichage des deux plannings.
2. Tester les cases à cocher et le recalcul.
3. Tester l’actualisation après sauvegarde.
4. Tester le dossier, les sous-dossiers et les fichiers JSON.
5. Tester les refus d’autorisation et les erreurs d’écriture.
6. Tester les bilans complets.
7. Tester la récupération après fermeture du navigateur.
8. Tester les actions de gestion du planning.
9. Vérifier les dimensions responsive.
