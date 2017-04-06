import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as coinActions from '../../actions/coinActions';
import CoinList from './CoinList';

class CoinPage extends React.Component {
  constructor(props, context){
    super(props,context);

  }
coinRow(coin, index){
  return <div key={index}> {coin.title}</div>
    ;
}

  render() {
    const {coin} = this.props;

    return (
      <div>
        <h2>Show All Coins</h2>
     <CoinList coin={coin}/>
      </div>
    );
}
}

CoinPage.propTypes = {
  actions: PropTypes.object.isRequired,
  coin: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    coin: state.coin
  };
}

function mapDispatchToProps(dispatch) {
  return {
      //addCoin:coin=>dispatch(coinActions.addCoin(coin))
      actions: bindActionCreators(coinActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinPage);
