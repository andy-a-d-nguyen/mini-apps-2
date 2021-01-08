import React from 'react';
import axios from 'axios';
import {Line} from 'react-chartjs-2';

const App = () => {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    axios.get('/price')
    .then(res => {
      setData({
        labels: Object.keys(res.data.bpi),
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: Object.values(res.data.bpi)
          }
        ]
      })
    })
    .catch(err => console.log(err))
  }, [])
  return (
    <div>
      {Object.keys(data).length ? <Line data={data}/> : 'Loading...'}
      <footer>Powered by <a href='https://www.coindesk.com/price/bitcoin' rel='noopener noreferrer' target='_blank'>CoinDesk</a></footer>
    </div>
  )
}

export default App;

