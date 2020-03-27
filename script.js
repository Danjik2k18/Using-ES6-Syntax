class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	buildNewDiv() {
		let newDiv = document.createElement('div');
		newDiv.textContent = 'Azaza';
		document.body.appendChild(newDiv);
		let param = `height: ${this.height}px; width: ${this.width}px; background-color: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign}`;
		newDiv.style.cssText = param;
	}
}

const object = new Options(35, 100, 'red', 26, 'center');
object.buildNewDiv();