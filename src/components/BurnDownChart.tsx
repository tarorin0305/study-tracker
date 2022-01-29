import { useEffect, useState } from "react";
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
import { Line } from 'react-chartjs-2';

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

const BurnDownChart = () => {
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
      <h2 className="text-3xl font-bold">バーンダウンチャート</h2>
      <ul className="max-w-[100%] grid grid-cols-2 gap-x-4 gap-y-4">
      <li className="col-start-1 col-end-3"><Line options={line_options} data={data} /></li>
      </ul>
    </div>
  )
}

export default BurnDownChart