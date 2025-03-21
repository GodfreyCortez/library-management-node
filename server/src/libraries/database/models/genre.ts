import { DataTypes, Model, Sequelize } from "sequelize";

export class Genre extends Model {
  declare id: string;
  declare genre: string;
}

export const initializeGenreModel = (sequelize: Sequelize) => {
  Genre.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { sequelize }
  );
};
