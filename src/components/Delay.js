import React from 'react';

class Delay extends React.Component {

	onRangeChange(e) {
		this.props.updateDelay(e.target.name, e.target.value);
	}

	render() {
		return(
			<div className="nes-container with-title is-rounded manipulate__node">
				<h3 className="title">Delay</h3>
				<div>
					<label className="range-label" htmlFor="delayTime">TIME</label>
					<input 
						id="delayTime" 
						name="delayTime"
						type="range" 
						max="2" 
						min="0" 
						step="0.1" 
						// value={this.props.delay.delayTime}
						onChange={e => this.onRangeChange(e)} />
				</div>
				<div>
					<label className="range-label" htmlFor="delayDry">DRY</label>
					<input 
						id="delayDry" 
						name="dry"
						type="range" 
						max="1" 
						min="0" 
						step="0.1" 
						// value={this.props.delay.dry}
						onChange={e => this.onRangeChange(e)} />
				</div>
				<div>
					<label className="range-label" htmlFor="delayWet">WET</label>
					<input 
						id="delayWet" 
						name="wet"
						type="range" 
						max="1" 
						min="0" 
						step="0.1" 
						// value={this.props.delay.wet}
						onChange={e => this.onRangeChange(e)} />
				</div>
				<div>
					<label className="range-label" htmlFor="feedback">FEEDBACK</label>
					<input 
						id="feedback" 
						name="feedback"
						type="range" 
						max="1" 
						min="0" 
						step="0.1" 
						// value={this.props.delay.feedback}
						onChange={e => this.onRangeChange(e)} />
				</div>
			</div>
		);
	}
}

export default Delay;
