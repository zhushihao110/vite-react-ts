module.exports = {
  arrowParens: 'avoid',
  singleQuote: true,
  tabWidth: 2,
  bracketSpacing: true,
  trailingComma: 'none',
  printWidth: 100,
  semi: false,
  overrides: [
    {
      files: '.prettierrc',
      options: { parser: 'typescript' },
    },
  ],
}
