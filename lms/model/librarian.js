class Librarian {
    requests = [];
    getRequestSize() {
        return this.requests.length;
    }
    addRequest(request){
        this.requests.push(request);
        this.parseRequest(request);
    }
    constructor(librarianId, firstName, lastName, libary) {
        this.librarianId = librarianId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.libary = libary;
    }
    parseRequest(request){
        if(request[type]===1)
            return this.responseForBookIssue (request[userId], request[bookID]);
        else if (request[type]===2)
            return this.responseForBookRenewal (request[userId], request[bookID]);
        else if (request[type]===3)
            return this.responseForBookReturn (request[userId], request[bookID]);
        else if (request[type]===4)
            return this.responseForBookRecommend (new
            Recommendation(request[userId], request[bookID], request[recommendation]));
    }
    responseForBookRecommend (recommendation) {
        if (this.libary.findRecommendation(recommendation) === true){
            throw "recommendation already exists";
        }
        this.libary.addRecommendation(recommendation);
        return true;
    }
    responseForBookIssue (userID, bookID) {
        if(this.libary.checkUserHistory(userID) === false){
            throw "cant take book";
        }
        if(this.libary.checkBookAvailability(bookID) === false){
            throw new Error("no book in library");
        }
        this.libary.takeBook(userID, bookID);
        return true;
    }
    responseForBookRenewal(userID, bookID) {
        if(this.libary.checkUserHistoryForRenewal(userID, bookID) === false){
            throw "cant Renewal book";
        }
        this.libary.renewalBook(userID, bookID);
        return true;
    }
    responseForBookReturn (userID, bookID) {
        let diff = this.libary.checkUserHistoryForBook(userID);
        if(diff > 0){
            throw `pay ${diff}`;
        }
        this.libary.returnBook(userID, bookID);
        return true;
    }
    addBook(id, name, author){
        this.libary.registerBook(new Book(id, name, author));
    }
}
