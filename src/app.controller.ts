import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Body, Controller, Post } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  @Post()
  async getHello(@Body() body: unknown) {
    return this.amqpConnection.publish('exchange1', 'subscribe-route', body);
  }
}
