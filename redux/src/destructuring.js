const person ={
    name : 'Navnit',
    age : 21,
    location: {
        city: 'Patna',
        temp: 34
    }
};

const {temp:temprature,city} = person.location;

console.log(`my name is ${person.name} and currently 
${temprature} degree is in my city ${city} `);

const book={
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher:{
        name: 'Penguin'
    }
};

const {name: publisherName} = book.publisher;

console.log(publisherName);