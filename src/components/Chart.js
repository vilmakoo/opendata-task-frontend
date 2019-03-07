import React, { Component } from 'react';
import ApexChart from 'react-apexcharts';
import { connect } from 'react-redux';
import { parseTime } from '../utils/parser';

class Chart extends Component {
  render() {
    const options = {
      yaxis: {
        seriesName: 'dataPoints',
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#662E9B',
        },
        labels: {
          style: {
            color: '#662E9B',
          }
        },
        tooltip: {
          enabled: true
        }
      },
      xaxis: {
        axisTicks: {
          show: false
        },
        tickPlacement: 'on',
        labels: {
          formatter: (value) => {
            if (typeof(value) === 'number') {
              return value;
            }
            return parseTime(new Date(value));
          }
        }
      },
      tooltip: {
        fixed: {
          enabled: true,
          position: 'topLeft',
          offsetY: 30,
          offsetX: 60
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40,
        showForNullSeries: false,
      }
    };

    const series = [
      {
        name: 'Sensor 1',
        type: 'line',
        data: (this.props.sensor1 ? this.props.sensor1.map(s => {
          return {
            x: s.date,
            y: s.data
          };
        }) : [])
      },
      {
        name: 'Sensor 2',
        type: 'line',
        data: (this.props.sensor2 ? this.props.sensor2.map(s => {
          return {
            x: s.date,
            y: s.data
          };
        }) : [])
      },
      {
        name: 'Sensor 3',
        type: 'line',
        data: (this.props.sensor3 ? this.props.sensor3.map(s => {
          return {
            x: s.date,
            y: s.data
          };
        }) : [])
      },
      {
        name: 'Sensor 4',
        type: 'line',
        data: (this.props.sensor4 ? this.props.sensor4.map(s => {
          return {
            x: s.date,
            y: s.data
          };
        }) : [])
      }];

    return (
      <div>
        <ApexChart className='chart' options={options} series={series} type='line' width='700px' />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sensor1: state.data.dataPoints.map(e => {
      return {
        date: e.date,
        data: e.sensor1
      };
    }),
    sensor2: state.data.dataPoints.map(e => {
      return {
        date: e.date,
        data: e.sensor2
      };
    }),
    sensor3: state.data.dataPoints.map(e => {
      return {
        date: e.date,
        data: e.sensor3
      };
    }),
    sensor4: state.data.dataPoints.map(e => {
      return {
        date: e.date,
        data: e.sensor4
      };
    })
  };
};

const ConnectedChart = connect(mapStateToProps)(Chart);

export default ConnectedChart;