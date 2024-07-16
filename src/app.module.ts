import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { TempModule } from './temp/temp.module';
import { DbModule } from './db/db.module';
import { ObrasModule } from './obras/obras.module';

@Module({
  imports: [UsuarioModule, TempModule, DbModule, ObrasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
