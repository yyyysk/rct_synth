import React from 'react';

const onBtn = () => {
	const trg = document.getElementById('dialog-default');
	if (trg) trg.showModal();
}

const Dialog = () => (
	<section>
	  <button type="button" class="nes-btn is-primary" onClick={() => onBtn()}>
			???
	  </button>
	  <dialog class="nes-dialog" id="dialog-default">
	    <form method="dialog">
	      <p class="title">How to use</p>
	      <p>Your "A" key is the note of "C".</p>
	      <menu class="dialog-menu">
	        <button class="nes-btn is-primary confirm-btn">Confirm</button>
	      </menu>
	    </form>
	  </dialog>
	</section>
);

export default Dialog;
