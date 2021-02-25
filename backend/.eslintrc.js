module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "jest": true
    },
    "parser": "@typescript-eslint/parser",
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "@typescript-eslint/camelcase": [
            "off"
        ],
        "@typescript-eslint/explicit-function-return-type": [
            "off"
        ],
        "@typescript-eslint/no-explicit-any": [
            "off"
        ],
        "@typescript-eslint/no-var-requires": [
            "warn"
        ],
        "indent-legacy": [
            "warn",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "rest-spread-spacing": [
            "error"
        ],
        "no-trailing-spaces": [
            "error"
        ],
        "no-unused-vars": [
            "error",
            {
                "vars": "all",
                "args": "none"
            }
        ],
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 1
            }
        ],
        "no-multi-spaces": [
            "error",
            {
                "ignoreEOLComments": true
            }
        ],
        "max-len": [
            "warn",
            {
                "code": 100
            }
        ]
    }
}