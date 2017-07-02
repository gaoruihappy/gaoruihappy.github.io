import { React } from 'zola'
import './markdown.styl'
export default class extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	content:null
	  };
	}
	componentWillMount(){
		const filePath = this.props.articlePath
	  	fetch(filePath).then((data) =>{
	  		data.text().then(text =>{
	  			// debugger
	  			// const converter = new showdown.Converter()
	  			// converter.setOption('tables', true);
	  			// const content   = converter.makeHtml(text);
				this.setState({content:text})
	  		})
	  	})
	}
	
	render(){
		const {content} = this.state
		if(content == null){
			return null
		}
		return (
			<div className="markdown" dangerouslySetInnerHTML={{__html: content}}>
			</div>
		)
	}
}