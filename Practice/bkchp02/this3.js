var fool = {
	bar: 123
};

function bas() {
	if (this === global) console.log('called from global');
	if (this === fool) console.log('called from fool');
}

bas();

fool.bas = bas;

fool.bas();