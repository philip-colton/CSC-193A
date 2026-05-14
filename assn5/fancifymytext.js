// alert("Hello, world!");
// TEST ALERT (only used for early debugging)
// alert("Hello, world!");

function makeBigger() {
	let textArea = document.getElementById("textArea");

	// Make text larger
	textArea.style.fontSize = "24pt";

	alert("Hello, world!");
}

function applyFancy() {
	let textArea = document.getElementById("textArea");

	if (document.getElementById("fancy").checked) {
		textArea.style.fontWeight = "bold";
		textArea.style.color = "blue";
		textArea.style.textDecoration = "underline";
	} else {
		applyBoring();
	}
}

function applyBoring() {
	let textArea = document.getElementById("textArea");

	textArea.style.fontWeight = "normal";
	textArea.style.color = "black";
	textArea.style.textDecoration = "none";
}

function moo() {
	let textArea = document.getElementById("textArea");

	// Uppercase everything
	let text = textArea.value.toUpperCase();

	// Split sentences by period
	let sentences = text.split(".");

	// Add "-Moo" to last word of each sentence
	for (let i = 0; i < sentences.length - 1; i++) {
		let words = sentences[i].trim().split(" ");
		if (words.length > 0) {
			words[words.length - 1] += "-Moo";
			sentences[i] = words.join(" ");
		}
	}

	// Rebuild text
	textArea.value = sentences.join(". ");
}