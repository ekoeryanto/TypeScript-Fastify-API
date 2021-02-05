import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  moduleFileExtensions: [
    'ts',
    'js',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: [
    '**/__tests__/**/*.test.(ts|js)',
  ],
  testEnvironment: 'node',
};

export default config;
