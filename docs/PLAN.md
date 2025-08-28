# Poody Toons Plan

## Milestone M0: Repo Bootstrap
- ✅ Initialize monorepo structure with workspaces: apps/web, packages/ui, packages/games, packages/config, packages/assets, tools
- ✅ Configure TypeScript with strict settings and shared tsconfig in packages/config
- ✅ Set up TailwindCSS and shadcn/ui for shared UI components
- ✅ Establish ESLint/Prettier configs, Husky hooks, and GitHub workflows

## Milestone M1: Hydrogen App & Core Features
- ✅ Scaffold Hydrogen Remix app with base routes and layout
- ✅ Implement basic design system components (Button, Card, Dialog, Tabs) in packages/ui
- ✅ Add "Color-n-Save" component and sample runner game in packages/games
- ✅ Integrate Shopify Storefront mock data via MSW for product grid and cart flows (TODO: swap to live API)
- ⏳ Run Lighthouse and Axe baseline checks, document scores (blocked: Chrome)
