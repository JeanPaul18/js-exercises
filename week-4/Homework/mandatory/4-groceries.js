/*
As you you can have an Array of Objects, you can also store Arrays in Objects.
In this exercise, you'll practice:
 - How to loop through the properties (keys) of an Object and read its values.
 - How to access Array stored inside Object.
 - How to access to a specific property of an array and set it.

You're going shopping, and you need a shopping list. You've already created your weekly meal plan
that contains the missing ingredients to your menus. It is stored in the "weeklyMealPlan" object.

Complete the exercises below.
*/

// Here is your
let weeklyMealPlan = {
  monday: ["Cheese", "Eggs", "Tomato", "Paprika", "Leek"],
  tuesday: ["Wrap", "Tuna", "Canned beans", "Cheese", "Carrot", "Aubergine"],
  wednesday: ["Orange Juice", "Apple", "Ananas", "Black tea"],
  thursday: ["Lamb", "Salt", "Bulgur", "Potato"],
  fridray: ["Rice milk", "Blueberries", "Porridge", "Banana", "Cinnamon"],
  saturday: ["Olive oil", "Potato", "Salmon", "Asparagus"],
  sunday: [],
};

/*
Exercise 1:
  Loop through the weekly meal plan object to gather weakly ingredients into the weeklyGroceriesToBuy array.
  Then use console.log() to print out the list.
*/
// Gather all week item names into this array

let weeklyItems = Object.values(weeklyMealPlan);
let weeklyGroceriesToBuy = [];
for (let i = 0; i < weeklyItems.length; i++) {
  for (let j = 0; j < weeklyItems[i].length; j++) {
    weeklyGroceriesToBuy.push(weeklyItems[i][j]);
  }
}

console.log(weeklyGroceriesToBuy);

/*
Exercise 2:
  Loop through your list again, but now only collect the weekend items into the weeklyGroceriesToBuy array.
  Then use console.log() to print out the list.
*/
// Gather weekend item names into this array

let weekendGroceriesToBuy = [];

for (let weekendMeals in weeklyMealPlan) {
  if (weekendMeals.startsWith("s")) {
    weekendGroceriesToBuy.push(weeklyMealPlan[weekendMeals]);
  }
}

let weekendsItems = weekendGroceriesToBuy.reduce((a, b) => a.concat(b), []);

console.log(weekendsItems);

/*
Exercise 3:
  Loop through your weekly meal plan:
    - count how many ingredients you should buy per each day
    - and update the corresponding properties of numberOfItemsPerWeak object.

  Finally use console.log() to print out the Object.
*/
// Gather weekend item names into this array
let numberOfItemsPerWeak = {
  monday: 0,
  tuesday: 0,
  wednesday: 0,
  thursday: 0,
  fridray: 0,
  saturday: 0,
  sunday: 0,
};

for (let key in weeklyMealPlan) {
  numberOfItemsPerWeak[key] = weeklyMealPlan[key].length;
}

console.log(numberOfItemsPerWeak);
