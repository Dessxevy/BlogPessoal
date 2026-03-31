import { Injectable } from "@nestjs/common";
import { Postagem } from "../entities/postagem.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

 
/*Service = Regra de negócio
✔ Onde fica a lógica
✔ Acessa o banco (via repository)
✔ Faz validações, cálculos, etc*/
 

@Injectable()
export class PostagemService {

    constructor(
    @InjectRepository(Postagem)
    private postagemRepository: Repository<Postagem>
){}

    async findAll(): Promise<Postagem[]>{
        return await this.postagemRepository.find(); //select * from tb_postagem;
    }

}

 