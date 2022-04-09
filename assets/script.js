let count = 0;

var CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
}

function decrement() { if(
    count>0
)
	count--;
	CURRENT_NUMBER.innerHTML = count;
}

