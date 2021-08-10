const mongoose = require('mongoose');

const { NOTES_APP_MONGODB_DATABASE, NOTES_APP_MONGODB_USER, NOTES_APP_MONGODB_PASSWORD } = process.env;
const MONGODB_URI = `mongodb+srv://${NOTES_APP_MONGODB_USER}:${NOTES_APP_MONGODB_PASSWORD}@clusternotes.qjyfs.mongodb.net/${NOTES_APP_MONGODB_DATABASE}?retryWrites=true&w=majority`;

mongoose.connect(MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));