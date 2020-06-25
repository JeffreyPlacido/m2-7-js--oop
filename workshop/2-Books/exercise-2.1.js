// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book {
    constructor(title, genre, author, isRead) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isRead = isRead || false;
    }
}

const book1 = new Book('House of the Scorpion', 'Science Fiction', 'Nancy Farmer', 'true');
const book2 = new Book('fables', 'Dark fantasy', 'Bill Willingham', 'true');
const book3 = new Book('One Piece','Manga','Eichiro Oda', 'true');
const book4 = new Book('Juventus A history of black and white', 'Soccer', 'Jasper Fforde');
const book5 = new Book('Outliers','Psychology','Malcolm Gladwell', 'true');

console.log(book1, book2, book3, book4, book5);


const book2 = new Book('fables', 'Dark fantasy', 'Bill Willingham', 'true');
const book3 = new Book('One Piece','Manga','Eichiro Oda', 'true');
const book4 = new Book('Juventus A history of black and white', 'Soccer', 'Jasper Fforde');
const book5 = new Book('Outliers','Psychology','Malcolm Gladwell', 'true');

console.log(book1, book2, book3, book4, book5);

// Book {
// title:"House of the Scorpion",
// genre:"Science Fiction",
// author:"Nancy Farmer",
// isRead:"true"
// }
// Book {
// title:"fables",
// genre:"Dark fantasy",
// author:"Bill Willingham",
// isRead:"true"
// }
// Book {
// title:"One Piece",
// genre:"Manga",
// author:"Eichiro Oda",
// isRead:"true"
// }
// Book {
// title:"Juventus A history of black and white",
// genre:"Soccer",
// author:"Jasper Fforde",
// isRead:false
// }
// Book {
// title:"Outliers",
// genre:"Psychology",
// author:"Malcolm Gladwell",
// isRead:"true"
// }