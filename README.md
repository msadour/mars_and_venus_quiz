# ⚡ Mars & Venus Quiz 🌙

A beautiful React webapp to measure your feminine and masculine energy balance.

## 🌟 Features

- **30 Carefully Crafted Questions**: 15 masculine energy questions and 15 feminine energy questions
- **Interactive Quiz Experience**: Beautiful gradient backgrounds and smooth animations
- **Detailed Results**: Get your percentage breakdown and personalized interpretation
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Glass morphism effects and elegant typography

## 🧮 How It Works

The quiz analyzes your responses on a 1-5 scale:
- 1️⃣ Strongly Disagree
- 2️⃣ Disagree
- 3️⃣ Neutral
- 4️⃣ Agree
- 5️⃣ Strongly Agree

**Scoring Formula:**
- Masculine % = M / (M + F) × 100
- Feminine % = F / (M + F) × 100

Where M = total masculine score and F = total feminine score.

## 🎯 Energy Types

### ⚡ Masculine Energy (Electric/Conscious Mind/Static Energy)
- Logic and structure-oriented
- Action and goal-focused
- Independence and leadership
- Protection and providing

### 🌙 Feminine Energy (Magnetic/Subconscious Mind/Dynamic Energy)
- Intuition and emotion-oriented
- Flow and adaptability
- Nurturing and collaboration
- Creativity and spirituality

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
