const smoothieMachine = (...ingredients)=> { 
    return (...moreIngredients)=> { 
        ingredients.push(...moreIngredients); 
        return "im having a smoothie with" + ingredients.join("and")
    };
}; 

