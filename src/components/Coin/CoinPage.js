import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as coinActions from '../../actions/coinActions';
import CoinList from './CoinList';
import {browserHistory} from 'react-router';

class CoinPage extends React.Component {
    constructor(props, context){
    super(props,context);
    this.redirectToAddCoinPage = this.redirectToAddCoinPage.bind(this);
  }
coinRow(coin, index){
  return <div key={index}>{coin.title}</div>;
}
redirectToAddCoinPage() {
  browserHistory.push('/coin');
}

  render() {
    const {coin} = this.props;

    return (
      <div>
        <h2>Show All Coins</h2>
        <input type="submit"
               value="Add Coin"
               className="btn btn-primary"
               onClick={this.redirectToAddCoinPage}/>
     <CoinList coin={coin}/>
      </div>
    );
}
}

CoinPage.propTypes = {
  coin: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired

};

function mapStateToProps(state, ownProps) {
  return {
    coin: state.coin
  };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(coinActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinPage);
