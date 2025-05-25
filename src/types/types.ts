export type User = {
  id: number;
  email: string;
  name: string;
  role: 'LIBRARIAN' | 'READER';
  createdAt: string;
  updatedAt: string;
};

export type Book = {
  id: number;
  title: string;
  author: string;
  isbn: string;
  category: string;
  status: BookStatus;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
};

export type BookStatus = 'AVAILABLE' | 'BORROWED' | 'RESERVED';

export type Loan = {
  id: number;
  bookId: number;
  userId: number;
  book: Book;
  user: User;
  loanDate: string;
  returnDate?: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};