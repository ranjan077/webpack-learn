module.exports = {
  setupFiles: ['<rootDir>/src/tests/setup.js'],
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|scss|jpeg)$': 'identity-obj-proxy',
  },
};
