# Mastering React Fullstack

An application using React full-stack technologies.

## 1. Technologies used

* [React](http://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [Express](http://expressjs.com/)
* [Falcor](https://github.com/Netflix/falcor)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](http://mongoosejs.com/)

## 2. Prerequisites

1. Install MongoDB

Please refer to: <https://docs.mongodb.com/manual/installation/#tutorial-installation>

2. Import data to MongoDB

```bash
mongoimport --db local --collection articles --jsonArray initData.js --host=127.0.0.1
```

3. Install dependencies

```bash
npm install
```

## 3. Usage

```bash
mongod
npm start
```

Then, go to <http://localhost:3000/>
