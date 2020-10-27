import React, { useEffect, useState } from 'react';
import Forms from './components/Forms';
import Installments from './components/Installments/Installments';

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
    console.log('valor ' + newValue);
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
      Juros Compostos
      <Forms
        onChangeInitialValue={getInitialValue}
        onChangeInterestRateValue={getRate}
        onChangeInstallmentsValue={getInstallments}
      />
      <Installments
        initialValue={initialValue}
        installments={installments}
        finalValue={finalValue}
      />
    </div>
  );
}
