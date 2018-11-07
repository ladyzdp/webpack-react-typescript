import * as ReactDOM from 'react-dom';
import * as React from 'react';

export function Button (){
  const App = () => {
    return (
      <button type="button">
        <span>点击我</span>
      </button>
    );
  }
  ReactDOM.render(<App />, document.getElementById('content'));
}
