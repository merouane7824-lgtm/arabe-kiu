# Arabe KIU · S1 à S4

<img src="icon-1024.png" width="120" alt="Icône de l'application">

Application pour apprendre l'arabe à partir des cours KIU des semestres 1 à 4 : leçons expliquées, quiz corrigés, flashcards à révision espacée, lexique et outils (alphabet, conjugueur, nombres, pronoms).
Elle s'installe sur l'iPhone comme une vraie appli et **fonctionne hors connexion** après la première ouverture.

---

## 1. Mettre l'appli en ligne (une seule fois)

1. Crée un compte sur **github.com** (gratuit) si tu n'en as pas.
2. En haut à droite, choisis **+ › New repository**.
   - *Repository name* : `arabe-kiu` (ou un autre nom, sans espace).
   - Coche **Public**. Avec un compte gratuit, GitHub Pages ne fonctionne qu'avec un dépôt public.
   - Clique **Create repository**.
3. Sur la page du dépôt, clique **uploading an existing file** (ou **Add file › Upload files**).
   - Dépose **tous les fichiers** de ce dossier, directement à la racine (pas de sous-dossier).
   - Clique **Commit changes**.
4. Va dans **Settings › Pages**.
   - *Source* : **Deploy from a branch**.
   - *Branch* : **main** et **/ (root)**, puis **Save**.
5. Attends une à deux minutes et recharge la page. Le lien s'affiche en haut :
   `https://TON-PSEUDO.github.io/arabe-kiu/`

> **Depuis l'iPhone uniquement ?** Ouvre le fichier `.zip` dans l'app **Fichiers** : il se décompresse en dossier.
> Sur github.com dans Safari, ouvre le menu **aA** de la barre d'adresse › **Demander le site pour ordinateur**, puis **Add file › Upload files › Choose your files** et sélectionne tous les fichiers du dossier.

## 2. Installer sur l'iPhone

1. Ouvre le lien `https://TON-PSEUDO.github.io/arabe-kiu/` dans **Safari** (pas dans Chrome ni dans l'appli GitHub).
2. Touche **Partager** (le carré avec la flèche vers le haut).
3. Touche **« Sur l'écran d'accueil »**, puis **Ajouter**.

L'icône **Arabe KIU** apparaît sur ton écran d'accueil. L'appli s'ouvre en plein écran, sans barre Safari, et marche sans internet.

---

## Bon à savoir

**Ta progression reste sur ton téléphone.** Leçons, scores et flashcards sont enregistrés localement, rien n'est envoyé sur internet.
- Safari et l'appli de l'écran d'accueil ont **chacun leur propre mémoire**. Utilise toujours l'appli de l'écran d'accueil.
- Pour changer de téléphone ou faire une sauvegarde, va dans **Progrès › Exporter ma progression** (enregistre le fichier dans *Fichiers*), puis **Importer** sur l'autre appareil.
- Si tu supprimes l'appli de l'écran d'accueil, sa progression est effacée. Exporte-la avant.

**Prononciation (bouton 🔊 et « toucher pour écouter »).** L'appli utilise la voix arabe de l'iPhone. Pour une meilleure qualité :
- va dans **Réglages › Accessibilité › Contenu énoncé › Voix › Arabe** ;
- télécharge la voix « Majed » (ou une version « améliorée ») ;
- si tu n'entends rien, vérifie le volume et le mode silencieux.

**Dépôt public.** Le contenu des cours est accessible à toute personne qui a le lien ou qui trouve le dépôt. Pour un dépôt privé avec GitHub Pages, il faut un abonnement GitHub Pro.

## Mettre à jour l'appli

1. Sur GitHub, ouvre le dépôt et clique **Add file › Upload files**.
2. Dépose le nouveau `index.html`, qui remplacera l'ancien, puis **Commit changes**.
3. Si tu as aussi changé `fonts.css` ou les icônes, ouvre `sw.js`, clique le crayon ✏️ et remplace `arabe-kiu-v1` par `arabe-kiu-v2` (puis v3, etc.).

L'appli récupère la nouvelle version à sa prochaine ouverture avec internet. Si besoin, ferme-la complètement (balayage vers le haut) et rouvre-la.
Ta progression n'est pas touchée par une mise à jour.

**Changer l'icône déjà installée :** iOS garde l'ancienne icône en mémoire. Supprime l'appli de l'écran d'accueil et ajoute-la à nouveau, en pensant à exporter ta progression avant.

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| `index.html` | L'application complète (cours, quiz, flashcards, outils) |
| `fonts.css` | Polices intégrées (Amiri pour l'arabe, DM Sans, Cormorant Garamond, Caveat, IBM Plex Mono), sous licence libre OFL |
| `sw.js` | Service worker : fonctionnement hors connexion et mises à jour |
| `manifest.webmanifest` | Nom, couleurs et icônes de l'appli |
| `apple-touch-icon.png` | Icône de l'écran d'accueil iPhone (180 × 180) |
| `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` | Icônes pour Android et les autres navigateurs |
| `favicon-32.png` | Icône de l'onglet du navigateur |
| `icon-1024.png` | Icône en grand format (aperçu) |
