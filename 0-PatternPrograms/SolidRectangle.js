"use strict";
// Print the Pattern
/*
 *****
 *****
 *****
 *****
 *****
 */

function solidRectangle(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 5; j++) {
      console.log("*");
    }
    console.log("\n");
  }
}

solidRectangle(5);
