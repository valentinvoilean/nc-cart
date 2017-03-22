### Installation

To get started, you can simply install it with npm or yarn:

```bash
npm install
yarn install
```


Basic Usage
===========

## Dev mode

```bash
npm run start-dev
```

## Prod mode
```bash
npm start
```

## Testing
```bash
npm test
```


Features
===========

1. Package.json
    1. Used "better-npm” for complex tasks
    2. created npm tasks:
        * npm start - compiles for prod
        * npm run start-dev - starts dev server and watches for any change
    3. Used Yarn to lock the dependencies
2. Webpack 2
    * different config files for dev / prod
    * chunks - vendors / main
    * added modules default path & aliases
    * added loaders for css, scss, fonts, images and pdf files
    * eslint
    * css modules - extract-text-plugin
    * Webpack dev server 2 - file watching and compiling in memory
        * hot module replacement plugin
        * enabled historyApiFallback —>  not necessary anymore /#/route; now can be used /route
3. Eslint
4. Folder structure - separated components by features
5. Redux
6. Immutable

