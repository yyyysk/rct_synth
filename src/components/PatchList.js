import React, { useState } from 'react';
import { getData } from '../util/httpUtils';

const PatchList = (props) => {

	const GET_LIST_URL = '/api/v1/patch/get'; 
	const [pageNum, setPageNum] = useState(0);
	const [patches, setPatches] = useState([]);

	/**
	 * Update patch
	 */
	const setNewPatch = (patch) => {
		console.log(patch);
		props.updateChorus(patch.chorus.rate, patch.chorus.time, patch.chorus.frequency, patch.chorus.mix);
		props.updateDelay(patch.delay.delayTime, patch.delay.dry, patch.delay.wet, patch.delay.feedback);
		props.updateEnvelope(patch.envelope.value, patch.envelope.attackValue, patch.envelope.decay, patch.envelope.sustain, patch.envelope.release);
		props.updateWah(patch.wah.cutoff, patch.wah.resonance, patch.wah.rate, patch.wah.lfo);
		props.updateWave(patch.wave);
	};

	/**
	 * modal open
	 */
	const onBtn = () => {
		const url = `${GET_LIST_URL}?page=${pageNum}`;
		getData(url)
			.then(result => {
				// 再render -> generateList()ってなる
				setPatches(result.result);
			})
			.catch(err => console.error(err));
		
		const trg = document.getElementById('dialog-patches');
		if (trg) trg.showModal();
	};

	/**
	 * load click
	 */
	const onLoad = (e) => {
		const id = e.target.id;
		const url = `${GET_LIST_URL}/${id}`;
		getData(url)
			.then(result => {
				console.log(result);
				setNewPatch(result.result[0]);
			})
			.catch(err => console.error(err));
	};

	/**
	 * generate patch list
	 */
	const generateList = () => {
		if (!patches.length) return <></>;

		const list = patches.map((el, i) => {
			return (
				<li className="patch-list">
					<h3 className="patch-list__name">{el.name}</h3>
					<p className="patch-list__author" >{el.author}</p>
					<button id={el.id} type="button" class="nes-btn is-warning" onClick={(e) => onLoad(e)}>Load</button>
				</li>
			);
		});
		list.unshift(
			<li className="patch-list">
					<h3 className="patch-list__name">Patch's title</h3>
					<p className="patch-list__author" >Author</p>
					<p></p>
				</li>
		);

		return <ul>{list}</ul>;
	};

	return (
		<section>
		  <button type="button" className="nes-btn patches-btn" onClick={() => onBtn()}>Patches made by someone.</button>
		  <dialog className="nes-dialog" id="dialog-patches">
		    <form method="dialog">
		      <p className="title">Patches</p>
					{ generateList() }
		      <menu className="dialog-menu">
		        <button className="nes-btn is-primary confirm-btn">Close</button>
		      </menu>
		    </form>
		  </dialog>
		</section>
	);
};

export default PatchList;
