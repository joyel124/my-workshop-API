import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @AutoMap()
  @ApiProperty()
  username: string;
  @ApiProperty()
  @AutoMap()
  email: string;
  @ApiProperty()
  @AutoMap()
  name: string;
  @ApiProperty()
  @AutoMap()
  password: string;
}
