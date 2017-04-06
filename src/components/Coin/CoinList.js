import React, {PropTypes} from 'react';
import CoinListRow from './CoinListRow';

const CoinList = ({coin}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>nominal</th>
        <th>mint</th>
        <th>year</th>
      </tr>
      </thead>
      <tbody>
      {coin.map(coin =>
        <CoinListRow key={coin.id} coin={coin}/>
      )}
      </tbody>
    </table>
  );
};

CoinList.propTypes = {
  coin: PropTypes.array.isRequired
};

export default CoinList;
