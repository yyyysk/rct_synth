import React, { useState } from 'react';
import { getData } from '../util/httpUtils';

const PatchList = () => {

	const GET_LIST_URL = '/api/v1/patch/get'; 
	const [pageNum, setPageNum] = useState(0);
	const [patches, setPatches] = useState([]);

	const onBtn = () => {
		const url = `${GET_LIST_URL}?page=${pageNum}`;
		console.log(url);
		getData(url)
			.then(result => {
				console.log(result);
				generateList(result);
			})
			.catch(err => console.error(err));
		
		const trg = document.getElementById('dialog-patches');
		if (trg) trg.showModal();
	};

	const generateList = () => {
		const list = patches.map((el, i) => {
			return (
				<li>
					<h3>el.name</h3>
					<p>el.author</p>
					<button type="button" class="nes-btn is-warning">Load</button>
				</li>
			);
		});

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
		        <button className="nes-btn is-primary confirm-btn">Confirm</button>
		      </menu>
		    </form>
		  </dialog>
		</section>
	);
};

export default PatchList;
