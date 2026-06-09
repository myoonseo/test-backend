import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 전역 검증 파이프: DTO 규칙에 어긋나는 요청은 컨트롤러 도달 전에 400 Bad Request 로 막는다.
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // DTO에 정의되지 않은 속성은 제거
      forbidNonWhitelisted: true, // DTO에 없는 속성이 오면 400 (이상한 데이터 차단)
      transform: true, // 들어온 값을 DTO 타입으로 변환
    }),
  );

  // Angular(:4200) 개발 서버에서 호출할 수 있도록 CORS 허용
  app.enableCors({ origin: 'http://localhost:4200' });

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`NestJS 서버 실행 중: http://localhost:${port}`);
}
bootstrap();
