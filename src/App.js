import React from 'react';
import './App.css';

class App extends React.Component {
  state = { err: '', output: '', input: '/* add your JSX here */' };

  update = e => {
    let code = e.target.value;
    try {
      this.setState({
        output: window.Babel
        .transform(code, { presets: ['es2015', 'react']})
        .code,
        err: ''
      })
    } catch(err) {
      this.setState({ err: err.message })
    }
  };

  render() {
    return (
      <div>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea 
            onChange={this.update}
            defaultValue={this.state.input}
          />
          <pre>
            {this.state.output}
          </pre>
        </div>
      </div>
    )
  }
}

export default App;