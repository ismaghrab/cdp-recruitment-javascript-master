const { data } = require("../data/data");


const countCountry = () => {
    return countries = data.map(country => ({
        ...country,
        name: country.name + "[" + country.name.length + "]",
        people: countPeople(country.people)
    }))
}

function countPeople(people = []) {
    return people.map((p) => ({
        ...p,
        name: p.name + "[" + p.animals.length + "]",
    }))
}

module.exports = { countCountry }