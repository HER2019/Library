//constants
const maxRequests = 5;
const MAX_BOOKS = 5;

class Library {
    books = [];
    recommendation = [];
    librarians = [];
    users = [];
    librarianSize() {
        return this.librarians.length;
    }
    usersSize(){
        return this.users.length;
    }
    async addRequest(type, userID, bookID, recommendation){
        for(let i = 0;i < this.librarianSize();i++){
            if(this.librarians[i] < maxRequests){
                this.librarians[0].addRequest({
                    "type": type,
                    "userId": userID,
                    "bookId": bookID,
                    "recommendation": recommendation
                });
            }
        }
    }
    registerUser (user){
        this.users.push(user);
    }

    registerLibrarian (librarian) {
        this.librarians.push(librarian);
    }
    registerBook (book) {
        this.books.push(book);
    }
    addRecommendation (recommendation){
        this.recommendation.push(recommendation);
    }
    findRecommendation(recommendation){
        for (let i = 0; i < this.recommendation.length; i++) {
            if (typeof this.recommendation[i] !== 'undefined' &&
                this.recommendation[i].UserID === recommendation.UserID &&
                this.recommendation[i].BookID === recommendation.BookID) {
                return true;
            }
        }
        return false;
    }
    checkBookAvailability(bookID){
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].bookID === bookID && typeof this.books[i].userID === "undefined")
                return true;
        }
        return false;
    }
    checkUserHistory(userID){
        let totalNumber = 0;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].UserID === userID) {
                if(totalNumber === MAX_BOOKS) {
                    return false;
                }
                totalNumber++;
                let today = new Date();
                if(today > this.books[i].bookReturnDate)
                    return false;
            }
        }
        return true;
    }
    takeBook (userID, bookID) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].bookID === bookID && typeof this.books[i].userID === "undefined") {
                this.books[i].userID = userID;
                this.books[i].bookTakenDate = new Date();
                this.books[i].bookReturnDate = new Date(Date.now() + 12096e5);
                break;
            }
        }
    }
    checkUserHistoryForRenewal(userID, bookID){
        if(this.checkUserHistory(userID) === false)
            return false;
        return this.checkUserHistoryForBook(userID, bookID);
    }
    renewalBook(userID, bookID){
        for (let i = 0; i < this.books.length; i++) {
            if(this.books[i].bookID === bookID && this.books[i].userID === userID) {
                let today = new Date();
                this.books[i].bookReturnDate= new Date(Date.now() + 12096e5);
            }
        }
    }
    checkUserHistoryForBook(userID, bookID){
        for (let i = 0; i < this.books.length; i++) {
            if(this.books[i].bookID === bookID && this.books[i].userID === userID)
                return true;
        }
        return false;
    }
    returnBook (userID, bookID) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].bookID === bookID && this.books[i].userID === userID) {
                this.books[i].userID = undefined;
                break;
            }
        }
    }
    searchBookByAuthor (author) {
        let booksByAuthor = [];
        for (let i = 0; i < this.books.length; i++) {
            if (typeof this.books[i] !== 'undefined' && this.books[i].author === author) {
                booksByAuthor.push(this.books[i]);
            }
        }
        return booksByAuthor;
    }
    searchBookByName (name) {
        let booksByName = [];
        for (let i = 0; i < this.books.length; i++) {
            if (typeof this.books[i] !== 'undefined' && this.books[i].name === name) {
                booksByName.push(this.books[i]);
            }
        }
        return booksByName;
    }
    searchBookByNameAndAuthor (name, author) {
        let booksByNameAndAuthor = [];
        for (let i = 0; i < this.books.length; i++) {
            if (typeof this.books[i] !== 'undefined' && this.books[i].name === name
                && this.books[i].author === author) {
                booksByNameAndAuthor.push(this.books[i]);
            }
        }
        return booksByNameAndAuthor;
    }
}
