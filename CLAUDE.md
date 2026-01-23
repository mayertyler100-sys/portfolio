# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website displaying projects loaded from a JSON file. Pure static site with no backend.

## Running the Application

```bash
python3 -m http.server 8000
# Open http://localhost:8000
```

## Adding Projects

Edit `projects.json` to add new projects:

```json
{
    "name": "Project Name",
    "description": "Brief description of the project",
    "tags": ["Tech1", "Tech2"],
    "demo": "https://demo-url.com",
    "github": "https://github.com/user/repo"
}
```

All fields except `name` and `description` are optional.

## Structure

- `index.html` - Main page structure
- `css/styles.css` - Light minimal theme
- `js/app.js` - Fetches and renders projects from JSON
- `projects.json` - Project data
