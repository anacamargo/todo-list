# Webpack Template

A minimal Webpack 5 starter template with separate dev and production configurations, CSS support and asset handling.

## Repository

[github.com/anacamargo/webpack-template](https://github.com/anacamargo/webpack-template)

## What's included

- Webpack 5 with `webpack-merge` for shared configuration (`webpack.common.js`, extended by `webpack.dev.js` and `webpack.prod.js`)
- Separate `webpack.dev.js` and `webpack.prod.js` configs
- `HtmlWebpackPlugin` with HTML template
- CSS support via `style-loader` and `css-loader`
- Image and SVG asset handling via `asset/resource`
- Base CSS reset
- ES Modules (`"type": "module"`)
- ESLint and Prettier configured for linting and formatting

## Project Structure

```
webpack-template/
├── src/
│   ├── index.js
│   ├── styles.css
│   └── template.html
├── .gitignore
├── package.json
├── webpack.common.js
├── webpack.dev.js
└── webpack.prod.js
```

## Using this template

**1 — Create a new repository from this template**

Click **Use this template → Create a new repository** on GitHub.

**2 — Clone your new repository**

```bash
git clone https://github.com/your-username/your-project.git
cd your-project
```

**3 — Install dependencies**

```bash
npm install
```

**4 — Start the development server**

```bash
npm start
```

**5 — Build for production**

```bash
npm run build
```

## Available scripts

| Script                 | Description                                                       |
| ---------------------- | ----------------------------------------------------------------- |
| `npm start`            | Starts the dev server with `webpack.dev.js` and opens the browser |
| `npm run build`        | Builds the project for production with `webpack.prod.js`          |
| `npm run lint`         | Runs ESLint on the project                                        |
| `npm run lint:fix`     | Runs ESLint and automatically fixes issues                        |
| `npm run format`       | Formats the codebase with Prettier                                |
| `npm run format:check` | Checks formatting without making changes                          |
| `npm run check`        | Runs lint, format check, and build in sequence                    |

## License

MIT
