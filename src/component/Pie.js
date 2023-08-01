import Plot from 'react-plotly.js';
import Home from './Home';

const Pie = () => {

    const profitData = [
        {
          labels: ['Revenue', 'Expenses', 'Net Profit'],
          values: [20000, 12000, 8000],
          type: 'pie',
          marker: { colors: ['#2ecc71', '#e74c3c', '#3498db'] },
        },
      ];
    
      const layout = {
        width: 700,
        height: 400,
        title: 'Company Profit and Loss (in percentage)',
      };


  return (
    <div className='text-center'>
        <Home/>
      <Plot data={profitData} layout={layout} />
    </div>
  )
}

export default Pie