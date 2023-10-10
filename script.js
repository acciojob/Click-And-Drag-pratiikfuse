// Your code here.
const divs  = document.querySelectorAll(".items>.item");
// alert(divs)
for(let i = 0;i<divs.length;i++)
	{
		divs[i].dragabble = "true";
	}