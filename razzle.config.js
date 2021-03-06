const path = require('path');

module.exports = {
    plugins: [
        {
            name: 'typescript',
            options: {
                useBabel: true,
                useEslint: true,
                forkTsChecker: {
                    tsconfig: './tsconfig.json',
                    tslint: undefined,
                    watch: './src',
                    typeCheck: true,
                },
            },
        },
        'eslint',
    ],
    modifyWebpackConfig: (config) => {
        const customConfig = { ...config.webpackConfig };
        customConfig.resolve['alias'] = {
            '@ui': path.resolve('./src/ui/'),
            '@core': path.resolve('./src/core/'),
            '@constants': path.resolve('./src/constants/'),
            '@pages': path.resolve('./src/pages/'),
            '@types': path.resolve('./src/types/'),
            '@features': path.resolve('./src/features/'),
            '@utils': path.resolve('./src/utils/'),
        };
        return customConfig;
    },
};
