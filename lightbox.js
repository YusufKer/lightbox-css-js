//I've created a variable called lightbox which I will add to the body element
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
//I'm looping throught the images and adding event listeners, which is a click
images.forEach(image => {
	image.addEventListener('click', e => {
		lightbox.classList.add('active')

		//Here I am creating a variable called img which is an img tag
		const img = document.createElement('img')
		//I'm matching the source to the source of the image that was clicked
		img.src = image.src

		//The while loop ensures that the previous image is removed from the lightbox div before the next one is added
		while(lightbox.firstChild){
			lightbox.removeChild(lightbox.firstChild)
		}
		//Here I'm appending the img element that I've created to the lightbox div
		lightbox.appendChild(img)
	})
})

//This is to ensure that the active class will be toggled on and off only once the user clicks outside of the displayed img
lightbox.addEventListener('click', e =>{
	if(e.target != e.currentTarget) return
	lightbox.classList.remove('active')
})