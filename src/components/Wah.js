import React from 'react';

const Wah = (props) => {

	return(
		<div className="nes-container with-title is-rounded manipulate__node">
			<h3 className="title">Filter/Wah</h3>
			<div>
				<label className="range-label" htmlFor="cutoff">CUTOFF</label>
				<input 
					id="cutoff" 
					name="cutoff"
					type="range" 
					max="10000" 
					min="0" 
					step="100" 
					value={props.cutoff}
					onChange={e => {props.updateWah(
						e.target.value,
						props.resonance,
						props.rate,
						props.lfo
					)}} />
			</div>
			<div>
				<label className="range-label" htmlFor="resonance">RESONANCE</label>
				<input 
					id="resonance" 
					name="resonance"
					type="range" 
					max="20" 
					min="0" 
					step="1" 
					value={props.resonance}
					onChange={e => {props.updateWah(
						props.cutoff,
						e.target.value,
						props.rate,
						props.lfo
					)}} />
			</div>
			<div>
				<label className="range-label" htmlFor="wahRate">RATE</label>
				<input 
					id="wahRate" 
					name="rate"
					type="range" 
					max="1" 
					min="0" 
					step="0.1" 
					value={props.rate}
					onChange={e => {props.updateWah(
						props.cutoff,
						props.resonance,
						e.target.value,
						props.lfo
					)}} />
			</div>
			<div>
				<label className="range-label" htmlFor="lfo">LFO</label>
				<input 
					id="lfo" 
					name="lfo"
					type="range" 
					max="10" 
					min="0" 
					step="0.1" 
					value={props.lfo}
					onChange={e => {props.updateWah(
						props.cutoff,
						props.resonance,
						props.rate,
						e.target.value
					)}} />
			</div>
		</div>
	);
}

export default Wah;

