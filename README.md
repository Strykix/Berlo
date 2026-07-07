# Berlo — site vitrine IoT

Site vitrine professionnel pour `berlo.fr`, construit avec Next.js App Router, TypeScript, Tailwind CSS, React et Lucide React.

## Installation

```bash
npm install
```

## Lancement local

```bash
npm run dev
```

Le site sera disponible sur `http://localhost:3000`.

## Build de production

```bash
npm run build
```

## Déploiement Vercel

1. Pousser le dépôt sur GitHub, GitLab ou Bitbucket.
2. Importer le projet dans Vercel.
3. Garder les réglages par défaut Next.js.
4. Ajouter le domaine `berlo.fr` dans les paramètres Vercel du projet.

## Modifier les textes

Les contenus principaux sont centralisés dans `data/site.ts` :

- navigation
- badges du hero
- métriques
- problèmes clients
- services
- cas d'usage
- technologies
- méthode
- forces à propos
- types de besoin du formulaire
- mots-clés SEO

Les paragraphes longs de certaines sections sont dans leurs composants dédiés dans `components/`.

## Remplacer le logo

Les previews visuelles sont dans `public/references/` :

- `public/references/berlo-logo-preview.png`
- `public/references/berlo-homepage-preview.png`

Les assets de marque générés et utilisés par le site sont dans `public/brand/` :

- `public/brand/berlo-monogram-liquid-web.png`
- `public/brand/berlo-wordmark-liquid-web.png`

Le composant réutilisable du logo est `components/Logo.tsx`. Remplacez ces fichiers ou ce composant quand le logo officiel sera prêt.

## Modifier les images industrielles

Les photos générées pour les sections terrain et cas d'usage sont dans `public/industry/` :

- `industry-manufacturing-liquid.jpg`
- `energy-photovoltaic-liquid.jpg`
- `building-technical-liquid.jpg`

Les associations entre cas d'usage et images sont centralisées dans `data/site.ts`.

## Connecter le formulaire

Le formulaire est dans `components/Contact.tsx`. Il est volontairement frontend-only pour l'instant. Pour l'activer, connectez le `form` à une API route Next.js, Resend, Formspree ou un autre service de collecte.
