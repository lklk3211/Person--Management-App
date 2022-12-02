const companies = [
    {name: 'Company - 1', catgeory: 'IT', start: 1987, end: 2005},
    {name: 'Company - 2', catgeory: 'Sales', start: 1993, end: 2002},
    {name: 'Company - 3', catgeory: 'Finance', start: 1980, end: 2012},
    {name: 'Company - 4', catgeory: 'Retail', start: 1978, end: 2011},
    {name: 'Company - 5', catgeory: 'Sales', start: 1983, end: 2020},
    {name: 'Company - 6', catgeory: 'Finance', start: 1975, end: 2018},
    {name: 'Company - 7', catgeory: 'IT', start: 1943, end: 2020},
]

// Traditional Loop
// for(let i=0; i < companies.length; i++) {
//     console.log(companies[i].name)
// }

// 1. forEach()
// companies.forEach( (company, index, array) => console.log(company.start) )

// 2. map()
// const companyNames = companies.map( company => company.name )
// console.log(companyNames)

// const companYAges = companies.map(company => company.end - company.start)
// console.log(companYAges)

// 3. filter()
const salesCompanies = companies.filter( company => company.catgeory === 'Sales' )
console.log(salesCompanies)

// Q: -
// Step 1
// const agedCompanies = companies.filter(company => company.end - company.start >= 20)
// const agedNameCompanies = agedCompanies.map(company => company.name)
// console.log(agedNameCompanies)

const result = companies.filter(company => company.end - company.start >= 20).map(company => company.name)
console.log(result)