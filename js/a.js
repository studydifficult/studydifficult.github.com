
//alert('test')

var oInput = document.getElementById('submit')
oInput.onclick = function () {
	//alert('be submit')0.1544;
	//
	var d = 0.1544
	var i = document.getElementById('datetime').value
	document.title = i * d;
}

var b1 = document.getElementById('b1'),
	b2=	document.getElementById('b2');
b1.onclick = function () {
	document.body.style.backgroundColor = 'red';
}
b2.onclick = function () {
	document.body.style.backgroundColor = 'teal';
}

