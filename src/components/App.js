import React, { Component } from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { fetchNewData, getAllDataPoints } from '../state/dataReducer';
import Chart from './Chart';
import { parseTime } from '../utils/parser';

class App extends Component {

  async componentDidMount() {
    await this.props.getAllDataPoints();

    setInterval(() => {
      console.log('fetching new data at', new Date());
      this.props.fetchNewData();
    }, 3600000);
  }

  render() {
    // used for developing:
    // const handleFetchNewDataButtonClick = async () => {
    //   this.props.fetchNewData();
    // };

    // const handleGetDataPointsButtonClick = async () => {
    //   this.props.getAllDataPoints();
    // };

    return (
      <React.Fragment>
        <CssBaseline>
          <div className='app'>
            <Typography variant='h1' color='primary' gutterBottom={true}>
            Data visualization
            </Typography>

            <Typography variant='h4' paragraph color='textPrimary'>
            This is an app that fetches a new data point<br />
            from a given API every hour<br />
            and visualizes the data in a chart.
            </Typography>

            {/* <p>These buttons are meant for developing:</p>
            <Button variant='outlined' size='large' onClick={ handleFetchNewDataButtonClick }>Fetch a new data point</Button>
            <Button variant='outlined' size='large' onClick={ handleGetDataPointsButtonClick }>Get all data points</Button> */}

            <div className='chart-container'>
              <Typography variant='h2' color='primary' gutterBottom={true}>
            The Chart
              </Typography>
              <div className='fetch-time'>
                <Typography paragraph className='fetch-time-p' color='textPrimary'>Last data point was fetched at:</Typography>
                <Card className='fetch-time-card'>
                  <CardContent className='fetch-time-content'>
                    <Typography variant='subtitle2' color='textPrimary'>
                      { parseTime(this.props.fetchTime) }
                    </Typography>
                  </CardContent>
                </Card>
              </div>
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