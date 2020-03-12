import React from 'react';

// UI components
import EnvelopeFilter from './containers/EnvelopeFilter';
import Wave from './containers/Wave';
import Delay from './containers/Delay';
import Chorus from './containers/Chorus';
import Wah from './containers/Wah';
import Dialog from './components/Dialog';

// Functions
import { listen } from './Listner';
import Audio from './Audio/index';

class App extends React.Component {

	constructor() {
		super();
	//	this.state = {
	//		// 波形
	//		wave: 'sine',
	//		// エンベロープ
	//		envelope: {
	//			attackTime: 0,
	//			attackValue: 0.2,
	//			decay: 0.5,
	//			sustain: 0.2,
	//			release: 0.2 
	//		},
	//		// Delay
	//		delay: {
	//			delayTime: 1,
	//			dry: 1,
	//			wet: 0,
	//			feedback: 0,
	//		},
	//		// Chorus
	//		chorus: {
	//			rate: 0.5,
	//			time: 0.020,
	//			frequency: 0.05,
	//			mix: 0.5,
	//		},
	//		// Wah
	//		wah: {
	//			cutoff: 2000,
	//			resonance: 5,
	//			rate: 0.5,
	//			lfo: 2
	//		}
	//	};

		// AudioContextの初期化
	//	this.audio = this.audio? this.audio : new Audio(
	//		this.state.envelope,
	//		this.state.delay,
	//		this.state.chorus,
	//		this.state.wah
	//	);
	//	if (!this.isListening) this.isListening = listen(this.audio);
	}

	/**
	 * Wave更新
	 */
//	_updateWave(wave) {
//		this.setState({ wave: wave });
//	}
//
//	/**
//	 * Envelope更新
//	 */
//	_updateEnvelope(name, value) {
//		const source = {};
//		source[name] = value;
//
//		const newEnv = Object.assign(
//			this.state.envelope, 
//			source			
//		);
//		this.setState({envelope: newEnv});
//	}
//
//	/**
//	 * Delay更新
//	 */
//	_updateDelay(name, value) {
//		const source = {};
//		source[name] = value;
//
//		const newDelay = Object.assign(
//			this.state.delay,
//			source
//		);
//		this.setState({ delay: newDelay });
//	}
//
//
//	/**
//	 * Chorus更新
//	 */
//	_updateChorus(name, value) {
//		const source = {};
//		source[name] = value;
//
//		const newChorus = Object.assign(
//			this.state.chorus,
//			source
//		);
//		this.setState({ chorus: newChorus });
//	}
//
//	/**
//	 * Wah更新
//	 */
//	_updateWah(name, value) {
//		const source = {};
//		source[name] = value;
//
//		const newWah = Object.assign(
//			this.state.wah,
//			source
//		);
//		this.setState({ wah: newWah });
//	}
//	
//	/**
//	 * Reactライフサイクル
//	 * stateかpropsがupdateされたタイミング
//	 */
//	componentDidUpdate() {
//		this.audio.setWave(this.state.wave);
//		this.audio.setEnvelope(this.state.envelope);
//		this.audio.setDelay(this.state.delay);
//		this.audio.setChorus(this.state.chorus);
//		this.audio.setWah(this.state.wah);
//	}
//
	render() {
		console.log(this.state);
		return (
			<div className="App">
				<div className="nes-container with-title">
					<p className="title">Create your sound.</p>
					<Wave updateWave = {(wave) => this._updateWave(wave)} />
					<div className="manipulate">
						<div className="nodeWrapper">
							<EnvelopeFilter />
						</div>
						<div className="nodeWrapper">
							<Delay />
						</div>
						<div className="nodeWrapper">
							<Chorus />
						</div>
						<div className="nodeWrapper">							
							<Wah />
						</div>
					</div>
					<Dialog />
				</div>
			</div>
		);
	}
}

export default App;

