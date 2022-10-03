import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { Task } from "./Task";
import { User } from "./User";

@Entity('project')
export class Project {
  @PrimaryColumn()
  public id?: string;

  @Column()
  public title: string;

  @ManyToOne(() => User, (users) => users.id)
  @JoinColumn({ name: 'user_id' })
  public user: User;

  @Column()
  public created_at: Date;

  @OneToMany(() => Task, (task) => task.project)
  tasks: Task[];

  constructor() {
    if(!this.id) {
      this.id = uuidv4();
      this.created_at = new Date();
    }
  }
}