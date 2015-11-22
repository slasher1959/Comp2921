function printableMessage() {
	var message = "hello";
	function setMessage(newMessage) {
		if (!newMessage) throw new Error("Cannot set empty message");
		message = newMessage;
	}
	function getMessage() {
		return message;
	}
}