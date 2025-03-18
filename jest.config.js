/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
    '^.+\\.svg$': '<rootDir>/svgTransformer.js',
  },
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  setupFiles: ['./jest.polyfills.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  reporters: ['default', ['jest-junit', { outputDirectory: 'reports', outputName: 'report.xml' }]],

  moduleNameMapper: {
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@contexts/(.*)$': '<rootDir>/src/contexts/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@layouts/(.*)$': '<rootDir>/src/layouts/$1',
    '^@routers/(.*)$': '<rootDir>/src/routers/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
  },
};
