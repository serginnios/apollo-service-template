module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 12 } }],
    '@babel/preset-typescript',
  ],
  sourceMaps: 'inline',
  retainLines: true,
  plugins: [
    [
      '@babel/plugin-proposal-object-rest-spread',
      { loose: true, useBuiltIns: true },
    ],
  ],
};
