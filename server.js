const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    //.connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Connect DB Done!'));

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Nama Tidak Boleh Kosong'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 5.4,
  },
  price: {
    type: Number,
    required: [true, 'Harga Tidak Boleh Kosong'],
  },
});

const Tour = mongoose.model('Tour', tourSchema);

const testTour = new Tour({
  name: 'Pantai Harlem Supa',
  rating: 4.9,
  price: 549,
});

testTour
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log('Eror:', err);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
