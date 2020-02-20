/**
 * KeyCodeを音名にかえる
 */
const _getNote = (keyCode) => {
	console.log(keyCode);
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

let _onKeyUp = {};
/**
 * keydown
 */
const _setOnKeyDown = function(audio) {
	window.addEventListener('keydown', downEv => {
		// 押しっぱなしで発火したら処理しない
		if (downEv.repeat === true) return;

		let note = _getNote(downEv.keyCode);
		audio.startNote(note);

		document.addEventListener('keyup', _onKeyUp);

		// key up
		_onKeyUp = function(upEv) {
			if (upEv.keyCode !== downEv.keyCode) return;

			audio.stopNote(note);
			document.removeEventListener('keyup', _onKeyUp);
		}
	});
};

export const listen = (audio) => {
	_setOnKeyDown(audio);
}

export const reset = () => {
	window.removeEventListener('keydown', _setOnKeyDown);
	window.removeEventListener('keyup', _onKeyUp);
}

