module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    content: ['./src/**/*.{vue,js,ts,jsx,tsx}', './src/App.vue'],
    corePlugins: {
        preflight: false,
        apply: true,
    },
    theme: {
        extend: {},
    },
    variants: {
    },
    plugins: [],
}
