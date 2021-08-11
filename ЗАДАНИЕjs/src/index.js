//$(function () {})

const onDocumentLoad = callback => {
	const wrapper = () => {
		document.removeEventListener('DOMContentLoaded', wrapper)

		callback()
	}

	document.addEventListener('DOMContentLoaded', wrapper)
}