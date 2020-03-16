import React from 'react';

const Delay = (props) => {

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
					value={props.delayTime}
					onChange={e => {props.updateDelay(
						e.target.value,
						props.dry,
						props.wet,
						props.feedback
					)}} />
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
					value={props.dry}
					onChange={e => {props.updateDelay(
						props.delayTime,
						e.target.value,
						props.wet,
						props.feedback
					)}} />
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
					value={props.wet}
					onChange={e => {props.updateDelay(
						props.delayTime,
						props.dry,
						e.target.value,
						props.feedback
					)}} />
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
					value={props.feedback}
					onChange={e => {props.updateDelay(
						props.delayTime,
						props.dry,
						props.wet,
						e.target.value
					)}} />
			</div>
		</div>
	);
}

export default Delay;
