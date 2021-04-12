import React from 'react';


class Tutorial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  renderTerminal(content, isCommand) {
    if (isCommand) {
      return <span className={'terminal'}>&nbsp;>&nbsp;{content}</span>
    } else {
      return <span className={'terminal'}>{content.replace('<br/>', '\n')}</span>
    }
  }

  render() {
    return (
      <div id="documentation">
        <div id="documentation-content">
          <img src="https://avatars.githubusercontent.com/u/77829558?s=200&v=4" height="100px"/>
          <h1>Welcome to the Cryptosat tutorial</h1>
          <p>This tutorial will teach you how to use the Cryptosat API to communicate with our crypto-satellites.</p>
          <p>General information about the Cryptosat project is on <a href="https://www.cryptosat.io" target="_">www.cryptosat.io</a>.</p>
          <p>On the top right you will find a terminal interface that will allow to type commands to the satellite.
          On the bottom right is a visualization showing you the current position of the satellite.</p>
          <p>To get started type <code>status</code> into the terminal:</p>
          {this.renderTerminal('status', true)}
          <p> The output you receive will look something like this:</p>
          {this.renderTerminal('longitude: 123.1897\nlatitude: -75.12343\naltitude: 768128.334092')}
        </div>
        <div id="documentation-nav">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    )
  }
}

export default Tutorial;
