module.exports = {
    // Other Webpack configurations can go here if needed.
    ignoreWarnings: [
      {
        module: /@mediapipe\/tasks-vision/, // Suppress warnings for @mediapipe/tasks-vision
        message: /Failed to parse source map/, // Suppress specific source map warnings
      },
    ],
  };