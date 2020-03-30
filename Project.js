/* Budget Planner */
//The budget planner helps the user budget their monthly income. The user can rank their most-needed items in that month and eventually tell them whether they should buy an item or not. It also prioritizes the item based on the EisenHower's Matrix Urgent\Important matrix. This is a value proposition this budget planner has because as soon as you rank the importance and urgence level of the items you want to buy, it gives you a list you should buy in order, which helps indecisive people like me. If the item is over your expected budget for the month, then it is also eliminated immediately. The user can also make an educated guess whether they are spending over their limit.//



/* Creates a profile for the user */
// the constructor initializes the person object
var Person = function(firstName, lastName, gender, yearOfBirth, monthOfBirth, dateOfBirth, AnnualIncomeLevel) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.yearOfBirth = yearOfBirth;
    this.monthOfBirth = monthOfBirth;
    this.dateOfBirth = dateOfBirth;
    this.AnnualIncomeLevel = AnnualIncomeLevel;
};

Person.prototype.calculateMonthlyIncome = function() {
    return Number(this.AnnualIncomeLevel) / 12;
};


//read user input, store it into the list//
function createUserPortfolio() {
    var typicalList = ['first name', 'last name', 'gender', 'year of birth', 'month of birth', 
                      'date of birth', 'annual income'];
    var info = [];
    for (var i = 0; i < typicalList.length; i++) {
    var stored = prompt('Enter your ' + typicalList[i] + ' .');
    if (typicalList[i] === 'annual income') {
        stored = Number(stored);
    };
        info.push(stored);
    }
    
    var realPerson = new Person(...info);

    return realPerson;
}

var realPerson = createUserPortfolio();

console.log(realPerson);

var wishtoSpend = (prompt('How much do you want to spend this month?'))
console.log(wishtoSpend);
// they are allowed to set the amount they are planning to spend each month 
var expectedBalance = realPerson.calculateMonthlyIncome() - wishtoSpend;


//first ask the user to rank their most needed items for this month
// function(rank)
//!!!


// prompt the user input 
//decided to use helper functions instead 


function createUserList() {
    var userArray = [];
    var priceArray = [];
    var i = 1; 
     var userItem = prompt('Enter item Number ' + i + ' that you would like to purchase this month. Enter a space to quit.');
    while (userItem != ' ') {
        i = i + 1; 
        // the user can only input the ones from the other file; 
   
    userArray.push(userItem);  
   var price =  (parseInt(document.getElementById(userItem).textContent));
    priceArray.push(price);
    var userItem = prompt('Enter item Number ' + i + ' that you would like to purchase this month. Enter a space to quit');
}
    return [userArray, priceArray];
}

var [itemsList, priceArray] = createUserList();


//Check whether the user has an idea of how much they are spending and it helps them better approximate their budget
// prices of the items retrieved and determine if it's greater than 1800 
function sum(list){
    var summing = 0;
    for (let cur of list) {
        summing = summing + cur;
       console.log(summing);
    };
    console.log(summing);
    if (summing > wishtoSpend) {
        console.log(1);
        return 1;
    } else {
        console.log(2);
        return 2;
}
    
};

console.log(priceArray);

// User makes an educated guess 
let get = sum(priceArray);
const question = new Map();
question.set(1, 'Yes');
question.set(2, 'No');
question.set(3, 'Perhaps');
question.set('answer', get);
question.set(true, 'That is correct! You are getting better at approximating!');
question.set(false, 'No, but nice try!');

const ans = (prompt('Do you think you are spending over your limit this month?'));
var postAns = question.get(ans === question.get(question.get('answer')));
console.log(postAns);



//check whether the item they want is over the limit for the user, if it is, tell them right now 
// and get rid of it for them 
function doubleCheck(listofitems, wishtoSpend) {
    var valuestoRemove = [];
    for (var i = 0; i < listofitems.length; i++) {
        var prices =  parseInt(document.getElementById(listofitems[i]).textContent);
        if (prices > wishtoSpend) {
           valuestoRemove.push(listofitems[i]);
        }
    }
    var filtering = listofitems.filter(cur => !valuestoRemove.includes(cur));
    console.log('You should now only buy ' + filtering + ' because the other items were over your expected budget.');
    return filtering; 
}


// Creating the EisenHower's Urgent/Important Matrix
// if it's over 6, then it's on the urgent or important side 
// if it's less than 6, then it's on the not urgent or not important side 

function Matrix(list){
    const UrgentAndImportant = new Map();
    const UrgentAndNotImportant = new Map();
    const ImportantAndNotUrgent = new Map();
   const NotImportantAndNotUrgent = new Map();
    for (let cur of list) {
        let Urgent = parseInt(prompt('Rank the urgence level for ' + cur + ' from 1-10?'));
        let Important = parseInt(prompt('Rank the importance level for ' + cur + ' from 1-10?'));
        var sums = Urgent + Important; 
        if (Urgent >= 6 && Important >=6) {
            UrgentAndImportant.set(cur, sums);
            console.log(UrgentAndImportant.set(cur, sums));
        } else if (Urgent >= 6 && Important < 6) {
            UrgentAndNotImportant.set(cur, sums);
            console.log(UrgentAndNotImportant.set(cur, sums));
        } else if (Urgent < 6 && Important >=6) {
            ImportantAndNotUrgent.set(cur, sums);
            console.log(ImportantAndNotUrgent.set(cur, sums));
        } else {
            NotImportantAndNotUrgent.set(cur,sums);
            console.log(NotImportantAndNotUrgent.set(cur,sums));
        }
            
        };
    var ArrayofMap = [UrgentAndImportant, ImportantAndNotUrgent, UrgentAndNotImportant, NotImportantAndNotUrgent];
    console.log(ArrayofMap);
    ordering(ArrayofMap);
}; 

var itemss = ['Shampoo', 'Shower gel', 'iphone', 'charger', 'car', 'LVBag'];
var finalItems = doubleCheck(itemsList, wishtoSpend);
Matrix(finalItems);// the actual input from the user 


// let the user rank the urgence and Importance level from 1-10;
function ordering (ArrayofMap){
    var permList = [];
   
 for (let cur of ArrayofMap) {
      var curKeys= [];
       // initialize the value 
       console.log(cur);
       var tempList = [];
       // use quicksort 
       
    for (let [key, value] of cur.entries()) {
       tempList.push(value);
        console.log(tempList);
 };
    var orderedList = quicksortandReverse(tempList); // list returned
     console.log(orderedList);
     //match the value to the original key again 
     for (let it of orderedList) {
         for (let [key, value] of cur.entries()) {
             if (it === value && !(curKeys.includes(key))){
                 curKeys.push(key);
                
             }
         }  
     }
     console.log(curKeys);
     permList.push(curKeys);   
     }
     console.log(permList);
     var merged = permList.flat(1);
    displayItems(merged); 
 };
   
     
function quicksortandReverse(tempList) {
    // missing base case? 
    // without the base case, the function would just keep going forever, not knowing where to end. 
    if (tempList.length <= 1) {
        return tempList;
    } else {
    var left = [];
     var right = [];
     var pivot = tempList[0];
   
        for (var i= 1; i < tempList.length; i++) {
         if (tempList[i] <= pivot) {
             left.push(tempList[i]);
         } else {
             right.push(tempList[i]);
         }
     };
    var unreversed = quicksortandReverse(left).concat(pivot, quicksortandReverse(right));
    return unreversed.reverse();
};
};

 // display the merge list to the users
function displayItems(mergedList) {
     console.log('The following is the list of items you should buy in order based on the ranking: ');
    var i = 0; 
    for (let cur of mergedList){
         i += 1; 
        console.log(i+ '. ' + cur);
    }
}
  
// Subtract the item from the user's budget when an item is bought
// can only enter the items from the other file for now (case sensitive)
function removeFromBudget(income){
    var bought = (prompt('Enter what you have bought or space to quit'));// a string of gthe item 
    var balance = income; 
   
    while (bought != ' ') {
        var priceofItem =  document.getElementById(bought).textContent;
        console.log(parseInt(priceofItem));
    var balance = balance - (parseInt(priceofItem));
        console.log(balance);
    var bought = (prompt('Enter what you have bought or space to quit'));
    }
    return balance;
    
};

var balance = removeFromBudget(realPerson.calculateMonthlyIncome());

// this function tells them whether they are spending over the limit 
function budget(realBalance) {
    // expectations vs reality 
    if (realBalance <= expectedBalance) {
        return function(name) {
            console.log(name + ', you are spending over your limit this term');
        }
    } else if (realBalance >= expectedBalance + 1 && realBalance < expectedBalance + (0.30 * expectedBalance) ) {
        return function(name) {
            console.log('Good job ' + name + ', you are spending within your limit this month');
        }
    } else{ 
    return function(name) {
        console.log(name + ' , you are being very frugal with your spending. You will be rewarded next month!');
    }}
}

var overLimit = budget(balance);
overLimit(realPerson.firstName);

/*
function sums(list){
    if (list.length <= 1){
       return list;
    } else {
       return list[0] + sums(list.slice(1));
    }
}
sums([1, 2, 5, 10, -2]);
*/

