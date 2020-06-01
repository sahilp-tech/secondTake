const functions = require('firebase-functions');
const app = require('express')();
const FBAuth = require('./util/fbAuth');    

const {getAllTakes, postOneTake, getTake, commentOnTake} = require('./handlers/takes')
const {signup, login, uploadImage, addUserDetails, getAuthenticatedUser} = require('./handlers/users');


//takes routes 
app.get('/takes', getAllTakes); //retreving all takes
app.post('/take', FBAuth, postOneTake); //posting a take
app.get('/take/:takeId', getTake);
app.post('/take/:takeId/comment', FBAuth, commentOnTake); //route to add comments 
//users routes
app.post('/signup', signup); //signup route
app.post('/login', login)//login route
app.post('/user/image', FBAuth, uploadImage) //route for users to upload thier image
app.post('/user', FBAuth, addUserDetails); // adding user details route
app.get('/user', FBAuth, getAuthenticatedUser);//retreving user data

exports.api = functions.https.onRequest(app); 