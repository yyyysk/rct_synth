/**
 * KeyCodeを音名にかえる
 */
const _getNote = (keyCode) => {
	console.log(keyCode);
	switch(keyCode) {
		case 65: return 'C';
		case 83: return 'D';
		case 68: return 'E';
		case 70: return 'F';
		case 71: return 'G';
		case 72: return 'A';
		case 74: return 'B';
		case 75: return 'C2';
		default: return null;
	}
}

/**
 * keydown
 */
const _setOnKeyDown = (audio) => {
	window.addEventListener('keydown', downEv => {
		// 押しっぱなしで発火したら処理しない
		if (downEv.repeat === true) return;

		let note = _getNote(downEv.keyCode);
		audio.startNote(note);

		document.addEventListener('keyup', onKeyUp);

		// key up
		function onKeyUp(upEv) {
			if (upEv.keyCode !== downEv.keyCode) return;

			audio.stopNote(note);
			document.removeEventListener('keyup', onKeyUp);
		}
	});
};

export const listen = (audio) => {
	_setOnKeyDown(audio);
}

