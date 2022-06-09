const path = require('path')

module.exports = {
    entry: path.resolve('index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve('dist')
    }
}