# eslint-plugin-egrand-vue

> ESLint plugin for egrand.

:exclamation: Note this is an internal plugin/config for the development of egrand itself, not intended for public development.

## Usage

1. `npm install eslint-plugin-egrand-vue --save-dev`
2. create a file named `.eslintrc` in your project:

```js
{
  extends: ["plugin:egrand-vue/recommended"],
  rules: {
    // override if necessary
  }
}
```
## dependencies
```json
"@vue/eslint-config-standard": "^5.1.2",
"babel-eslint": "^10.1.0",
"eslint-plugin-import": "^2.22.1",
"eslint-plugin-node": "^11.1.0",
"eslint-plugin-promise": "^4.2.1",
"eslint-plugin-standard": "^5.0.0",
"eslint-plugin-vue": "^7.5.0"
```
## License

[MIT](http://opensource.org/licenses/MIT)
