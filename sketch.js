input = [];

for(i = 0; i < 300; i++) {
	input.push(Math.ceil(Math.random() * 1000));
}

const width = window.innerWidth;
const height = window.innerHeight

async function setup() {
	createCanvas(width, height);
	strokeWeight(1);
	pixelDensity(3);
	background (0);
	fill(255);
	drawGraph(input);
	selectionSort(input, 0);
}

async function selectionSort(array, currentIndex) {
	length = array.length;
	while(currentIndex < length) {
		nextMin = findMin(array, currentIndex);
		swap(array, nextMin, currentIndex);
		currentIndex++;
		drawGraph(array);
		await new Promise(r => setTimeout(r, 1));
		console.log(array);
	}
}

function findMin(array, startIndex) {
	if(startIndex >= array.length)
		return;

	minimalIndex = startIndex;
	for(i = startIndex + 1 ; i < array.length; i++) {
		if(array[minimalIndex] > array[i]) {
			minimalIndex = i;
		}
	}
	return minimalIndex;
}
/*
async function draw() {
	await new Promise(r => setTimeout(r, 1000));
	console.log(array);
	quickSort(array);
}
*/

function getMax(array) {
	maxElement =  -1;
	array.forEach((element) => {
		if(element > maxElement)
			maxElement = element;
	})

	return maxElement;
}

function drawGraph(array) {
	background(0);
	usedHeight = 0.95 * height;
	usedWidth = width / array.length;
	maxValue = getMax(array);

	widthRunner = usedWidth;
	array.forEach((element) => {
		barHeight = int((usedHeight * element) / maxValue);

		rect(widthRunner, height, -usedWidth, -barHeight);
		widthRunner += usedWidth;
	})
}


function swap(array, position1, position2) {
	temp = array[position1];
	array[position1] = array[position2];
	array[position2] = temp;
}
