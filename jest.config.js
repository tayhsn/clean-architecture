module.exports = {
  roots: ["<rootDir>/src"],
  coverageDirectory: "coverage",
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  testeEnviroment: "node",
  transform: {
    ".+\\.ts$": "ts-jest"
  }
}
