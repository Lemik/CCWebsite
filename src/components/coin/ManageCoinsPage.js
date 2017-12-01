import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as coinActions from '../../actions/coinActions';
import CoinForm from './CoinForm';
//import {authorsFormattedForDropdown} from '../../selectors/selectors';
//import toastr from 'toastr';

export class ManageCoinsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
        coin: Object.assign({}, props.coin),
        nominal: Object.assign({}, props.nominal),
        errors: {},
        saving: false
};
    this.updateCoinState = this.updateCoinState.bind(this);

}

updateCoinState(event) {
  const field = event.target.name;
  let coin = Object.assign({},this.state.coin)
  coin[field] = event.target.value;
  return this.setState({coin: coin});
}

render(){
  return(
        <CoinForm
          allNominals={this.props.nominal}
          onChange={this.updateCoinState}
          coin={this.state.coin}
          errors={this.state.errors}
          />
        );
       }
}



/*
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id != nextProps.course.id) {
      // Necessary to populate form when existing course is loaded directly.
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }



  courseFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.course.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }


  saveCourse(event) {
    event.preventDefault();

    if (!this.courseFormIsValid()) {
      return;
    }

    this.setState({saving: true});

    this.props.actions.saveCourse(this.state.course)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Course saved');
    this.context.router.push('/courses');
  }

  render() {
    return (
      <CourseForm
        allAuthors={this.props.authors}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        course={this.state.course}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}
*/
ManageCoinsPage.propTypes = {
   coin: PropTypes.object.isRequired,
   nominals: PropTypes.array.isRequired
//  actions: PropTypes.object.isRequired
};
/*
//Pull in the React Router context so router is available on this.context.router.
ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

function getCourseById(courses, id) {
  const course = courses.filter(course => course.id == id);
  if (course) return course[0]; //since filter returns an array, have to grab the first.
  return null;
}
*/
function mapStateToProps(state, ownProps) {
  let coin = {id: '', watchHref: '', title: '', year: '', nominal: '', description: '', imgA: '', imgB: ''};

  const nominalFormatForDropDown = state.nominals.map(nominal =>{ return{ value: nominal.id,
                                                                           text: nominal.value  };  });


return {
  coin: coin,
  nominal: nominalFormatForDropDown
};
}
  /*
  const courseId = ownProps.params.id; // from the path `/course/:id`

  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }

  return {
    course: course,
    authors: authorsFormattedForDropdown(state.authors)
  };
}
*/
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(coinActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoinsPage);
