// week 3 project :)

//1 Programmatically subtract the value of the first element in the array from the value in the last element of the array 
let ages = [ 3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages[ages.length-1] -ages [0]);


//1b. Add a new age to your array and repeat the step above to ensure it is dynamic.
ages.push (10);
console.log (ages[ages.length-1] - ages[0]);


//1c. Use a loop to iterate through the array and calculate the average age
sum=0;
for(i=0; i<ages.length; i++){
sum = sum + ages[i];
}
console.log(sum/ages.length);


//2. Use a loop to iterate through the array and calculate the average number of letters per name.
 let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck','Bob' ]; 
    let lenghts = names.map (function(element) {
    return element.length;
   });
   console.log(lenghts);


//2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
let arr= names[0];
for(i=1; i<names.length; i++)
{
arr = arr.concat(" ",names[i]);
}
console.log(arr);


//3. How do you access the last element of any array?
// Answer: starting with the first value being 0 countdown and input number in console. 
let arry = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arry[7]);


//4. How do you access the first element of any array?
// Answer: In arrays the first value is counted as 0, then input in console.
 let numbers = [2, 4, 6, 8, 10];
 console.log(numbers[0]);


//5. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLength = [3, 5, 3, 5, 4, 3];
for(i=0; i <= nameLength; i++){
   }
   console.log(nameLength);


//6.Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
sum=23;
for(i=0; i < nameLength; i++)
{
sum = sum + nameLengths[i];
}
console.log(sum);


//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.
function concatNTimes(word, n){
let con= word;
for(i=1; i<=n; i++){
con = con.concat(word);
}
return con;
}
console.log (concatNTimes("Hello", 3));


//8. Write a function that takes two parameters, firstName and lastName, and returns a full name. 
function createFullNames (firstName, lastName){
   console.log (firstName + " " + lastName);
} 
createFullNames ('Edith', 'Becerra');


//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let myArr = [50,10,25,20,15];
function isTotalMoreThan100(myArr){
sum=0; 
for(i=0; i<arr.length; i++){
sum = sum + arr[i];}
if(sum != 100)
{
return true;
}
else
{
return false;
}
} console.log (isTotalMoreThan100(myArr));

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

let myArr2 = [20,21,22,23,24]
function average(arr2){
sum=0;
for(i=0; i<myArr2.length; i++){
sum = sum + myArr2[i];
}
return (sum/myArr2.length);
} console.log(average(myArr2));

//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function compareAverage(arr1, arr2){
if(average(arr1) >= average(arr2)){
return true;
}
else {
return false;
}
} console.log(compareAverage(myArr, myArr2));

//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
// Declare Boolean
let isHotOutside = true;
let moneyInthePocket = 12;
function willBuyDrink(isHotOutside, moneyInPocket){
if((isHotOutside) && (moneyInPocket > 10.50)){
return true;
}
else {
return false;
}
}console.log(willBuyDrink(isHotOutside, moneyInthePocket));

//13. Create a function of your own that solves a problem. 
// Create a function called mySneakers that accepts 2 parameters named cardBalance and price. 
//If the price is more than the card balance, return false; otherwise return new card balance.
// Figure out value of mySneakers.
let cardBalance = 100;
let price = 50;
function mySneakers (cardBalance, price){
   if (price > cardBalance) {
      return false;
   } else {
      return cardBalance - price;
   }
}    console.log (mySneakers (cardBalance, price));
