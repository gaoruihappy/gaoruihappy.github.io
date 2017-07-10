import { React } from 'zola'
import showdown from 'showdown'
import './markdown.styl'
export default class extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	content:null
	  };
	}
	componentWillMount(){
		console.log(this.props)
		console.log(this.props)
		const filePath = this.props.articlePath
	  	fetch(filePath).then((data) =>{
	  		data.text().then(text =>{
	  			debugger
	  			const converter = new showdown.Converter()
	  			converter.setOption('tables', true);
	  			const content   = converter.makeHtml(text);
				this.setState({content})
	  		})
	  	})
	}
	
	render(){
		const {content} = this.state
		if(content == null){
			return null
		}

		return (
			<div>
			<div className="markdown" dangerouslySetInnerHTML={{__html: content}}>

			</div>
			</div>
		)
	}
}