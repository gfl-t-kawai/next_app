import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.json' }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
  ],
};

export default config;
