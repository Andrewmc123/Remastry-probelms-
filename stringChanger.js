function stringChanger(word, operation){ 
if(operation === 'capitalize')  
    return word.chartAt(0).toUpperCase() + word.slice(1); 
if(operation === 'uppercase') return word.toUpperCase();
if(operation === 'double') return word + word; 
if(operation === 'reverse') return word.split('').reverse().join('');
return word;
}
     
 
