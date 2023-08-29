// eslint-disable-next-line no-undef
module.exports = {
    verbose: true,
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "jsx"],
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest",
    },
    moduleNameMapper: {
        "\\.(css|less)$": "identity-obj-proxy",
    },
};
