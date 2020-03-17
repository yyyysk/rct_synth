import React, { useState } from 'react';
import { postData } from '../util/httpUtils';

const Save = (props) => {

	const [errMsg, setErrMsg] = useState('');
	const [msg, setMsg] = useState('');

	const onBtn = () => {
		const trg = document.getElementById('save-default');
		if (trg) trg.showModal();
	}

	const onSave = () => {
		const author = document.getElementById('save-author').value;
		const name = document.getElementById('save-name').value;
		const data = JSON.stringify(props.store);
		
		if (!author || !name) {
			setErrMsg('Enter your name and patch name.')
			return;
		}
	
		postData('/api/v1/patch/create', {
			author: author,
			name: name,
			data: data
		}).then(data => {
			console.log(data);		
			setMsg('The patch has been created. Press "cancel" to close.');
		}).catch(err => console.error(err));
	}

	return (
		<section>
		  <button type="button" className="nes-btn is-success save-btn" onClick={() => onBtn()}>
				Save	
		  </button>
		  <dialog className="nes-dialog" id="save-default">
		    <form method="dialog">
		      <p className="title save__title">Save sound patch.</p>
					<div className="nes-text is-error">{errMsg}</div>
					<div className="nes-text is-success">{msg}</div>
					<div className="nes-field">
					  <label htmlFor="name_field">Your name</label>
					  <input type="text" id="save-author" className="nes-input" />
					</div>
					<div className="nes-field save__input">
					  <label htmlFor="name_field">Patch's name</label>
					  <input type="text" id="save-name" className="nes-input" />
					</div>
		      <menu className="dialog-menu save__actions">
		        <button className="nes-btn confirm-btn">Cancel</button>
					  <button type="button" className="nes-btn is-success save__save-btn" onClick={() => onSave()}>Save</button>
		      </menu>
		    </form>
		  </dialog>
		</section>
	);
};

export default Save;

