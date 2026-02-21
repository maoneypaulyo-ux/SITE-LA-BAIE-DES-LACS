#  Guide du Site Web - LA BAIE DES LACS

**IMPORTANT**: Ce site est un template prêt à être personnalisé. Tous les éléments à remplir avec vos informations sont marqués avec des commentaires `<!-- À REMPLIR: ... -->` dans le code HTML.

---

## ACCÈS AU PROJET VIA GITHUB

Ce projet est disponible sur GitHub. Pour obtenir le code:

### **Option 1: Télécharger le ZIP (Plus simple)**
1. Allez sur: https://github.com/[VOTRE_USERNAME]/LA-BAIE-DES-LACS
2. Cliquez sur le bouton vert **"Code"** (en haut à droite)
3. Cliquez sur **"Download ZIP"**
4. Décompressez le fichier ZIP sur votre ordinateur

### **Option 2: Cloner avec Git (Pour développeurs)**
```bash
git clone https://github.com/[VOTRE_USERNAME]/LA-BAIE-DES-LACS.git
cd LA-BAIE-DES-LACS
```

---

##  CHECKLIST - À FAIRE EN PRIORITÉ

Avant de mettre votre site en ligne, vous DEVEZ:

### **1. Informations de contact (OBLIGATOIRE)**
- [ ] **Numéro WhatsApp**: Trouvez `VOTRE_NUMERO_WHATSAPP` dans tous les fichiers HTML
- [ ] **Numéro de téléphone**: Remplacez `+VOTRE_NUMERO_TELEPHONE`
- [ ] **Email**: Remplacez `VOTRE_EMAIL@DOMAINE.COM`
- [ ] **Adresse complète**: Remplacez `VOTRE_ADRESSE_COMPLETE` et `VOTRE_VILLE_PAYS`

### **2. Photos de votre hôtel**
- [ ] Créez un dossier `/images/` s'il n'existe pas
- [ ] Ajoutez vos photos avec les noms suivants:
  - `hero.jpg` - Photo de votre hôtel (page d'accueil)
  - `room1.jpg`, `room2.jpg`, `room3.jpg` - Photos des chambres
  - `gallery1.jpg` à `gallery9.jpg` - Photos de la galerie complète

### **3. Google Maps (fortement recommandé)**
- [ ] Allez sur [maps.google.com](https://maps.google.com)
- [ ] Cherchez votre hôtel
- [ ] Cliquez "Partager" > "Intégrer une carte"
- [ ] Copiez le code `src="..."` 
- [ ] Remplacez `VOTRE_CODE_GOOGLE_MAPS` dans `pages/contact.html`

### **4. Informations de votre hôtel**
- [ ] Remplacez `VOTRE_NOM_HOTEL` partout
- [ ] Mettez à jour vos services dans `pages/services.html`
- [ ] Complétez les tarifs et équipements dans `pages/rooms.html`

---

##  Structure des fichiers

```
SITE2/
├── index.html              # Page d'accueil
├── css/
│   └── style.css           # Styles globaux (responsive)
├── js/
│   └── script.js           # Fonctionnalités JavaScript
├── pages/
│   ├── about.html          # À propos de l'hôtel
│   ├── rooms.html          # Nos chambres  
│   ├── services.html       # Nos services
│   ├── gallery.html        # Galerie photos
│   └── contact.html        # Formulaire de contact & infos
├── images/                 #  À REMPLIR: Mettez vos photos ici
├── config.json             # Configuration (informations hôtel)
└── README.md               # Ce fichier
```

---

##  ENDROITS À PERSONNALISER - LISTE DÉTAILLÉE

### **index.html (Page d'accueil)**
- Ligne du bouton WhatsApp: Remplacez `VOTRE_NUMERO_WHATSAPP`
- Footer: Remplacez les informations de contact

### **pages/contact.html (Page de contact - IMPORTANT)**
**Vous devez remplir 6 sections:**

1. **Téléphone** (ligne ~120)
   ```html
   <!-- Avant -->
   <a href="tel:+VOTRE_NUMERO_TELEPHONE">+VOTRE_NUMERO_TELEPHONE</a>
   
   <!-- Après - Exemple -->
   <a href="tel:+33612345678">+33 6 12 34 56 78</a>
   ```

2. **Email** (ligne ~130)
   ```html
   <!-- Avant -->
   <a href="mailto:VOTRE_EMAIL@DOMAINE.COM">VOTRE_EMAIL@DOMAINE.COM</a>
   
   <!-- Après - Exemple -->
   <a href="mailto:contact@hotel.com">contact@hotel.com</a>
   ```

3. **WhatsApp** (ligne ~140) 
   ```html
   <!-- Avant -->
   <a href="https://wa.me/VOTRE_NUMERO_WHATSAPP">Cliquez pour discuter</a>
   
   <!-- Après - Exemple -->
   <a href="https://wa.me/33612345678">Cliquez pour discuter</a>
   ```

4. **Adresse** (ligne ~150)
   ```html
   <!-- Avant -->
   VOTRE_NOM_HOTEL<br>
   VOTRE_ADRESSE<br>
   VOTRE_VILLE_PAYS
   
   <!-- Après - Exemple -->
   Mon Hôtel Luxe<br>
   123 Avenue de la Plage<br>
   Cannes, France
   ```

5. **Google Maps** (ligne ~160)
   - Allez sur https://maps.google.com
   - Cherchez votre hôtel
   - Cliquez "Partager" > "Intégrer une carte"
   - Copiez le lien `src="..."`
   - Remplacez le contenu entre `src="` et "`

6. **Footer du contact** (ligne ~180+)
   - Remplacez les 3 adresses de contact par vos infos

### **pages/rooms.html (Chambres)**
Pour chaque chambre, mettez à jour:
- Nom de la chambre
- Description
- Prix par nuit
- Photos (room1.jpg, room2.jpg, room3.jpg)
- Équipements/Commodités

### **pages/services.html (Services)**
Mettez à jour la liste de vos services offerts

### **pages/about.html (À propos)**
- Notre Histoire: Décrivez l'histoire de votre hôtel
- Nos Valeurs: Vos valeurs principales
- L'équipe: Présentez votre équipe

### **pages/gallery.html (Galerie)**
Ajoutez vos 9 meilleures photos (gallery1.jpg à gallery9.jpg)

### **config.json (Configuration)**
```json
{
  "hotel": {
    "name": "VOTRE_NOM_HOTEL",
    "address": "VOTRE_ADRESSE_COMPLETE",
    "phone": "+VOTRE_NUMERO_TELEPHONE",
    "phone_whatsapp": "VOTRE_NUMERO_WHATSAPP",
    "email": "VOTRE_EMAIL@DOMAINE.COM"
  }
}
```

---

##  Structure des fichiers

```
SITE2/
├── index.html              # Page d'accueil
├── css/
│   └── style.css           # Styles globaux (responsive)
├── js/
│   └── script.js           # Fonctionnalités JavaScript
├── pages/
│   ├── about.html          # À propos de l'hôtel
│   ├── rooms.html          # Nos chambres
│   ├── services.html       # Nos services
│   ├── gallery.html        # Galerie photos
│   └── contact.html        # Formulaire de contact & infos
├── images/                 # Vos photos à ajouter ici
├── config.json             # Fichier de configuration
└── README.md               # Ce fichier (guide)
```

---

##  Guide Complet - Personnalisation du Site

Chaque endroit à remplir est marqué dans le code avec un commentaire `<!-- À REMPLIR: ... -->`. Utilisez Ctrl+F pour les trouver rapidement dans l'éditeur.

### **ÉTAPE 1: Informations de base (5 minutes)**

Trouvez et remplacez ces 4 éléments dans TOUS les fichiers HTML:

| À chercher | À remplacer par |
|------------|-----------------|
| `VOTRE_NOM_HOTEL` | Nom de votre hôtel (ex: "Hotel Océan Bleu") |
| `VOTRE_NUMERO_WHATSAPP` | +XXXxxxxxxxxx (ex: +33612345678) |
| `VOTRE_NUMERO_TELEPHONE` | +XXXxxxxxxxxx (ex: +33612345678) |
| `VOTRE_EMAIL@DOMAINE.COM` | contact@yourhotel.com |
| `VOTRE_ADRESSE_COMPLETE` | 123 Rue Main, Ville, Pays |
| `VOTRE_VILLE_PAYS` | Ville, Pays |

**Fichiers à modifier:**
- index.html
- pages/about.html
- pages/contact.html
- pages/rooms.html
- pages/gallery.html
- pages/services.html
- config.json

### **ÉTAPE 2: Photos de votre hôtel (10-30 minutes)**

Créez un dossier `/images/` et ajoutez:

| Nom du fichier | Utilisation | Dimensions recommandées |
|---|---|---|
| `hero.jpg` | Image principale page d'accueil | 1200x600px |
| `room1.jpg` | Chambre simple | 400x300px |
| `room2.jpg` | Chambre double | 400x300px |
| `room3.jpg` | Suite premium | 400x300px |
| `gallery1.jpg` à `gallery9.jpg` | Galerie (9 photos) | 400x400px |

### **ÉTAPE 3: Google Maps (5 minutes)**

1. Ouvrez [https://maps.google.com](https://maps.google.com)
2. Cherchez votre hôtel sur la carte
3. Cliquez sur le marker/épingle
4. Cliquez sur "Partager" (icône de partage)
5. Cliquez sur "Intégrer une carte"
6. Copiez le code `src="..."` (la très longue URL)
7. Ouvrez `pages/contact.html`
8. Cherchez `VOTRE_CODE_GOOGLE_MAPS`
9. Remplacez-le par votre URL Google Maps

**Avant:**
```html
src="https://www.google.com/maps/embed?pb=VOTRE_CODE_GOOGLE_MAPS"
```

**Après (exemple):**
```html
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234...!"
```

---

##  Modification des Contenus

### **Pages à personnaliser avec vos textes:**

#### **index.html (Accueil)**
- "Bienvenue à Notre Hôtel" → Votre slogan
- "Confort, qualité et hospitalité" → Votre tagline
- Description des 4 services principaux

#### **pages/about.html (À propos)**
- "Notre Histoire" → Écrivez l'histoire de votre hôtel
- "Nos Valeurs" → Vos 3 valeurs principales
- "Pourquoi nous choisir ?" → 5 points forts de votre hôtel
- "Notre Équipe" → Présentez votre équipe

#### **pages/rooms.html (Chambres)**
Modifiez pour chaque chambre:
- Nom (ex: "Chambre Simple" → "Chambre Vue Mer")
- Prix (50 000 XOF/nuit → VOTRE_PRIX)
- Description courte
- Équipements (Lit, Salle de bain, etc.)

**Exemple:**
```html
<h3>Chambre Vue Mer</h3>
<p class="room-price">
    <span>À partir de 85 000 XOF/nuit</span>
</p>
<ul class="room-features">
    <li>Lit king size</li>
    <li>Balcon privé avec vue mer</li>
    <li>Salle de bain spacieuse</li>
    ...
</ul>
```

#### **pages/services.html (Services)**
Remplacez les 9 services par ceux de votre hôtel:
- WiFi Gratuit → VOTRE_SERVICE_1
- Restaurant & Bar → VOTRE_SERVICE_2
- etc.

Chaque service a:
- Un titre
- Une description
- Une icône (garder les icônes FontAwesome)

#### **pages/gallery.html (Galerie)**
Ajoutez 9 photos de votre hôtel (gallery1.jpg à gallery9.jpg dans `/images/`)

---

## 📱 Fonctionnalités principales

###  Responsive Design
- Adapté automatiquement à tous les écrans (mobile, tablette, desktop)
- Menu hamburger automatique sur mobile
- Bouton WhatsApp visible partout

###  Multilingue (FR/EN)
- Bouton de langue en haut à droite
- Basculement français/anglais automatique
- Toutes les pages traduites

###  Contacter par WhatsApp
- Bouton flottant en bas à droite
- Lien direct pour discuter avec vous
- Configurable avec votre numéro

###  Formulaire de contact
- Validation des champs
- Messages d'erreur en FR/EN
- Affiche un message de succès

###  Carte Google Maps
- Localisation interactive
- Intégrée depuis Google Maps
- Montre votre position exacte

---

##  Personnaliser le Design

### Couleurs principales (dans `css/style.css`)

Si vous voulez changer les couleurs, ouvrez `css/style.css` et cherchez:

```css
:root {
    --primary-color: #2c3e50;      /* Couleur principale */
    --secondary-color: #e74c3c;    /* Couleur secondaire */
    --accent-color: #3498db;       /* Accent (bleu) */
    --success: #27ae60;            /* Vert (WhatsApp) */
    ...
}
```

Modifiez les couleurs en hexadécimal (ex: #ff0000 pour rouge).

---

##  Support et Configuration Avancée

### Ajouter une nouvelle chambre
1. Ouvrez `pages/rooms.html`
2. Trouvez un bloc complet `<div class="room-card">`
3. Copiez-collez ce bloc entier
4. Modifiez: nom, prix, photo, équipements
5. Ajoutez `room4.jpg` dans `/images/`

### Ajouter plus de photos en galerie
1. Ouvrez `pages/gallery.html`
2. Ajoutez des balises image `<div class="gallery-item">` pour gallery10.jpg, etc.

### Configurer Email pour le formulaire (optionnel)
Le formulaire actuel affiche juste un message de succès. Pour vraiment recevoir des emails:

1. **Formspree** (simple, gratuit)
   - Allez sur https://formspree.io
   - Inscrivez-vous avec votre email
   - Remplacez l'attribut `onsubmit` du formulaire par leur code

2. **EmailJS** (facile, gratuit)
   - Allez sur https://www.emailjs.com
   - Créez un compte
   - Intégrez leur SDK dans `js/script.js`

---


##  Checklist Finale - Avant de lancer

- [ ] Remplacé **VOTRE_NOM_HOTEL** par le vrai nom
- [ ] Remplacé **VOTRE_NUMERO_WHATSAPP** dans tous les fichiers
- [ ] Remplacé **VOTRE_EMAIL** par votre email
- [ ] Remplacé **VOTRE_ADRESSE** par votre vrai adresse
- [ ] Remplacé **VOTRE_NUMERO_TELEPHONE** par votre numéro
- [ ] Ajouté toutes les photos dans `/images/`
- [ ] Configuré Google Maps dans `contact.html`
- [ ] Modifié textes: "Notre Histoire", "Nos Valeurs", "Pourquoi nous"
- [ ] Mis à jour noms et prix des chambres
- [ ] Mis à jour les 9 services
- [ ] Testé sur mobile (responsive)
- [ ] Testé le changement de langue (FR/EN)
- [ ] Testé les boutons WhatsApp
- [ ] Testé tous les liens
- [ ] Hébergé le site en ligne

---

##  Conseils et Troubleshooting

### Les photos ne s'affichent pas?
- Vérifiez les noms: `room1.jpg`, `gallery1.jpg`, etc.
- Vérifiez le chemin: `/images/room1.jpg`
- Vérifiez la casse (majuscules/minuscules)
- Les formats acceptés: JPG, PNG

### Certains textes restent en anglais?
- Cherchez `data-fr="..."` et `data-en="..."`
- Vérifiez le texte entre les balises HTML
- Si c'est un attribut, modifiez les deux (FR et EN)

### Le WhatsApp ne fonctionne pas?
- Vérifiez le format: `+33612345678` (avec +)
- Vérifiez le lien: `https://wa.me/+33612345678`
- Sur téléphone: ça peut demander d'installer WhatsApp si ce n'est pas fait

### Le formulaire de contact ne fonctionne pas?
- C'est normal au départ! Il affiche juste un message de succès.
- Pour vraiment recevoir les emails, suivez la section "Configurer Email" ci-dessus

---

ss`

---

##  Support et Questions

Si vous avez des problèmes:
1. Utilisez Ctrl+F pour chercher "À REMPLIR" et vérifier tous les endroits
2. Cherchez dans les fichiers mentionnés ci-dessus
3. Testez dans un autre navigateur
4. Consultez la console (F12) pour les erreurs


