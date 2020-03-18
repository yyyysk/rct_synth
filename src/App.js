import React from 'react';

// UI components
import EnvelopeFilter from './containers/EnvelopeFilter';
import Wave from './containers/Wave';
import Delay from './containers/Delay';
import Chorus from './containers/Chorus';
import Wah from './containers/Wah';
import Dialog from './components/Dialog';
import Save from './components/Save';
import PatchList from './containers/PatchList';

// Functions
import { listen } from './Listner';
import Audio from './Audio/index';

class App extends React.Component {

	constructor(props) {
		super(props);
		// AudioContextの初期化
		this.audio = this.audio? this.audio : new Audio(
			this.props.envelope,
			this.props.delay,
			this.props.chorus,
			this.props.wah
		);
		if (!this.isListening) this.isListening = listen(this.audio);
	}
	
	/**
	 * stateかpropsがupdateされたタイミング
	 */
	componentDidUpdate() {
		this.audio.setWave(this.props.wave);
		this.audio.setEnvelope(this.props.envelope);
		this.audio.setDelay(this.props.delay);
		this.audio.setChorus(this.props.chorus);
		this.audio.setWah(this.props.wah);
	}

	render() {

		return (
			<div className="App">
				<div className="nes-container with-title">
					<p className="title">Create your sound.</p>
					<Wave />
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
					<Save store={this.props} />
					<PatchList />
				</div>
			</div>
		);
	};
}

export default App;

