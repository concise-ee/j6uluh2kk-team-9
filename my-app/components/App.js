import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './Header'
import {Christmas} from './Christmas'
import {getChristmas} from '../services/ChristmasService'
import Head from 'next/head'

class App extends Component {

  state = {
    christmas: {}
  }

  async componentDidMount() {
    let christmas = await getChristmas()
    console.log(christmas);
    this.setState({christmas: christmas})
  }

  render() {

    return (
      <div className="App">
        <Head>
          <title>MusicFairytales</title>
          <meta http-equiv="refresh" content="600" />
            <script type="text/javascript" src="/Build/unity.js"></script>
        </Head>

          <div id="unity-container" className="unity-desktop">
              <canvas id="unity-canvas" width="960" height="600"></canvas>
          <div id="unity-loading-bar">
              <div id="unity-logo"></div>
              <div id="unity-progress-bar-empty">
                  <div id="unity-progress-bar-full"></div>
              </div>
          </div>
          <div id="unity-warning"> </div>
          <div id="unity-footer">
              <div id="unity-webgl-logo"></div>
              <div id="unity-fullscreen-button"></div>
              <div id="unity-build-title">My project</div>
          </div>
      </div>
      </div>
    );
  }
}

export default App;