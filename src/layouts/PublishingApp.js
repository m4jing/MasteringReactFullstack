import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import Rx from 'rx';

import falcorModel from '../falcorModel';
import articleActions from '../actions/article';

const mapStateToProps = (state) => ({
  ...state
});
const mapDispatchToProps = (dispatch) => ({
  articleActions: bindActionCreators(articleActions, dispatch)
});

class PublishingApp extends Component {
  constructor(props) {
    super(props);
  }
  // state = {  }
  componentWillMount() {
    this._fetch();
  }
  async _fetch() {
    const articleLength = await falcorModel.getValue('articles.length').then((length) => length);

    const articles = await falcorModel.get([
      'articles',
      {from: 0, to: articleLength - 1},
      ['id', 'articleTitle', 'articleContent']
    ]).then((articlesResponse) => articlesResponse.json.articles);

    this.props.articleActions.articleList(articles);
  }
  render() {
    // console.log(this.props);

    let articlesJSX = [];

    for (let k in this.props) {
      if (this.props.hasOwnProperty(k)) {
        let articlesDetails = this.props[k];
        let currentArticleJSX = (
          <div key={k}>
            <h2>- {articlesDetails.id}</h2>
            <h2>{articlesDetails.articleTitle}</h2>
            <h3>{articlesDetails.articleContent}</h3>
          </div>
        );

        articlesJSX.push(currentArticleJSX);
      }
    }
    return (
      <div>
        <h1>Publishing App</h1>
        {articlesJSX}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PublishingApp);
