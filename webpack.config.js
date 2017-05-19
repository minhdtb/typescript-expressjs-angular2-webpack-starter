module.exports = [
    {
        entry: __dirname + '/server/main.ts',
        target: 'node',
        externals: [
            /^[a-z\-0-9]+$/
        ],
        output: {
            filename: 'server.js',
            path: __dirname + '/build',
            libraryTarget: "commonjs"
        },
        resolve: {
            extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
        },
        module: {
            loaders: [
                {
                    test: /\.tsx?$/,
                    exclude: [__dirname + '/node_modules', __dirname + '/public'],
                    loader: 'ts-loader'
                }
            ]
        }
    },
    {
        entry: {
            'polyfills': __dirname + '/client/polyfills.ts',
            'vendor': __dirname + '/client/vendor.ts',
            'app': __dirname + '/client/main.ts'
        },
        target: 'web',
        externals: [
            /^[a-z\-0-9]+$/
        ],
        output: {
            path: __dirname + '/public/javascripts',
            filename: '[name].js',
            chunkFilename: '[id].chunk.js'
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        devtool: "source-map",
        module: {
            exprContextCritical: false,
            loaders: [
                {
                    test: /\.ts$/,
                    exclude: [__dirname + '/node_modules', __dirname + '/public'],
                    loaders: [
                        {
                            loader: 'awesome-typescript-loader',
                            options: {configFileName: __dirname + '/tsconfig.json'}
                        }, 'angular2-template-loader'
                    ]
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.css$/,
                    exclude: [__dirname + '/node_modules', __dirname + '/public'],
                    loader: 'css-loader'
                }
            ]
        }
    }
];