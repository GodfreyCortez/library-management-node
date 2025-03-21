import { DataTypes, Model, Sequelize } from "sequelize";

export class Author extends Model {
  declare id: string;
  declare author: string;
}

export const initializeAuthorModel = (sequelize: Sequelize) => {
  Author.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { sequelize }
  );
};
