import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  clearMocks: true,
  preset: "ts-jest",
  roots: ['<rootDir>/test'],
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json'
    }
  }
};

export default config;
