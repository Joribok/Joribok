import { Controller, Get, Post, Body, Query, Patch, Param, Delete } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  async create(@Body() createArticleDto: CreateArticleDto): Promise<void> {
    const { plans } = createArticleDto;
    await this.articleService.createArticle(plans);
  }

  @Get()
  async getPages(@Query() query) {
    const { pageNumber } = query;
    const articleList = await this.articleService.findAll(Number(pageNumber));
  }

  @Get(':articleId')
  async getArticle(@Param('articleId') articleId: string) {
    const article = await this.articleService.findOne(Number(articleId));
    console.log(article);
  }
}
