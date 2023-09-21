import { CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";
import prisma from "../database";

export async function getBooks() {
  return await prisma.books.findMany({});
}

export async function getBook(id: number) {
  return await prisma.books.findUnique({
    where: {
      id
    }
  })
}

export async function createBook(book: CreateBook) {
  const { title, cover, author, publisher, purchaseDate } = book;
  return await prisma.books.create({
    data: {
      title,
      cover,
      author,
      publisher,
      purchaseDate
    }
  })
}

export async function reviewBook(bookReview: CreateReview) {
  const { bookId, grade, review } = bookReview;
  return await prisma.books.update({
    where: {
      id: bookId
    },
    data: {
      grade,
      review,
      read: true
    }
  })
}