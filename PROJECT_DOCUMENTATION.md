# Groupe MAISON RIVAGE - Documentation Complète

> **Site web vitrine** pour le groupe de restauration et événementiel **Maison Rivage** à Cherbourg-en-Cotentin.

---

## 📁 Structure du Projet

```
d:/Benoit_site/
│
├── index.html                 # Page d'accueil (Hub principal)
├── madame.html                # Page activité Hospitality
├── burgers-de-colette.html    # Page activité Franchise
├── le-vice-city.html          # Page établissement
├── le-cartel.html             # Page établissement
├── mirage.html                # Page établissement
├── sport-club.html            # Page Sport Club
├── evenementiel.html          # Page Événementiel
├── structure.json             # Définition de l'architecture du site
│
├── css/
│   └── style.css              # Styles globaux (Leaflet inclus)
│
├── js/
│   └── main.js                # Logique JavaScript
│
└── assets/
    ├── activities/            # Localized assets (18 images)
    ├── hero_food.png
    └── ...
```

---

## 🏢 Structure Conforme au JSON

### Navigation (8 menus)

| Menu | Type | Sous-menus |
|------|------|------------|
| Groupe | Lien | Page d'accueil |
| Activités | Dropdown | Hospitality, Franchise, Création, Événementiel |
| Sport Club | Lien | - |
| Établissements | Dropdown | Le Vice City, Le Cartel, Mirage, Burgers de Colette, Madame |
| Actualités | Dropdown | Ouvertures, Événements |
| Engagement | Lien | - |
| Recrutement | Lien | - |
| Contact | Lien | - |

### Page d'Accueil

#### Niveau Primaire (4 colonnes)
1. **Rivage Restaurants** → Madame
2. **Rivage Franchise** → Les Burgers de Colette
3. **Rivage Boire et Manger** → Vice City, Cartel, Mirage
4. **Rivage Événements** → Programmation, Traiteur, DJ

#### Niveau Secondaire
1. **Rivage Sports Club** - Running, Sponsoring
2. **Carte des Établissements** - OpenStreetMap intégré

### Établissements (5)

| Nom | Adresse | Réseaux |
|-----|---------|---------|
| Le Vice City | 11B Rue Boël Meslin | Instagram, Facebook, TikTok |
| Le Cartel | 8 Place de la Fontaine | Instagram, Facebook |
| Mirage | 9 Rue Boël Meslin | Instagram, Facebook |
| Les Burgers de Colette | Lien externe | - |
| Madame | - | Instagram, Facebook |

### Footer

- **Adresse**: Cherbourg-en-Cotentin, France
- **Liens**: Carrières, Contact, Mentions Légales
- **6 groupes réseaux sociaux**: Maison Rivage, Vice City, Cartel, Mirage, Madame, Sport Club

---

## 🗺️ Intégration OpenStreetMap

Carte interactive avec **Leaflet.js** :

```javascript
// Établissements avec coordonnées
const etablissements = [
    { name: 'Le Vice City', coords: [49.6387, -1.6161] },
    { name: 'Mirage', coords: [49.6389, -1.6159] },
    { name: 'Le Cartel', coords: [49.6402, -1.6175] }
];
```

- Marqueurs dorés personnalisés
- Popups avec nom, type et adresse
- Centré sur Cherbourg (zoom 16)

---

## 🎨 Design System

### Variables CSS

```css
:root {
    --bg-primary: #050505;       /* Noir luxe */
    --bg-secondary: #111111;
    --text-primary: #F8F7EE;
    --accent: #D4AF37;           /* Or */
    --font-heading: 'Outfit', sans-serif;
    --font-body: 'Libre Baskerville', serif;
}
```

### Sections CSS Ajoutées

| Section | Classes |
|---------|---------|
| Navigation dropdown | `.has-dropdown`, `.dropdown` |
| Grille 4 colonnes | `.activities-section-grid` |
| Établissements | `.etablissements-grid`, `.etablissement-card` |
| Engagements icônes | `.engagements-grid`, `.engagement-item` |
| Recrutement | `.recrutement-section` |
| Contact | `.contact-section`, `.contact-grid` |
| Footer social | `.social-links-footer`, `.social-group` |
| Carte OSM | `.map-container` |

---

## ✅ Travail Accompli (v2.0)

### Restructuration (07/01/2026)
- [x] Conformité stricte au `structure.json`
- [x] Suppression fichiers obsolètes (`news_*.html`)
- [x] 8 menus navigation avec dropdowns
- [x] 4 colonnes page d'accueil
- [x] Section Établissements (5 venues)
- [x] Section Engagements (6 icônes)
- [x] Section Recrutement
- [x] Section Contact
- [x] Footer complet (6 établissements)

### Carte OpenStreetMap
- [x] Intégration Leaflet.js
- [x] 3 marqueurs géolocalisés
- [x] Popups stylisés (thème sombre)
- [x] Marqueurs dorés personnalisés

### Responsive
- [x] Grille 4→2→1 colonnes selon viewport
- [x] Dropdowns adaptés mobile
- [x] Footer empilé sur mobile

---

## 📦 Dépendances Externes

| Librairie | Version | Usage |
|-----------|---------|-------|
| Google Fonts | - | Outfit, Libre Baskerville |
| Leaflet.js | 1.9.4 | Carte OpenStreetMap |
| OpenStreetMap | - | Tiles cartographiques |

---

*Documentation mise à jour le 07 Janvier 2026*

