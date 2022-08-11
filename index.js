// Code your solution in this file!
const arr = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers() {
    return [arr[arr.length - 4], arr[arr.length - 3]];
}

function returnLastTwoDrivers() {
    return [arr[arr.length - 2], arr[arr.length - 1]];
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function fareMultiplier(fare) {
        return fare * int;
    }
}

function fareDoubler(fare) {
    return 2 * fare;
}

function fareTripler(fare) {
    return 3 * fare;
}
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function selectDifferentDrivers(arr, callback) {
    for (let i = 0; i < arr.length; i++)
        return callback(arr[i]);
}

selectDifferentDrivers(drivers, returnFirstTwoDrivers);
selectDifferentDrivers(drivers, returnLastTwoDrivers);