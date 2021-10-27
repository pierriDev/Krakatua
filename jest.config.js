module.exports = {
  verbose: true,
  preset: 'react-native',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!react-native|react-navigation|@react-navigation/.*)/',
  ],
  testPathIgnorePatterns: [
    '__tests__/utils/*',
  ],
  setupFiles: ['<rootDir>/jest.setup.js'],
  globals: {
    __DEV__: true,
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    'native-base-theme/(.*)': '<rootDir>/native-base-theme/$1',
  },
  coverageReporters: ['clover', 'html'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/storybook/',
    '/native-base-theme/',
    '/babel.config.js',
    '/src/navigation/',
    '/src/common/types',
    '/src/styles',
    '/src/screens/support',
    '/src/screens/welcome',
    '/src/utils/localPersist',
    '/src/constants/endpoints.e2e.ts',
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 40,
      functions: 40,
      lines: 80,
    },
  },
};
