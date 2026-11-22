# Stack technique

## Référence obligatoire du planning

Avant toute modification du planning affiché ou géré par l’application, consulter [calendrier_hebdomadaire_etudiant.pdf](/Users/msr/Documents/plan-2026-2027/website/resources/calendrier_hebdomadaire_etudiant.pdf).

Ce document contient les véritables données horaires et les activités. Il ne doit jamais être modifié. Ne pas inventer de données de planning absentes de cette source.

## Technologies imposées

- HTML5
- CSS3
- JavaScript natif, ou Vanilla JS
- API File System Access
- localStorage

## Technologies interdites

- React
- Angular
- Vue.js
- Bootstrap
- Tailwind
- Node.js
- PHP
- Python
- base de données
- service externe de stockage

## Objectifs techniques

- conserver une architecture simple, modulaire et maintenable ;
- faire fonctionner le site entièrement en local ;
- éviter tout serveur ou processus backend ;
- sauvegarder immédiatement les changements ;
- préserver les données en cas d’actualisation ou de fermeture inattendue ;
- permettre l’accès direct aux dossiers avec les navigateurs compatibles ;
- proposer un export JSON lorsque l’accès direct aux dossiers n’est pas disponible.

## Architecture attendue

```text
mon-suivi/
├── index.html
├── styles.css
├── app.js
├── js/
│   ├── schedule.js
│   ├── storage.js
│   ├── weekly-report.js
│   ├── weekly-closure.js
│   └── dashboard.js
└── README.md
```

## Responsabilités des modules

- `index.html` : structure des pages.
- `styles.css` : mise en forme responsive et visuelle.
- `app.js` : initialisation de l’application et navigation.
- `schedule.js` : définition et configuration des horaires et activités.
- `storage.js` : sauvegarde et lecture locales.
- `weekly-report.js` : génération des bilans.
- `weekly-closure.js` : clôture automatique des semaines.
- `dashboard.js` : indicateurs et progression.
- `README.md` : installation et utilisation.

## Persistance

Utiliser `showDirectoryPicker()` pour autoriser l’accès à un dossier racine choisi par l’utilisateur.

Utiliser `localStorage` comme :

- cache de secours ;
- copie immédiate des modifications ;
- garantie contre la perte des changements non écrits dans les fichiers.

Ne jamais afficher un succès avant confirmation effective de l’écriture.
