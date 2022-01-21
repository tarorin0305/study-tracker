import { useEffect, useState } from 'react';
import { getRandomInt } from '../utils/fakeData'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = [...Array(30)].map((_, i) => {
  let jstNow = new Date(Date.now() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000));
  jstNow.setDate(jstNow.getDate() - i)
  return `${jstNow.getMonth() + 1}/${jstNow.getDate()}`
}).reverse()

export const line_options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

export const h_bar_options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

export const grouped_bar_options = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

export const grouped_bar_data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => getRandomInt(-100, 100)),
      backgroundColor: 'rgba(255, 99, 132)',
      stack: 'Stack 0',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => getRandomInt(-100, 100)),
      backgroundColor: 'rgba(75, 192, 192)',
      stack: 'Stack 0',
    },
    {
      label: 'Dataset 3',
      data: labels.map(() => getRandomInt(-100, 100)),
      backgroundColor: 'rgb(53, 162, 235)',
      stack: 'Stack 1',
    },
  ],
};

// APIを叩いて以下のデータを取得
// 勉強科目
// 勉強したポモドーロ数
// 指定したグラフの色
// [
//   {
//     label: 'Distinction',
//     data: [1, 2, 1, 1, 0, 5, ...],
//     borderColor: 'rgb(255, 99, 132)',
//     backgroundColor: 'rgba(255, 99, 132, 0.5)',
//   },
//   {
//     label: 'Cambly',
//     data: [1, 2, 1, 1, 0, 5, ...],
//     borderColor: 'rgb(53, 162, 235)',
//     backgroundColor: 'rgba(53, 162, 235, 0.5)',
//   }
// ]

const ChartList = () => {
  const [studyRecords, setStudyRecords] = useState([])
  useEffect(()=> {
    const getStudyRecords = async () => {
      await fetch(`http://localhost:8000/api/study_records`, {mode: 'cors'})
        .then(res => res.json())
        .then(setStudyRecords)
    };
    getStudyRecords()
  }, [])
  const data = {
    labels,
    datasets: studyRecords,
  };

  return (
    <div className="chart-group w-3/4">
      <h2 className="text-3xl font-bold">チャート</h2>
      <ul className="max-w-[100%] grid grid-cols-2 gap-x-4 gap-y-4">
        <li className="col-start-1 col-end-3"><Line options={line_options} data={data} /></li>
        <li className=""><Bar options={h_bar_options} data={data} /></li>
        <li className=""><Bar options={grouped_bar_options} data={grouped_bar_data} /></li>
      </ul>
    </div>
  )
}

export default ChartList