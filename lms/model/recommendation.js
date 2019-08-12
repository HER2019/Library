class Recommendation {
    constructor(userId, bookId, message){
        this.userId = userId;
        this.bookId = bookId;
        this.message = message;
    }
    get UserID() {
        return this.userId;
    }
    get BookID() {
        return this.bookId;
    }
}
