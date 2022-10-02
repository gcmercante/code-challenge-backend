import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('user')
export class User {
  @PrimaryColumn()
  public id?: string;

  @Column()
  public name: string;

  @Column()
  public email: string;

  @Column()
  public password: string;
}