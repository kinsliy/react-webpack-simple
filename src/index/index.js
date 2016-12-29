import React from 'react';
import ReactDom from 'react-dom';


var Greet = React.createClass({
   render() {
   	  return <h1> {this.props.name}</h1>
   }
})

 ReactDom.render(
    <Greet name='kinsliy'/>,
    document.getElementById('example')
 )