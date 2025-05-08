using my.bookshop as my from '../db/schema';

service CatalogService {
    @readonly
    entity Books      as
        projection on my.Books {
            title
        };

    @readonly
    entity Author     as projection on my.Author;

    @readonly
    entity Categories as projection on my.Categories;


    function fnCrud(action : String) returns String;
}
