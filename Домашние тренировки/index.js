"use strict"
let summ = 0;
let arr = [1, 3, 4, 5, 6, 7];
function calc() {
    for {let elem of arr) {
        if(elem % 2 == 0) {
            summ += elem;
        }
    }
    return summ;
}
calc();