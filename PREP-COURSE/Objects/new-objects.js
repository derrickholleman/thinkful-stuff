function addName(obj, name, value) {
	obj[name] = value
	return obj
}
console.log(addName({fido: 500, spot: 300}, 'brutus', 300))