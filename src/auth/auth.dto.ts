import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

/** 로그인 요청 규격 (프론트 UserLogin과 동일) */
export class LoginDto {
  @IsEmail({}, { message: '올바른 이메일 형식이 아닙니다.' })
  email: string;

  @IsString()
  @MinLength(6, { message: '비밀번호는 6자 이상이어야 합니다.' })
  password: string;
}

/** 회원가입 요청 규격 (프론트 RegisterRequest와 동일) */
export class RegisterDto {
  @IsString()
  @IsNotEmpty({ message: '아이디는 필수입니다.' })
  username: string;

  @IsEmail({}, { message: '올바른 이메일 형식이 아닙니다.' })
  email: string;

  @IsString()
  @MinLength(6, { message: '비밀번호는 6자 이상이어야 합니다.' })
  password: string;
}
