import Plot from 'react-plotly.js';
import Home from './Home';

function MyPlot() {
  const profitData = [
    {
      x: ['Revenue', 'Expenses', 'Net Profit'],
      y: [20000, 12000, 8000],
      type: 'bar',
      marker: { color: ['blue', 'red', 'green'] },
      width: [0.4, 0.4, 0.4],
    },
  ];

  const layout = {
    width: 700,
    height: 400,
    title: 'Company Profit and Loss',
    xaxis: { title: 'Categories' },
    yaxis: { title: 'Amount (USD)' },
  };

  return (
    <>
    <Home/>
    <div className='text-center'>
      <Plot data={profitData} layout={layout} />
    </div>
    </>
  )
}

export default MyPlot