function countScores(people) {
    const scoreCount = {}; 
   
    for( let i = 0; i < people.length; i++) { 
        const { scorer, points } = people[i]; 
        if(scoreCount[scorer]) { 
            scoreCount[scorer] += points; 
        }else { 
            scoreCount[scorer]= points; 
        }
        
    }
return scoreCount; 
}


