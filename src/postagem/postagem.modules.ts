import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./entities/postagem.entity";
import { PostagemService } from "./services/postagem.service";
import { PostagemController } from "./controllers/postagem.controller";
import { TemaModule } from "../tema/tema.module";
 
@Module({
    imports: [TypeOrmModule.forFeature([Postagem]), TemaModule], //Importa o Postagem como um entidade do Ts
    providers: [PostagemService], // Define o PostagemService como um provedor
    controllers: [PostagemController],
    exports: [TypeOrmModule] // Exporta o TypeOrmModule
})
export class PostagemModule {}