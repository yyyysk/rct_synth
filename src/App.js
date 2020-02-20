import React from 'react';

// UI components
import EnvelopeFilter from './components/EnvelopeFilter';
import Wave from './components/Wave';

// Functions
import { listen, reset } from './Listner';
import Audio from './Audio';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			wave: 'sine',
			envelope: {
				attackTime: 0,
				attackValue: 0,
				decay: 0,
				sustain: 0,
				release: 0
			}
		};

		// AudioContextの初期化
		this.audio = this.audio? this.audio : new Audio();
		this.audio.setEnvelope(this.state.envelope);
		if (!this.isListening) this.isListening = listen(this.audio);
	}

	/**
	 * Wave更新
	 */
	_updateWave(wave) {
		this.setState({ wave: wave });
	}

	/**
	 * Envelope更新
	 */
	_updateEnvelope(name, value) {
		const source = {};
		source[name] = value;

		const newEnv = Object.assign(
			this.state.envelope, 
			source			
		);
		this.setState({envelope: newEnv});
	}
	
	/**
	 * Reactライフサイクル
	 * stateかpropsがupdateされたタイミング
	 */
	componentDidUpdate() {
		this.audio.setWave(this.state.wave);
		this.audio.setEnvelope(this.state.envelope);
	}

	render() {
		console.log(this.state);
		return (
			<div className="App">
				<Wave updateWave = {(wave) => this._updateWave(wave)} />
				<EnvelopeFilter 
					updateEnvelope={(name, value) => this._updateEnvelope(name, value)} 
					envelope={this.state.envelope}/>
			</div>
		);
	}
}

export default App;

