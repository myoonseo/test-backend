import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

/**
 * User 엔티티 — auth.dto의 username/email/password 필드와 맞춤.
 * 지금은 TypeORM ↔ MySQL 연결 확인 및 테이블 생성 용도이며,
 * auth 로그인/회원가입 로직 연동은 아직 하지 않는다.
 */
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  username: string;

  @Column({ unique: true, length: 255 })
  email: string;

  // 주의: 평문 저장. 추후 auth 연동 시 해싱(bcrypt 등) 필요.
  @Column({ length: 255 })
  password: string;

  @CreateDateColumn()
  createdAt: Date;
}
