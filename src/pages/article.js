/**
 *  === page ===
 *
 *  created at: Tue Jun 27 2017 18:29:16 GMT+0800 (CST)
 */
import styles from './article.styl'

import { React, Page } from 'zola'
import articleList from 'data/article'
import highlight from 'highlight.js'

const noop = () => {}
export default class extends Page {

  constructor(props) {
    super(props);
    this.state = {
      content: '',
      author: '匿名',
      createTime: '',
      title: '',
      tags: []
    }
  }

  componentWillMount() {
    
    let path = this.props.params.path;
    let article = articleList.find(v => v.path == path);
    article.component().then(content => {
      this.setState({
        content
      })
    })
  }

  componentDidUpdate(prevProps, prevState) {
    var blocks = Array.from(document.querySelectorAll('pre code'));
    blocks.forEach(block => highlight.highlightBlock(block));
  }

  render () {
    let {content} = this.state;
    return (
      !!content
      ? <div className="article-wrapper">
          <div className="article-header">
            <div className="author">
            </div>
          
          </div>
          <div dangerouslySetInnerHTML={{__html: content}}></div>
        </div>
      : <div>Loading...</div>
    )
  }
}