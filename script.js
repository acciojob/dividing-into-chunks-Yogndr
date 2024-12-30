const arr = [1, 2, 3, 4, 1, 0, 2, 2];
let ans=[];
let temp=[];
const divide = (arr, n) => {
	for(let i=0;i<arr.length;i++){
		let sum=0;
		for(let j=i;j<arr.length;j++){
			sum=sum+arr[j];
			if(sum<n){
				for(let k=i;k<=j;k++)
					ans.push(arr[k]);
				// console.log(arr[k]);
				}
			else if(sum>=n){
				break;
			}
			temp.push(ans);
			
		}
        
	}
	return temp;
  // Write your code here
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
