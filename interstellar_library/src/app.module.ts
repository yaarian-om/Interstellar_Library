import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModeratorModule } from './moderator/moderator.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ModeratorModule,TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'MoHiT8970',
    database: 'interstellar_library',
    autoLoadEntities: true,
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
