import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { fetchNewData, getAllEvents } from '../state/dataReducer';
import Chart from './Chart';

class App extends Component {

  async componentDidMount() {
    await this.props.getAllEvents();
  }

  render() {

    const handleFetchNewDataButtonClick = async () => {
      this.props.fetchNewData();
    };

    const handleGetEventsButtonClick = async () => {
      this.props.getAllEvents();
    };

    return (
      <div className='App'>
        <h1>Moiccu</h1>

        <Button className='fetch-new-event-button' variant='outlined' size='large' onClick={handleFetchNewDataButtonClick}>Fetch a new data point</Button>
        <Button variant='outlined' size='large' onClick={handleGetEventsButtonClick}>Get all events</Button>

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
  getAllEvents
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;