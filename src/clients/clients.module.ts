import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { clientProviders } from './clients.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ClientsController],
  providers: [ ...clientProviders, ClientsService,]
})
export class ClientsModule {}
