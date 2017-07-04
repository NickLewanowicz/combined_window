import Ember from 'ember';

export default Ember.Controller.extend({
  listData: [
    {
      'name': 'RP',
      'email': '99:99',
      'type': 'TA1',
      'location': '123 Sesame Street'
    },
    {
      'name': 'RG',
      'email': '99:99',
      'type': 'VFIRE',
      'location': '1243 Baker Ave'
    },
    {
      'name': 'FA',
      'email': '99:99',
      'type': 'BA4',
      'location': 'Nth Waterloo Road'
    },
    {
      'name': 'GA',
      'email': '99:99',
      'type': '6CO4',
      'location': '456 Malibu Terrace'
    },
    {
      'name': 'CA',
      'email': '99:99',
      'type': 'C6102',
      'location': '46 Oberon Street'
    }
  ],
  selectedContacts: [{'name': 'C200C', 'image': 'p.svg'},{'name': 'VTM1', 'image': 'f.jpg'}],
  computedChips: Ember.computed('selectedContacts', function() {
    let firstName = this.get('firstName'),
        lastName  = this.get('lastName');

    return firstName + ' ' + lastName;
  })
});
