const mongoose=require('mongoose')
 const Shema=mongoose.Shema

 const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: {
      type: String,
      required: true,
      match: /^[0-9]+$/
    },
    email: {
      type: String,
      required: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    password: {
      type: String,
      required: true,
      minlength: 7
    },
    role: { type: String, enum: ['adherent', 'admin'], default: 'adherent' }

  });
  
  const User = mongoose.model('user', UserSchema,'user');

module.exports = User;
 