module.exports = {
    extends: [
        'eslint-config-qiwi',
        'prettier',
        'prettier/@typescript-eslint',
    ],
    rules: {
        'no-use-before-define': 'off'
    }
};
