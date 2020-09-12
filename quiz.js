let answerOne = () => {
	if(document.getElementById('two').checked) {
		document.getElementById('result').innerHTML = 'Correct!';
	} else if(document.getElementById('eleven').checked) {
		document.getElementById('result').innerHTML = 'Wrong! Answer is ' + 2;
	}
}

let answerTwo = () => {
	if(document.getElementById('twenty').checked) {
		document.getElementById('resultTwo').innerHTML = 'Correct!';
	} else if(document.getElementById('twentytwo').checked) {
		document.getElementById('resultTwo').innerHTML = 'Wrong! Answer is ' + 20;
	}
}

let answerThree = () => {
	if(document.getElementById('eight').checked) {
		document.getElementById('resultThree').innerHTML = 'Correct!';
	} else if(document.getElementById('six').checked) {
		document.getElementById('resultThree').innerHTML = 'Wrong! Answer is ' + 8;
	}
}

let answerFour = () => {
	if(document.getElementById('four').checked) {
		document.getElementById('resultFour').innerHTML = 'Correct!';
	} else if(document.getElementById('zero').checked) {
		document.getElementById('resultFour').innerHTML = 'Wrong! Answer is ' + 4;
	}
}

let answerFive = () => {
	if(document.getElementById('five').checked) {
		document.getElementById('resultFive').innerHTML = 'Correct!';
	} else if(document.getElementById('seven').checked) {
		document.getElementById('resultFive').innerHTML = 'Wrong! Answer is ' + 5;
	}
}