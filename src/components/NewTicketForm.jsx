import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewTicketForm (props) {

  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event){
    event.preventDefault();
    props.onNewTicketCreation({names: _names.value, location: _location.value, issue: _issue.value, id: v4()});
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }

  const inputStyle = {
    display: 'block',
    margin: '10px',

  };

  return (
    <div>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          style={inputStyle}
          type='text'
          id='names'
          placeholder='Pair Names'
          ref= {(input) => {_names = input;}} />
        <input
          style={inputStyle}
          type='text'
          id='location'
          placeholder='Location'
          ref= {(input) => {_location = input;}}/>
        <textarea
          style={inputStyle}
          id='issue'
          placeholder='Describe your issue.'
          ref = {(textarea) => {_issue = textarea;}}/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;
