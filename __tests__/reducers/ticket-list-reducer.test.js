import ticketListReducer from '../../src/reducers/ticket-list-reducer';
import { v4 } from 'uuid';

describe('ticketListReducer', () => {

  let action;
  const sampleTicket = {
    names: 'Someone and Someone Else',
    location: 'Somewhere over the rainbow',
    issue: 'There\'s a snake in my boot!',
    id: v4()
  };

  test('should return default state if no action is specified', () => {
    expect(ticketListReducer( {}, {type: null} )).toEqual( {} );
  });

  test('should add a new ticket to the current list of active tickets', () => {
    const { names, location, issue, id } = sampleTicket;
    action = {
      names: names,
      location: location,
      issue: issue,
      type: 'ADD_TICKET',
      id: id
    };
    expect(ticketListReducer( {}, action )).toEqual( {[id] : sampleTicket} );
  });

});
