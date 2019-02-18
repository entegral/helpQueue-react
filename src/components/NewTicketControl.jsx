import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';

class NewTicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
  this.setState({formVisibleOnPage: true});
}

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = <NewTicketControl />;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
    }
    return (
      <React.Fragment>
        {currentlyVisibleContent}
      </React.Fragment>
    );
  }
}

export default NewTicketControl;
