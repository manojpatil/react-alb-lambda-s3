import React,{Component} from 'react';
import axios from 'axios';


class App extends Component {
	state = {	selectedFile: null	};
	
	onFileUpload = event => {
	this.setState({ selectedFile: event.target.files[0] });	
	};
	
	onFileSend = () => {
	const formData = new FormData();
	formData.append(
		"myFile",
		this.state.selectedFile,
		this.state.selectedFile.name
	);
	
  axios.post('URL OF THE APPLICATION LOAD BALANCER / API GATEWAY / ROUTE53?file_name='+this.state.selectedFile.name,this.state.selectedFile)
		.then(
			alert('Uploaded to S3 !!')
			)
			
		.catch(error => {
			this.setState({ errorMessage: error.message });
			console.error('There was an error!', error);
		});

  
		
	};
	
	fileDetails = () => {
	if (this.state.selectedFile) {
		return (
		<div>
			<h2>File Details:</h2>
<p>File Name: {this.state.selectedFile.name}</p>
<p>File Type: {this.state.selectedFile.type}</p>
<p>
			Last Modified:{" "}
			{this.state.selectedFile.lastModifiedDate.toDateString()}
			</p>
		</div>
		);
	} else {
		return (
		<div>
			<br />
			<h4>Choose file before Pressing the Upload button</h4>
		</div>
		);
	}
	};
	render() {
	return (
		<div>		
			<h3>
			File Upload to S3 using React !!!
			</h3>
			<div>
				<input type="file" onChange={this.onFileUpload} />
				<button onClick={this.onFileSend}>
				Upload to S3!
				</button>
			</div>
		{this.fileDetails()}
		</div>
	);
	}
}
export default App;
