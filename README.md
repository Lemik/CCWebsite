1. **Clone this repository.**
2. **Install Node Packages.** - `npm install`
3. **Run the app.** - `npm start -s`
This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, this command will continue watching files all your files. Every time you hit save the code is rebuilt, linting runs, and tests run automatically. Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.
4. **[Disable safe write](http://webpack.github.io/docs/webpack-dev-server.html#working-with-editors-ides-supporting-safe-write)** to assure hot reloading works properly.
5. **Install [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)** in Chrome.
6. Having issues? See below.

## Having Issues? Try these things first:
1. Run `npm install` - If you forget to do this, you'll see this: `babel-node: command not found`.
2. Make sure the path doesn't include any spaces, or install the latest version of eslint-watch which adds support for paths containing spaces: `npm install eslint-watch@2.1.13`
3. Make sure you're running the latest version of Node. Or, use [Node 5.12.0](https://nodejs.org/download/release/v5.12.0/) if you're having issues on Windows. Node 6 has issues on some Windows machines.
4. Make sure files with names that begin with a dot (.babelrc, .editorconfig, .eslintrc) are copied to the project directory root. This is easy to overlook if you copy this repository manually.
5. Don't run the project from a symbolic link. It will cause issues with file watches.
6. Use path.resolve on all path references in both the dev and prod webpack.config. [See this commit](https://github.com/coryhouse/pluralsight-redux-starter/commit/298848d4332d3bec9eb4e23592e710083acaf340) for an example.
7. Delete any .eslintrc in your user directory and disable any ESLint plugin / custom rules within your editor since these will conflict with the ESLint rules defined in the course.
8. Nothing above work? Delete your node_modules folder and re-run npm install.

###Production Dependencies
| **Dependency** | **Use** |
|----------|-------|
|babel-polyfill | Polyfill for Babel features that cannot be transpiled |
|bootstrap|CSS Framework|
|jquery|Only used to support toastr|
|react|React library |
|react-dom|React library for DOM rendering |
|react-redux|Redux library for connecting React components to Redux |
|react-router|React library for routing |
|react-router-redux|Keep React Router in sync with Redux application state|
|redux|Library for unidirectional data flows |
|redux-thunk|Async redux library|
|toastr|Display messages to the user|

###Development Dependencies
| **Dependency** | **Use** |
|----------|-------|
|babel-cli|Babel Command line interface |
|babel-core|Babel Core for transpiling the new JavaScript to old |
|babel-loader|Adds Babel support to Webpack |
|babel-plugin-react-display-name| Add displayName to React.createClass calls |
|babel-preset-es2015|Babel preset for ES2015|
|babel-preset-react| Add JSX support to Babel |
|babel-preset-react-hmre|Hot reloading preset for Babel|
|babel-register|Register Babel to transpile our Mocha tests|
|cheerio|Supports querying DOM with jQuery like syntax - Useful in testing and build process for HTML manipulation|
|colors|Adds color support to terminal |
|compression|Add gzip support to Express|
|cross-env|Cross-environment friendly way to handle environment variables|
|css-loader|Add CSS support to Webpack|
|enzyme|Simplified JavaScript Testing utilities for React|
|eslint|Lints JavaScript |
|eslint-plugin-import|Advanced linting of ES6 imports|
|eslint-plugin-react|Adds additional React-related rules to ESLint|
|eslint-watch|Add watch functionality to ESLint |
|eventsource-polyfill|Polyfill to support hot reloading in IE|
|expect|Assertion library for use with Mocha|
|express|Serves development and production builds|
|extract-text-webpack-plugin| Extracts CSS into separate file for production build |
|file-loader| Adds file loading support to Webpack |
|jsdom|In-memory DOM for testing|
|mocha| JavaScript testing library |
|nock| Mock HTTP requests for testing |
|npm-run-all| Display results of multiple commands on single command line |
|open|Open app in default browser|
|react-addons-test-utils| Adds React TestUtils |
|redux-immutable-state-invariant|Warn when Redux state is mutated|
|redux-mock-store|Mock Redux store for testing|
|rimraf|Delete files |
|style-loader| Add Style support to Webpack |
|url-loader| Add url loading support to Webpack |
|webpack| Bundler with plugin system and integrated development server |
|webpack-dev-middleware| Adds middleware support to webpack |
|webpack-hot-middleware| Adds hot reloading to webpack |





[map]: https://github.com/Lemik/CCWebsite/blob/master/Sitemap.png "Project map"
[isaac1]: https://github.com/Lemik/CCWebsite/blob/master/TEMP/Images/Canada/The%20War%20of%201812/canada_25c_2012_war_1812_isaac_brock.png "NO COLOR"
[isaac2]: https://github.com/Lemik/CCWebsite/blob/master/TEMP/Images/Canada/The%20War%20of%201812/canada_25c_2012_war_1812_isaac_brock_color.png "WITH COLOR"

# Coins Collection web site project map

![Project map][map]

#Image:

 * Background need to be removed in every image.
 * File format: .PNG
 * File Size:
 * dpi = 72 image size in main folder should be between 290px x 290px and 1000px x 1000px
 * in folder xhdpi - 96x96
 * in folder hdpi - 72x72
 * in folder mdpi - 48x48

 * Image name can contain only leters low case register, numbers and underscore( _ ). Do not use space or any other special characters

##Image need to be saved with name that is formated by following stracture

**country_nominal_year of production_collection name_coin name_attribut.png**

## Where:
 * country is canada
 * nominal can be:
 * 1c - for one cent
 * 5c - for 5 cent
 * 10c for 10 cent
 * 25c for 25 cent
 * 50c for 50 cent
 * 1 for loonie or 1 dollar
 * 2 for toonie or 2 dollars
 * year of production - is when coin has been reliased
 * collection name - is name for this collection
 * coin name - is name specific for this coin
 * attribut - need to be used if there is 2 coins that look the same but one with color one is without

![canada_25c_2012_1812_war_isaac_brock.png][isaac1]
![canada_25c_2012_1812_war_isaac_brock_color.png][isaac2]
##example:
**canada_25c_2012_1812_war_isaac_brock.png**
**canada_25c_2012_1812_war_isaac_brock_color.png**


#Spreadsheet:

Spreadsheet will have the following fields
 * title
 * year
 * mint
 * nominal
 * description
 * imgA
 * imgB

**only mint and description are not mandatory**

title
: can be coin name  
year
: is when coin has been relised
mint
: if coin has been produced by more then one mint. Than, there need to be two copies of the same coin in a spreadsheet with diferent mints (not common for Canada)
nominal can be:
 * 0.01 - for one cent
 * 0.05 - for 5 cent
 * 0.10 - for 10 cent
 * 0.25 - for 25 cent
 * 0.50 - for 50 cent
 * 1 - for loonie or 1 dolor
 * 2 - for toonie or 2 dolors
description
: nice to have, it is description of the coin. what is shown on it. should not be more than 300 characters
imgA
: this is image name saved in a required name format without .png
imgB
: this is image name saved in a required name format without .png

example:
https://docs.google.com/spreadsheets/d/1QBpd69iP_9vkoD_Ljc5iie7QfVZc0_MQG0MIN_ZnLTE/edit?usp=sharing
