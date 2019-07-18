'use strict';
// ______________________DATA___________________________________________
// initializing necessary global variables
var hours = ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];
var cookieArray = [];
var dailyTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// ______________________FUNCTIONALITY___________________________________________
//Constructor Function for the cookie shops
function CookieShop(name, minCustomers, maxCustomers, avgCookie, hours, array) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookie = avgCookie;
  this.hours = hours;
  this.array = array;

  // this.randomNum = randomNum;
}

//Creates all locations with information
var firstAndPike = new CookieShop('firstAndPike', 23, 65, 6.3, hours, []);
var seaTacAirport = new CookieShop('seaTacAirport', 3, 24, 1.2, hours, []);
var seattleCenter = new CookieShop('seattleCenter', 11, 38, 3.7, hours, []);
var capitolHill = new CookieShop('capitolHill', 20, 38, 2.3, hours, []);
var aiki = new CookieShop('aiki', 2, 16, 4.6, hours, []);

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
    obj.array.push(cookieSum);
    // console.log(obj.array[i]);
  }

  // console.table(obj.array);
  return obj.array;
};

console.log(aiki.cookieArrayCreator(aiki));
console.log(seaTacAirport.cookieArrayCreator(seaTacAirport));
console.log(aiki.array);
console.log(seaTacAirport.array);

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

function tableHeadCreator() {
  var tHead = document.getElementById('table-head');
  var blankElement = document.createElement('th');
  // console.log('element created');
  var finalElement = document.createElement('th');
  // console.log(' final element created');
  tHead.appendChild(blankElement);
  // console.log('element inserted');
  // tHead.textContent = '';

  for (var i = 0; i < hours.length; i++) {
    // console.log('I am running');
    var th = document.createElement('th');
    th.textContent = hours[i];
    tHead.appendChild(th);
  }

  tHead.appendChild(finalElement);
  // console.log(' final element inserted');
  finalElement.textContent = 'Daily Totals';

};

function tableBodyCreator(obj) {
  //Body variables
  obj.cookieArrayCreator(obj);
  var fill = obj.array;
  // console.log(`array is: ${fill}`);
  var location = obj.name;
  var total = 0;
  var tBody = document.getElementById('table-body');
  var tBodyEl = document.createElement('tr');
  var tLocation = document.createElement('td');
  // console.log('row created');
  var tFinalEl = document.createElement('td');
  // console.log('Final cell created');
  // //Footer variables
  // var msg = 'Daily Totals';
  // var tFoot = document.getElementById('table-foot');
  // var tFootRow = document.createElement('tr');
  // var totalsRow = document.createElement('td');
  // tFoot.appendChild(tFootRow);
  // tFootRow.appendChild(totalsRow);
  // totalsRow.textContent = msg;
+
  //Body part of the function
  tBody.appendChild(tBodyEl);
  tBodyEl.appendChild(tLocation);
  tLocation.textContent = location;
  // console.log(tLocation.textContent);
  // console.log(`The location is: ${location}`);
  for (var i = 0; i < hours.length; i++) {
    var tb = document.createElement('td');
    fill = obj.array;
    // console.log(`fill is this: ${fill[i]}`);
    tb.textContent = fill[i];
    // console.log(`fill inserted: ${fill[i]}`);

    total = total + fill[i];
    // console.log(`total calculated to be ${total}`);

    tBodyEl.appendChild(tb);
    // console.log(`child created`);

  }

  // console.log(`final total: ${total}`);
  tBodyEl.appendChild(tFinalEl);
  tFinalEl.textContent = total;
  // console.log(`total: ${total}`);

  //   //Footer part of the Function
  //   for (var i = 0; i < hours.length; i++) {
  //     var tf = document.createElement('td');
  //     // tf.textContent = ;
  //     tHeadEl.appendChild(th);
  //   }
  //
  //   th = document.createElement('th');
  //   thead.appendChild(th);
  // };
  //
  // function tableFootCreator() {
  //
  //
};

// ______________________EXECUTABLE___________________________________________

tableHeadCreator();
tableBodyCreator(aiki);
tableBodyCreator(seaTacAirport);

// console.log(aiki.finalOutput(aiki));
// firstAndPike.finalOutput(firstAndPike);
// seaTacAirport.finalOutput(seaTacAirport);
// seattleCenter.finalOutput(seattleCenter);
// capitolHill.finalOutput(capitolHill);
// aiki.finalOutput(aiki);

// console.log(finalOutput(firstAndPike));

// console.log(sum(firstAndPike));

// console.log(cookieArrayCreator(firstAndPike));

// console.log(cookieperHour(firstAndPike));
// console.log(firstAndPike.randomNum(minimum, maximum));

// console.log(firstAndPike.randomNum());
