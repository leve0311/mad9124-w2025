const booklist = require("../models/booklist.json");

const createUserData = async (req, res, next) => {
  try {
    const { name, genre, author } = req.body;

    if (!name || !genre || !author) {
      return res
        .status(400)
        .json({ error: "Name, genre, and author are required" });
    }
    const authorExists = await checkAuthor(author);
    if (!authorExists) {
      return res
        .status(400)
        .json({ error: "Couldn't find an author by that name." });
    }
    const newBook = {
      id: Date.now(),
      name,
      genre,
      author,
    };
    booklist.push(newBook);

    res.status(201).json({
      data: newBook,
    });
  } catch (error) {
    return res.status(500).json({ error: "Server done blowed up." });
  }
};

const findBook = (req, res) => {
  const bookId = req.params.id;
  const book = booklist.find((m) => m.id === parseInt(bookId, 10));

  if (!book) {
    res.status(404).json({
      error: `book with id ${bookId} not found`,
    });
    return;
  }

  res.json({
    data: book,
  });
};

const replaceBook = (req, res) => {
  const { id } = req.params;
  const foundBook = booklist.find((book) => book.id === parseInt(id, 10));

  if (!foundBook) {
    res.status(404).json({
      error: `book with id ${id} not found`,
    });
    return;
  }

  const { name, genre } = req.body;

  if (!name || !genre) {
    res.status(400).json({
      error: "We replacing everything but the id and author here.",
    });
  }

  foundBook.id = parseInt(id);
  foundBook.name = name;
  foundBook.genre = genre;
  foundBook.author = foundBook.author;

  res.json({
    data: foundBook,
  });
};

const updateBook = (req, res) => {
  const bookId = parseInt(req.params.id, 10);

  const foundBook = booklist.find((book) => book.id === bookId);
  const { name, genre } = req.body;

  if (!foundBook) {
    res.status(404).json({
      error: `book with id ${bookId} not found`,
    });
    return;
  }

  for (const key of ["name", "genre"]) {
    if (req.body[key]) foundBook[key] = req.body[key];
  }

  foundBook.name = name ?? foundBook.name;
  foundBook.genre = genre ?? foundBook.genre;

  if (!name && !genre) {
    return res.status(400).json({
      error: {
        message: "Can't update id or author, what you tryna update?",
      },
    });
  }

  res.json({
    data: foundBook,
  });
};

const deleteBook = (req, res) => {
  const bookId = parseInt(req.params.id);
  const bookIdx = booklist.findIndex(({ id }) => id === bookId);

  if (bookIdx < 0) {
    res.status(404).json({
      error: `book with id ${bookId} not found`,
    });
    return;
  }
  const [deletedBook] = booklist.splice(bookIdx, 1);

  res.json({
    data: deletedBook,
  });
};

const checkAuthor = async (authorName) => {
  try {
    const formattedName = authorName
      .toLowerCase()
      .replace(/ /g, "%")
      .replace(/\. /g, "%20");

    const response = await fetch(
      `https://openlibrary.org/search/authors.json?q=${formattedName}`
    );
    if (!response.ok) {
      throw new Error(`Fetch request failed: ${response.status}`);
    }

    const data = await response.json();

    return data.numFound > 0;
  } catch (error) {
    console.error("Error checking author:", error);
    return false;
  }
};

module.exports = {
  createUserData,
  findBook,
  replaceBook,
  updateBook,
  deleteBook,
};
