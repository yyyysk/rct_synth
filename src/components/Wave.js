import React from 'react';

const Wave = (props) => {

	return(
		<div className="manipulate__node manipulate__node--wave">
			<label htmlFor="waveSelect">Wave form</label>
			<div className="nes-select">
				<select id="waveSelect" name="wave" defaultValue="sine" onChange={e => props.updateWave(e.target.value)}>
					<option value="sine">sine</option>
					<option value="square">square</option>
					<option value="sawtooth">sawtooth</option>
					<option value="triangle">triangle</option>
				</select>
			</div>
		</div>
	);
};

export default Wave;

