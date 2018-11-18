async function startProgram() {
	// set heding to 270 degree at first
	setHeading(270);
	// run the command for 4 times
	for (var _i0 = 0; _i0 < 4; ++_i0) {
		// play random animal sound and continue
		await Sound.Animal.play(false);
		// changes led color to red
		setMainLed({ r: 255, g: 62, b: 48 });
		// add 90 dergree to current heading angle
		await roll(getHeading() + 90, 66, 2);
		// change led color to green
		setMainLed({ r: 65, g: 255, b: 86 });
		// delay 2 seconds after each straight line
		await delay(2);
		await delay(0.025);
	}
}
