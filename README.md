# complete-react-web-app-developer

## Start package.json

npm init

## Express

```npm install express@4 --save```

## Webpack

```sudo npm install -g webpack```

### Babel

```babeljs.io/repl```

## Devtools


```
$ npm install karma@0.13.22 karma-chrome-launcher@0.2.2 karma-mocha@0.2.2 karma-mocha-reporter@2.0.0 karma-sourcemap-loader@0.3.7 karma-webpack@1.7.0 mocha@2.4.5 expect@1.14.0 --save-dev
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