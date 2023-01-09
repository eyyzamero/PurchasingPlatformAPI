import { AuthGuard } from '@nestjs/passport';

export class AuthenticationLocalGuard extends AuthGuard('authentication-local') {
  
}