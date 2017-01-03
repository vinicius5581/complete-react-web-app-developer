var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message!',
      another: 'another'
    };
  },
  render: function () {
    var title = this.props.title;
    var name = this.props.name;
    var message = this.props.message;
    var another = this.props.another;

    return (
      <div>
        <h1>{title}</h1>
        <h2>Hello {name}!</h2>
        <p>{message + '!!'}</p>
        <p>{another + '!! '  + this.props.message}</p>
      </div>
    );
  }
});

var firstName = 'Vini';

ReactDOM.render(
  <Greeter 
    title='Title' 
    name={firstName} 
    message={'sup'}
  />,
  document.getElementById('app')
);
