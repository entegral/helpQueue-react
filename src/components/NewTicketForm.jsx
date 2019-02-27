import React from 'react';
import { v4 } from 'uuid';
import { connect } from 'react-redux';

function NewTicketForm (props) {

  let _names = null;
  let _location = null;
  let _issue = null;

  
  function handleNewTicketFormSubmission(event){
    event.preventDefault();
    const { dispatch } = props;
    const action = {
      type: 'ADD_TICKET',
      names: _names.value,
      location: _location.value,
      issue: _issue.value,
      id: v4(),
    };
    dispatch(action);
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

export default connect()(NewTicketForm);
