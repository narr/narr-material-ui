module.exports = {
  printWidth: 80, // Specify the length of line that the printer will wrap on.
  tabWidth: 2, // Specify the number of spaces per indentation-level.
  useTabs: false, // Indent lines with tabs instead of spaces.
  semi: true, // Print semicolons at the ends of statements.
  singleQuote: true, // Use single quotes instead of double quotes.
  /**
   * Print trailing commas wherever possible.
   * Valid options:
   *   - none - no trailing commas
   *   - es5 - trailing commas where valid in ES5 (objects, arrays, etc)
   *   - all - trailing commas wherever possible (function arguments)
   */
  trailingComma: "es5",
  bracketSpacing: true, // Print spaces between brackets in object literals.
  /**
   * Do not print spaces between brackets.
   * If true, puts the > of a multi-line jsx element at the end of the last line instead of being
   * alone on the next line
   */
  jsxBracketSameLine: false,
  arrowParens: "avoid", // Include parentheses around a sole arrow function parameter.
};
