import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  clearMocks: true,
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  preset: 'ts-jest'
};

export default config;
