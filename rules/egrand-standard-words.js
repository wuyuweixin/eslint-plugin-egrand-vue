/**
 * @fileoverview egrand
 * @author Simple
 */
'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const wrong2RightWordsMap = {
  新建: {
    regexp: /新建/,
    replace: '新增'
  }
}

const wrongWords = Object.keys(wrong2RightWordsMap)

module.exports = {
  meta: {
    docs: {
      description: 'egrand',
      recommended: false
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      {
        type: 'object',
        properties: {
          ignore: {
            type: 'array'
          }
        },
        additionalProperties: false
      }
    ]
  },

  create(context) {
    // variables should be defined here
    const defaultOptions = {
      ignore: []
    }
    const options = Object.assign(defaultOptions, context.options[0])

    const ignore =
      options.ignore.map(entry => ({
        name: entry,
        regex: new RegExp(entry)
      })) || []
    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------
    function isIgnored(name) {
      return ignore.findIndex(entry => name === entry.name || entry.regex.test(name)) !== -1
    }

    function checkIsWrongWord(node) {
      for (let i = 0; i < wrongWords.length; i++) {
        const wrongWord = wrongWords[i]
        const regexp = wrong2RightWordsMap[wrongWord].regexp
        if (typeof node.value === 'string' && !isIgnored(wrongWord) && regexp.test(node.value)) {
          return wrongWord
        }
      }
    }

    return {
      // give me methods
      Literal(node) {
        const wrongWord = checkIsWrongWord(node)
        if (wrongWord) {
          context.report({
            node,
            // eslint-disable-next-line eslint-plugin/prefer-placeholders
            message: `使用的文案中有常见的错误用词：${wrongWord}，请用 ${wrong2RightWordsMap[wrongWord].replace} 代替`
          })
        }
      }
    }
  }
}
