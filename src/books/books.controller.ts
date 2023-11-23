// books.controller.ts

import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) { }

  @Get()
  @ApiOperation({ summary: 'List All Books' })
  async getAllBooks() {
    return this.booksService.getAllBooks();
  }

  @Get(':id')
  @ApiOperation({ summary: 'List individual book based on id' })
  async getBookById(@Param('id') id: number) {
    return this.booksService.getBookById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Add new book record' })
  @ApiBody({
    description: 'Add new book record',
    schema: {
      example: {
        title: 'New Book Title',
        isbn: 'ITI123'
      },
    },
  })
  async createBook(@Body() createBookDto: CreateBookDto) {
    return this.booksService.createBook(createBookDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update existing book record' })
  @ApiBody({
    description: 'Update existing books',
    schema: {
      example: {
        title: 'Updated Book Title',
      },
    },
  })
  async updateBookTitle(@Param('id') id: number, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.updateBook(id, updateBookDto);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: number) {
    const response = await this.booksService.deleteBook(id);

    if(response) {
      return {
        "message": "Record Deleted successfully",
        "statusCode": 200
      }
    }
  }
}
