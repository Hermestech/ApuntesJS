const oneSalary = (salary) =>{
    return(salary / 30)
}

function seniorityBonus(salary, year){
    let twelveDays = oneSalary(salary) * 12
    return parseInt(twelveDays * year)
}

function vacationDays(year){
    let arrayDays = [];
    let restDays = 6 

    if (year <= 30){
        for(let i=1; i<10; i++){
            arrayDays.push(restDays = restDays+2)
        } 
    }
    
    switch (year) {
        case 1:
            return restDays
        case 2:
            return arrayDays[0]
        case 3:
            return arrayDays[1]
        case 4:
            return arrayDays[2]
    }
    if(year ===5 || year < 10){
        return arrayDays[3]
    }
    if(year === 10 || year < 15){
        return arrayDays[4]
    }
    if(year === 15 || year < 20){
        return arrayDays[5]
    }
    if(year ===20 || year < 25){
        return arrayDays[6]
    }
    if(year === 25 || year < 30){
        return arrayDays[7]
    }
    if(year == 30){
        return arrayDays[8]
    }
}

function dailyHolidayBonus(salary, year){
    const vD = vacationDays(year)
    const subTotal = oneSalary(salary * vD * 0.25)
    
    return subTotal/365

}

function christmasBonus(salary){
   const subTotal = oneSalary(salary) * 15

   return subTotal/365
}

function SMI(salary, year){
    //salarioDiario + primaVacacionalDiario + aguinaldo
    let salarioDiario = oneSalary(salary)
    let primaVacacionalDiario = dailyHolidayBonus(salary, year)
    let aguinaldoDiario = christmasBonus(salary)

    let subTotal = salarioDiario + primaVacacionalDiario + aguinaldoDiario

    let total = subTotal.toFixed(2)

    return parseFloat(total * 30)
}

function calcularTresMeses(salary, year){
    let salarioDiario = SMI(salary, year)    

    return (salarioDiario * 3 )
}

function twentyDaysByYear(salary, year){
    let twentyDays = oneSalary(salary) * 20 

    let total = twentyDays * year

    return parseInt(total)
}