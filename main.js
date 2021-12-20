const $keys = document.querySelectorAll('.key')

// console.log($keys)

$keys.forEach(key => {
	// console.log(key.innerText)

	key.setAttribute('data-key', key.innerText.toLowerCase())

	const keyName = key.innerText
	switch (keyName) {
		case 'DEL':
			key.setAttribute('data-key', 'Backspace')
			break
		case 'TAB':
			key.setAttribute('data-key', 'Tab')
			break
		case 'CAPS':
			key.setAttribute('data-key', 'CapsLock')
			break
		case 'ENTER':
			key.setAttribute('data-key', 'Enter')
			break
		case 'SHIFT':
			key.setAttribute('data-key', 'Shift')
			break
	}
})

const addPulsingClass = () => {
	let randomIndex = Math.floor(Math.random() * $keys.length)
	console.log(randomIndex)

	$keys[randomIndex].classList.add('pulsing')
}


const keyPressed = e => {
	$keys.forEach(key => {
		let classes = key.classList
		// console.log(classes)
		if (key.dataset.key === e.key && classes.contains('pulsing')) {
			console.log('the same')
			key.classList.remove('pulsing')

			addPulsingClass()
		}
	})
}

document.addEventListener('keydown', e => {
	keyPressed(e)
})

document.addEventListener('DOMContentLoaded', addPulsingClass)
   