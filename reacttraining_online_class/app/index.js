let React = require('react');
let ReactDOM = require('react-dom');
require('./index.css');

// state
// lifecycle event
// UI

class App extends React.Component {
  render() {
    return (
      <div>Run it!</div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
