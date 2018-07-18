import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as coinActions from '../../actions/coinActions';
import CoinForm from './CoinForm';
import {nominalFormattedForDropdown} from '../../selectors/selectors';
import toastr from 'toastr';

export class ManageCoinsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
        coin: Object.assign({}, props.coin),
        nominal: Object.assign({}, props.nominal),
        errors: {},

        saving: false,
        deleting:false
};
    this.updateCoinState = this.updateCoinState.bind(this);
    this.saveCoin= this.saveCoin.bind(this);
    this.deleteCoin = this.deleteCoin.bind(this);

}

componentWillReceiveProps(nextProps) {
   if (this.props.coin.id != nextProps.coin.id) {
    // Necessary to populate form when existing course is loaded directly.
    this.setState({coin: Object.assign({}, nextProps.coin)});
  }
}

updateCoinState(event) {
  const field = event.target.name;
  let coin = Object.assign({},this.state.coin);
  coin[field] = event.target.value;
  return this.setState({coin: coin});
}

coinFormIsValid() {
  let formIsValid = true;
  let errors = {};
  if (this.state.coin.title.length < 5) {
    errors.title = 'Title must be at least 1 characters.';
    formIsValid = false;
  }

  this.setState({errors: errors});
  return formIsValid;
}
saveCoin(event) {
  event.preventDefault();

  if (!this.coinFormIsValid()) {return;}

  this.setState({saving: true});
  this.props.actions.saveCoin(this.state.coin)
    .then(() => this.redirect())
    .catch(error => {
      toastr.error(error);
      this.setState({saving: false});
    });
}
deleteCoin(event) {
  event.preventDefault();

  this.setState({deleting: true});
  this.props.actions.saveCoin(this.state.coin)
    .then(() => this.redirect())
    .catch(error => {
      toastr.error(error);
      this.setState({deleting: false});
    });
}

redirect() {
  this.setState({saving: false});
  toastr.success('Coin saved');
  this.context.router.push('/list');
}

render(){
  return(
        <CoinForm
          allNominals={this.props.nominal}
          onChange={this.updateCoinState}
          onSave={this.saveCoin}
          coin={this.state.coin}
          errors={this.state.errors}
          saving={this.state.saving}
          onDelete={this.deleteCoin}/>
        );
       }
}
ManageCoinsPage.propTypes = {
   coin: PropTypes.object.isRequired,
   nominal: PropTypes.array.isRequired,
   actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageCoinsPage.contextTypes = {
  router: PropTypes.object
};

function getCoinById(coins, id) {
  const coin = coins.filter(coin => coin.id == id);
  if (coin) return coin[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const coinId = ownProps.params.id; // from the path `/course/:id`
  let coin = {id: '', watchHref: '', title: '', year: '', nominal: '', description: '', imgA: '', imgB: ''};
  //const nominalFormatForDropDown = state.nominal.map(nominal =>{ return{ value: nominal.id,
  //
  if (coinId && state.coin.length > 0) {
      coin = getCoinById(state.coin, coinId);
      //text: nominal.value
    }
return {
  coin: coin,
  nominal: nominalFormattedForDropdown(state.nominal)
};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(coinActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoinsPage);
