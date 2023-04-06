import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { checkArticleValidate } from './utils/checkValidate';
import { Article } from './entities/article.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PAGE_PER_COUNT } from 'src/constant';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
  ) {}

  async createArticle(plans: string[]) {
    if (checkArticleValidate(plans)) {
      // 현재 로그인 중  user의 네이밍을 가지고 와야 함
      const userNickname = 'SAGE';
      await this.saveArticle(userNickname, plans);
    }
    if (!checkArticleValidate(plans)) {
      throw new HttpException('입력하신 계획을 다시 확인해주세요', HttpStatus.BAD_REQUEST);
    }
  }

  private async saveArticle(nickName: string, plans: string[]) {
    const article = new Article();
    article.userId = nickName; // userId 임의로 지정
    article.plans = JSON.stringify(plans);
    article.comments = ''; //  최초 생성이므로 빈 배열 저장
    article.gauge = 0; //  최초 생성이므로 0
    await this.articleRepository.save(article);
  }

  private findArticleState = async (pageNumber: number) => {
    const totalCount = await this.articleRepository.count();
    const hasNext = totalCount > (pageNumber + 1) * PAGE_PER_COUNT;
    return { totalCount, hasNext };
  };

  private modifyArticleForm = (articleList: Article[]) => {
    return articleList.map(item => {
      return {
        id: item.id,
        nickName: item.userId,
        plan: JSON.parse(item.plans)[0],
      };
    });
  };

  async findAll(pageNumber: number) {
    const articleList = await this.articleRepository.find({
      take: PAGE_PER_COUNT,
      skip: pageNumber * PAGE_PER_COUNT,
    });
    const { totalCount, hasNext } = await this.findArticleState(pageNumber);

    return {
      articles: this.modifyArticleForm(articleList),
      pageNumber: pageNumber,
      hasNext,
      totalCount,
    };
  }

  async findOne(id: number) {
    return await this.articleRepository.findOneBy({ id });
  }
}
