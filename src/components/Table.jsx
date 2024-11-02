import React from 'react';
import { formatter } from '../util/investment'; // Adjust the import path accordingly

function Table({ data }) {
  // Check if data is available to avoid errors
  
  
  
 if (data.length ===0  ) return null;

  return (
    <table id='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        { data.map((row) => (
          <tr key={row.year}>
            <td className='center'>{row.year}</td>
            <td className='center'>{formatter.format(row.valueEndOfYear)}</td>
            <td className='center'>{formatter.format(row.interest)}</td>
            <td className='center'>{formatter.format(row.totalInterest)}</td>
            <td className='center'>{formatter.format(row.investedCapital)}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
