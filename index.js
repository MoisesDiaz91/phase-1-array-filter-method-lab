// Code your solution here
function findMatching(list, result){
    return list.filter((possibleMatch) => possibleMatch.toLowerCase() === result.toLowerCase());
}

function fuzzyMatch(list, target){
    return list.filter((placeholder)=> placeholder.toLowerCase().indexOf(target.toLowerCase())=== 0);
}

function matchName(list, targetName){
    return list.filter((placeholder)=>placeholder.name === targetName);
}