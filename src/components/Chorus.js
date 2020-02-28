import React from 'react';

class Chorus extends React.Component {

	onRangeChange(e) {
		this.props.updateChorus(e.target.name, e.target.value);
	}

	render() {
		return(
			<div className="nes-container with-title is-rounded manipulate__node">
				<h3 className="title">Chorus</h3>
				<div>
					<label className="range-label" htmlFor="chorusRate">RATE</label>
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
					<label className="range-label" htmlFor="chorusTime">TIME</label>
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
					<label className="range-label" htmlFor="chorusFrequency">FREQUENCY</label>
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
					<label className="range-label" htmlFor="chorusMix">MIX</label>
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
