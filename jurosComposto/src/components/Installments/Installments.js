import React from 'react';
import Installment from './Installment';
import css from './Installments.module.css';

export default function Installments({ initialValue, finalValue }) {
  return (
    <div className={css.flexRow}>
      {finalValue.map((value, index) => {
        return (
          <div key={index}>
            <Installment
              initialValue={initialValue}
              installments={finalValue.length}
              finalValue={value}
              index={index}
            />
          </div>
        );
      })}
    </div>
  );
}
