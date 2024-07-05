import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name Required"],
    minlength: [5,"Name must contain atleast 5 charcters!"],
  },
  email: {
    type: String,
    required: [true, "Email Required"],
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  subject: {
    type: String,
    required: [true, "Subject Required"],
    minlength: [5,"Subject must contain atleast 5 charcters!"],
  },
  message: {
    type: String,
    required: [true, "Message  Required"],
    minlength: [5,"Message must contain atleast 5 charcters!"],
  },
});

const Message = mongoose.model('Message', messageSchema);

export default Message;