'use client';

import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';

const TasksChart = () => {
  const series = [
    {
      name: 'created',
      type: 'line',
      data: [55, 69, 45, 61, 43, 54, 37],
    },
    {
      name: 'completed',
      type: 'area',
      data: [44, 55, 31, 47, 31, 43, 26],
    },
  ];

  const options: ApexOptions = {
    title: {
      text: 'Statistics',
      style: {
        fontSize: '16px',
        fontWeight: 600,
        color: '#252727',
      },
    },
    subtitle: {
      text: 'tasks created vrs tasks completed',
      offsetY: 35,
      style: {
        fontSize: '0.7rem',
        color: 'rgb(156, 163, 175)',
      },
    },
    chart: {
      id: 'chart',
      toolbar: {
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
        },
      },
    },
    stroke: { show: true, curve: 'smooth' },
    colors: ['#252727', '#ff7a50'],
    legend: {
      horizontalAlign: 'left',
      markers: {
        width: 13,
        height: 2,
        offsetX: -1,
        offsetY: -3,
      },
    },
    xaxis: {
      categories: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
    },
  };

  return (
    <div className="col-span-4">
      <Chart options={options} series={series} type="line" height={300} />
    </div>
  );
};

export default TasksChart;
