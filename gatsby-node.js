// Neocities doesn't support ".map" files, and we have no plans on supporting this codebase in production.
// So, this disables sourcemap generation
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === `build-javascript`) {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};
