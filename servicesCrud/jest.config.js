module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  verbose: true,
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 89,
      lines: 95,
      statements: 95,
    },
  },
};
