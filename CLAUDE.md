# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Hugo-based static website (findsofun.com) that showcases tech tools and applications. The site automatically syncs content from a Notion database and publishes to GitHub Pages.

## Architecture

- **Static Site Generator**: Hugo with dual theme architecture
  - Primary theme: `hugo-shares-themes` (main layout and styling)
  - Secondary theme: `notion-site-theme` (specialized shortcodes for Notion content)
- **Styling**: Tailwind CSS with custom configuration
- **Content Source**: Notion database (ID: 2527eff93d7e804ba921e3c44a094cc2)
- **Deployment**: GitHub Pages via automated workflow
- **Search**: Pagefind for static site search functionality

## Key Commands

### Development
```bash
# Install dependencies
npm install

# Run development server (Hugo + Tailwind watch + Pagefind)
npm run dev

# Individual development commands:
npm run dev:hugo      # Hugo server with drafts
npm run dev:generate  # Tailwind CSS compilation (watch mode)
npm run dev:pagefind  # Pagefind search server
```

### Production Build
```bash
# Full production build
npm run build

# Individual build commands:
npm run build:hugo      # Hugo static site generation
npm run build:generate  # Tailwind CSS compilation (minified)
npm run build:pagefind  # Generate search index
```

## Content Management

### Structure
- Content is automatically synced from Notion every 15 minutes via GitHub Actions
- Posts are organized in `/content/posts/<year>/` directories
- Each post includes media assets in subdirectories
- Content filters: Status = "Finished", "Published", or "RePublish"

### Manual Content Addition
- All content should follow the year-based organization: `/content/posts/2025/`
- Use Hugo front matter with proper tags and categories
- Include featured images in post directories

## Development Workflow

### Theme Customization
- Main CSS: `/assets/input.css` (Tailwind source)
- Generated CSS: `/themes/pehtheme-simple-hugo/static/assets/css/main.css`
- Tailwind config: `tailwind.config.js` with custom typography and animations

### Content Updates
- Content syncs automatically from Notion via GitHub Actions
- Manual builds trigger full regeneration including search index
- Changes to themes or configuration require rebuilding CSS

### Deployment
- Automatic deployment via `.github/workflows/hugo.yaml`
- Triggered by content changes or manual workflow dispatch
- Includes full build pipeline: content sync → Hugo build → Pagefind → CSS generation → deployment

## Important Files

- `hugo.toml`: Hugo configuration with dual theme setup
- `notion-site.yaml`: Notion sync configuration
- `package.json`: Build scripts and dependencies
- `tailwind.config.js`: Styling configuration with custom typography
- `.github/workflows/hugo.yaml`: Automated build and deployment pipeline

## Notes

- The site uses a dual theme approach for flexibility with Notion content
- All builds include search index generation and CSS compilation
- Content is automatically managed - avoid manual content directory modifications
- The repository uses submodules for theme management