import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RabbitInterceptor } from './rabbit.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  // app.useGlobalInterceptors(RabbitInterceptor);
}
bootstrap();
