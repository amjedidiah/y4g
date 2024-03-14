#
<!-- TODO: Add app name -->

<!-- TODO: add Codacy badge -->

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Next.js starter app with some sauce
<!-- TODO: App description here  -->

## Table of Content

- [Project Info](#project-info)
- [Quick Start](#quick-start)
- [License](#license)

## Project Info

<!-- TODO: remove -->
### Changes

- Codacy setup
- Enabled experimental https feature on `dev` script
- [Webhint](https://webhint.io/) config file. Requires installation of Webhint VS Code extension
- Specifying node version: 18.19.1 in `.nvmrc` file
- Prettier config `.prettierrc` file. Requires installation of Prettier VS Code extension
- License file
- Million.js for improved performance. Requires installation of Million Lint VS Code extension
- `lint:dev` script to fix errors on dev
- util `cn` function for merging and conditional class names using `tailwind-merge` and `clsx`
- husky to lint and confirm successful build before pushing
- planning document
- setup inter as default font using Tailwind and next/font
- modified path alias config in `tsconfig.json`
- deepscan setup for code quality. Requires installation of Deepscan VSCode extension
- cleaned unused files and styles
- `icons.tsx` for svg files
- PR template
- Added comments where I need to make changes

### How It Works

Search for all instances of `todo` and update to get started
<!-- TODO: Info about how it works here -->

### Why this project?

To make it faster to get started building Next.js applications
<!-- TODO: Info about why this project -->

### App Architecture

This application is built using Next.js 14 app router.
Application’s code is structured and organized in a logical way, and components are modular and reusable.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load the Google Fonts used.
It also uses Tailwind CSS for styling.

> Node version used: v.18.19.1

## Quick Start

> Please make sure you're using Node v.18.19.1 on this project to avoid any issues

### Installation

<!-- TODO -->
```bash
# git clone https://github.com/amjedidiah/todo
# cd todo
yarn
yarn dev
```

Open <https://localhost:3000> with your browser to see the result.

### Usage

Refer to [How It Works](#how-it-works)

## License

<!-- TODO -->
<!-- This copy of `Resume Tailor` is Copyright (c) 2024 <app_name> Technologies. -->
It may be redistributed under the terms specified in the [LICENSE file](LICENSE)
