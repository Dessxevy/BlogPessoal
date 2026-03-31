import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';


/* Entity = Modela os dados (tabela no banco)
✔ Representa a estrutura da tabela
✔ Usado pelo TypeORM */
 

@Entity({ name: 'tb_postagem' }) //Cria uma tabela chamada tb_postagem
export class Postagem {
  @PrimaryGeneratedColumn() //Cria uma chave primária e auto increment
  id: number;

  @IsNotEmpty() //Verifica se o campo está vazio
  @Column({length: 100, nullable: false})//Cria uma coluna chamada titulo
  titulo: string;

@IsNotEmpty()
  @Column({length: 1000, nullable: false})
  texto: string;

  @UpdateDateColumn() //Cria uma coluna chamada data atualização da postagem
  data: Date;
}

