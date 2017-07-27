import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
// Fixed this: (node:76367) DeprecationWarning:
// Mongoose: mpromise (mongoose's default promise library) is deprecated,
// plug in your own promise library instead: http://mongoosejs.com/docs/promises.html

mongoose.connect('mongodb://localhost/local', {
  useMongoClient: true
});

const articleSchema = {
  articleTitle: String,
  articleContent: String
}

const Article = mongoose.model('Article', articleSchema, 'articles');

const PublishingAppRoutes = [
  {
    route: 'articles.length',
    get: () => {
      return Article.count({}, (err, count) => count)
        .then((articleCountInDB) => {
          return {
            path: ['articles', 'length'],
            value: articleCountInDB
          }
        })
    }
  },
  {
    route: 'articles[{integers}]["id","articleTitle","articleContent"]',
    get: (pathSet) => {
      const articlesIndex = pathSet[1];

      return Article.find({}, (err, res) => res)
        .then((articlesArrayFromDB) => {
          let results = [];

          articlesIndex.forEach((index) => {
            const singleArticleObject = articlesArrayFromDB[index].toObject();
            const falcorSingleArticleResult = {
              path: ['articles', index],
              value: singleArticleObject
            }
            results.push(falcorSingleArticleResult);
          });

          return results;
        })
    }
  }
]

export default PublishingAppRoutes;
