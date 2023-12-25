//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
bands.sort((a,b)=>{
	let arr1=a.split(" ");
	let arr2=b.split(" ");
	arr1=arr1.filter((item)=>{
		return (item!=='A' && item!=='An' && item!=='The');
	});
	arr2=arr2.filter((item)=>{
		return (item!=='A' && item!=='An' && item!=='The');
	});
	if(arr1[0][0]<=arr2[0][0])return -1;
	else return 1;
	
})

const ul=document.createElement('ul');
ul.setAttribute('id',"bands");

bands.forEach((item)=>{
	const li=document.createElement('li');
	li.innerText=item;
	ul.appendChild(li);
});

const body=document.querySelector('body');
body.append(ul);












