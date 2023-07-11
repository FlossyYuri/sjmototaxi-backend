import {
  AutoIncrement,
  Column,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @AutoIncrement
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fullName: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  password: string;

  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @Default(0)
  @Column({
    type: DataType.INTEGER,
  })
  balance: number;

  @Default('CLIENT')
  @Column({
    type: DataType.ENUM,
    values: ['ADMIN', 'CLIENT', 'DRIVER', 'VENDOR'],
  })
  role: string;
}
