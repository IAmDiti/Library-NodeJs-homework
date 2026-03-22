const {read, write} = require("./read-write");

const getBooks = () => {
    return read();
};


const addBooks = async (booksData) => {
    let books = await read();
    // books = [
    //     {Book: "Never Let Me Go", Author: "Kazuo Ishiguro",},
    //     {Book: "crime and punishment", Author: "Feydor Dostoyevski"},
    // ];
    books.push(booksData);

    await write(books);
};


const deleteBook = async(bookIndex, booksData) => {
    let books = await read();
    books = books.filter((book, index) => index !== bookIndex);

    await write(books);
}

const editBooks = async (bookIndex, newBookData)=> {
    let books = await read();
    if(bookIndex < 0 || bookIndex >= books.length) {
        console.log("Invalid");
        return;
    }

    books[bookIndex] = newBookData;

    await write(books);
    

}




module.exports = {
    addBooks,
    getBooks,
    deleteBook,
    editBooks,
}