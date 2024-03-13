/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

// const transactionsList = [
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: "Food",
//     itemName: "Pizza",
//   },
//   {
//     id: 2,
//     timestamp: 1656076800000,
//     price: 100,
//     category: "Food",
//     itemName: "Pizza",
//   },
//   {
//     id: 3,
//     timestamp: 1656076800000,
//     price: 1000,
//     category: "Book",
//     itemName: "Atomic Habits",
//   },
// ];

// const calculateTotalSpentByCategory = (transactionsList) => {
//   const getAllCategories = transactionsList.map((eachTransaction) => {
//     return eachTransaction.category;
//   });

//   const getAllUniqueCategories = Array.from(new Set(getAllCategories));

//   const finalList = getAllUniqueCategories.map((eachCategory) => {});
// };

// calculateTotalSpentByCategory(transactionsList)

function calculateTotalSpentByCategory(arr) {
  let outputArr = [];
  arr.forEach((element) => {
    if (outputArr.length >= 1) {
      outputArr.forEach((elem) => {
        if (element.category === elem.category) {
          elem.totalSpent += element.price;
        } else {
          outputArr.push({
            category: element.category,
            totalSpent: element.price,
          });
        }
      });
    } else {
      outputArr.push({
        category: element.category,
        totalSpent: element.price,
      });
    }
  });
  return outputArr;
}

let output = calculateTotalSpentByCategory([
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Shoes",
    itemName: "Pizza",
  },
]);
console.log(output);

module.exports = calculateTotalSpentByCategory;
