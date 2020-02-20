/**
 * KeyCodeを音名にかえる
 */
const _getNote = (keyCode) => {
	switch(keyCode) {
		case 65: return 'C';
		case 87: return 'C#';
		case 83: return 'D';
		case 69: return 'D#';
		case 68: return 'E';
		case 70: return 'F';
		case 84: return 'F#';
		case 71: return 'G';
		case 89: return 'G#';
		case 72: return 'A';
		case 85: return 'A#';
		case 74: return 'B';
		case 75: return 'C2';
		case 79: return 'C#2';
		case 76: return 'D2';
		case 80: return 'D#2';
		case 186: return 'E2';
		default: return null;
	}
}

/**
 * keydown
 */
const _setOnKeyDown =	(audio) =>  {
	window.addEventListener('keydown', downEv => {
		// 押しっぱなしで発火したら処理しない
		if (downEv.repeat === true) return;

		let note = _getNote(downEv.keyCode);
		audio.startNote(note);

		// key up
		const _onKeyUp = (upEv) => {
			if (upEv.keyCode !== downEv.keyCode) return;

			audio.stopNote(note);
			document.removeEventListener('keyup', _onKeyUp);
		}

		document.addEventListener('keyup', _onKeyUp);
	});
};

export const listen = (audio) => {
	_setOnKeyDown(audio);
	return true;
}

//export const reset = () => {
//	window.removeEventListener('keydown', _setOnKeyDown);
//	window.removeEventListener('keyup', _onKeyUp);
//}

