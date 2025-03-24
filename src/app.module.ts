import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrokerPublisherModuleModule } from './broker-publisher-module/broker-publisher-module.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    BrokerPublisherModuleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
