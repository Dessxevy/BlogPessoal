import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Tema } from '../../tema/entities/tema.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

/* Entity = Modela os dados (tabela no banco)
✔ Representa a estrutura da tabela
✔ Usado pelo TypeORM */

@Entity({ name: 'tb_postagem' }) //Cria uma tabela chamada tb_postagem
export class Postagem {
  @PrimaryGeneratedColumn() //Cria uma chave primária e auto increment
  id!: number;

  @IsNotEmpty() //Verifica se o campo está vazio
  @Column({ length: 100, nullable: false })//Cria uma coluna chamada titulo
  titulo!: string;

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  texto!: string;

  @UpdateDateColumn() //Cria uma coluna chamada data atualização da postagem
  data!: Date;

  @ManyToOne(() => Tema, (tema) => tema.postagem, {
    onDelete: "CASCADE"
  })
  tema!: Tema;

  @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
    onDelete: "CASCADE"
  })
  usuario!: Usuario;
}