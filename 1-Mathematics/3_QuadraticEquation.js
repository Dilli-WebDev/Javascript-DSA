"use strict";
/*
Given a quadratic equation ax2 + bx + c = 0, find its roots. If the roots are imaginary, return only one integer -1. Always return the roots as the greatest integers less than or equal to the actual roots, with the maximum root first followed by the minimum root.

Note: If roots are imaginary, the generated output will display "Imaginary".

Input:
a = 1, b = -7, c = 12
Output: 4 3
Explanation: Roots of equation x2 - 7x + 12 are 4 and 3.

Expected Time Complexity: O(1)
Expected Auxiliary Space : O(1)

The values of the roots depends on the term (b2 – 4ac) which is known as the discriminant (D). 
If D > 0:
      => This occurs when b2 > 4ac.
      => The roots are real and unequal.
      => The roots are {-b + √(b2 – 4ac)}/2a and {-b – √(b2 – 4ac)}/2a.
Else If D = 0:
      => This occurs when b2 = 4ac.
      => The roots are real and equal.
      => The roots are (-b/2a).
Else if D < 0:
      => This occurs when b2 < 4ac.
      => The roots are imaginary and unequal.
Implementation

    Declare empty vector 'roots' and two variables root1 and root2.
    Initialize variable temp with value (b2 – 4ac), it is the value of discriminant (D).
    If temp is less than 0, means roots are imaginary. 
    So push back -1 into 'roots' vector as asked in problem statement.
    Else roots are real, so calculate root1 and root2 using Sridharacharya Formula, then take the floor value as asked in problem statement.
    root1 is floor((-b + sqrt(temp)) / (2 * a));
    root2 is floor((-b - sqrt(temp)) / (2 * a));
    1. Push back max of root1 and root2 into roots vector.
    2. Push back min of root1 and root2 into roots vector.
    Return vector 'roots' as answer.

Let us understand it better with the help of an example:
Input: a = 1, b = -7, c = 12
So the equation if 1.x2 -7.x + 12 = 0
temp (discriminant) = (-7)2 - (4*1*12 ) = 1 
root1 = 4 (which is floor(( 7+√1)/(2*1)) = 4)
root2 = 3 (which is floor(( 7-√1)/(2*1)) = 3).
roots = {4, 3}.
Complexity

Time Complexity: O(1), as we are performing simple mathematical and logical operations having constant time complexity.
Auxiliary Space: O(1), as we are not using any extra space, only some variables and a vector having maximum size of 2.

*/

function findRoots(a, b, c) {
  // If a is 0, then equation is not
  // quadratic, but linear
  if (a == 0) {
    console.log("Invalid");
    return;
  }
  let roots = new Array();
  let root1 = 0,
    root2 = 0;
  // value of b^2-4ac
  let temp = Math.pow(b, 2) - 4 * a * c;

  // if b^2-4ac is less then zero then roots are imaginary
  if (temp < 0) roots.push(-1);
  else {
    //calculate root1 and root2 using fomula
    // Math.floor function returns greatest integer below ( -b + sqrt(temp) )
    // Math.sqrt function returns square root of temp
    root1 = Math.floor((-b + Math.sqrt(temp)) / (2 * a));
    root2 = Math.floor((-b - Math.sqrt(temp)) / (2 * a));
    // store both roots calculated in Array
    // Math.max function returns greater value between root1 and root2
    // Math.min function returns smaller value between root1 and root2
    roots.push(Math.max(root1, root2));
    console.log(roots);
    roots.push(Math.min(root1, root2));
    console.log(roots);
  }
  return roots;
}

// Test the function
console.log(findRoots(1, -7, 12));
