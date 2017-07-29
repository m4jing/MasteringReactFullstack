import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
// Fixed this: (node:76367) DeprecationWarning:
// Mongoose: mpromise (mongoose's default promise library) is deprecated,
// plug in your own promise library instead: http://mongoosejs.com/docs/promises.html

const conf = {
  hostname: process.env.MONGO_HOSTNAME || 'localhost',
  port: process.env.MONGO_PORT || 27017,
  env: process.env.MONGO_ENV || 'local'
};

mongoose.connect(`mongodb://${conf.hostname}:${conf.port}/${conf.env}`, {
  useMongoClient: true
});
// Fixed this: (node: 87969) DeprecationWarning:
// `open()` is deprecated in mongoose >= 4.11.0, use`openUri()` instead,
// or set the `useMongoClient` option if using `connect()` or `createConnection()`.
// See http://mongoosejs.com/docs/connections.html#use-mongo-client

const articleSchema = {
  articleTitle: String,
  articleContent: String
}
const userSchema = {
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  role: String,
  verified: Boolean,
  imageUrl: String
};

const Article = mongoose.model('Article', articleSchema, 'articles');
const User = mongoose.model('User', userSchema, 'pubUsers');

export default {
  Article,
  User
};
