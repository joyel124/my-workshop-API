import { AutoMap } from '@automapper/classes';
import { ApiProperty } from "@nestjs/swagger";

export class CreateWorkshopDto {
  @AutoMap()
  @ApiProperty()
  id: number;
  @ApiProperty()
  @AutoMap()
  name: string;
  @ApiProperty()
  @AutoMap()
  ownerId: number;
}