import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { PublisherService } from './services/publisher.service';

@Module({
  imports: [
    RabbitMQModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.AMQP_URL!,
      }),
    }),
  ],
  providers: [PublisherService],
  exports: [PublisherService],
})
export class BrokerPublisherModuleModule {}
