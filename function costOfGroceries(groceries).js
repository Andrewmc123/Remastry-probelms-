function costOfGroceries(groceries){ 
    let total = 0; 
    for(let i = 0; i < groceries.length; i++) { 
if(grocery === 'butter') { 
    total += 1 
}
if(grocery == 'eggs'){ 
    total += 2 
}
if(grocery === 'milk') { 
    total += 3 
}
if(grocery === 'bread') {
    total += 4 
}
if(grocery === 'chesse') {
    total += 5
}
    }
    return total; 
}


function mostExpensiveGroceries(groceriesList){
    let highest = -infinity;  
    let highestIndex = 0; 

    for(let i = 0; i < groceryList.length; i++){
        let groceryList = groceriesList[i]; 
let costOfList = costOfGroceries(groceryList); 
highest = costOfList; 
highestIndex = i;
    }
    return highestIndex;  
}