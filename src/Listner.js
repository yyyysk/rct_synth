/**
 * keydown
 */
const _setOnKeyDown = (audio) => {
	window.addEventListener('keydown', event => {
		console.log(event.keyCode);
		audio.startNote();
	});
};

export const listen = (audio) => {
	_setOnKeyDown(audio);
}

