# Calculatrice React

Une calculatrice moderne construite avec React, supportant les thèmes clair/sombre et les opérations mathématiques de base.

## 🛠️ Technologies

- React 18
- CSS Modules
- React Icons
- Context API pour la gestion du thème

## ✨ Fonctionnalités

- Opérations mathématiques basiques (+, -, *, /)
- Changement de thème (clair/sombre)
- Gestion des décimales
- Bouton de changement de signe (±)
- Calcul des pourcentages
- Responsive design
- Persistance du thème choisi

## 📥 Installation

```bash
# Cloner le repository
git clone https://github.com/TrRollet/calculator.git

# Se placer dans le dossier
cd calculator

# Installer les dépendances
npm install
```

## 🚀 Utilisation

### Démarrer l'application en mode développement
```bash
npm run dev
```

### Construire l'application pour la production
```bash
npm run build
```

## 📚 Documentation

### Structure du projet

- `src/`: Contient tous les fichiers source du projet.
  - `components/`: Contient les composants React.
    - `buttons/`: Contient le composant Button.
    - `screen/`: Contient le composant Screen.
    - `theme-toggle/`: Contient le composant ThemeToggle.
  - `context/`: Contient les fichiers de gestion du contexte (ThemeContext et ThemeProvider).
  - `hooks/`: Contient les hooks personnalisés (useTheme).
  - `App.jsx`: Composant principal de l'application.
  - `main.jsx`: Point d'entrée de l'application.
  - `index.css`: Fichier de styles global.

### Composants principaux

- **CalculatorContainer**: Composant principal de la calculatrice, gère la logique des opérations et l'affichage.
- **Button**: Composant pour les boutons de la calculatrice.
- **Screen**: Composant pour l'affichage des valeurs.
- **ThemeToggle**: Composant pour le changement de thème (clair/sombre).

### Contexte

- **ThemeContext**: Contexte pour la gestion du thème.
- **ThemeProvider**: Fournisseur de contexte pour le thème, gère l'état du thème et la persistance dans le localStorage.

### Hooks

- **useTheme**: Hook personnalisé pour accéder au contexte du thème.

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👨‍💻 Auteur

- **Tristan Rollet** - [TrRollet](https://github.com/TrRollet)
