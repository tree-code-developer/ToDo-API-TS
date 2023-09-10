import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 100 })
    title: string;

    @Column({ type: "varchar", length: 100 })
    description: string;

    @Column({ default: false })
    isDone: boolean;
}
