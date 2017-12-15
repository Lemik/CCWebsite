import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mintActions from '../../actions/mintActions';
import MintForm from './MintForm';
import toastr from 'toastr';

export class ManageMintPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
        mint: Object.assign({}, props.mint),
        errors: {},

        saving: false,
        deleting:false
};
    this.updateMintState = this.updateMintState.bind(this);
    this.saveMint= this.saveMint.bind(this);
    //this.deleteCoin = this.deleteCoin.bind(this);

}

componentWillReceiveProps(nextProps) {
   if (this.props.mint.id != nextProps.mint.id) {
    // Necessary to populate form when existing course is loaded directly.
    this.setState({mint: Object.assign({}, nextProps.mint)});
  }
}

updateMintState(event) {
  const field = event.target.name;
  let mint = Object.assign({},this.state.mint);
  mint[field] = event.target.value;
  return this.setState({mint: mint});
}

/*coinFormIsValid() {
  let formIsValid = true;
  let errors = {};
  if (this.state.coin.title.length < 5) {
    errors.title = 'Title must be at least 1 characters.';
    formIsValid = false;
  }

  this.setState({errors: errors});
  return formIsValid;
}*/
saveMint(event) {
  event.preventDefault();

//  if (!this.coinFormIsValid()) {return;}

  this.setState({saving: true});
  this.props.actions.saveMint(this.state.mint)
    .then(() => this.redirect())
    .catch(error => {
      toastr.error(error);
      this.setState({saving: false});
    });
}
deleteMint(event) {
  event.preventDefault();

  this.setState({deleting: true});
  this.props.actions.saveMint(this.state.Mint)
    .then(() => this.redirect())
    .catch(error => {
      toastr.error(error);
      this.setState({deleting: false});
    });
}

redirect() {
  this.setState({saving: false});
  toastr.success('Mint saved');
  this.context.router.push('/list');
}

render(){
  return(
        <MintForm
          mint={this.state.mint}
          onSave={this.saveMint}
          onChange={this.updateMintState}
          saving={this.state.saving}
          errors={this.state.errors}
//          onDelete={this.deleteCoin}
        />
        );
       }
}
ManageMintPage.propTypes = {
   mint: PropTypes.object.isRequired,
   actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageMintPage.contextTypes = {
  router: PropTypes.object
};

function getMintById(mint, id) {
  const m = mint.filter(m => m.id == id);
  if (m) return m[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const mintId = ownProps.params.id; // from the path `/course/:id`
  let mint = {id: '', value: '', description: '', country: ''};

  if (mintId && state.mint.length > 0) {
      mint = getMintById(state.mint, mintId);
    }
return {
  mint: mint
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(mintActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageMintPage);
