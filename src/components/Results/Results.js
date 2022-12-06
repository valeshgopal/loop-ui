import React from 'react';
import './Results.css';
import { items } from '../../data/data';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import GradeIcon from '@mui/icons-material/Grade';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Results = ({ value }) => {
  const [results, setResults] = React.useState(items);
  React.useEffect(() => {
    const filteredResults = items.filter(
      (item) =>
        +item.orderValue.split('$')[1] >= value[0] &&
        +item.orderValue.split('$')[1] <= value[1]
    );
    setResults(filteredResults);
  }, [value]);

  return (
    <div className='item-section'>
      <h3 className='page-results-heading'>
        Results<span> ({results.length})</span>
      </h3>

      <div className='item-grid'>
        {results.map((result) => {
          return (
            <div className='item-card'>
              <div className='item-header'>
                <p className='item-title'>{result.title}</p>
                <ChevronRightIcon fontSize='medium' />
              </div>
              <p className='item-restaurant'>{result.restaurant}</p>
              <img src={result.img} alt={result.img} className='item-img' />
              <table className='item-table'>
                <tr className='item-detail'>
                  <td>
                    <ReportProblemIcon fontSize='12px' />
                    <span>Error Rate</span>
                  </td>
                  <td>{result.errorRate}</td>
                  <td>{result.errorRate}</td>
                </tr>
                <tr className='item-detail'>
                  <td>
                    <DinnerDiningIcon fontSize='12px' />
                    <span>Dispatch</span>
                  </td>
                  <td>{result.dispatch}</td>
                  <td>{result.dispatch}</td>
                </tr>
                <tr className='item-detail'>
                  <td>
                    <ShoppingCartCheckoutIcon fontSize='12px' />
                    <span>Order Value</span>
                  </td>
                  <td>{result.orderValue}</td>
                  <td>{result.orderValue}</td>
                </tr>
                <tr className='item-detail'>
                  <td>
                    <LeaderboardIcon fontSize='12px' />
                    <span>Order Volume</span>
                  </td>
                  <td>{result.orderVolume}</td>
                  <td>{result.orderVolume}</td>
                </tr>
                <tr className='item-detail'>
                  <td>
                    <KeyboardReturnIcon fontSize='12px' />
                    <span>Retention</span>
                  </td>
                  <td>{result.retention}</td>
                  <td>{result.retention}</td>
                </tr>
                <tr className='item-detail'>
                  <td>
                    <GradeIcon fontSize='12px' />
                    Ratings
                  </td>
                  <td>{result.rating}</td>
                  <td>{result.rating}</td>
                </tr>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Results;
