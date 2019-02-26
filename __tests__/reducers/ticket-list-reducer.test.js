import TicketListReducer from '../../src/reducers/ticket-list-reducer';

describe('TicketListReducer', () => {

  test('should return default state if no action is specified', () => {
    expect(TicketListReducer({}, { type: null })).toEqual({});
  });



});
