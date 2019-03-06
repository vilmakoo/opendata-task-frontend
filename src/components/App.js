import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { fetchNewData, getAllDataPoints } from '../state/dataReducer';
import Chart from './Chart';

class App extends Component {

  async componentDidMount() {
    await this.props.getAllDataPoints();

    setInterval(() => this.props.fetchNewData, 3600000);
  }

  render() {
    const handleFetchNewDataButtonClick = async () => {
      this.props.fetchNewData();
    };

    const handleGetDataPointsButtonClick = async () => {
      this.props.getAllDataPoints();
    };

    return (
      <div className='App'>
        <h1>Data visualization</h1>

        <p>This app fetches a new data point from a given api every hour and adds it to the chart.</p>

        <p>These buttons are meant for developing:</p>
        <Button variant='outlined' size='large' onClick={handleFetchNewDataButtonClick}>Fetch a new data point</Button>
        <Button variant='outlined' size='large' onClick={handleGetDataPointsButtonClick}>Get all data points</Button>

        <h1>Charts</h1>

        <Chart />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = {
  fetchNewData,
  getAllDataPoints
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;