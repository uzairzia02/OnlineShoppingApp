// type book = {
//   name: string;
//   author: string;
//   isbn: number;
// };
// let library: book[] = [
//   {
//     name: "book1",
//     author: "author1",
//     isbn: 1234,
//   },
//   {
//     name: "book2",
//     author: "author2",
//     isbn: 5678,
//   },
// ];
// library.push({ name: "book3", author: "author3", isbn: 91011 });
// let findBook = library.find((book) => book.isbn === 91011)
// console.log(library)
// console.log(findBook)
let fruit = ["Apple", "banana", "mango"];
//add in the last
fruit.push("Straberry");
console.log(fruit);
//delete first
fruit.shift();
console.log(fruit);
fruit.unshift("Mango");
console.log(fruit);
export {};
