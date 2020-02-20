import React from 'react';

// UI components
import EnvelopeFilter from './components/EnvelopeFilter';

// Functions
import { listen, reset } from './Listner';
import Audio from './Audio';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			envelope: {
				attackTime: 0,
				attackValue: 0,
				decay: 0,
				sustain: 0,
				release: 0
			}
		};

		this.audio = this.audio? this.audio : new Audio();
		this.audio.setEnvelope(this.state.envelope);
		if (!this.isListening) this.isListening = listen(this.audio);
	}

	_updateEnvelope(name, value) {
		const source = {};
		source[name] = value;

		const newEnv = Object.assign(
			this.state.envelope, 
			source			
		);
		this.setState({envelope: newEnv});
	}
	
	componentDidUpdate() {
		this.audio.setEnvelope(this.state.envelope);
	}

	render() {
		console.log(this.state);
		return (
			<div className="App">
			<EnvelopeFilter 
				updateEnvelope={(name, value) => this._updateEnvelope(name, value)} 
				envelope={this.state.envelope}/>
			</div>
		);
	}
}

export default App;

