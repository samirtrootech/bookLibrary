import { Injectable, NotFoundException } from '@nestjs/common';
import Book from './book.model';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {

  /**
   * 
   * @description Method to fetch all books record
   * @returns {Object} Book[] 
   * 
  */
  async getAllBooks(): Promise<Book[]> {
    return Book.findAll();
  }

  /**
   * 
   * @description Method to fetch book by ID
   * @Param {Integer} id
   * @returns {Object} Book
   * 
  */
  async getBookById(id: number): Promise<Book> {
    const book = await Book.findByPk(id);

    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }

    return book;
  }

  /**
   * 
   * @description Method to create new book
   * @Param {Object} CreateBookDto
   * @returns {Object} Book 
   * 
  */
  async createBook(createBookDto: CreateBookDto): Promise<Book> {
    try {
      const { title, isbn } = createBookDto;
      return Book.create({ title, isbn });
    } catch (err) {
      console.log("Error in delete Book => ", err);
    }
  }

  /**
   * 
   * @description Update book title 
   * @Param {Integer, Object} id UpdateBookDto
   * @returns { Book } 
   * 
  */
  async updateBook(id: number, updateBookDto: UpdateBookDto): Promise<Book> {

    const book = await this.getBookById(id);
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    try {
      book.title = updateBookDto.title;
      return book.save();
    } catch (err) {
      console.log("Error in Update Book => ", err);
    }
  }

  /**
   * 
   * @description Delete book 
   * @Param {Integer} id
   * 
  */
  async deleteBook(id: number): Promise<Boolean | any> {
    const book = await this.getBookById(id);
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    try {
      return Book.destroy({ where: { id: id } });
    } catch (err) {
      console.log("Error in delete Book => ", err);
    }
  }
}

