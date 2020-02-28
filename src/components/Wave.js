import React from 'react';

class Wave extends React.Component {

	onSelectChange(e) {
		this.props.updateWave(e.target.value);
	}

	render() {
		return(
			<div className="manipulate__node manipulate__node--wave">
				<label htmlFor="waveSelect">Wave form</label>
				<div className="nes-select">
					<select id="waveSelect" name="wave" defaultValue="sine" onChange={e => this.onSelectChange(e)}>
						<option value="sine">sine</option>
						<option value="square">square</option>
						<option value="sawtooth">sawtooth</option>
						<option value="triangle">triangle</option>
					</select>
				</div>
			</div>
		);
	}
}

export default Wave;

