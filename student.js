const student = {
    name: 'Manoranjan',
    age: 21,
    id: 117,
    greet: function () {
        console.log('Hi, I am '+ this.name+ ' my age is '+ this.age)
    }
    
    
}

student.greet();