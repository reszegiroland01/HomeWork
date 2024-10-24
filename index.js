// Írj egy függvényt, ami visszaadja azoknak a személyeknek a nevét, akik 30 évnél idősebbek! PIPA
// Írj egy függvényt, amely kiírja minden személy hobbijait egyenként a konzolra!
// Módosítsd Tom városát "Rome"-ra és írasd ki az objektumát a konzolra!
// Adj hozzá egy új objektumot a tömbhöz, ami egy új személyt képvisel, majd írasd ki a teljes tömböt!
// Töröld az első személyt a tömbből, és írasd ki az új tömböt!

let people = [
    { name: "John", age: 25, city: "New York", hobbies: ["reading", "football"] },
    { name: "Sarah", age: 30, city: "London", hobbies: ["cooking", "swimming"] },
    { name: "Tom", age: 22, city: "Paris", hobbies: ["gaming", "basketball"] },
    { name: "Anna", age: 28, city: "Berlin", hobbies: ["yoga", "cycling"] },
    { name: "Mike", age: 35, city: "Tokyo", hobbies: ["travelling", "hiking"] }
];

//1. Feladat

function olderThenThirty(){
    let names = []
    people.forEach(person => {
        if(person.age >= 30){
            names.push(person.name)
        }
    });
    console.log(names)
}
olderThenThirty(people)

//2. Feladat

function peopleHobbies(){
    people.forEach(person => {
        console.log(person.name + " hobbijai " + person.hobbies[0] + " és " + person.hobbies[1])
    })
}
peopleHobbies(people)

//3. Feladat

function changeTomCity(){
    people.forEach(person => {
        if(person.name === "Tom"){
            person.city = "Rome"
            console.log(person)
        }
    })
}
changeTomCity(people)

//4. Feladat

function addNewPerson(people, name, age, city, hobbies){
    let newPerson = {name, age, city, hobbies}
    people.push(newPerson);

    console.log(people)
}
addNewPerson(people, "Roland", 23, "Hajdúnánás", ["gaming", "cooking"])

//5. Feladat

function removeFirstPerson(){
    people.splice(0, 1)
    console.log(people)
}
removeFirstPerson(people)

