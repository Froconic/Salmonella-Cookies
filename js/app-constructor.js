'use strict';
// ______________________DATA___________________________________________
// initializing necessary global variables
var hours = ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];
var cookieArray = [];

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
var firstAndPike = new CookieShop('firstAndPike', 23, 65, 6.3, hours, cookieArray);
var seaTacAirport = new CookieShop('seaTacAirport', 3, 24, 1.2, hours, cookieArray);
var seattleCenter = new CookieShop('seattleCenter', 11, 38, 3.7, hours, cookieArray);
var capitolHill = new CookieShop('capitolHill', 20, 38, 2.3, hours, cookieArray);
var aiki = new CookieShop('aiki', 2, 16, 4.6, hours, cookieArray);

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

function tableHeadCreator() {
  var tHead = document.getElementById('table-head');
  var tHeadEl = document.createElement('th');
  tHeadEl.textcontent = '';
  tHead.appendChild(tHeadEl);
  for (var i = 0; i < hours.length; i++) {
    var th = document.createElement('th');
    th.textContent = hours[i];
    tHeadEl.appendChild(th);
  }

  th = document.createElement('th');
  tHead.appendChild(th);
};

function tableBodyCreator(obj) {
  obj.cookieArrayCreator(obj);
  var fill = obj.array;
  console.log(`array is: ${fill}`);
  var location = obj.name;
  var total = 0;
  var tBody = document.getElementById('table-body');
  var tBodyEl = document.createElement('tr');
  console.log('row created');
  tBodyEl.textcontent = location;
  console.log(`The location is: ${location}`);
  tBody.appendChild(tBodyEl);
  for (var i = 0; i < hours.length; i++) {
    var tb = document.createElement('td');
    var fill = obj.array;
    console.log(`fill is this: ${fill[i]}`);
    tb.textContent = fill[i];
    console.log(`fill inserted: ${fill[i]}`);

    total = total + fill[i];
    console.log(`total calculated to be ${total}`);

    tBodyEl.appendChild(tb);
    console.log(`child created`);

  }

  var tFinal = document.getElementById('table-body');
  var tFinalEl = document.createElement('td');
  console.log('Final cell created');
  tFinal.textcontent = ` Final:${total}`;
  console.log(`total: ${total}`);
  tFinal.appendChild(tFinalEl);
};

function tableFootCreator() {
  var thead = document.getElementById('table-foot');
  var tHeadEl = document.createElement('th');
  thead.appendChild(tHeadEl);
  for (var i = 0; i < hours.length; i++) {
    var th = document.createElement('th');
    th.textContent = hours[i];
    tHeadEl.appendChild(th);
  }

  th = document.createElement('th');
  thead.appendChild(th);
};

// ______________________EXECUTABLE___________________________________________

tableHeadCreator();
tableBodyCreator(aiki);

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
