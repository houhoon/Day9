import { Field, ObjectType, PickType, InputType } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { IsString } from 'class-validator';

@InputType()
export class LoginInput extends PickType(User, ['email', 'password']) {}

@ObjectType()
export class LoginOutput extends CoreOutput {
  @Field(type => String, { nullable: true })
  @IsString()
  token?: string;
}
