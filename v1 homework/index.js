const {
    addBooks,
    getBooks,
    deleteBook,
    editBooks,
} = require("./books");

async function main () {
    const booksBefore = await getBooks();
    console.log("Before: ", booksBefore);

    // await addBooks({Book: "Never let me go", Author: "Kazuo Ishiguro"});

    // await deleteBook(0);

    await editBooks(0, {
        Book: "Les Miserables",
        Author: "Victor Hugo",
    });

    const bookAfter = await getBooks();
    console.log("After:", bookAfter);
    


}




main();

