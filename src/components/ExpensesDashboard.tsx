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
  maintainAspectRatio: true,
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

const ExpensesDashboard = () => {
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
      <div className='dashboard-container bg-purple-200 max-w-[100%]'>
        <div className="line-chart-container">
          <Line options={line_options} data={data} />
        </div>
        <div className='summary-container w-full flex bg-red-300'>
          <div className='summary-1 w-1/2 bg-blue-200'>
            <p className='pt-2'>合計収入額: {1+1}</p>
            <p className='pt-2'>合計支出額: {1+1}</p>
            <p className='pt-2'>合計損益額: {1+1}</p>
          </div>
          <div className='summary-2 w-1/2 bg-green-300'>
            <p className='pt-2'>合計投資額: {1+1}</p>
            <p className='pt-2'>合計キャッシュ貯金額: {1+1}</p>
          </div>
        </div>
        
        <div className='input-area-container w-full flex mt-4'>
          <div className='input-income w-1/3 bg-yellow-200'>
            <p>収入</p>
            <form action="" className='pt-2'>
              <label>
                本業:
                <input type="number" className='ml-2 border border-cyan-300 rounded' />
              </label>
            </form>
            <form action="" className='pt-2'>
              <label>
                副業:
                <input type="number" className='ml-2 border border-cyan-300 rounded'/>
              </label>
            </form>
          </div>
          <div className='input-outcome w-2/3 bg-red-300'>
            <p>支出</p>
            <form action="" className='pt-2'>
              <label>
                家賃:
                <input type="number" className='ml-2 border border-cyan-300 rounded' />
              </label>
            </form>
            <form action="" className='pt-2'>
              <label>
                ガス代:
                <input type="number" className='ml-2 border border-cyan-300 rounded'/>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpensesDashboard