# Mission du projet

## Objet

Créer un mini-site web personnel permettant de suivre rigoureusement l’exécution de l’emploi du temps hebdomadaire.

## Source de vérité

- Les véritables données du planning sont dans [calendrier_hebdomadaire_etudiant.pdf](/Users/msr/Documents/plan-2026-2027/website/resources/calendrier_hebdomadaire_etudiant.pdf).
- Avant toute modification ou implémentation concernant les horaires, les jours ou les activités, consulter d’abord ce PDF.
- Les données du PDF sont à considérer comme exactes et ne doivent jamais être modifiées.
- Ne jamais inventer ni remplacer une donnée du planning si elle n’est pas confirmée par le PDF.
- Les informations de ce dossier doivent rester conformes au PDF ; toute divergence doit être corrigée à partir du PDF.

Le site doit permettre de :

- consulter les activités prévues chaque jour avec leurs horaires ;
- cocher une activité lorsqu’elle est terminée ;
- décocher une activité avant la clôture ou pour corriger son état ;
- sauvegarder automatiquement l’avancement de chaque journée ;
- consulter le bilan complet de chaque semaine ;
- distinguer précisément les activités réalisées des activités non réalisées ;
- gérer et modifier la structure des deux emplois du temps sans modifier le code.

Le projet fonctionne entièrement en local, sans serveur, sans API externe et sans base de données.

## Utilisateurs

- **Utilisateur principal :** personne qui planifie ses études, son travail et ses activités personnelles.
- **Gestionnaire du planning :** l’utilisateur, depuis une page dédiée de configuration.
- **Consultateur des archives :** l’utilisateur qui consulte les anciennes semaines en lecture seule.

## Principes produit

1. **Fiabilité avant les fonctionnalités secondaires.** La sauvegarde des données et l’exactitude des bilans sont prioritaires.
2. **Clarté quotidienne.** Chaque journée présente ses horaires, ses activités, son état et sa progression.
3. **Contrôle explicite de l’utilisateur.** Une activité n’est terminée que si elle est cochée.
4. **Préservation de l’historique.** Une semaine clôturée ne peut pas être modifiée.
5. **Conservation locale.** Les données restent sur l’ordinateur de l’utilisateur.
6. **Interface simple et professionnelle.** Favoriser une navigation intuitive, une typographie lisible et un affichage responsive.

## Périmètre initial

- suivi hebdomadaire pour les périodes avec cours ;
- suivi hebdomadaire pour les périodes sans cours ;
- cases à cocher et indicateurs de progression ;
- sauvegarde locale quotidienne ;
- dossier mensuel et hebdomadaire organisé automatiquement ;
- clôture du dimanche à 23 h 00 ;
- bilans JSON et HTML ;
- tableau de bord ;
- archives des semaines clôturées ;
- gestion éditable des emplois du temps.

## Hors périmètre

- frameworks front-end ;
- serveur ou base de données ;
- stockage externe ;
- API ou service tiers ;
- fonctionnalités non nécessaires au suivi personnel.
