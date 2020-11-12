import mongoose from 'mongoose';

const pageSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  content: {
    type: String,
  },
});

const Page = mongoose.model('Page', pageSchema);

export default Page;
