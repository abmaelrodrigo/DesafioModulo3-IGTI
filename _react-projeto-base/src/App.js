import React, { useEffect, useState } from 'react';
import Forms from './components/Forms';
import Installments from './components/Installments/Installments';
import css from './components/Installments/Installments.module.css';

export default function App() {
  const [initialValue, setInitialValue] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [installments, setInstallments] = useState(0);
  const [finalValue, setFinalValue] = useState([]);
  const newValue = [];
  useEffect(() => {
    const InterestCalc = () => {
      for (var i = 1; i <= installments; i++) {
        newValue.push(
          (initialValue * Math.pow(1 + interestRate / 100, i)).toFixed(2)
        );
        setFinalValue(newValue);
      }
    };
    InterestCalc();
    //setFinalValue(newValue);
  }, [initialValue, interestRate, installments]);

  const getInitialValue = (value) => {
    setInitialValue(value);
  };

  const getRate = (rate) => {
    setInterestRate(rate);
  };

  const getInstallments = (installment) => {
    setInstallments(installment);
  };

  return (
    <div>
      <h1 className={css.header}>Juros Compostos</h1>
      <div className={css.forms}>
        <Forms
          onChangeInitialValue={getInitialValue}
          onChangeInterestRateValue={getRate}
          onChangeInstallmentsValue={getInstallments}
        />
      </div>
      <div>
        <Installments initialValue={initialValue} finalValue={finalValue} />
      </div>
    </div>
  );
}
