import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable, Logger } from '@nestjs/common';
import { RBMQ_EXCHANGES } from '../enums';

@Injectable()
export class PublisherService {
  private readonly logger = new Logger(PublisherService.name);

  constructor(private readonly amqpConnection: AmqpConnection) {}

  async publish<T = unknown>(
    message: T,
    exchange: RBMQ_EXCHANGES,
    routingKey = '', // fanout exchange does not need routing key
  ): Promise<void> {
    try {
      this.logger.debug(
        `📤 Publicando mensagem em "${exchange}" -> "${routingKey}"`,
      );
      this.logger.verbose(`Payload: ${JSON.stringify(message)}`);

      await this.amqpConnection.publish(exchange, routingKey, message);

      this.logger.log(`✅ Mensagem publicada com sucesso para "${routingKey}"`);
    } catch (error) {
      const message = `❌ Erro ao publicar mensagem em "${routingKey}" no exchange "${exchange}"`;
      this.logger.error(message);
      // TODO: await sendSlackMessage(message);
      throw error;
    }
  }
}
