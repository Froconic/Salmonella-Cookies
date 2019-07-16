'use strict';
// initializing necessary global variables
var hours = ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];
var cookieArray = [];

//Constructor Function for the cookie shops
function CookieShop(minCustomers, maxCustomers, avgCookie, hours) {
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookie = avgCookie;
  this.hours = hours;
  // this.randomNum = randomNum;
}

//Creates all locations with information
var firstAndPike = new CookieShop(23, 65, 6.3, hours);
var seaTacAirport = new CookieShop(3, 24, 1.2, hours);
var seattleCenter = new CookieShop(11, 38, 3.7, hours);
var capitolHill = new CookieShop(20, 38, 2.3, hours);
var aiki = new CookieShop(2, 16, 4.6, hours);
// console.log(aiki.hours);
// console.log(aiki.maxCustomers);
// console.log(aiki.minCustomers);
// console.log(aiki.avgCookie);

// Creates the method for gathering the random amount of customers that hour
CookieShop.prototype.random = function (max, min) {

  this.min = Math.ceil(min);
  this.max = Math.floor(max);

  return Math.floor(Math.random() * (this.max - this.min)) + this.min;

};

// console.log(aiki.random(aiki.maxCustomers, aiki.minCustomers));

CookieShop.prototype.cookiesPerHour = function (obj) {
  this.min = obj.minCustomers;
  this.max = obj.maxCustomers;

  var cookie = obj.avgCookie;
  // console.log(cookie);
  var customerAmount = obj.random(this.min, this.max);
  // console.log(customerAmount);
  var hourlyCookies = customerAmount * cookie;
  // console.log(hourlyCookies);
  var sanHourlyCookies = Math.round(hourlyCookies);
  return sanHourlyCookies;
};

// console.log(aiki.cookiesPerHour(aiki));

CookieShop.prototype.cookieArrayCreator = function (obj) {
  for (var i = 0; i < this.hours.length; i++)
  {
    var amount = obj.cookiesPerHour(obj);
    // console.log(amount);
    var cookieSum = 0;
    cookieSum = cookieSum + amount;
    // console.log(cookieSum);
    cookieArray.push(cookieSum);
    // console.log(cookieArray[i]);
  }

  // console.table(cookieArray);
  return cookieArray;
};

// console.log(aiki.cookieArrayCreator(aiki));

CookieShop.prototype.sum = function (obj) {
  var temp = obj.cookieArrayCreator(obj);
  var total = 0;
  for (var i = 0; i < this.hours.length; i++) {
    total = temp[i] + total;
    // console.log(total);
  }

  // console.log(total);
  return total;
};

// console.log(aiki.sum(aiki));


CookieShop.prototype.finalOutput = function (obj) {
  var results = obj.cookieArrayCreator(obj);
  var finalSum = obj.sum(obj);

  for (var i = 0; i < this.hours.length; i++) {
    results[i] = `${hours[i]}: ${results[i]} cookies`;
    console.log(results[i]);
  }

  finalSum = `Total: ${finalSum} cookies`;
  console.log(finalSum);
  console.table(results + finalSum);
  return results + finalSum;

};

console.log(aiki.finalOutput(aiki));

// finalOutput(firstAndPike);
// finalOutput(seaTacAirport);
// finalOutput(seattleCenter);
// finalOutput(capitolHill);
// finalOutput(aiki);

// console.log(finalOutput(firstAndPike));

// console.log(sum(firstAndPike));

// console.log(cookieArrayCreator(firstAndPike));

// console.log(cookieperHour(firstAndPike));
// console.log(firstAndPike.randomNum(minimum, maximum));

// console.log(firstAndPike.randomNum());
