import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RabbitMQModule.forRoot(RabbitMQModule, {
      // exchanges: [
      //   {
      //     name: 'exchange1',
      //     type: 'topic',
      //   },
      // ],
      uri: process.env.AMQP_URL,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
