const { data } = require("../data/data");


const filterPeopleFromCountry = (filter) => {
    return countries = data.reduce((country, c) => {
        const people = filterAnimalsFromPeople(filter, c.people)
        if (people.length > 0) {
            country.push({ ...c, people })
        }
        return country
    }, [])
}

function filterAnimalsFromPeople(filter, people = []) {
    return people.reduce((arr, p) => {
        const animals = (p.animals).filter(
            animal => new RegExp(filter).test(animal.name)
        );
        if (animals.length > 0) {
            arr.push({ ...p, animals })
        }
        return arr
    }, [])
}

module.exports = { filterPeopleFromCountry }