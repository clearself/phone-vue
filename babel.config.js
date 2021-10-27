module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                corejs: '3',
                useBuiltIns: 'entry'
            }
        ]
    ],
    plugins: [
        ['import', {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
        }, 'vant']
    ]
}
