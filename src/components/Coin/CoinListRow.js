import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CoinListRow = ({coin}) => {
  return (
    <tr>
      <td><a href={coin.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/coin/' + coin.id}>{coin.title}</Link></td>
      <td>{coin.nominal}</td>
      <td>{coin.year}</td>
      <td>{coin.mint}</td>
    </tr>
  );
};

CoinListRow.propTypes = {
  coin: PropTypes.object.isRequired
};

export default CoinListRow;
