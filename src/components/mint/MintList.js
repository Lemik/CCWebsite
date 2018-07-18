import React, {PropTypes} from 'react';
import MintListRow from './MintListRow';

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
      {mint.map(mint =>
        <MintListRow key={mint.id} coin={mint}/>
      )}
      </tbody>
    </table>
  );
};

MintList.propTypes = {
  mint: PropTypes.array.isRequired
};

export default MintList;
