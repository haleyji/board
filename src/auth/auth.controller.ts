import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authrCredentialDto: AuthCredentialDto,
  ): Promise<void> {
    return this.authService.signUp(authrCredentialDto);
  }

  @Get()
  getUsers(): Promise<User[]> {
    return this.authService.getUsers();
  }

  @Post('signin')
  signIn(
    @Body(ValidationPipe) authCredential: AuthCredentialDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredential);
  }
}
