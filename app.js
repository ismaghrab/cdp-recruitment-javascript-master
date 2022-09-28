const { filterPeopleFromCountry } = require('./filter/filter')
const { countCountry } = require('./count/count')


main()

function main() {
    const argvcommand = process.argv.slice(2)
    const option = argvcommand[0]
    if (option.startsWith("--filter=")) {
        const filterBy = option.split('=')
        console.log(JSON.stringify(filterPeopleFromCountry(filterBy[1]),null,2))
    }
    else if (option.startsWith("--count")) {
        console.log(JSON.stringify(countCountry(),null,2))

    }
    else {
        throw "Please enter a valid argument"
    }
}
