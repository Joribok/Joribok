import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { ArticleModule } from './article/article.module';
import { ArticleController } from './article/article.controller';
import { ArticleService } from './article/article.service';
import { LuckyModule } from './lucky/lucky.module';
import { LuckyController } from './lucky/lucky.controller';
import { LuckyService } from './lucky/lucky.service';

@Module({
  imports: [UserModule, ArticleModule, LuckyModule],
  controllers: [AppController, UserController, ArticleController, LuckyController],
  providers: [AppService, UserService, ArticleService, LuckyService],
})
export class AppModule {}
