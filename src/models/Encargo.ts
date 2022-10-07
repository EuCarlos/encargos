import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity("encargos")
class Encargo {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    nome_funcionario: string;

    @Column()
    funcao: string;

    @Column()
    proventos: number;

    @CreateDateColumn()
    created_at: Date;
  }

  export default Encargo;
