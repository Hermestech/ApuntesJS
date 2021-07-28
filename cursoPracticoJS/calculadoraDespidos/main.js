
function vacationDays(year){
    let arrayDays = []
    let daysByYear = 6

    if(year < 30 ){
        for(let i = 0; i < 10; i++){
            arrayDays.push(daysByYear = daysByYear + 2)
        }
    }
    switch(year){
        case 1:
            return 6
        case 2:
            return arrayDays[0]
        case 3: 
            return arrayDays[1]
        case 4 :
            return arrayDays[2]
    }
    if(year === 5 || year < 10){
        return arrayDays[3]
    }
    if(year === 10 || year < 15){
        return arrayDays[4]
    }
    if(year === 15 || year < 20){
        return arrayDays[5]
    }
    if(year === 20 || year < 25){
        return arrayDays[6]
    }
    if(year === 25 || year < 30){
        return arrayDays[7]
    }

}

const oneSalary = (salary) =>{
    return (salary/30)
}

function dailyChristmasBonus (salary, year){
    
} 