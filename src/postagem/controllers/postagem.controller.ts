import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { PostagemService } from './../services/postagem.service';
import { Postagem } from '../entities/postagem.entity';

/*Controller = Recebe as requisições e responde
✔ Recebe requisições HTTP (GET, POST, PUT, DELETE)
✔ Chama o service
✔ Retorna a resposta pro cliente*/

@Controller("/postagens")
export class PostagemController {
    constructor(private readonly PostagemService: PostagemService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Postagem[]> {
        return this.PostagemService.findAll();
    }
}