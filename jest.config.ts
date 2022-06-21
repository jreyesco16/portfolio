// 'jest.config.ts' cannot be compiled under '--isolatedModules' because it is considered a global script file. 
// Add an import, export, or an empty 'export {}' statement to make it a module.
export {}

const nextJest = require('next/jest')

const createJestConfig = nextJest()
const customJestConfig = {
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '@testing-library/react'
  ]
}

module.exports = createJestConfig(customJestConfig)
