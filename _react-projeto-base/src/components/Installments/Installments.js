import React from 'react';
import Installment from './Installment';
import css from './Installments.module.css';

export default function Installments({ initialValue, finalValue }) {
  return (
    <div className={css.flexRow}>
      {finalValue.map((value) => {
        return (
          <div key={finalValue.indexOf(value)}>
            <Installment
              initialValue={initialValue}
              installments={finalValue.length}
              finalValue={value}
              index={finalValue.indexOf(value)}
            />
          </div>
        );
      })}
    </div>
  );
}

/*style={{
  margin: '50px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
}}*/
