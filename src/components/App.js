import React, { Component } from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { fetchNewData, getAllDataPoints } from '../state/dataReducer';
import Chart from './Chart';

class App extends Component {

  async componentDidMount() {
    await this.props.getAllDataPoints();
  }

  render() {
    const handleFetchNewDataButtonClick = async () => {
      this.props.fetchNewData();
    };

    const handleGetDataPointsButtonClick = async () => {
      this.props.getAllDataPoints();
    };

    return (
      <React.Fragment>
        <CssBaseline>
          <div className='app'>
            <Typography variant='h1' color='primary' gutterBottom={true}>
              Data visualization
            </Typography>

            <Typography variant='h4' paragraph color='textPrimary'>
              App for visualizing data.
            </Typography>
            <Typography variant='h5' paragraph color='textPrimary'>
              The server will fetch a new data point hourly<br />
              from a given API and save it to the database.<br />
              The data points are visualized on the chart below.
            </Typography>

            <Button className='button' variant='outlined' color='primary' size='large' onClick={ handleGetDataPointsButtonClick }>Update the chart</Button>
            <Button className='button' variant='outlined' color='primary' size='large' onClick={ handleFetchNewDataButtonClick }>Fetch a new data point manually</Button>

            <div className='chart-container'>
              <Typography variant='h2' color='primary' gutterBottom={true}>
                The Chart
              </Typography>
            </div>

            <Chart />
          </div>
        </CssBaseline>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fetchTime: state.data.fetchTime
  };
};

const mapDispatchToProps = {
  fetchNewData,
  getAllDataPoints
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;