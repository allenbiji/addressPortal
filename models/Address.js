import mongoose from 'mongoose';

const AddressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  name: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  district: { type: String, required: true },
  zipCode: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export default mongoose.model('address', AddressSchema);