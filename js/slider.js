const sliderBoxs = document.querySelectorAll('.slider__box');
const sliderBtn = document.querySelector('.switch');
const sliderBlog = document.querySelector('.slider__blog');

const clientArr = ['hubspot.png', 'jll.png', 'juniper.png', 'lacoste.png', 'netflix.png', 'atlassian.png'];

function slider() {
	
	sliderBoxs.forEach((sliderBox) => {
		for (let i = 0; i < 6; i++) {
			const client = document.createElement('div')
			const icon = document.createElement('img')
			client.className = 'client'
	
			icon.setAttribute('src', `../assets/img/${clientArr[i]}`)
	
			client.append(icon)
			
			sliderBox.append(client)
		}
		
	})
}

sliderBtn.addEventListener('click', (e) => {
	const currElement = e.target;
	if (currElement.classList.contains('switch__item_activ')) {
		return
	} else {
		deleteClass()
		currElement.classList.add('switch__item_activ')
		if(currElement.getAttribute('data-pos') === 'left') {
			sliderBlog.style.transform = 'translateX(0px)';
		} else if(currElement.getAttribute('data-pos') === 'center') {
			sliderBlog.style.transform = 'translateX(-956px)';
		} else if(currElement.getAttribute('data-pos') === 'right') {
			sliderBlog.style.transform = 'translateX(-1912px)';
		}
		
	}
})

function deleteClass() {
	const elements = document.querySelectorAll('.switch__item');
		elements.forEach(element => {
    	element.classList.remove('switch__item_activ');
	});
}

export { slider }