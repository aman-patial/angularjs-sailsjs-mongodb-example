/**
 * PhonebookController
 *
 * @description :: Server-side logic for managing phonebooks
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

   /**
   * `PhonebookController.create()`
     /phonebook/create?firstname=aman&lastname=patial&phonenumber=9900273410
   */
  create: function (req, res, next) {

  	var firstname = req.param("firstname");
    var lastname = req.param("lastname");
    var phonenumber = req.param("phonenumber");
     
      // for debug purpose
    console.log("First Name:"+ firstname);
    console.log("Last Name:"+ lastname);
    console.log("Phone Number:"+ phonenumber);

    Phonebook.create({firstname: firstname, lastname: lastname, phonenumber: phonenumber}, 
    function phoneBookCreated(err, phonebook){
    	if (err){ // write implementation for err 
    		console.log("Inside err:" + err); 
    		return;
  		}
    	else {
           if (phonebook){   // phonebook implementation for response after insertion
             console.log("phonebook response:"+ phonebook.firstname);
             console.log("phonebook response:"+ phonebook.lastname);
             console.log("phonebook response:"+ phonebook.phonenumber);
             
             return res.json({ "status": "OK",
                    "successMessage": {
                      "code": "200",
                      "messageText": "Phonebook entry created succesfully!"
                    }
                  }, 200);;
            }  
    	}
	   		     
	  });
  },

  /**
   * `PhonebookController.display()`
     /phonebook/displayall
   */
  displayAll: function (req, res, next) {
   
   Phonebook.find(function foundPhoneBook(err, phonebooks) {
      if (err){
        return es.json (err);
      }
      else{
        if (phonebooks){
          console.log("Phonebooks list:" + phonebooks[0].phonenumber); 
          return res.json (phonebooks);
        }
      }
     
    });
   },

};

