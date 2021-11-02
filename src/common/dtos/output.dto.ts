import { Field, ObjectType } from '@nestjs/graphql';
import { IsString, IsBoolean } from 'class-validator';

@ObjectType()
export class CoreOutput {
  @Field(type => String, { nullable: true })
  @IsString()
  error?: string;

  @Field(type => Boolean)
  @IsBoolean()
  ok: boolean;
}
