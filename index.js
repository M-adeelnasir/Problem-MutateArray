var arr = [
  {
    'guest_type': 'crew',
    'first_name': 'Marco',
    'last_name': 'Burns',
    'guest_booking': {
      'room_no': 'A0073',
      'some_array': [7, 2, 4]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'John',
    'last_name': 'Doe',
    'guest_booking': {
      'room_no': 'C73',
      'some_array': [1, 3, 5, 2, 4, 3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Jane',
    'last_name': 'Doe',
    'guest_booking': {
      'room_no': 'C73',
      'some_array': [1, 3, 5, 2, 4, 3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Albert',
    'last_name': 'Einstein',
    'guest_booking': {
      'room_no': 'B15',
      'some_array': [2, 5, 6, 3]
    },
  },
  {
    'guest_type': 'crew',
    'first_name': 'Jack',
    'last_name': 'Daniels',
    'guest_booking': {
      'room_no': 'B15',
      'some_array': [2, 5, 6, 3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Alan',
    'last_name': 'Turing',
    'guest_booking': {
      'room_no': 'B15',
      'some_array': [2, 5, 6, 3]
    },
  },
];

function mutateArray(a) {

  return a.map(({ guest_type, first_name, last_name, guest_booking }) => (
    {
      guest_type,
      first_name,
      last_name,
      room_no: guest_booking?.room_no,
      some_total: guest_booking?.some_array?.reduce((a, c) => a + c) || 0
    }
  ))?.filter(guest => guest?.guest_type == "guest")?.sort((a, b) => {
    if (a.last_name === b.last_name) {
      if (a.first_name < b.first_name) return -1;
      if (a.first_name > b.first_name) return 1;
      return 0;
    } else {
      if (a.last_name < b.last_name) return -1;
      if (a.last_name > b.last_name) return 1;
      return 0;
    }
  });
}

$(document).ready(function () {
  $('#originalArray').html(JSON.stringify(arr, null, 2));
  $('#resultsArray').html(JSON.stringify(mutateArray(arr), null, 2));
});
