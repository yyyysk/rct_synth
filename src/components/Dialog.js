import React from 'react';

const onBtn = () => {
	const trg = document.getElementById('dialog-default');
	if (trg) trg.showModal();
}

const Dialog = () => (
	<section>
	  <button type="button" className="nes-btn is-primary" onClick={() => onBtn()}>
			???
	  </button>
	  <dialog className="nes-dialog" id="dialog-default">
	    <form method="dialog">
	      <p className="title">How to use</p>
	      <p>Your "A" key is the note of "C".</p>
	      <menu className="dialog-menu">
	        <button className="nes-btn is-primary confirm-btn">Confirm</button>
	      </menu>
	    </form>
	  </dialog>
	</section>
);

export default Dialog;
