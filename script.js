const arr = [1, 2, 3, 4, 1, 0, 2, 2];
let ans=[];
let temp=[];
const divide = (arr, n) => {
	let temp = [];
	for(let i = 0; i < arr.length; i++) {
		let sum = 0;
		let ans = [];
		
		for(let j = i; j < arr.length; j++) {
			if(sum + arr[j] <= n) {
				sum = sum + arr[j];
				ans.push(arr[j]);
				i = j;
			} else {
				break;
			}
		}
		temp.push(ans);
	}
	return temp;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
