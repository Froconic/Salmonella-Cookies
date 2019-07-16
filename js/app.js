'use strict';

var hours = ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];
var cookieArray = [];

var firstAndPike = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookie: 6.3,
  randomNum: function (max, min)
  {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
  },
};

var seaTacAirport = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookie: 1.2,
  randomNum: function ()
  {
    return Math.floor(Math.random(3) * Math.floor(24));
  },

  hours: ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'],
};

var seattleCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookie: 3.7,
  randomNum: function (max, min)
  {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
  },

  hours: ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'],
};

var capitolHill = {
  minCustomers: 20,
  maxCustomers: 38,
  avgCookie: 2.3,
  randomNum: function (max, min)
  {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
  },

  hours: ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'],
};

var aiki = {
  minCustomers: 2,
  maxCustomers: 16,
  avgCookie: 4.6,
  randomNum: function (max, min)
  {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
  },

  hours: ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'],
};

function cookiePerHour(obj)
{
  var min = obj.minCustomers;
  var max = obj.maxCustomers;

  var cookie = obj.avgCookie;
  // console.log(cookie);
  var customerAmount = obj.randomNum(min, max);
  // console.log(customerAmount);
  var hourlyCookies = customerAmount * cookie;
  // console.log(hourlyCookies);
  var sanHourlyCookies = Math.round(hourlyCookies);
  return sanHourlyCookies;
}

// cookiePerHour(firstAndPike);

function cookieArrayCreator(obj) {
  for (var i = 0; i < hours.length; i++)
  {
    var amount = cookiePerHour(obj);
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

function sum(obj) {
  var temp = cookieArrayCreator(obj);
  var total = 0;
  for (var i = 0; i < hours.length; i++) {
    total = temp[i] + total;
    // console.log(total);
  }

  // console.log(total);
  return total;
  // return total;
};

function finalOutput(obj) {
  var results = cookieArrayCreator(obj);
  var finalSum = sum(obj);

  for (var i = 0; i < hours.length; i++) {
    results[i] = `${hours[i]}: ${results[i]} cookies`;
    // console.log(results[i]);
  }

  finalSum = `Total: ${finalSum} cookies`;
  // console.log(finalSum);
  console.table(results + finalSum);
  return results + finalSum;

};

finalOutput(firstAndPike);
finalOutput(seaTacAirport);
finalOutput(seattleCenter);
finalOutput(capitolHill);
finalOutput(aiki);

// console.log(finalOutput(firstAndPike));

// console.log(sum(firstAndPike));

// console.log(cookieArrayCreator(firstAndPike));

// console.log(cookieperHour(firstAndPike));
// console.log(firstAndPike.randomNum(minimum, maximum));

// console.log(firstAndPike.randomNum());
