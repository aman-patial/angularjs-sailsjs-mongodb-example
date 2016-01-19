
var PhonebookControllerTest = require('../../../api/controllers/PhonebookController.js');
var request = require('supertest');
var server = request.agent('http://localhost:1337');

//Test of PhoenbookControllers
describe('Phonebook Controller', function(){
  
    it('Create Controller', function(){

      if(!PhonebookControllerTest.create){
          throw "Create action in PhonebookController Not Found";
      }
    });

    it('DisplayAll Controller', function(){

      if(!PhonebookControllerTest.displayAll){
          throw "DisplayAll Controller Not Found";
      }
    });

   describe('Post /phonebook/create', function() {
    it('should respond with a 200 response code', function (done) {
        server
        .post('/phonebook/create')
        .set('Content-Type', 'application/json')
        .send({ firstname: 'Aman', lastname: 'Patial', phonenumber:'9900273410' })
        .expect(200, done);  
    }); 
  });

   describe('Get /phonebook/displayAll', function() {
    it('should respond with a 200 response code', function (done) {
        server
        .post('/phonebook/displayall')
        .set('Content-Type', 'application/json')
        .send() 
        .expect(200)      
        .end(function(err, res) {
                if (err) return done(err);
                done();
        });     
    }); 
  });

});

