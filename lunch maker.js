/* We will work with array to add ,remove items 
from the array starts and ends of array and how to
 randomly select element of an array.*/

let lunches = [];
function addLunchToEnd(lunches, lunchItem) {
    lunches.push(lunchItem);
    console.log(`${lunchItem} added to the end of the lunch menu.`);
    return lunches;
}
addLunchToEnd(lunches, ["Pizza", "Tacos", "Burger"]);

//Add lunch to start  function
function addLunchToStart(lunches, lunchItem) {
    lunches.unshift(lunchItem);
    console.log(`${lunchItem} added to the start of the lunch menu.`);
    return lunches;
}
addLunchToStart(lunches, ["Burger", "Sushi", "Pizza"]);

//Remove last element of lunches array
function removeLastLunch(lunches) {

    if (lunches.length !== 0) {
        let popedLunch = lunches.pop();
        console.log(`${popedLunch} removed from the end of the lunch menu.`);
    }
    else {
        console.log("No lunches to remove.");
    }
    return lunches;
}
removeLastLunch(["Stew", "Soup", "Toast"]);

//Remove first element of linches array
function removeFirstLunch(lunches) {
    if (lunches.length != 0) {
        let removedItem = lunches.shift();
        console.log(`${removedItem} removed from the start of the lunch menu.`)

    }
    else {
        console.log("No lunches to remove.");
    }
    return lunches;
}
removeFirstLunch(["Salad", "Eggs", "Cheese"]);

//get Random Lunch function:
function getRandomLunch(lunches) {
    let arrLength = lunches.length;
    if (lunches.length == 0) {
        console.log('No lunches available.');
    }
    else {
        let randNumber = Math.floor(Math.random() * arrLength);
        let randElement = lunches[randNumber];
        console.log(`Randomly selected lunch: ${randElement}`);
    }
}
getRandomLunch(["Salad", "Eggs", "Cheese"]);

// funation show Lunch Menu
function showLunchMenu(lunches) {
    let [l1, l2, l3, ...rest] = lunches

    if (lunches.length != 0) {
        console.log(`Menu items: ${l1}, ${l2}, ${l3}`);
    }
    else {
        console.log('The menu is empty.');
    }
}
showLunchMenu(["Greens", "Corns", "Beans"]);