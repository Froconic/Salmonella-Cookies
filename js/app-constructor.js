// 'use strict';

// // ______________________DATA___________________________________________
// initializing necessary global variables
var hours = ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];
var cookieArray = [];
var hourlyTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
;



//Constructor Function for the cookie shops
function CookieShop(name, minCustomers, maxCustomers, avgCookie, hours, array) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookie = avgCookie;
  this.hours = hours;
  this.array = [];

  // this.cookiesPerHour();
  // This adds the new store to the list of locations

  // this.randomNum = randomNum;
}
// Create an empty array in order to store all of the locations


//---------------Inizialization-------------------------------
//Creates all locations with information
var shops = [
  new CookieShop('firstAndPike', 23, 65, 6.3, hours, []),
  new CookieShop('seaTacAirport', 3, 24, 1.2, hours, []),
  new CookieShop('seattleCenter', 11, 38, 3.7, hours, []),
  new CookieShop('capitolHill', 20, 38, 2.3, hours, []),
  new CookieShop('aiki', 2, 16, 4.6, hours, []),
];

console.log(shops);


//Tests to check that the properties return correctly
// console.log(aiki.hours);
// console.log(aiki.maxCustomers);
// console.log(aiki.minCustomers);
// console.log(aiki.avgCookie);
//console.log(aiki.randomNum);
// console.log(aiki.array);


// ______________________FUNCTIONALITY___________________________________________

// ----------------------Methods-----------------------------------
// Creates the method for gathering the random amount of customers that hour
CookieShop.prototype.random = function() {

  var min = Math.ceil(this.minCustomers);
  var max = Math.floor(this.maxCustomers);

  return Math.floor(Math.random() * (max - min)) + min;
};

// Tests for the random method
// console.log(aiki.random());

//Calculates the cookies per hour
CookieShop.prototype.cookiesPerHour = function() {
  var min = this.minCustomers;
  var max = this.maxCustomers;

  var cookie = this.avgCookie;
  // console.log(cookie);
  var customerAmount = this.random();
  // console.log(customerAmount);
  var hourlyCookies = customerAmount * cookie;
  // console.log(hourlyCookies);
  var sanHourlyCookies = Math.round(hourlyCookies);
  return sanHourlyCookies;
};

// Tests the Cookies per hour method
// console.log(aiki.cookiesPerHour());

//Creates the cookie array
CookieShop.prototype.cookieArrayCreator = function() {
  for (var i = 0; i < this.hours.length; i++) {
    var amount = this.cookiesPerHour();
    // console.log(amount);
    var cookieSum = 0;
    cookieSum = cookieSum + amount;
    // console.log(cookieSum);
    this.array.push(cookieSum);
    // console.log(this.array[i]);
  }

  // console.table(this.array);
  return this.array;
};

// Tests for the method
// console.log(aiki.cookieArrayCreator());
// console.log(seaTacAirport.cookieArrayCreator());
// console.log(aiki.array);
// console.log(seaTacAirport.array);

// Sums the totla for a locations daily output
CookieShop.prototype.sum = function() {
  var temp = this.cookieArrayCreator();
  var total = 0;
  for (var i = 0; i < this.hours.length; i++) {
    total = temp[i] + total;
    // console.log(total);
  }

  return total;
};


// console.log(aiki.sum());

//Outputs the message for the lists
CookieShop.prototype.finalOutput = function() {
  var results = this.cookieArrayCreator();
  var finalSum = this.sum();

  for (var i = 0; i < this.hours.length; i++) {
    results[i] = `${hours[i]}: ${results[i]} cookies`;
    console.log(results[i]);
  }

  finalSum = `Total: ${finalSum} cookies`;
  console.log(finalSum);
  // console.table(results + finalSum);
  return results + finalSum;

};

// console.log(aiki.finalOutput());

//Renders the table body with the data filled in
CookieShop.prototype.render = function() {
  this.cookieArrayCreator();
  var fill = this.array;
  // console.log(`array is: ${fill}`);
  var location = this.name;
  var total = 0;
  var tBody = document.getElementById('table-body');
  var tBodyEl = document.createElement('tr');
  var tLocation = document.createElement('td');
  // console.log('row created');
  var tFinalEl = document.createElement('td');
  // console.log('Final cell created');


  tBody.appendChild(tBodyEl);
  tBodyEl.appendChild(tLocation);
  tLocation.textContent = location;
  // console.log(tLocation.textContent);
  // console.log(`The location is: ${location}`);


  for (var i = 0; i < hours.length; i++) {
    var tb = document.createElement('td');
    fill = this.array;
    // console.log(`fill is this: ${fill[i]}`);
    tb.textContent = fill[i];
    // console.log(`fill inserted: ${fill[i]}`);

    total = total + fill[i];
    // console.log(`total calculated to be ${total}`);

    hourlyTotals[i] = hourlyTotals[i] + fill[i];
    // console.log(`Total for ${hours[i]}: is ${hourlyTotals[i]}`);
    tBodyEl.appendChild(tb);
    // console.log(`child created`);
  }

  // console.log(`final total: ${total}`);

  tBodyEl.appendChild(tFinalEl);
  tFinalEl.textContent = total;
  // console.log(`total: ${total}`);
};
// Test for the render function

// console.log(tableHeadCreator());
// console.log(aiki.render());
// console.log(seaTacAirport.render());
// console.log(tableBodyCreator(seaTacAirport));


// Calculates the totals for each column
function footerTotal() {
  var totalFill = hourlyTotals;
  console.log(`array is: ${totalFill}`);
  var title = 'Hourly Totals';
  var massTotal = 0;
  var tableFooter = document.getElementById('table-foot');
  var tableFooterEl = document.createElement('tr');
  var tableTitle = document.createElement('td');
  console.log('row created');
  var tableFooterFinalCell = document.createElement('td');
  console.log('Final cell created');


  tableFooter.appendChild(tableFooterEl);
  tableFooterEl.appendChild(tableTitle);
  tableTitle.textContent = title;
  console.log(tableTitle.textContent);
  console.log(`The row is: ${title}`);


  for (var i = 0; i < hours.length; i++) {
    var tf = document.createElement('td');
    console.log(`fill is this: ${totalFill[i]}`);
    tf.textContent = totalFill[i];
    console.log(`fill inserted: ${totalFill[i]}`);


    massTotal = massTotal + totalFill[i];
    console.log(`total calculated to be ${massTotal}`);


    hourlyTotals[i] = hourlyTotals[i] + totalFill[i];
    console.log(`Total for ${hours[i]}: is ${hourlyTotals[i]}`);
    tableFooterEl.appendChild(tf);
    console.log(`child created`);
  }

  console.log(`final total: ${massTotal}`);

  tableFooterEl.appendChild(tableFooterFinalCell);
  tableFooterFinalCell.textContent = massTotal;
  console.log(`total: ${massTotal}`);
};



//Tests for the footerTotals
// console.log(tableHeadCreator());
// console.log(aiki.render());
// console.log(CookieShop.finalRender);
// console.log(footerTotal());


CookieShop.prototype.finalRender = function() {
  var tableBody = document.getElementbyId('table-body');
  tableBody.textContent(tableBody);
  hourlyTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  console.log('total reset');

  for (var i = 0; i < CookieShop.length; i++) {
    CookieShop.all[i].render();
    console.log(`Curren location: ${CookieShop.all[i].name}`);
  };

  footerTotal();
};

// Tests for final render
console.log(tableHeadCreator());
// console.log(aiki.render());
console.log(CookieShop.finalRender);
console.log(footerTotal());

//This constructs the table header
function tableHeadCreator() {
  var tableHead = document.getElementById('table-head');
  var blankElement = document.createElement('th');
  // console.log('element created');
  var finalElement = document.createElement('th');
  // console.log(' final element created');
  tableHead.appendChild(blankElement);
  // console.log('element inserted');
  tableHead.textContent = '';

  for (var i = 0; i < hours.length; i++) {
    // console.log('I am running');
    var th = document.createElement('th');
    th.textContent = hours[i];
    tableHead.appendChild(th);
  }

  tableHead.appendChild(finalElement);
  // console.log(' final element inserted');
  finalElement.textContent = 'Daily Totals';

};

// Tests for final render
console.log(tableHeadCreator());
// console.log(aiki.render());
console.log(CookieShop.finalRender);
console.log(footerTotal());



// function tableBodyCreator() {
//   //Body variables
//
//   // //Footer variables
//   // var msg = 'Daily Totals';
//   // var tFoot = document.getElementById('table-foot');
//   // var tFootRow = document.createElement('tr');
//   // var totalsRow = document.createElement('td');
//   // tFoot.appendChild(tFootRow);
//   // tFootRow.appendChild(totalsRow);
//   // totalsRow.textContent = msg;
// +
//   //Body part of the function
//   //   //Footer part of the Function
//   //   for (var i = 0; i < hours.length; i++) {
//   //     var tf = document.createElement('td');
//   //     // tf.textContent = ;
//   //     tableHeadEl.appendChild(th);
//   //   }
//   //
//   //   th = document.createElement('th');
//   //   tableHead.appendChild(th);
//   // };
//   //
//   // function tableFootCreator() {
//   //
//   //
// };
//
// // -------------------------------------------------------------------
//
//
//
// // ______________________EXECUTABLE___________________________________________

// console.log(tableHeadCreator());
// console.log(aiki.render());
// console.log(CookieShop.finalRender);
// console.log(footerTotals);



// Test for final Output list
// // console.log(aiki.finalOutput(aiki));
// // firstAndPike.finalOutput(firstAndPike);
// // seaTacAirport.finalOutput(seaTacAirport);
// // seattleCenter.finalOutput(seattleCenter);
// // capitolHill.finalOutput(capitolHill);
// // aiki.finalOutput(aiki);
//
// // console.log(finalOutput(firstAndPike));
//
// // console.log(sum(firstAndPike));
//
// // console.log(cookieArrayCreator(firstAndPike));
//
// // console.log(cookieperHour(firstAndPike));
// // console.log(firstAndPike.randomNum(minimum, maximum));
//
// // console.log(firstAndPike.randomNum());
