class User {
    constructor(userId, name, lastName, libary, librarian){
        this.userId = userId;
        this.name = name;
        this.lastName = lastName;
        this.libary = libary;
        this.librarian = librarian;
    }

    get UserID() {
        return this.userId;
    }
    set UserID(userId) {
        userId = this.userId;
    }
    searchBook(author, name) {
        if(typeof name === "undefined") {
            return this.libary.searchBookByAuthor(author);
        }else if(typeof author === "undefined") {
            return this.libary.searchBookByName(name);
        }else{
            return this.libary.searchBookByNameAndAuthor(author, name);
        }
    }
    requestForBookIssue (bookID) {
        this.librarian.responseForBookIssue(this.userId , bookID);
    }
    requestForBookRenewal(bookID) {
        this.librarian.responseForBookRenewal(this.userId , bookID);
    }
    requestForBookReturn (bookID) {
        this.librarian.responseForBookReturn (this.userId , bookID);
    }
    viewsHistory () { //TODO
    }

}

class Faculty extends User {
    requestForBookRecommend (recommendation) {
        this.librarian.responseForBookRecommend(recommendation)
    }
}
class Student extends User {}
