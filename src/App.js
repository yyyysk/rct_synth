import React from 'react';

// UI components
import EnvelopeFilter from './components/EnvelopeFilter';
import Wave from './components/Wave';
import Delay from './components/Delay';

// Functions
import { listen, reset } from './Listner';
import Audio from './Audio';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			// 波形
			wave: 'sine',
			// エンベロープ
			envelope: {
				attackTime: 0,
				attackValue: 0,
				decay: 0,
				sustain: 0,
				release: 0
			},
			// Delay
			delay: {
				delayTime: 1,
				dry: 1,
				wet: 0,
				feedback: 0,
			}
		};

		// AudioContextの初期化
		this.audio = this.audio? this.audio : new Audio();
		this.audio.setEnvelope(this.state.envelope);
		this.audio.setDelay(this.state.delay);
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
	 * Delay更新
	 */
	_updateDelay(name, value) {
		const source = {};
		source[name] = value;

		const newDelay = Object.assign(
			this.state.delay,
			source
		);
		this.setState({ delay: newDelay });
	}
	
	/**
	 * Reactライフサイクル
	 * stateかpropsがupdateされたタイミング
	 */
	componentDidUpdate() {
		this.audio.setWave(this.state.wave);
		this.audio.setEnvelope(this.state.envelope);
		this.audio.setDelay(this.state.delay);
	}

	render() {
		console.log(this.state);
		return (
			<div className="App">
				<Wave updateWave = {(wave) => this._updateWave(wave)} />
				<EnvelopeFilter 
					updateEnvelope={(name, value) => this._updateEnvelope(name, value)} 
					envelope={this.state.envelope}/>
				<Delay
					delay={this.state.delay} 
					updateDelay={(name, value) => this._updateDelay(name, value)} />
			</div>
		);
	}
}

export default App;

