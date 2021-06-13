import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Body, Controller, Post } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  @Post()
  async getHello(@Body() body: unknown) {
    return this.amqpConnection.publish('amq.fanout', 'subscribe-route', body, {
      correlationId: 'XPTO',
      persistent: false,
      expiration: 5e3,
    });
  }
}
