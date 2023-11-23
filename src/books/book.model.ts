// src/books/book.model.ts

import { Model, DataTypes } from 'sequelize';
import sequelize  from '../database/sequelize.config'; // Import your Sequelize instance

class Book extends Model {
  public id!: number;
  public title!: string;
  public isbn!: string;

  // Add any other fields as needed

  public createdAt!: Date;
  public updatedAt!: Date;
}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: 'Books',
    timestamps: true,
    underscored: false,
    sequelize, 
  }
);

export default Book;
