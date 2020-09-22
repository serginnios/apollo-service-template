import Sequelize from 'sequelize';
import context from '../sequelize';

interface CarAttributes {
  id: number,
  name: string,
  description: string,
}

export default class Car extends Sequelize.Model<Sequelize.Optional<CarAttributes, 'id'>>
  implements CarAttributes {
  public id!: number;

  public name!: string;

  public description!: string;

  // timestamps!
  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

Car.init(
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.DataTypes.STRING(256),
      allowNull: false,
    },
    description: {
      type: Sequelize.DataTypes.STRING(300),
      allowNull: false,
    },
  },
  {
    sequelize: context,
    tableName: 'Cars',
    freezeTableName: true,
  },
);

// TODO: replace by migrations
Car.sync();
