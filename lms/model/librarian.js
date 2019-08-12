class Librarian {
    constructor(librarianId, firstName, lastName, libary) {
        this.librarianId = librarianId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.libary = libary;
    }
    responseForBookRecommend (recommendation) {
        if (this.libary.findRecommendation(recommendation) === true){
            throw "recommendation already exists";
        }
        this.libary.addRecommendation(recommendation);
    }
    responseForBookIssue (userID, bookID) {
        if(this.libary.checkUserHistory(userID) === false){
            throw "cant take book";
        }
        if(this.libary.checkBookAvailability(bookID) === false){
            throw new Error("no book in library");
        }
        this.libary.takeBook(userID, bookID);
    }
    responseForBookRenewal(userID, bookID) {
        if(this.libary.checkUserHistoryForRenewal(userID, bookID) === false){
            throw "cant Renewal book";
        }
        this.libary.renewalBook(userID, bookID);
    }
    responseForBookReturn (userID, bookID) {
        let diff = this.libary.checkUserHistoryForBook(userID);
        if(diff > 0){
            throw `pay ${diff}`;
        }
        this.libary.returnBook(userID, bookID);
    }
    addUser(userId, name, lastName){
        this.libary.registerUser(new User(userId, name, lastName, this.libary, this));
    }
    addBook(id, name, author){
        this.libary.registerBook(new Book(id, name, author));
    }
}
