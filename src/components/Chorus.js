import React from 'react';

class Chorus extends React.Component {

	constructor(props) {
		super(props);
	}

	onRangeChange(e) {
		this.props.updateChorus(e.target.name, e.target.value);
	}

	render() {
		return(
			<div>
				<h3>CHORUS</h3>
				<div>
					<label htmlFor="chorusRate">率</label>
					<input 
						id="chorusRate" 
						name="rate"
						type="range" 
						max="2" 
						min="0" 
						step="0.1" 
						value={this.props.chorus.rate}
						onChange={e => this.onRangeChange(e)} />
				</div>
				<div>
					<label htmlFor="chorusTime">时间</label>
					<input 
						id="chorusTime" 
						name="time"
						type="range" 
						max="0.1" 
						min="0" 
						step="0.01" 
						value={this.props.chorus.time}
						onChange={e => this.onRangeChange(e)} />
				</div>
				<div>
					<label htmlFor="chorusFrequency">频次</label>
					<input 
						id="chorusFrequency" 
						name="frequency"
						type="range" 
						max="1" 
						min="0" 
						step="0.1" 
						value={this.props.chorus.frequency}
						onChange={e => this.onRangeChange(e)} />
				</div>
				<div>
					<label htmlFor="chorusMix">混合</label>
					<input 
						id="chorusMix" 
						name="mix"
						type="range" 
						max="1" 
						min="0" 
						step="0.1" 
						value={this.props.chorus.mix}
						onChange={e => this.onRangeChange(e)} />
				</div>
			</div>
		);
	}
}

export default Chorus;
