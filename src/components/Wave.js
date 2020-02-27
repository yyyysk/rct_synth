import React from 'react';

class Wave extends React.Component {

	onSelectChange(e) {
		this.props.updateWave(e.target.value);
	}

	render() {
		return(
			<div>
				<select name="wave" defaultValue="sine" onChange={e => this.onSelectChange(e)}>
					<option value="sine">sine</option>
					<option value="square">square</option>
					<option value="sawtooth">sawtooth</option>
					<option value="triangle">triangle</option>
				</select>
			</div>
		);
	}
}

export default Wave;

