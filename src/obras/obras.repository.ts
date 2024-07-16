import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import Obras from './obras.entity';

@Injectable()
export class ObrasRepository {

    constructor(private prismaService: PrismaService) { }
    
    async findAll() {
        return this.prismaService.obras.findMany();
    }

    async findOne(id: number) {
        return this.prismaService.obras.findUnique({
            where: {
                id,
            },
        });
    }

    async create(obra: Obras) {
        return this.prismaService.obras.create({
            data: obra as any,
        });
    }

    async update(obra: Obras) {
        if (!obra.id) throw new Error('Obra sem ID');
        return this.prismaService.obras.update({
            where: {
                id: obra.id,
            },
            data: obra as any
        });
    }

    async delete(id: number) {
        return this.prismaService.obras.delete({
            where: {
                id,
            },
        });
    }
}
