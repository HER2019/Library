class Request{

}

class RequestForBookIssue extends Request{

  constructor(userId){this.userId = userId;}

  request(){
    let bookName = getBookName();
    library.addRequest(1, userId, bookName);
  }
}


class RequestForBookRenewal extends Request{

  constructor(userId){this.userId = userId;}

  request(){
    let bookId = getBookId();
    library.addRequest(2, userId, bookId);
  }
}


class RequestForBookReturn extends Request{

  constructor(userId){this.userId = userId;}

  request(){
    let bookId = getBookId();
    library.addRequest(3, userId, bookId);
  }
}


class RequestForHistory extends Request{
  constructor(userId){this.userId = userId;}

  request(){
    library.addRequest(4, userId);
  }
}


class RequestForBookRecommend extends Request{

  constructor(userId){this.userId = userId;}

  request(){
    let bookId = getBookId();
    let recommend = getRecommend();
    library.addRequest(5, userId, bookId, recommend);
  }
}
