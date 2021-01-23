/**
 * @fileoverview egrand
 * @author Simple
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const RuleTester = require('eslint').RuleTester
const rule = require('../../rules/egrand-standard-words')
const ruleTester = new RuleTester()

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

ruleTester.run('egrand-standard-words', rule, {
  valid: [
    {
      code: "var a = '新增'"
    }
  ],
  invalid: [
    {
      code: "var a = '新建'",
      errors: [
        {
          message: '使用的文案中有常见的错误用词：新建，请用 新增 代替'
        }
      ]
    }
  ]
})
