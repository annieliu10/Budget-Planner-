/* Budget App Planner */
//The budget planner helps the user budget their monthly income. The user can rank their most-needed items in that month and eventually tell them whether they should buy an item or not. It also prioritizes the item based on the EisenHower's Matrix Urgent\Important matrix(however it has yet to be implemented). The user can also make an educated guess whether they are spending over their limit.//



/* Creates a profile for the user */
var Person = function(firstName, lastName, gender, yearOfBirth, monthOfBirth, dateOfBirth, AnnualIncomeLevel) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.yearOfBirth = yearOfBirth;
    this.monthOfBirth = monthOfBirth;
    this.dateOfBirth = dateOfBirth;
    this.AnnualIncomeLevel = AnnualIncomeLevel;
}

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
    
    var realPerson = new Person,apply(...info);

    return realPerson;
}

var realPerson = createUserPortfolio();


console.log(realPerson);

// notify them that they are spending over the limit 
function budget(amount) {
    if (amount > 1800) {
        return function(name) {
            console.log(name + ', you are spending over your limit this term');
        }
    } else if (amount <= 1800 && amount >= 800) {
        return function(name) {
            console.log('Good job ' + name + ', you are spending within your limit this month');
        }
    } else{ 
    return function(name) {
        console.log(name + ' , you are being very frugal with your spening. You will be rewarded next month!');
    }}
}

var overLimit = budget(5000);
overLimit('Annie');

//first ask the user to rank their most needed items for this month
// function(rank)
//!!!


// prompt the user input 
//decided to user helper functions instead 


function createUserList() {
    var userArray = [];
    var orderArray = ['first', 'second', 'third', 'fourth', 'fifth'];
    for (var i = 0; i < orderArray.length; i++) {
    var userItem = prompt('Enter the' + orderArray[i] + ' item you would like to purchase this month');
    userArray.push(userItem);  
        
}
    return userArray;
}

console.log(createUserList());

//Shows how much is left in your account if this item was spent
function calculateBalance(spent, income) {
    var balance = income - spent;
    console.log(balance);
};

calculateBalance(50, realPerson.calculateMonthlyIncome());

//Check whether the user has an idea of how much they are spending and it helps them better approximate their next list 
// prices of the items retrieved
function sum(list){
    var summing = 0;
    for (let cur of list) {
        summing += cur;
    };
    return summing;
}


listOfElements = [600, 60, 834, 494, 3432];
function determinant(sum, list){
    if (sum(list) > 1800) {
        return 1;
    } else 
        return 2;
    
}

// User makes an educated guess 
let get = determinant(sum, listOfElements);
const question = new Map();
question.set('question', 'Write your guess');
question.set(1, 'Yes');
question.set(2, 'No');
question.set(3, 'Perhaps');
question.set('answer', get);
question.set(true, 'You are getting better at approximating');
question.set(false, 'No, but nice try!');

const ans = parseInt(prompt('Do you think you are spending over your limit this month?'));
question.get(ans === question.get('answer'));















