import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { styled } from '@mui/system';
import { useTheme } from '@mui/system';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'This is chart title',
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

export interface BarChartProps {
  x: any;
  y: any;
}

const StyledCard1 = styled('div')(({ theme }) => {
  return {
    '*': {
      backgroundColor: theme.palette.background.paper,
    },
  };
});

const BarChart = (props: BarChartProps) => {
  const theme = useTheme();

  const data = {
    labels: props.x,
    datasets: [
      {
        label: 'Dataset 1',
        data: props.y,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: props.y,
        backgroundColor: 'rgba(255, 99, 10, 0.5)',
      },
    ],
  };

  return (
    <div className="box-border flex flex-col w-full h-full relative overflow-y-auto overflow-x-auto">
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;
