/**
* Phonebook.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	 firstname:{
        type:"string", 
        required:true,
        minLength: 2
      },
     lastname:{
        type:"string",
        required:true
      },
     phonenumber: {
        type: 'integer',
        required:true,
        unique: true
           
     },

  }
};

