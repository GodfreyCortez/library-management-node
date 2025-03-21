import { DataTypes, Model, Sequelize } from "sequelize";
import { Author } from "./author";
import { Genre } from "./genre";

export class Book extends Model {
  declare id: string;
  declare title: string;
  declare publishingYear: string | null;
  declare rating: number | null;
  declare authors?: { author: string }[];
  declare genres?: { genre: string }[];
  declare Authors?: { author: string }[];
  declare Genres?: { genre: string }[];
}

export const initializeBookModel = (sequelize: Sequelize) => {
  Book.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      publishingYear: {
        type: DataTypes.STRING(4),
      },
      rating: {
        type: DataTypes.INTEGER,
      },
    },
    { sequelize }
  );
};

export const initializeBookRelations = () => {
  Book.belongsToMany(Author, { through: "BookAuthor" });
  Author.belongsToMany(Book, { through: "BookAuthor" });

  Book.belongsToMany(Genre, { through: "BookGenre" });
  Genre.belongsToMany(Book, { through: "BookGenre" });
};
