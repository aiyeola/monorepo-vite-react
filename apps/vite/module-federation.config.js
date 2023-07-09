module.exports = {
  name: 'vite',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
