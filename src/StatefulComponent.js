import React from 'react';
import Services from './Services';

class StatefulComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonText: "Click me and see what happens"
    };
  }

  addExclamation () {
    this.setState({
      buttonText: this.state.buttonText + "!"
    });
  }

  render() {
    return (
      <div>
      <button onClick={()=> {
        this.addExclamation();
      }}>
      {this.state.buttonText}
      </button>
      <Services />
      </div>
    )
  }
}

export default React.createElement(StatefulComponent);