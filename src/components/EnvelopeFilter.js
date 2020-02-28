import React from 'react';

class EnvelopeFilter extends React.Component {

	onRangeChange(e) {
		this.props.updateEnvelope(e.target.name, e.target.value);
	}

	render() {
		return (
			<div className="nes-container with-title is-rounded manipulate__node">
				<h3 className="title">Envelope</h3>
				{ /** attack time  */ }
				<div>
					<label className="range-label" htmlFor="attackTime">ATTACK</label>
					<input 
						id="attackTime" 
						name="attackTime"
						type="range" 
						max="3" 
						min="0" 
						step="0.1" 
						value={this.props.envelope.attackTime}
						onChange={e => this.onRangeChange(e)} />
				</div>

				{/** attack value */ }
				<div>
					<label className="range-label" htmlFor="attackValue">GAIN</label>
					<input 
						id="attackValue" 
						name="attackValue"
						type="range" 
						max="1" 
						min="0" 
						step="0.1" 
						value={this.props.envelope.attackValue} 
						onChange={e => this.onRangeChange(e)} />
				</div>

				{ /** decay time */}
				<div>
					<label className="range-label" htmlFor="decay">DECAY</label>
					<input 
						id="decay" 
						name="decay"
						type="range" 
						max="1" 
						min="0" 
						step="0.1" 
						value={this.props.envelope.decay}
						onChange={e => this.onRangeChange(e)} />
				</div>

				{ /** sustain value */ }
				<div>
					<label className="range-label" htmlFor="sustain">SUSTAIN</label>
					<input 
						id="sustain" 
						name="sustain"
						type="range" 
						max="1" 
						min="0" 
						step="0.1" 
						value={this.props.envelope.sustain}
						onChange={e => this.onRangeChange(e)}/>
				</div>

				{ /** release */}
				<div>
					<label className="range-label" htmlFor="release">RELEASE</label>
					<input 
						id="release" 
						name="release"
						type="range" 
						max="1" 
						min="0" 
						step="0.1" 
						value={this.props.envelope.release}
						onChange={e => this.onRangeChange(e)}/>
				</div>

			</div>
		);
	}
}

export default EnvelopeFilter;

