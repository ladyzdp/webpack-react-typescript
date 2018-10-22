
import React from 'react';
import Reactdom from 'react-dom';

export default class Index {
  constructor() {
    const App = () => {
      return (
        <div>
          <h3>Our Application Is Alive</h3>
          <p>This isn’t reality. This — is fantasy.</p>
          <p>Yes I am quoting Star Trek I cant help it.</p>
        </div>
      );
    }
    Reactdom.render(<App />, document.getElementById('content'));
  }
}


// console.log(ReactDOM);
console.log(React);
