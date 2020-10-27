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
        <input
          placeholder="0"
          type="number"
          //value={filter}
          onChange={handleInitialValueChange}
        />
      </div>
      <div>
        <input
          placeholder="0"
          type="number"
          //value={filter}
          onChange={handleInterestRateChange}
        />
      </div>
      <div>
        <input
          placeholder="0"
          type="number"
          //value={filter}
          onChange={handleInstallmentsChange}
        />
      </div>
    </div>
  );
}
