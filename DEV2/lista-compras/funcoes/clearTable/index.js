module.exports = function f(x, y) {
	if (x < y) {
		document.getElementsByTagName('tr')[1].remove()
		x++
		f(x, y)
	}
}