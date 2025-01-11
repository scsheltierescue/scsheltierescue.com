import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
  },
  {
    ignores: [
      '.astro/',
      'node_modules/',
      'dist/',
      'build/',
    ],
  },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      // Enforces getter/setter pairs in objects
      'accessor-pairs': 'error',

      // Enforces consistent spacing inside array brackets
      'array-bracket-spacing': ['error', 'never'],

      // Enforces usage of `return` statement in callbacks of array’s methods
      'array-callback-return': 'error',

      // Enforces the use of braces around arrow function body
      //   `as-needed`: enforces no braces where they can be omitted (default)
      //   `requireReturnForObjectLiteral`: requires braces and an explicit `return` for object literals.
      'arrow-body-style': ['error', 'as-needed', {
        requireReturnForObjectLiteral: true,
      }],

      // Requires parentheses around arrow function parameters regardless of arity
      'arrow-parens': ['error', 'always'],

      // Normalize the style of spacing before/after an arrow function’s arrow (`=>`)
      //   `before`: there should be one or more spaces before the arrow (`=>`)
      //   `after`: there should be one or more spaces after the arrow (`=>`)
      'arrow-spacing': ['error', {
        before: true,
        after: true,
      }],

      // Enforce spaces inside of blocks after opening block and before closing block
      //    `always`: requires one or more spaces (default)
      'block-spacing': 'error',

      // Enforces consistent brace style for blocks
      //   `1tbs`: one true brace (1tbs) style in which the opening brace of a block is placed on the same line as its corresponding statement or declaration
      //   `allowSingleLine`: disallows the opening and closing braces for a block to be on the same line
      'brace-style': ['error', '1tbs', {
        allowSingleLine: false,
      }],

      // Enforces using the camelcase approach for variable names
      //   `properties`: always require camelcase style for property names
      'camelcase': ['error', {
        properties: 'always',
      }],

      // Requires `return` statements to either always or never specify values
      'consistent-return': 'error',

      // Requires use of trailing commas when the last element is on a different line than the closing ] or }
      'comma-dangle': ['error', 'always-multiline'],

      // Enforces consistent spacing around commas in variable declarations, array literals, object literals, function parameters, and sequences
      //   `before`: disallows spaces before commas
      //   `after`: requires one or more spaces after commas
      'comma-spacing': ['error', {
        before: false,
        after: true,
      }],

      // Enforces consistent comma style in array literals, object literals, and variable declarations
      //   `last`: requires a comma after and on the same line as an array element, object property, or variable declaration
      'comma-style': ['error', 'last'],

      // Never omit curly braces around blocks, even when optional
      'curly': ['error', 'all'],

      // Require Default Case in Switch Statements
      'default-case': 'error',

      // Prevents the use of mixed newlines around the dot in a member expression
      //   `property`: the dot in a member expression should be on the same line as the property portion
      'dot-location': ['error', 'property'],

      // Enforce property access via dot notation style whenever possible
      //   `allowKeywords`: require using avoiding dot notation even for reserved keyword properties
      'dot-notation': ['error', {
        allowKeywords: true,
      }],

      // Enforces using type-safe equality operators (`===` and `!==`)
      //   `null`: do not apply this rule for the `null` literal
      'eqeqeq': ['error', 'always', {
        null: 'ignore',
      }],

      // Require newline at the end of files
      //    `always`: enforces that files end with a newline (LF) (default)
      'eol-last': ['error', 'always'],

      // Disallows spaces between the function name and the opening parenthesis
      'func-call-spacing': ['error', 'never'],

      // Require proper conditional guards when using `for in` loops
      'guard-for-in': 'error',

      // Enforces spacing around the `*` in generator functions
      //   `both`: enforce spacing between the `function` keyword and the `*` as well as between the `*` and the `function` name (or the opening parenthesis for anonymous generator functions)
      'generator-star-spacing': ['error', 'both'],

      // Enforce Callback Error Handling (Common JS)
      'handle-callback-err': ['error', '^(err|error)$'],

      // Enforces a consistent 2-space indentation style
      //   `SwitchCase`: enforce an indentation level of 1 for case clauses in switch statements
      'indent': ['error', 2, {
        SwitchCase: 1,
      }],

      // Enforces consistent spacing between keys and values in object literal properties
      //   `beforeColon`: disallow spaces between the key and the colon in object literals
      //   `afterColon`: require at least one space between the colon and the value in object literals
      //   `mode`: enforce one or more spaces before or after colons in object literals.
      'key-spacing': ['error', {
        beforeColon: false,
        afterColon: true,
        mode: 'minimum',
      }],

      // Enforce consistent spacing around keywords
      //   `before`: require at least one space before keywords
      //   `after`: require at least one space after keywords
      'keyword-spacing': ['error', {
        before: true,
        after: true,
      }],

      // Enforces a maximum number of statements allowed per line
      //   `max`: limit to 1 statement per line
      'max-statements-per-line': ['error', {
        max: 1,
      }],

      // Requires constructor names to begin with a capital letter
      //   `capIsNewExceptions`: allows `A` ([Ember Array](https://www.emberjs.com/api/classes/Ember.Array.html)) as a specified uppercase-started function name to be called without the new operator
      'new-cap': ['error', {
        // Capital variables that can be used without `new`
        'capIsNewExceptions': [
          'A', // Ember.A
        ],
      }],

      // Disallow use of Javascript `alert`
      'no-alert': 'warn',

      // Disallow `Array` constructors
      'no-array-constructor': 'error',

      // Disallow using the deprecated `arguments.caller` and `arguments.callee`
      'no-caller': 'error',

      // Disallow arrow functions where they could be confused with comparisons
      //   `allowParens`: warns even if the expression is wrapped in parenthesis
      'no-confusing-arrow': ['error', {
        allowParens: false,
      }],

      // Disallow the potentially dangerous and slow `eval()` function
      'no-eval': 'error',

      // Disallow unnecessary function binding
      'no-extra-bind': 'error',

      // Disallow floating decimal points whenever a numeric value has a decimal point but is missing a number either before or after it
      'no-floating-decimal': 'error',

      // Disallow implied `eval()` through the use of `setTimeout()`, `setInterval()` or `execScript()` when any of these functions are used with a string as the first argument
      'no-implied-eval': 'error',

      // Disallow usage of the `__iterator__` property, which is not implemented in several browsers
      'no-iterator': 'error',

      // Disallow functions in loops (`let` and `const` mitigate this problem)
      'no-loop-func': 'error',

      // Disallow unnecessary and potentially confusing nested blocks at the top level of a script or within other blocks
      'no-lone-blocks': 'error',

      // Disallow multiple whitespace around logical expressions, conditional expressions, declarations, array elements, object properties, sequences and function parameters
      'no-multi-spaces': 'error',

      // Disallow multiple empty lines in files to reduce the scrolling required when reading through code
      //   `max`: enforce a maximum number of 1 consecutive empty lines
      'no-multiple-empty-lines': ['error', {
        max: 1,
      }],

      // Disallow using the `Function` constructor
      'no-new-func': 'error',

      // Disallow usage of the wrapper object primitive types `String`, `Number`, and `Boolean` with the new operator
      'no-new-wrappers': 'error',

      // Disallow octal escape sequences in string literals
      'no-octal-escape': 'error',

      // Disallow the unary operators `++` and `--` to avoid potential automatic semicolon insertion bugs
      'no-plusplus': 'error',

      // Disallow using the deprecated `__proto__` property (use `getPrototypeOf()` instead)
      'no-proto': 'error',

      // Disallow `javascript:` URLs
      'no-script-url': 'error',

      // Disallow trailing whitespace (spaces, tabs, and other Unicode whitespace characters) at the end of lines
      //   `ignoreComments`: allows trailing whitespace in comment blocks
      'no-trailing-spaces': ['error', {
        ignoreComments: true,
      }],

      // Disallow redundant catch clauses which simply rethrow the original error
      'no-useless-catch': 'error',

      // Disallow unnecessary concatenation of 2 literals when they could be combined into a single literal
      'no-useless-concat': 'error',

      // Disallow ternary operators when simpler alternatives exist
      //   `defaultAssignment`: disallows the conditional expression as a default assignment pattern
      'no-unneeded-ternary': ['error', {
        defaultAssignment: false,
      }],

      // NOTE: This rule overrides `eslint:recommended`
      // Disallow unused variables, functions, and parameters of functions
      //   `vars`: checks all variables for usage, including those in the global scope
      //   `args`: do not check arguments
      //   `ignoreRestSiblings`: rest property siblings are ignored
      'no-unused-vars': ['error', {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: true,
      }],

      // Enforces the usages of `let` and `const` instead of `var`
      'no-var': 'error',

      // Disallow use of `void` operator
      'no-void': 'error',

      // Disallow `with` statements because it adds members of an object to the current scope, making it impossible to tell what a variable inside the block actually refers to
      'no-with': 'error',

      // Require consistent spacing inside braces of object literals, destructuring assignments, and import/export specifiers
      'object-curly-spacing': ['error', 'always'],

      // Enforce the use of the shorthand syntax for all methods defined in object literals and any properties defined where the key name matches name of the assigned variable
      'object-shorthand': ['error', 'always'],

      // Enforce multiple variable declarations per scope
      'one-var': ['error', 'never'],

      // Enforce a consistent linebreaks to be placed after the operator
      'operator-linebreak': ['error', 'after'],

      // Disallow padding within block statements
      'padded-blocks': ['error', 'never'],

      // Custom rules for padding between statements
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: '*', next: 'block-like' },
        { blankLine: 'always', prev: 'block-like', next: '*' },
        { blankLine: 'always', prev: ['const', 'let'], next: '*' },
        { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
      ],

      // Disallow `Function.prototype.apply()` in situations where the spread operator could be used instead
      'prefer-spread': 'error',

      // Enforce template literals instead of string concatenation
      'prefer-template': 'error',

      // Enforces the consistent use of single quotes
      //   `avoidEscape`: allows strings to use single-quotes or double-quotes so long as the string contains a quote that would have to be escaped otherwise
      //   `allowTemplateLiterals`: allows strings to use backticks
      'quotes': ['error', 'single', {
        avoidEscape: true,
        allowTemplateLiterals: true,
      }],

      // Require radix parameter to prevent the unintended conversion of a string to a number of a different base than intended
      'radix': 'error',

      // Requires semicolons at the end of statements
      'semi': ['error', 'always'],

      // Enforce consistent spacing around a semicolons which improves the readability of your program
      //   `before`: space is disallowed before semicolons
      //   `after`: space is enforced after semicolons
      'semi-spacing': ['error', {
        before: false,
        after: true,
      }],

      // Require spaces before blocks
      'space-before-blocks': ['error', 'always'],

      // Enforce consistent spacing before function definition opening parenthesis
      'space-before-function-paren': ['error', {
        'anonymous': 'always',
        'named': 'never',
        'asyncArrow': 'always',
      }],

      // Enforce zero spaces inside of parentheses
      'space-in-parens': ['error', 'never'],

      // Require spaces around infix operators
      'space-infix-ops': 'error',

      // Enforce consist spacing after `words` unary operators and after/before `nonwords` unary operators
      //   `words`: applies to unary word operators such as: `new`, `delete`, `typeof`, `void`, `yield`
      //   `nonwords`: applies to unary operators such as: `-`, `+,` `--`, `++,` `!,` `!!`
      'space-unary-ops': ['error', {
        words: true,
        nonwords: false,
      }],

      // Require whitespace (space or tab) beginning a comment
      //   `line.markers`: allow triple-slash directive comment style (`/// reference MyThing`)
      //   `line.exceptions`: allow the following comment style (`//-----------`)
      //   `block.balanced`: the `/*` must be followed by at least one whitespace, and the `*/` must be preceded by at least one whitespace
      //   `block.exceptions`: allow the following comment style as the first line of a block comment (`/**********`)
      //   `block.markers`: allow the following comment styles the first line of a block comment (`/*!`)
      'spaced-comment': ['error', 'always', {
        line: {
          markers: ['/'],
          exceptions: ['-', '+'],
        },
        block: {
          balanced: true,
          exceptions: ['*'],
          markers: ['!'],
        },
      }],

      // Enforce consistent style of conditions which compare a variable to a literal value. Yoda conditions happen when the literal value of the condition comes first while the variable comes second
      'yoda': 'error',
    },
  },
];
