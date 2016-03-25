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
    //console.log("First Name:"+ firstname);
    //console.log("Last Name:"+ lastname);
    //console.log("Phone Number:"+ phonenumber);

    Phonebook.create({firstname: firstname, lastname: lastname, phonenumber: phonenumber}, 
    function phoneBookCreated(err, phonebook){
    	if (err){ // write implementation for err 
    		console.log("Inside err:" + err); 
    		return;
  		}
    	else {
           if (phonebook){   
             return res.json({ "status": "OK",
                    "successMessage": {
                      "code": "200",
                      "messageText": "Phone contact is created succesfully!"
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

   delete: function (req, res, next) {
   
       var phno = req.param('phonenumber');
       if(!phno) return res.badRequest('No phonenumber is provided.');

       Phonebook.findOne({phonenumber: phno}).exec(function(err, result) {
        //console.log(result);
        if(err) return res.serverError(err);
        if(!result) res.notFound(); 
  
       Phonebook.destroy({phonenumber: phno}).exec(function (err){
          if (err) {
            return res.negotiate(err);
          }
          sails.log('Deleted phonebook with mobile number ' + phno);
          return res.ok();
        });
      });

   },

};

