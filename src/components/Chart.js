import React, { Component } from 'react';
import ApexChart from 'react-apexcharts';
import { connect } from 'react-redux';

class Chart extends Component {
  render() {
    const options = {
      title: {
        text: 'Data Points',
        align: 'center',
        margin: 20,
        style: {
          fontSize:  '20px'
        }
      },
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
      // xaxis: {
      //   axisTicks: {
      //     show: true
      //   },
      //   tickPlacement: 'on'
      // },
      tooltip: {
        fixed: {
          enabled: true,
          position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
          offsetY: 30,
          offsetX: 60
        },
        // x: { formatter: (seriesName) => 'Year: ' + seriesName }
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
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
        <ApexChart options={options} series={series} type='line' width='700px' />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sensor1: state.data.dataPoints.map(e => {
      return {
        date: e.data.date,
        data: e.data.sensor1
      };
    }),
    sensor2: state.data.dataPoints.map(e => {
      return {
        date: e.data.date,
        data: e.data.sensor2
      };
    }),
    sensor3: state.data.dataPoints.map(e => {
      return {
        date: e.data.date,
        data: e.data.sensor3
      };
    }),
    sensor4: state.data.dataPoints.map(e => {
      return {
        date: e.data.date,
        data: e.data.sensor4
      };
    })
  };
};

const ConnectedChart = connect(mapStateToProps)(Chart);

export default ConnectedChart;