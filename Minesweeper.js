// function to change all the numbers adjacent to the mine
// Have two for loops, one nested in the other to loop over the array
// Change every index that is not the hash character to 0
function findMine(numGrid) {
    for(let i = 0; i < numGrid.length; i++) {
        for(let j = 0; j < numGrid[i].length; j++) { 
            if(numGrid[i][j] !== "#") {
                numGrid[i][j] = 0;
            }
        }
    }
    // Have another for loop nested in another to loop over array
    for(let i = 0; i < numGrid.length; i++) {
        for(let j = 0; j < numGrid[i].length; j++) {
            if(numGrid[j][i] == "#") { // If the current iteration is equal to the # character then skip
                continue;
            }
            // On the left side of the array all the indexes before the 1st are undefined so we start with
            // all the indexes which are not undefined
            // Then determine which index is holding the # and add 1 to the indexes adjacent to it using 
            // conditionals

            if(numGrid[i-1] != undefined) {
                if(numGrid[i-1][j-1] == "#") {
                    numGrid[i][j] += 1;
                }
                if(numGrid[i-1][j] == "#") {
                    numGrid[i][j] += 1;
                }
                if(numGrid[i-1][j+1] == "#") {
                    numGrid[i][j] += 1;
                }
                
            // On the right side of the array all the indexes before the 1st are undefined so we start with
            // all the indexes which are not undefined
            // Then determine which index is holding the # and add 1 to the indexes adjacent to it using 
            // conditionals
            if(numGrid[i+1] !=undefined) {
                if(numGrid[i+1][j+1] == "#") {
                    numGrid[i][j] += 1;
                }
                if(numGrid[i+1][j] == "#") {
                    numGrid[i][j] += 1;
                }
                if(numGrid[i+1][j-1] == "#") {
                    numGrid[i][j] += 1;
                }
                }
            // Then these conditionals handle the indexes which are not undefined on left or right
            if(numGrid[i][j+1] == "#") {
                numGrid[i][j] += 1;
            }
            if(numGrid[i][j-1] == "#") {
                numGrid[i][j] += 1;
            }
        }
    }
}
// Return the multi-dimensional array
    return numGrid;
}
// This multi-dimensional array was use to test my code
var nuumGrid = [
    ["-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-"],
    ["-", "-", "#", "-", "-"],
    ["-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-"]
];
// Printing the array to the console
console.log(findMine(nuumGrid));