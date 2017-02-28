console.log('in main.js');
var person1 = {
  firstName: 'Bob',
  lastName: 'le Plant',
  email: 'bob@spartaglobal.co',
  age: 12.5

};

var person2 = {
  firstName: 'Aretha',
  lastName: 'Franklin',
  email: 'ms.legend@example.com',
  age: 29
}

var person3 = {
  firstName: 'Joe',
  email: 4,
  hobbies: ['boxing','hitting']
};

var people = [ person1, person2, person3];

peopleLength = people.length;

for (var i = 0; i < peopleLength; i++) {
  console.log(people[i].firstName, people[i].age);
    //Do something
}

if ({} === {}){
  console.log('they are the same');
}else{
  console.log('they are not the same');
}

if ({} == {}){
  console.log('they are the same');
}else{
  console.log('they are not the same');
}
