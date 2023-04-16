module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        'standard-with-typescript'
        // "plugin:vue/vue3-strongly-recommended"
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: '@typescript-eslint/parser', // 新增
        project: ['tsconfig.json'], // 新增
        extraFileExtensions: ['.vue'], // 新增
    },
    plugins: [
        'vue'
    ],
    parser: 'vue-eslint-parser', // 新增
    rules: {
        // 不用显示的标注函数返回值
        "@typescript-eslint/explicit-function-return-type": "off",
        // 组件不强制用多个单词组成
        'vue/multi-word-component-names': 0,
    }
}
