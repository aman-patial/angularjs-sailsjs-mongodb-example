var PhoneBook= require('../../../api/models/Phonebook.js');

//Attribute Test
describe('PhoneBookModel', function () {

    it ('should check first name attribute', function () {

      if(!PhoneBook.attributes.firstname){
        throw "First Name Attribute Not Found";
      }
    });

    it ('should check last name attribute', function () {

      if(!PhoneBook.attributes.lastname){
        throw "Last Name Attribute Not Found";
      }

    });

    it ('should check phone number attribute', function () {

      if(!PhoneBook.attributes.phonenumber){
        throw "Phone Number Attribute Not Found";
      }

    });
});

