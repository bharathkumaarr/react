
const personsArr = [
    {
        name: 'person1',
        age: 30,
        country: 'USA'
    },
    {
        name: 'person2',
        age: 23,
        country: 'RUSSIA'
    },
    {
        name: 'person3',
        age: 30,
        country: 'india'
    }
];

const getAllNames = personsArr.map((singlePerson, index)=> {
    return singlePerson.name;
})
console.log(getAllNames);