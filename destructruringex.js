// 1. 8, 1846
//2. yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659
// 3. Your name is alejandro and you like purple, Your name is melissa and you like green, Your name is  and you like green
// 4. maya, marisa, chi
// 5. Raindrops on roses, whiskers on kittens, ['Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings']
// 6. [10, 30, 20]

const obj = { 
    numbers: {
        a:1,
        b:2
    }
}
const {a,b} = obj.numbers

const arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]]


const places = ['Tom', 'Margaret', 'Allison', 'David', 'Pierre']
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})