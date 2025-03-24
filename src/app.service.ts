import { Injectable } from '@nestjs/common';
import { RBMQ_EXCHANGES } from './broker-publisher-module/enums';
import { PublisherService } from './broker-publisher-module/services/publisher.service';

@Injectable()
export class AppService {
  constructor(private readonly publisherService: PublisherService) {}
  async getHello() {
    await this.publisherService.publish(
      'Hello World!',
      RBMQ_EXCHANGES.SERVICE_1,
      'w1.teste',
    );
    return 'Hello World!';
  }
}
