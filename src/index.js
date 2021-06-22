import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

  state = { lat: null, errMessage: '' }

  // these will call once when the first render for the component is go.
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errMessage: err.message })
    )
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message='Please accept location request ..!' />;
  }

  render() {
    return (
      <Fragment>
        {this.renderContent()}
      </Fragment>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));