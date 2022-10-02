import { v4 as uuidV4 } from 'uuid';
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

  constructor() {
    if(!this.id) {
      this.id = uuidV4();
    }
  }
}