import React from 'react';

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
    <div>
      <input
        placeholder="0"
        type="number"
        //value={filter}
        onChange={handleInitialValueChange}
      />

      <input
        placeholder="0"
        type="number"
        //value={filter}
        onChange={handleInterestRateChange}
      />

      <input
        placeholder="0"
        type="number"
        //value={filter}
        onChange={handleInstallmentsChange}
      />
    </div>
  );
}
