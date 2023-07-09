# esop-planner #

## Requirements

Install nvm and use command `nvm use` to run using project level node version.

## Development

```
- `nvm use` to use project level node version
- `npm install` to install the dependencies
-  Replace masked environment variables in .env
-  npm run dev
```

### Tests

Tests are setup using [Jest](https://jestjs.io/) and [React testing Library](https://testing-library.com/docs/react-testing-library/intro/).
To run existing tests

```bash
    npm test
```

## Deployment

```bash
    npm run build
```

### Components

  - Move business logic to hooks, utils
  - Replace prop drilling with context, store or children props
  - Use translation

### GIT Branching

We will have a development brach(develop). For normal development and bug-fix flow, create branch from develop.
The branch name should be in the format `<#story-id>-<featurename>`, for example `123455-login-api`. The story-id is from the clickup.

### Conventional Commits

Commits should be in the form:
```bash
    git commit -m "scope:subject"
```

Where scope is as mentioned below
```
feat    : feature or enhancement
fix     : Bug fix
docs    : Addition or modification to documentation
test    : Addition or modification of tests
refactor: Code cleanup / refactoring which will not add any feature or fix any bug
build   : Changes to build process or scripts
perf    : Code change that improves performance
format  : code formatting and styling
```

  - Use present tense
  - Do not use dot at the end
  - Capitalize first letter. 

Here are a few practical examples:

```bash
    feat: Add breadcrumbs to employee list view
```

```bash
    fix: Update theme color as per figma
```
