module.exports = {
   rootDir: ".",
   roots: ["."],
   moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@config/(.*)": "<rootDir>/src/config/$1",
    "^@controllers/(.*)": "<rootDir>/src/api/controllers/$1",
    "^@errors/(.*)": "<rootDir>/src/api/errors/$1",
    "^@interfaces/(.*)": "<rootDir>/src/api/interfaces/$1",
    "^@models/(.*)": "<rootDir>/src/api/models/$1",
    "^@middleware/(.*)": "<rootDir>/src/api/middleware/$1",
    "^@routes/(.*)": "<rootDir>/src/api/routes/$1",
    "^@services/(.*)": "<rootDir>/src/api/services/$1",
    "^@utils/(.*)": "<rootDir>/src/api/utils/$1",
    "^@helpers/(.*)": "<rootDir>/src/api/helpers/$1",
    "^@validators/(.*)": "<rootDir>/src/api/validators/$1"
  },
  globals: {
      "ts-jest": {
          tsconfig: "tsconfig.json"
      }
  },
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
  moduleNameMapper: {
    "@src/(.*)": "<rootDir>/src/$1",
    "\\.(css|less|scss|sss|styl)$":
        "<rootDir>/node_modules/jest-css-modules",
  },
  transform: {
      "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testMatch: [
      "**/tests/**/*.test.(ts|js)",
      "**/tests/**/*.spec.(ts|js)"
  ],
  testPathIgnorePatterns: ["/node_modules/", "stories.tsx"],
  testEnvironment: "node"
};