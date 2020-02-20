import React from 'react';

class EnvelopeFilter extends React.Component {

	constructor(props) {
		super(props);
	}

	onRangeChange(e) {
		this.props.updateEnvelope(e.target.name, e.target.value);
	}

	render() {
		return (
			<div>
				{ /** attack time  */ }
				<div>
					<label htmlFor="attackTime">攻击时间</label>
					<input 
						id="attackTime" 
						name="attackTime"
						type="range" 
						max="20" 
						min="0" 
						step="0.1" 
						value={this.props.envelope.attackTime}
						onChange={e => this.onRangeChange(e)} />
				</div>

				{/** attack value */ }
				<div>
					<label htmlFor="attackValue">攻击值</label>
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
					<label htmlFor="decay">衰减</label>
					<input 
						id="decay" 
						name="decay"
						type="range" 
						max="20" 
						min="0" 
						step="0.1" 
						value={this.props.envelope.decay}
						onChange={e => this.onRangeChange(e)} />
				</div>

				{ /** sustain value */ }
				<div>
					<label htmlFor="sustain">支持</label>
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
					<label htmlFor="release">发布</label>
					<input 
						id="release" 
						name="release"
						type="range" 
						max="20" 
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

