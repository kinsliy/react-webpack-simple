module.exports={
	 entry:{
	 	 index:'./src/index/index.js'
	 },
	 output:{
	 	 filename:'./public/[name].js'
	 },
	 module: {
    loaders: [{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
   },
}