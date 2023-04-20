module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testRegex: '\\.spec\\.ts$',
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/__tests__/$1'
    }
  };
  