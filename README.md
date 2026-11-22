# Mon suivi hebdomadaire

Mini-site local en HTML5, CSS3 et JavaScript natif pour suivre les activités de la semaine et produire un bilan.

## Utilisation

Avant toute modification du planning, utiliser [resources/calendrier_hebdomadaire_etudiant.pdf](resources/calendrier_hebdomadaire_etudiant.pdf) comme source exacte des horaires. Ce fichier ne doit jamais être modifié.

Ouvrir `index.html` dans un navigateur moderne. Aucun serveur, paquet ou installation n'est nécessaire.

1. Choisir un dossier de sauvegarde dans le tableau de bord. Chrome ou Edge sont recommandés pour l'API File System Access.
2. Cocher les activités réalisées : chaque changement est immédiatement conservé dans `localStorage` et, si le dossier est autorisé, dans `suivi_quotidien`.
3. Utiliser l’onglet « Gestion de l’emploi du temps » pour administrer les journées avec cours ou sans cours.
4. Utiliser l'export JSON si le navigateur ne prend pas en charge l'accès direct aux dossiers.

Le site contrôle l'heure chaque minute lorsqu'il est ouvert et vérifie au chargement si la clôture du dimanche à 23 h a été manquée. Les bilans déjà présents ne sont jamais recréés.

## Limites du fonctionnement local

Un navigateur fermé ne peut pas exécuter de code à 23 h. La vérification à la prochaine ouverture compense cette limite. L'autorisation du dossier n'est pas persistée par tous les navigateurs : il peut être nécessaire de la redonner après une nouvelle session.

Les données de secours sont conservées dans `localStorage`. Effacer les données du navigateur les supprime ; l'export JSON est recommandé pour une copie indépendante.
# mon-suivi-hebdomadaire
