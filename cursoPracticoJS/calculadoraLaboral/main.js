
function calcularTresMeses(salary){
    return (salary * 3 )
}
function twentyDaysByYear(salary, year){
    let oneSalary = salary / 30
    let twentyDays = oneSalary * 20 
    let total = twentyDays * year

    return parseInt(total)
}
function seniorityBonus(salary, year){
    let oneSalary = salary / 30

    let twelveDays = oneSalary * 12
    return parseInt(twelveDays * year)
}

function vacationalBonus(salary, year){
    
}