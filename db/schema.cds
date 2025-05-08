namespace my.bookshop;

entity Books {
  key ID         : String;
      title      : String;
      stock      : Integer;
      to_author     : Association to Author;
      to_categories : Association to Categories;
}

entity Author {
  key ID           : String;
      fistName     : String;
      lastName     : String;
      emailAddress : String;
      phoneNumber  : Integer;
      birthDay     : Date;
}

entity Categories {
  key ID    : String;
      type  : String;
}
