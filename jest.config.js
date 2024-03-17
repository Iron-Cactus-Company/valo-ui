export default {
    testEnvironment: "jsdom",
    moduleNameMapper: {
        ".(css|less|scss)$": "identity-obj-proxy",
    },


    clearMocks: true,

    collectCoverage: true,

    collectCoverageFrom: ["src/**"],

    coverageDirectory: "coverage",

    coveragePathIgnorePatterns: [
        "/node_modules/",
        "/stories/",
        "^.*\.stories\.tsx?$"
    ],
};

