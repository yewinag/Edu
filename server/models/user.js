var mongoose = require('mongoose');  
var userSchema = new mongoose.Schema({  
  name: String,
  email: String,
  password: String,
  created_at: Date
});
mongoose.model('User', userSchema);