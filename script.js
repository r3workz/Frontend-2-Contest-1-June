/** @format */

let arr = [
	{ id: 1, name: "john", age: "18", profession: "developer" },
	{ id: 2, name: "jack", age: "20", profession: "developer" },
	{ id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
	//Write your code here , just console.log
	arr.map(emp => {
		if(emp.profession === "developer"){
			console.log(emp)
		}
	})
}

function PrintDeveloperbyForEach() {
	//Write your code here , just console.log
	arr.forEach(emp => {
		if(emp.profession === "developer") {
			console.log(emp)
		}
	})
}

function addData() {
	//Write your code here, just console.log
	let newEmp= {id:4,name:"susan",age:"20",profession:"intern"}
	arr.push(newEmp)

	console.log(arr[arr.length - 1])
}

function removeAdmin() {
	//Write your code here, just console.log
	// arr.forEach(emp=>{
	// 	if (emp.profession === "admin"){
	// 		arr.pop();
	// 	}
	// })
	arr = arr.filter(emp => emp.profession !== "admin")
	console.log(arr)
}

function concatenateArray() {
	//Write your code here, just console.log
	const temp = [
		{ id: 4, name: "raven", age: "21", profession: "developer" },
		{ id: 5, name: "johnny", age: "22", profession: "intern" },
		{ id: 6, name: "ragnar", age: "25", profession: "junior-developer" },
	];

	const newArray= arr.concat(temp)
	console.log(newArray)
}