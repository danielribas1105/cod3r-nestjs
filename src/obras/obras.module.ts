import { Module } from '@nestjs/common';
import { ObrasController } from './obras.controller';
import { ObrasRepository } from './obras.repository';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [ObrasController],
  providers: [ObrasRepository]
})
export class ObrasModule {}
