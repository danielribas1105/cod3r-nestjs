import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ObrasRepository } from './obras.repository';
import Obras from './obras.entity';

@Controller('obras')
export class ObrasController {

    constructor(private repo: ObrasRepository) { }
    
    @Post()
    async novaObra(@Body() obra: Obras) {
        const novaObra = await this.repo.create(obra);
        return novaObra;
    }

    @Get()
    async obterObras() {
        const obras = this.repo.findAll();
        return obras;
    }

    @Get(':id')
    async obterObraPorId(@Param('id') id: string) {
        const obra = this.repo.findOne(+id);
        return obra;
    }

    @Delete(':id')
    async excluirObra(@Param('id') id: string) {
        await this.repo.delete(+id);
        return 'Obra ' + id + ' excluída!';
    }

    @Patch(':id')
    async atualizarInfoObra(@Param('id') id: string, @Body() obra: Obras) {
        const obraAtualizada = await this.repo.update({
            ...obra,
            id: +id,
        });
        return obraAtualizada;
    }
}
