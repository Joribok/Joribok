import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ArticleModule } from './article/article.module';
import { LuckyModule } from './lucky/lucky.module';
import { User } from './user/entities/user.entity';
import { Article } from './article/entities/article.entity';
import { Lucky } from './lucky/entities/lucky.entity';

@Module({
  imports: [
    UserModule,
    ArticleModule,
    LuckyModule,
    TypeOrmModule.forRoot({
      type: '',
      host: '',
      port: 3000,
      username: '',
      password: '',
      database: '',
      entities: [User, Article, Lucky],
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
