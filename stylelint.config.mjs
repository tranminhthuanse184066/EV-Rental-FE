/** @type {import("stylelint").Config} */
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-tailwindcss',
    // 'stylelint-config-tailwindcss/scss',
  ],
  customSyntax: 'postcss-scss',
  ignoreFiles: ['node_modules/**/*', 'dist/**/*'],
};
