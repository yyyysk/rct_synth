import React from 'react';

class Delay extends React.Component {

	onRangeChange(e) {
		this.props.updateDelay(e.target.name, e.target.value);
	}

	render() {
		return(
			<div>
				<h3>DELAY</h3>
				<div>
					<label htmlFor="delayTime">延迟时间</label>
					<input 
						id="delayTime" 
						name="delayTime"
						type="range" 
						max="2" 
						min="0" 
						step="0.1" 
						value={this.props.delay.delayTime}
						onChange={e => this.onRangeChange(e)} />
				</div>
				<div>
					<label htmlFor="delayDry">燥</label>
					<input 
						id="delayDry" 
						name="dry"
						type="range" 
						max="1" 
						min="0" 
						step="0.1" 
						value={this.props.delay.dry}
						onChange={e => this.onRangeChange(e)} />
				</div>
				<div>
					<label htmlFor="delayWet">溼</label>
					<input 
						id="delayWet" 
						name="wet"
						type="range" 
						max="1" 
						min="0" 
						step="0.1" 
						value={this.props.delay.wet}
						onChange={e => this.onRangeChange(e)} />
				</div>
				<div>
					<label htmlFor="feedback">反馈</label>
					<input 
						id="feedback" 
						name="feedback"
						type="range" 
						max="1" 
						min="0" 
						step="0.1" 
						value={this.props.delay.feedback}
						onChange={e => this.onRangeChange(e)} />
				</div>
			</div>
		);
	}
}

export default Delay;
