import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { NotFoundException } from '@nestjs/common';

describe('BooksController', () => {
  let controller: BooksController;
  let service: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [BooksService],
    }).compile();

    controller = module.get<BooksController>(BooksController);
    service = module.get<BooksService>(BooksService);
  });

  describe('getAllBooks', () => {
    it('should return an array of books', async () => {
      const date = new Date();
      const expectedBooks: any = [
        { id: 1, title: 'Book 1', isbn: '1234567890', createdAt: date, updatedAt: date },
        { id: 2, title: 'Book 2', isbn: '0987654321', createdAt: date, updatedAt: date },
      ];

      jest.spyOn(service, 'getAllBooks').mockResolvedValueOnce(expectedBooks);

      expect(await controller.getAllBooks()).toEqual([
        { id: 1, title: 'Book 1', isbn: '1234567890', createdAt: date, updatedAt: date },
        { id: 2, title: 'Book 2', isbn: '0987654321', createdAt: date, updatedAt: date },
      ]);
    });
  });

  describe('deleteBook', () => {
    it('should delete a book and return updated list', async () => {
      const date = new Date();
      // Create two books
      let expectedBooks: any = [
        { id: 1, title: 'Book 1', isbn: '1234567890', createdAt: date, updatedAt: date },
        { id: 2, title: 'Book 2', isbn: '0987654321', createdAt: date, updatedAt: date },
      ];

      jest.spyOn(service, 'getAllBooks').mockResolvedValueOnce(expectedBooks);

      jest.spyOn(service, 'deleteBook').mockImplementationOnce(async (id: number) => {
        // Simulate book deletion
        return expectedBooks.filter(book => book.id !== id);
      });

      // Delete the book with id 1
      const data = await controller.deleteBook(1);

      expect(data).toHaveLength(1);
    });

    it('should handle NotFoundException when deleting a non-existing book', async () => {
      // Mock the service method to throw a NotFoundException
      jest.spyOn(service, 'deleteBook').mockRejectedValueOnce(new NotFoundException());

      // Verify that the controller handles NotFoundException and returns the appropriate response
      await expect(controller.deleteBook(999)).rejects.toThrow(NotFoundException);
    });
  });
});
