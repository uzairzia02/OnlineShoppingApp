#! /usr/bin/env node
import { Console } from "console";
import inquirer from "inquirer";


//available products' price mentioned below
let prices: any = {
  Apple: 7,
  Banana: 5,
  Mango: 10,
  Grapes: 15,
  Peach: 20,
};

//products will be pushed to below products array
let products: any[] = [];
console.log(
  "-------------------------------------------------------------------"
);
console.log("Welcome to Online Shopping");
console.log(
  "-------------------------------------------------------------------"
);
async function main() {
  let addToCart;


  //Add to Cart - do will run untill add to cart becomes false
  do {
    //choose products from below
    let availableProducts = await inquirer.prompt({
      name: "products",
      type: "list",
      message: "Please choose from below products",
      choices: ["Apple", "Banana", "Mango", "Grapes", "Peach"],
    });
//choose quantity of products selected above
    let quantity = await inquirer.prompt({
      name: "quantity",
      type: "list",
      message: "Please enter quantity: ",
      choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    });

    let price = prices[availableProducts.products]; //price of choosen product
    let total = price * quantity.quantity; //total price of choosen product
    let order = `${availableProducts.products} \t\t ${quantity.quantity} \t\t ${total}`; //shopping to be pushed in the product array
    products.push(order);

    //Add to Cart
    addToCart = await inquirer.prompt({
      name: "add",
      type: "confirm",
      message: "Add more?",
    });
  } while (addToCart.add);

  //View Cart
  console.log(
    "-------------------------------------------------------------------\n You have chosed below products:"
  );

  console.log(`Items \t\t Quantity(PCs) \t Total Price(PKR)`);

  console.log(
    "-------------------------------------------------------------------"
  );
  products.forEach((item) => {
    console.log(item);
  });
  let optionss = await inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do next?",
    choices: ["Continue Shopping", "Delete Product", "Checkout"],
  });
  if (optionss.action === "Continue Shopping") {
    main();
  } else if (optionss.action === "Delete Product") {
    let deleteProduct = await inquirer.prompt({
      name: "product",
      type: "list",
      message: "Select a product to delete:",
      choices: products,
    });

    let indexToDelete = products.indexOf(deleteProduct.product);
    if (indexToDelete !== -1) {
      products.splice(indexToDelete, 1);
      console.log("Product removed from cart successfully");
      console.log(
        "-------------------------------------------------------------------\n You have chosed below products:"
      );

      console.log(`Items \t\t Quantity(PCs) \t Total Price(PKR)`);

      console.log(
        "-------------------------------------------------------------------"
      );
      products.forEach((item) => {
        console.log(item);
      });
      // now I want options to add more to card or not. if not then go to check out
      let optionss = await inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to do next?",
        choices: ["Add Product", "Checkout"],
      });
      if (optionss.action === "Add Product") {
        main();
      } else if (optionss.action === "Checkout") {
        let grandTotal = 0;
        console.log(
          "-------------------------------------------------------------------\n You have chosed below products:"
        );

        console.log(`Items \t\t Quantity(PCs) \t Total Price(PKR)`);

        console.log(
          "-------------------------------------------------------------------"
        );
        products.forEach((item) => {
          console.log(item);
          const price = +item.split("\t\t")[2];
          grandTotal += price;
        });
        console.log(
          "-------------------------------------------------------------------"
        );
        console.log(`Grand Total : PKR ${grandTotal}`);
      }
    } else console.log("Invalid selection !");
  } /*(optionss.action === "Checkout")*/ else {
    let grandTotal = 0;
    console.log(
      "-------------------------------------------------------------------\n You have chosed below products:"
    );

    console.log(`Items \t\t Quantity(PCs) \t Total Price(PKR)`);

    console.log(
      "-------------------------------------------------------------------"
    );
    products.forEach((item) => {
      console.log(item);
      const price = +item.split("\t\t")[2];
      grandTotal += price;
    });
    console.log(
      "-------------------------------------------------------------------"
    );
    console.log(`Grand Total : PKR ${grandTotal}`);
  }
}
main();
