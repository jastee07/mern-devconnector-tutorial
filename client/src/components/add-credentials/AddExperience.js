import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
import { TextFieldGroup } from '../common/TextFieldGroup';
import { TextAreaFieldGroup } from '../common/TextAreaFieldGroup';
import PropTypes from 'prop-types';

class AddExperience extends Component {

    constructor(props){
        super(props);
        this.state =
    }

  render() {
    return (
      <div>
        <h1>Add Experience</h1>
      </div>
    )
  }
}

export default connect(mapStateToProps)(AddExperience);
