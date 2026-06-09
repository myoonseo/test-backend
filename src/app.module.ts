import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { User } from './user/user.entity';

@Module({
  imports: [
    // .env 파일을 전역에서 읽을 수 있게 로드
    ConfigModule.forRoot({ isGlobal: true }),

    // .env 값으로 MySQL 연결 설정
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('DB_HOST', 'localhost'),
        port: config.get<number>('DB_PORT', 3306),
        username: config.get<string>('DB_USER', 'appuser'),
        password: config.get<string>('DB_PASSWORD', 'apppass'),
        database: config.get<string>('DB_NAME', 'appdb'),
        entities: [User],
        // 개발 단계: 엔티티 → 테이블 자동 생성/동기화.
        // 운영 전환 시 false로 바꾸고 마이그레이션 사용할 것.
        synchronize: true,
      }),
    }),
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
