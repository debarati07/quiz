/** @format */

const answers = ['A', 'A', 'B', 'C', 'D'];
const change = document.querySelector('.text');
console.log(change);
let form = document.querySelector('form');
const para=document.querySelector('.title_para');
form.addEventListener('submit', (e) => {
	e.preventDefault();
	const useranswer = [
		form.ques1.value,
		form.ques2.value,
		form.ques3.value,
		form.ques4.value,
		form.ques5.value,
	];
	console.log(useranswer);
	let score = 0;
	useranswer.forEach((val, index) => {
		if (val === answers[index]) {
			score += 20;
		}
	});
	console.log(score);
	window.scrollTo(0, 0);
    para.style.display="block";
	let output = 0;
	let timer = setInterval(() => {
		change.textContent = `You score ${output}.`;
		if (output === score) {
			clearInterval(timer);
		} else {
			output++;
		}
	}, 50);
});
