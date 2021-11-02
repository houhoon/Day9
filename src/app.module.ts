import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { PodcastsModule } from './podcast/podcasts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Podcast } from './podcast/entities/podcast.entity';
import { Episode } from './podcast/entities/episode.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite3',
      synchronize: true,
      logging: true,
      entities: [Podcast, Episode],
    }),
    GraphQLModule.forRoot({ autoSchemaFile: true }),
    PodcastsModule,
    UsersModule,
    JwtModule.forRoot({
      privateKey: 'djLNkgOgQ9lCPQZmtcJWCHGr8pt4rbn3',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
