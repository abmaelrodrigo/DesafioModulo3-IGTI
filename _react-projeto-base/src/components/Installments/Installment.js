import React from 'react';
import { formatMoney, formatPercentage } from '../helpers/format';
import css from './Installments.module.css';

export default function Installment({
  initialValue,
  installments,
  finalValue,
  index,
}) {
  let moneyColor = '';
  let percentageColor = '';
  //  style={{ color: '#16a085', fontWeight: 'bold' }}

  if (finalValue - initialValue < 0) {
    moneyColor = 'red';
    percentageColor = 'orange';
  } else {
    moneyColor = 'green';
    percentageColor = 'blue';
  }

  return (
    <div className={css.installment}>
      <div className={css.index}>{index + 1} </div>
      <div>
        <ul>
          <li style={{ color: moneyColor, fontWeight: 'bold' }}>
            {' '}
            {formatMoney(finalValue)}
          </li>
          <li style={{ color: moneyColor, fontWeight: 'bold' }}>
            {formatMoney(finalValue - initialValue)}
          </li>
          <li style={{ color: percentageColor, fontWeight: 'bold' }}>
            {formatPercentage(
              ((finalValue - initialValue) * 100) / initialValue
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

//className={css.flexRow}
//style={{ display: 'flex', backgroundColor: 'blue' }}
