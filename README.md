# complete-react-web-app-developer

## Start package.json

```sh
npm init
```

## Express

```sh
npm install express@4 --save
```

## Webpack

```sh
sudo npm install -g webpack
```

### Babel

```sh
babeljs.io/repl
```

## Devtools


```sh
$ npm install karma@0.13.22 karma-chrome-launcher@0.2.2 karma-mocha@0.2.2 karma-mocha-reporter@2.0.0 karma-sourcemap-loader@0.3.7 karma-webpack@1.7.0 mocha@2.4.5 expect@1.14.0 --save-dev
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