module.exports = {
   rootDir: ".",
   roots: ["."],
   moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@components/(.*)": "<rootDir>/src/components/$1",
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