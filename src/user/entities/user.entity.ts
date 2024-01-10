import { 
    Column, 
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn, 
} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn() 
    id: number

    @Column()
    name: string

    @Column()
    phoneNumber: string

    @Column()
    contactMethod: string

    @CreateDateColumn()
    createdAt: Date
}
