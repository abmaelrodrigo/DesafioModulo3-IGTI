import React from 'react';
import css from './Installments/Installments.module.css';

export default function Forms({
  onChangeInitialValue,
  onChangeInterestRateValue,
  onChangeInstallmentsValue,
}) {
  const handleInitialValueChange = (event) => {
    const newValue = event.target.value;

    onChangeInitialValue(newValue);
  };

  const handleInterestRateChange = (event) => {
    const newRate = event.target.value;

    onChangeInterestRateValue(newRate);
  };

  const handleInstallmentsChange = (event) => {
    const newInstallment = event.target.value;

    onChangeInstallmentsValue(newInstallment);
  };
  return (
    <div className={css.input}>
      <div>
        <h6>Capital Inicial</h6>
        <input
          placeholder="0"
          type="number"
          onChange={handleInitialValueChange}
        />
      </div>
      <div>
        <h6>Taxa de juros mensal</h6>
        <input
          placeholder="0"
          type="number"
          step="0.1"
          onChange={handleInterestRateChange}
        />
      </div>
      <div>
        <h6>Período(meses)</h6>
        <input
          placeholder="0"
          type="number"
          onChange={handleInstallmentsChange}
        />
      </div>
    </div>
  );
}
