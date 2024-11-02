import React, { useState, useEffect } from 'react';
import Table from './Table';
import { calculateInvestmentResults } from '../util/investment'; 

function InputCard() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [annualInvestment, setAnnualInvestment] = useState(1200);
  const [expectedReturn, setExpectedReturn] = useState(6);
  const [duration, setDuration] = useState(10);



  // State to hold the investment results
  const [investmentResults, setInvestmentResults] = useState([]);

  // Handle input changes
  const handleChange = (event) => {
    const { id, value } = event.target;
    switch (id) {
      case 'initialInvestment':
        setInitialInvestment(value);
        break;
      case 'annualInvestment':
        setAnnualInvestment(value);
        break;
      case 'expectedReturn':
        setExpectedReturn(value);
        break;
      case 'duration':
        setDuration(value);
        break;
      default:
        break;
    }
  };

  // Update the investment results when inputs change
  useEffect(() => {
    if (
      initialInvestment &&
      annualInvestment &&
      expectedReturn &&
      duration
    ) {
      const results = calculateInvestmentResults({
        initialInvestment: Number(initialInvestment),
        annualInvestment: Number(annualInvestment),
        expectedReturn: Number(expectedReturn),
        duration: Number(duration),
      });

      setInvestmentResults(results);
    }
  }, [initialInvestment, annualInvestment, expectedReturn, duration]);

  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <div>
            <p>
            <label htmlFor="initialInvestment">Initial Investment</label>
            <input
              type="number"
              id="initialInvestment"
              value={initialInvestment}
              onChange={handleChange}
              required
            />
            </p>
          </div>
          <div>
            <p>
            <label htmlFor="annualInvestment">Annual Investment</label>
            <input
              type="number"
              id="annualInvestment"
              value={annualInvestment}
              onChange={handleChange}
              required
            />
            </p>
          </div>
        </div>
        <div className="input-group">
          <div>
            <p>
            <label htmlFor="expectedReturn">Expected Return</label>
            <input
              type="number"
              id="expectedReturn"
              value={expectedReturn}
              onChange={handleChange}
              required
            />
            </p>
          </div>
          <div>
            <p>
            <label htmlFor="duration">Duration</label>
            <input
              type="number"
              id="duration"
              value={duration}
              onChange={handleChange}
              required
              />
            </p>
          </div>
        </div>
      </div>

      {/* Pass the investment results to the Table component */}
      {duration && <Table data={investmentResults} />}
    </>
  );
}

export default InputCard;
