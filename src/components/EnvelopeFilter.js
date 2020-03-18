import React from 'react';

const EnvelopeFilter = (props) => {

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
					value={props.attackTime}
					onChange={e => {props.updateEnvelope(
						e.target.value,
						props.attackValue,
						props.decay,
						props.sustain,
						props.release
					)}} />
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
					value={props.attackValue} 
					onChange={e => {props.updateEnvelope(
						props.attackTime,
						e.target.value,
						props.decay,
						props.sustain,
						props.release
					)}} />
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
					value={props.decay}
					onChange={e => {props.updateEnvelope(
						props.attackTime,
						props.attackValue,
						e.target.value,
						props.sustain,
						props.release
					)}} />
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
					value={props.sustain}
					onChange={e => {props.updateEnvelope(
						props.attackTime,
						props.attackValue,
						props.decay,
						e.target.value,
						props.release
					)}}/>
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
					value={props.release}
					onChange={e => {props.updateEnvelope(
						props.attackTime,
						props.attackValue,
						props.decay,
						props.sustain,
						e.target.value
					)}}/>
			</div>

		</div>
	);
}

export default EnvelopeFilter;

