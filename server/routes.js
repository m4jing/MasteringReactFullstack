import configMongoose from './configMongoose';
import sessionRoutes from './routesSession';

const Article = configMongoose.Article;

const PublishingAppRoutes = [
  ...sessionRoutes,
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
