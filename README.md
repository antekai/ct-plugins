# Plugins dashboard

[![E2E Test](https://github.com/antekai/ct-plugins/actions/workflows/playwright.yml/badge.svg)](https://github.com/antekai/ct-plugins/actions/workflows/playwright.yml)

View and manage locations

![Image](/docs/preview.jpg "preview")

## Table of Contents

- [Installation](#installation)
- [Description](#description)
- [Development](#development)

## Installation

1. Clone the repository to your local machine and install required dependencies

> ```shell
> git clone
> cd ct-plugins
> yarn install
> ```

## Description

This is a React single page app for managing plugins.

Features:

- View plugins per page
- Activate and deactivate plugins
- Enable and disable plugins
- Sync data with firebase realtime database

Technologies:

- Development server/tooling: [vite](https://vitejs.dev/guide/),
- (Async) State management: [react-query](https://tanstack.com/query/latest)
- UI/Styling: [antd](https://ant.design/), [antd-style](https://ant-design.github.io/antd-style)
- Testing: eslint, [playwright](https://playwright.dev/)
- Backend: [Firebase realtime database](https://firebase.google.com/docs/database)
- CI/CD: GitHub Actions, Netlify

Please check [Implementation docs](/docs/implementation.md) for more details

## Development

> ```shell
> yarn start # local development
> yarn lint # linting add --fix flag for automatic fixes
> yarn test # run tests
> yarn build # build app at folder /dist
> yarn preview # preview locally build files
> ```
