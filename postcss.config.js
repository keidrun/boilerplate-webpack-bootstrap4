const BROWSERS = ['last 2 versions'];

module.exports = {
  plugins: {
    'postcss-import': { stylelint: true },
    'postcss-easy-import': { glob: true },
    'postcss-simple-vars': true,
    'postcss-nested': true,
    'postcss-mixins': true,
    autoprefixer: { browsers: BROWSERS },
    'postcss-sorting': true,
    'postcss-reporter': {
      clearMessages: true,
      throwError: true
    }
  }
};
