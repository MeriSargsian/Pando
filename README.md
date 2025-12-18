# Pando Populus

Pando Populus is a web-based environmental and social resilience project that translates complex climate, infrastructure, and demographic data into clear, community-ready insights. The platform is designed to support understanding, planning, and decision-making around climate risk at the neighborhood scale.

## Project overview

Pando Populus focuses on place-based resilience analysis, integrating environmental hazards with social context to highlight risks, strengths, and multi-benefit solutions. The project emphasizes clarity, accessibility, and practical application of data for communities, students, and planners.

Key focus areas include:

- Heat exposure and urban heat island effects
- Air quality and public health impacts
- Flooding and sea level rise risk
- Wildfire hazard and resilience capacity
- Social vulnerability and accessibility

## Study area

The primary case study for Pando Populus is Census Tract 1397.02 in Los Angeles County, a coastal community characterized by:

- Population of approximately 6,447 residents
- Moderate population density (~686 people per km²)
- High homeownership (~88.5%) and residential stability
- Significant elderly population (24% age 65+)
- Significant protected and undeveloped land (~77%)

## Local development

This is a Next.js site.

```bash
npm install
npm run dev
```

Then open:

http://localhost:3000

## Build

```bash
npm run build
```

## GitHub Pages deployment

This repository includes a GitHub Actions workflow that builds and exports the site (`next export`) and publishes it to GitHub Pages on pushes to `main`.

Note: `next.config.ts` is configured to deploy under the repository path (`/Pando`) for GitHub Pages.
