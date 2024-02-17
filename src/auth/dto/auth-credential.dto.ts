import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(10)
  @MaxLength(30)
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: 'password contains english and number only',
  })
  password: string;
}
