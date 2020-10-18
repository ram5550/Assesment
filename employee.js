let employee=[


		{eid:100,name:"ajay",desig:"devop",join:1981,resign:2003},
		{eid:101,name:"vijay",desig:"devop",join:1992,resign:2008},
		{eid:102,name:"bijoy",desig:"ba",join:1999,resign:2007},
		{eid:103,name:"jhon",desig:"ba",join:1989,resign:2010},
		{eid:104,name:"danie",desig:"qa",join:2009,resign:2014},
		{eid:105,name:"lari",desig:"qa",join:1987,resign:2010},
]

//employee name and designation
var employee1=employee.map(obj1=>({name:obj1.name,desig:obj1.desig}));
console.log("Employee name and desig;",employee1)

//employee details whose desig equals devop
var employee2=employee.filter(obj2=>obj2.desig=="devop")
console.log(employee2)

//employee details those who are woking in 80s
var employee3=employee.filter(obj3=>obj3.join>1980&obj3.join<1990)
console.log(employee3)

//employee details those who have experience more than 9 years
var employee4=employee.filter(obj4=>(obj4.resign-obj4.join)>9)
console.log(employee4)

//sort all employees based on theire joining year
var employee5=employee.sort((ob1,ob2)=>ob1.join-ob2.join)
console.log(employee5)