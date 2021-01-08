(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

        let person = {
            firstName: "Yasin",
            lastName: "Mogultay !",
            sayHello: function (){
                return("Hello From " + this.firstName + " " + this.lastName)
            },
        }
        // console.log(person.firstName) // "Yasin"
        // console.log(person.lastName) // "Mogultay"

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // console.log(person.sayHello())

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    // let shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320},
    // ];
    //
    // shoppers.forEach(function(shopper) {
    //     if (shopper.amount > 200) {
    //         console.log("Congrats " + shopper.name + " Your total before discount is $" + shopper.amount + " Your discount is 12% and your final amount is $" + shopper.amount * .88);
    //     } else {
    //         console.log("Hello " + shopper.name + " Your total  is " + shopper.amount + " you dont have any discount and your final amount is $" + shopper.amount);
    //     }
    // })

    // Why use for loop over forEach and vice versa?????:

    /*

    For Loop Use Case (benefit: more flexible)

        Flexible iteration (forward/backward/skipping)
        Do anything a certain numbers (not just traversing an array data)

    For Each (benefit: more readable)

        Only can be used on arrays of data
        All of the elements in an array need to be accessed

     */


    // // each user's name
    // for (var i = 0; i < shoppers.length; i += 1) {
    //     console.log(shoppers[i].name);
    // }
    //
    // shoppers.forEach(function(shopper) {
    //     console.log(shopper.name);
    // });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {
            title: "To Kill a Mockingbird",
            author: {
                firstName: "Harper ",
                lastName: "Lee"}},
        {
            title: "1984",
            author: {
                firstName: "George",
                lastName: " Orwell"}},
        {
            title: "Harry Potter",
            author: {
                firstName: "J.K.",
                lastName: " Rowling"}},
        {
            title: "The Lord of the Rings",
            author: {
                firstName: "J.R.R.",
                lastName: " Tolkien"}},
        {
            title: "The Great Gatsby",
            author: {
                firstName: "F. Scott",
                lastName: " Fitzgerald"}},
    ]
    //
    //     console.log(books[2].title) // Harry Potter
    //     console.log(books[2].author.firstName) // J.K.
    //     console.log(books[2].author.lastName) // Rowling

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // for (var i = 0; i < books.length; i++) {
    //     console.log("Book # " + i + "\n" + "Title: " + books[i].title + "\n" + "Author: " + books[i].author.firstName + books[i].author.lastName)
    // }

    // books.forEach(function(book,index) {
    //     console.log("Book #"  + index + "\n" +"Title: " + book.title + "\n" + "Author: " + book.author.firstName + book.author.last);
    // });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */



    function createBook(title, firstName, lastName, booksArr) {
    var obj = {
        title: title,
        author : {
            firstName: firstName,
            lastName: lastName
        }
    };

    booksArr.push(obj);
    return booksArr;
    }

    createBook("Forest Gump", "Winston ", "Groom", books);


    function showBookInfo (book) {
        var input = "Title: " + book.title + "\n" + "Author: " + book.author.firstName + " " + book.author.lastName;
        return input;
    }
        books.forEach(function(book, index) {
            console.log("Book #" + (index + 1) + "\n" + showBookInfo(book));
        })


    /**
     * Extra Bonus:
     * -Exercise 1. Write a function called makeCar that takes in two strings, make and model, and returns an object with those properties
     Example: makeCar("VW", "beetle") returns the object {"make": "VW", "model", "beetle"}
     */

    // function makeCar(make, model) {
    //     var obj = {
    //         make: make,
    //         model: model,
    //     }
    //     return obj;
    // };
    // console.log(makeCar("VW","Beetle"))

    /**
     * Extra Bonus:
     * -Exercise 2. Use the following data to create an object named salesReport.
     The object should have the following properties:
     title, date, office, and employees.
     the employees property should hold an array of objects.
     each employee should be represented by an object with the following properties:
     employee-number, first-name, last-name, sales-units
     */
    // 1, Jane, Janeway, 3
    // 3, Tricia, Triciason, 5
    // 4, Jeannette, Jeanson, 4
    // 5, Charles Emmerson III, Winchester, 2
    // 6, Chet, Chedderson, 8
    // 7, Chaiam, Chaiamson, 12
    // 8, Dale, Dalesinger, 1
    // 9, Zig, Ziglar, 50
    // 10, Henry, Kissinger, 1
    // 11, Arthur Herbert, Fonzarelli, 23
    // 12, Betty, Boop, 67

    // var employee = {};
    // employee.title = "";
    // employee.data = "";
    // employee.office = "";
    // employee.employees = ["employee-number", "first-name", "last-name", "sales-units"];
    //
    // console.log("The first car is a " + cars[0].make + " " + cars[0].model + ".");
})();