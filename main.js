$(function () {
    var app = ("#app");

    function renderBooks(books) {
        books.forEach(function (book) {
            var bookElement = $("<div>");

            bookElement
                .addClass("book")
                .appendTo(app);

            var bookTitle = $("<div>");
            bookTitle
                .addClass("book-title")
                .text(book.title)
                .appendTo(bookElement);

            var bookDetails = $("<div>");
        });
    };


    $.ajax({
        url: 'http://localhost:8282/books',
        //contentType: "application/json",
        method: "GET"
    }).done(renderBooks);

});

