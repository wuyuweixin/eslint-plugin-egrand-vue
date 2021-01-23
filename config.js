module.exports = {
  extends: [
    "plugin:vue/essential",
    "@vue/standard"
  ],
  plugins: ['egrand-vue'],

  parserOptions: {
    parser: require.resolve('babel-eslint'),
    ecmaVersion: 2017,
    sourceType: 'module'
  },

  env: {
    es6: true,
    node: true
  },

  globals: {
    document: false,
    navigator: false,
    window: false
  },

  rules: {
    "prefer-template": "error",
    "no-var": "error",
    "no-unused-vars": "error",
    "space-before-function-paren": [
      "error",
      "never"
    ],
    "vue/script-indent": [
      "error",
      2,
      {
        "baseIndent": 1
      }
    ],
    "vue/v-bind-style": [
      "error",
      "shorthand"
    ],
    "vue/prop-name-casing": [
      "error",
      "camelCase"
    ],
    "vue/attribute-hyphenation": [
      "error",
      "always",
      {
        "ignore": []
      }
    ],
    "vue/html-quotes": [
      "error",
      "double",
      {
        "avoidEscape": false
      }
    ],
    "vue/html-self-closing": [
      "error",
      {
        "html": {
          "void": "always",
          "normal": "never",
          "component": "always"
        },
        "svg": "always",
        "math": "always"
      }
    ],
    "vue/no-spaces-around-equal-signs-in-attribute": [
      "error"
    ],
    "vue/mustache-interpolation-spacing": [
      "error",
      "always"
    ],
    "vue/v-on-style": [
      "error",
      "shorthand"
    ],
    "vue/v-slot-style": [
      "error",
      {
        "atComponent": "shorthand",
        "default": "shorthand",
        "named": "shorthand"
      }
    ],
    "vue/padding-line-between-blocks": [
      "error",
      "always"
    ],
    "vue/component-tags-order": [
      "error",
      {
        "order": [
          "template",
          "script",
          "style"
        ]
      }
    ],
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        "registeredComponentsOnly": false,
        "ignores": [
          "uploader",
          "/^uploader-/"
        ]
      }
    ],
    "vue/html-closing-bracket-newline": [
      "error",
      {
        "singleline": "never",
        "multiline": "never"
      }
    ],
    "vue/html-closing-bracket-spacing": [
      "error",
      {
        "startTag": "never",
        "endTag": "never",
        "selfClosingTag": "never"
      }
    ],
    "vue/no-multi-spaces": [
      "error",
      {
        "ignoreProperties": false
      }
    ],
    "vue/arrow-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "vue/array-bracket-spacing": [
      "error",
      "never"
    ],
    "vue/block-spacing": [
      "error",
      "always"
    ],
    "vue/object-curly-spacing": [
      "error",
      "always"
    ],
    "vue/key-spacing": [
      "error",
      {
        "beforeColon": false
      }
    ],
    "vue/space-unary-ops": [
      "error",
      {
        "words": true,
        "nonwords": false
      }
    ],
    "vue/space-infix-ops": "error",
    "vue/this-in-template": [
      "error",
      "never"
    ],
    "vue/no-dupe-keys": [
      "error",
      {
        "groups": []
      }
    ],
    "vue/order-in-components": [
      "error",
      {
        "order": [
          "el",
          "name",
          "parent",
          "functional",
          [
            "delimiters",
            "comments"
          ],
          [
            "components",
            "directives",
            "filters"
          ],
          "extends",
          "mixins",
          [
            "provide",
            "inject"
          ],
          "ROUTER_GUARDS",
          "inheritAttrs",
          [
            "props",
            "propsData"
          ],
          "data",
          "computed",
          "watch",
          "LIFECYCLE_HOOKS",
          "methods",
          [
            "template",
            "render"
          ],
          "renderError"
        ]
      }
    ],
    "vue/prefer-template": "error",
    "vue/template-curly-spacing": [
      "error",
      "never"
    ],
    "vue/comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "vue/func-call-spacing": [
      "error",
      "never"
    ],
    "vue/no-unused-properties": [
      "error",
      {
        "groups": [
          "props",
          "data"
        ]
      }
    ],
    "vue/no-useless-mustaches": [
      "error",
      {
        "ignoreIncludesComment": false,
        "ignoreStringEscape": false
      }
    ],
    "vue/no-lone-template": [
      "error",
      {
        "ignoreAccessible": false
      }
    ],
    "vue/no-mutating-props": "error",
    "vue/no-useless-v-bind": [
      "error",
      {
        "ignoreIncludesComment": false,
        "ignoreStringEscape": false
      }
    ]
  }
}
