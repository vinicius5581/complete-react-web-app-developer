var GreeterMessage = React.createReactClass({
  render: function(){
    var name = this.props.name;
    var message = this.props.msg;

    return (
      <h1>Hello You</h1>
      <p>Cool message</h1>
    );
  }
});