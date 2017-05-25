/**
 * Created by Kirk liu on 2017/5/25.
 */
var webpack = require('webpack')
var entry = require('./webpack.entry.conf.js');
var config = require('../config')
var HtmlWebpackPlugin = require('html-webpack-plugin')
//  添加插件
var plugins = [
  new webpack.DefinePlugin({
    'process.env': config.dev.env
  }),
  // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
];
/*//  提取公共文件
plugins.push(new webpack.optimize.CommonsChunkPlugin({name:'common','common-[hash].js'}));*/
//处理html
var pages = entry;
for(var chunkname in pages){
  var conf = {
    filename: chunkname+'.html',
    template: 'index.html',
    inject: true,
    title:pages[chunkname][1],
    minify: {
      removeComments: true,
      collapseWhitespace: false
    },
    chunks: ['common',chunkname],  //此处是载入提取的公共js，以及jade同名js
    hash: false
  };
  plugins.push(new HtmlWebpackPlugin(conf));
}
module.exports = plugins;
