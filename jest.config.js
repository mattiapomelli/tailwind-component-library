module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/.storybook/'],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/__mocks__/svgrMock.ts',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
}
