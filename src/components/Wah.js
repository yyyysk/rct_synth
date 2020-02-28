import React from 'react';

class Wah extends React.Component {

	onRangeChange(e) {
		this.props.updateWah(e.target.name, e.target.value);
	}

	render() {
		return(
			<div className="nes-container with-title is-rounded manipulate__node">
				<h3 className="title">Wah</h3>
				<div>
					<label className="range-label" htmlFor="cutoff">CUTOFF</label>
					<input 
						id="cutoff" 
						name="cutoff"
						type="range" 
						max="10000" 
						min="0" 
						step="100" 
						value={this.props.wah.cutoff}
						onChange={e => this.onRangeChange(e)} />
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
						value={this.props.wah.resonance}
						onChange={e => this.onRangeChange(e)} />
				</div>
				<div>
					<label className="range-label" htmlFor="wahRate">rate</label>
					<input 
						id="wahRate" 
						name="rate"
						type="range" 
						max="1" 
						min="0" 
						step="0.1" 
						value={this.props.wah.rate}
						onChange={e => this.onRangeChange(e)} />
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
						value={this.props.wah.lfo}
						onChange={e => this.onRangeChange(e)} />
				</div>
			</div>
		);
	}
}

export default Wah;

