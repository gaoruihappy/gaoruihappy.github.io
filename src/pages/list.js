/**
 *  === page ===
 *
 *  created at: Tue Jun 27 2017 18:27:29 GMT+0800 (CST)
 */
import styles from './list.styl'

import articles from 'data/article'
// import AsyncComponent from 'modules/AsyncComponent'
// const articleList = MY_ARTICLE_DATA
import articleList from 'data/article'

import { React, Page } from 'zola'

export default class Index extends Page {
  
  render () {
  	const renderComp = 'input'
    return (
      <div>
      	<ul>
      	<div className="listContent">
      		{
		      	articleList.map((article,index) =>{
		      		// debugger
		      		return (
		      			<div key={index} className="post small">
		      				<div className="image"><img className="listimage" src={article.image} /></div>
		      				<a href={`#/article/${article.path}`}><h2 className="title">{article.title}</h2></a>
		      				<div className="time">{article.createTime}&nbsp;&nbsp;/&nbsp;&nbsp;{article.type}</div>
		      				<div className="summary">{article.summary}</div>
		      				<a href={`#/article/${article.path}`}>
		      				READ MORE
		      				</a>
		      			</div>
	      			)
		      	})
		      }
		      </div>

      	</ul>
      </div>
    )
  }
}