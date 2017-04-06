import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as coinActions from '../../actions/coinActions';

class AddCoinPage extends React.Component {
  constructor(props, context){
    super(props,context);

    this.state = {
      coin:{title:""}
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }
onTitleChange(event){
  const coin = this.state.coin;
  coin.title = event.target.value;
  this.setState({ coin: coin });
}
onClickSave(){
  this.props.actions.addCoin(this.state.coin);
}
coinRow(coin, index){
  return <div key={index}> {coin.title}</div>;
}

  render() {
    return (
      <div>
        <h2>Coins</h2>
        {this.props.coin.map(this.coinRow)}
        <h2>Add Coin</h2>
        <input type="text"
        onChange={this.onTitleChange}
        value={this.state.coin.title}
        //class="form-control" id="exampleInputEmail1"
        placeholder="Enter title" />

        <input type="submit"
        value="Save"
        onClick={this.onClickSave}
        //class="form-control" id="exampleInputEmail1"
        />
      </div>
    );
  }
}

AddCoinPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(AddCoinPage);
