module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      require.resolve("babel-plugin-module-resolver"),
      {
        cwd: "babelrc",
        extensions: [
          ".ts",
          ".tsx",
          ".js",
          ".android.ts",
          ".android.tsx",
          ".android.js",
          ".ios.ts",
          ".ios.tsx",
          ".ios.js",
          ".web.ts",
          ".web.tsx",
          ".web.js",
        ],
        root: ["."],
        alias: {
          "@src": ["./src"],
          "@images": ["./src/images"],
          "@atom": ["./src/atom"],
          "@screens": ["./src/screens"],
          "@molecules": ["./src/molecules"],
        },
      },
    ],
    "jest-hoist",
  ],
};
