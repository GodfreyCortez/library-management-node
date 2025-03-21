import { Sequelize } from "sequelize";
import {
  initializeAuthorModel,
  initializeGenreModel,
  initializeBookModel,
  initializeBookRelations,
} from "./models";

/**
 * Class which manages DB Connection and
 */
export class DatabaseManager {
  /** When productionizing, this should be loaded in using environment variables */
  public static sequelize = new Sequelize(
    "mydatabase",
    "myuser",
    "mypassword",
    {
      host: "localhost",
      dialect: "postgres",
    }
  );

  public static async testConnection(): Promise<void> {
    try {
      await this.sequelize.authenticate();
      await this.defineModelsAndRelations();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }

  private static async defineModelsAndRelations(): Promise<void> {
    try {
      initializeAuthorModel(this.sequelize);
      initializeGenreModel(this.sequelize);
      initializeBookModel(this.sequelize);
      initializeBookRelations();

      await this.sequelize.sync({ force: true });
    } catch (error) {
      console.error("Unable to create models for the database:", error);
    }
  }
}
