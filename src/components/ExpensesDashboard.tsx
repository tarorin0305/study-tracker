import { useEffect, useState } from 'react';
import { getRandomInt } from '../utils/fakeData'
import Form from './Form';
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

  const incomeItems = [
    { name: '本業', path: 'main'},
    { name: '副業', path: 'sub'},
  ]
  const outcomItems = [
    { name: '家賃', path: 'rents'},
    { name: 'ガス代', path: 'gases'},
    { name: '電気代', path: 'electricity'},
    { name: '水道代', path: 'water'},
    { name: 'ネット料金', path: 'internet'},
    { name: 'スマホ料金', path: 'smartphone'},
    { name: '保育料', path: 'nursery'},
    { name: '食費', path: 'food'},
    { name: '書籍代', path: 'books'},
    { name: '外食費', path: 'eating_out'},
  ]

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
            <Form title="収入" items={incomeItems}/>
          </div>
          <div className='input-outcome w-2/3 bg-red-300'>
            <Form title="支出" items={outcomItems}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpensesDashboard