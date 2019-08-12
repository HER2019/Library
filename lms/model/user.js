class User {
  static var cnt = 0;
  constructor(permission, name, lastName){
    this.name = name;
    this.lastName = lastName;
    this.permission = permission;
    this.cnt++;
    this.userId = cnt;
    this.books = [];
  }

  getId(){
    return this.userId;
  }

  viewHistory(){
    return this.books;
  }

  request(num){
    switch(num){
      case 1:{
        let request = new RequestForBookIssue(this.userId);
        break;
      }
      case 2:{
        let request = new RequestForBookRenewal(this.userId);
        break;
      }
      case 3:{
        let request = new RequestForBookReturn(this.userId);
        break;
      }
      case 4:{
        let request = new RequestForHistory(this.userId);
        break;
      }
      case 5:{
        let request = new RequestForBookRecommend(this.userId);
        break;
      }
    }
  }
}
