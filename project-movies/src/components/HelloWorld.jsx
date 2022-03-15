import React, { Component } from 'react';

class HelloWorld extends Component {
  render(){

    const element = (
      <h1 className="hello-world">Hello Word</h1>
    );

    return (
      <div>
        {element}
        <p className="timeC">Turma 19 - Tribo C</p>
      </div>
    );
  }
}

export default HelloWorld;
