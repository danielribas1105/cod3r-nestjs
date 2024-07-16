import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import Usuario from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';

@Controller('usuario')
export class UsuarioController {

    constructor(private repo: UsuarioRepository) {}

    @Post()
    async criar(@Body() usuario: Usuario) {
        const novoUsuario = await this.repo.create(usuario);
        return novoUsuario;
    }

    @Get()
    async obterTodos() {
        const usuarios = this.repo.findAll();
        return usuarios;
    }

    @Get(':id')
    async obterPorId(@Param('id') id: string) {
        const usuario = this.repo.findOne(+id);
        return usuario;
    }

    @Delete(':id')
    async excluirUsuario(@Param('id') id: string) {
        await this.repo.delete(+id);
        return 'Usuário ' + id + ' excluído!';
    }

    @Patch(':id')
    async atualizarUsuario(@Param('id') id: string, @Body() usuario: Usuario) {
        const usuarioAtualizado = await this.repo.update({
            ...usuario,
            id: +id,
        });
        return usuarioAtualizado;
    }
}
