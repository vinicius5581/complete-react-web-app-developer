# complete-react-web-app-developer

## Start package.json

```sh
npm init
```


## Webpack Global

```sh
sudo npm install -g webpack@1.12.13

webpack -h
```

## Dependencies - Run local & in production

### Express

```sh
npm install express@4 --save
```

### React & React DOM

```sh
npm install --save react@0.14.7 react-dom@0.14.7
```

## DevDependencies - Local dependencies for development only

```sh
npm install --save-dev webpack@1.12.13 babel-core@6.5.1 babel-loader@6.2.2 babel-preset-es2015@6.5.0 babel-preset-react@6.5.0
```

## Devtools

```sh
$ npm install karma@0.13.22 karma-chrome-launcher@0.2.2 karma-mocha@0.2.2 karma-mocha-reporter@2.0.0 karma-sourcemap-loader@0.3.7 karma-webpack@1.7.0 mocha@2.4.5 expect@1.14.0 --save-dev
```

# Webpack Fun :)

```sh
webpack ./origin ./destination

webpack ./app/app.js ./public/bundle.js
```

# Module export & Require

```sh
/* ./app/components/Greeter.js */

function greeter () {
	document.write('From greeter function');
}

module.exports = greeter;
```

```sh
/* ./app/app.js */

var greeter = require('../public/components/Greeter');

greeter();
```

# webpack.config.js

## Basics
```sh
module.exports = {
  entry: './public/app.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
```

## Run
```sh
$ webpack
```

## Adding loader 'babel-loader' (Should be on package.json)
module.exports = {
  entry: './public/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};

# Babel

```sh
babeljs.io/repl
```

## React Components

 - Presentation components 
 -- Don't maintain state
 -- Dummy components 
 -- Call functions when user interacts

 - Container components
 -- Maintain state
 -- Automatically rerender childs when it's states changes and the children rely on it


## Parent componet handling an event fro a child

When we have a parent component that is handling an event from a child, you usually call the parent handle followed by the name you choose and then you call in the child with on followed by the name you choose.

```
<Component onNewData={this.handleNewData}/>
```

```
var ChildComponent = React.createClass({
	onFormSubmit: function(e){
		e.preventDefault();
		var data = this.refs.data.value;
		this.props.onNewData(data);
	},
	render: function(){
		return(
			<form onSubmit={this.onFormSubmit}>
				<input type="text" ref="data"/>
				<button>Set Data</button>
			</form>
		);
	}
});


var ParentComponent = React.createClass({
	handleNewData: function(data){
		this.setState({
			data: data
		});
	},
	render: function(){
		<ChildComponet onNewData={this.handleNewData}/>
	}
});
```



 

## Common functions

```
ReactDom.render(
	<h1>Hello React!</h1>,
	document.getElementById('app')
);
```

```
var Greeter = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Hello React!</h1>
			</div>
		);
	}
});

ReactDom.render(
	<Greeter/>,
	document.getElementById('app')
);

```