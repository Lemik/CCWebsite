import React, {PropTypes} from 'react';

const MintList = ({mint}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>id</th>
        <th>value</th>
        <th>description</th>
        <th>country</th>
      </tr>
      </thead>
      <tbody>
      {coin.map(mint =>
        <tr>
          <td><a href={mint.id} target="_blank">Watch</a></td>
          <td><Link to={'/mint/' + mint.id}>{mint.value}</Link></td>
          <td>{mint.description}</td>
          <td>{mint.country}</td>
        </tr>
      )}
      </tbody>
    </table>
  );
};

mintList.propTypes = {
  mint: PropTypes.array.isRequired
};

export default MintList;
