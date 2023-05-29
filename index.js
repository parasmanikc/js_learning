// Javascript
// Variables - const, let and var
// // const never changes
// // let and var can change
// // differnce between let and var is -> hoisting in var and var is accessible outside the scope

// Data Type
// String -> example "Anupa" or "1"
// Number -> 1 or 2 oe 3

// Array -- list of items

const array1 = [1,2,3,4,5,6,'12', 'Anupa']

// Object -- key/value pairs
const car = {
    brand: 'Honda',
    year: 2001,
    type: 'Petrol',
    milege: '20km',
    availableCountries: ['nepal', 'india'],
}

// Function
// Traditional function definition - hoisted (can be access before defining)
function clickButton() {
    console.log('button clicked')
}

// Arrow function definition - (can't be access before defining)
// We can pass parameters to functions like clickButtonArrow(1,2) it will result in 3
const clickButtonArrow = (a,b) => {
    console.log(a+b)
}

// We can have functions inside an object
const objectWithFunction = {
    math: 20,
    science: 30,
    health:40,
    calculatePercentage: () => {
        console.log(((20+30+40)/300) * 100); 
    },
    extra: {
        football: 50 
    }
}
console.log(objectWithFunction.extra.football)