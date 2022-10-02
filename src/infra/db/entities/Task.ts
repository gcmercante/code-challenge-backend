import { v4 as uuidV4 } from 'uuid';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

import { Project } from "./Project";

@Entity('task')
export class Task {
  @PrimaryColumn()
  public id?: string;

  @Column()
  public description: string;

  @Column()
  public done: boolean;

  @Column()
  public created_at?: Date;

  @Column()
  public finished_at?: Date;

  @ManyToOne(() => Project, (project) => project.id)
  @JoinColumn({ name: 'project_id' })
  public project: Project;

  constructor() {
    if(!this.id) {
      this.id = uuidV4();
      this.created_at = new Date();
    }
  }
}