class Book{
    constructor(id, name, author, takenDate, returnDate, userId)
    {
        this.id = id;
        this.name = name;
        this.author = author;
        this.takenDate = takenDate;
        this.returnDate = returnDate;
        this.userId = userId;
    }
    get bookID() {
        return this.id;
    }
    getBookID() {
        return this.id;
    }
    set bookName(Name) {
        this.name = Name;
    }
    get userID() {
        return this.userId;
    }
    set userID(userId) {
        this.userId = userId;
    }
    get bookName() {
        return this.name;
    }
    get bookAuthor() {
        return this.author;
    }
    set bookTakenDate(takenDate) {
        this.takenDate = takenDate;
    }
    get bookTakenDate() {
        return this.takenDate;
    }
    set bookReturnDate(returnDate) {
        this.returnDate = returnDate;
    }
    get bookReturnDate() {
        return this.returnDate;
    }

}
