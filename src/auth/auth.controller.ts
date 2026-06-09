import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { LoginDto, RegisterDto } from './auth.dto';

@Controller('api')
export class AuthController {
  // 프론트에서 보낸 로그인 데이터를 받아 콘솔에 찍고 성공 메시지를 반환한다.
  @Post('login')
  @HttpCode(200)
  login(@Body() body: LoginDto) {
    console.log('[로그인 요청]', body);
      return { from: 'nestjs', success: true, message: `로그인 데이터를 받았어요! ${body.email}` };
  }

  // 프론트에서 보낸 회원가입 데이터를 받아 콘솔에 찍고 성공 메시지를 반환한다.
  @Post('register')
  @HttpCode(201)
  register(@Body() body: RegisterDto) {
    console.log('[회원가입 요청]', body);
    return { success: true, message: '회원가입 데이터를 받았어요!' };
  }
}
