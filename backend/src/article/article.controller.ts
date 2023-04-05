import { Controller, Get, Post, Body, Query, Param, Res, HttpStatus } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  async create(@Body() createArticleDto: CreateArticleDto, @Res() res): Promise<void> {
    const { plans } = createArticleDto;
    await this.articleService.createArticle(plans);
    res.status(HttpStatus.CREATED).send();
  }

  @Get()
  async getPages(@Query('pageNumber') pageNumber) {
    const articleList = await this.articleService.findAll(Number(pageNumber));
    console.log(articleList);
  }

  @Get(':articleId')
  async getArticle(@Param('articleId') articleId: string, @Res() res) {
    const article = await this.articleService.findOne(Number(articleId));
    if (!article) {
      res
        .status(HttpStatus.BAD_REQUEST)
        .send({ message: '입력하신 articleId를 다시 확인해주세요' });
    }
    if (article) {
      const plans = JSON.parse(article.plans);
      const nickName = 'SAGE'; // 이곳에서 UserId를 통해서 닉네임 값 받아와야함
      res.status(HttpStatus.OK).send({ id: article.id, plans, nickName });
    }
  }
}
