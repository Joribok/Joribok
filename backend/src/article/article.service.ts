import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
// import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticleService {
  async createArticle(plans: string[]) {
    const userNickname = 'SAGE';
    const title = `제목 : ${userNickname}의 계획`;
    console.log(title);
    await this.saveArticle(title, plans);
    return '';
  }

  private saveArticle(title: string, plans: string[]) {
    console.log('게시글 생성 후 저장 : ', title, plans);
  }

  async findAll(pageNumber: number) {
    console.log(pageNumber);
    //return pageNumber
    // {
    //   articles : [
    //     {
    //       id: "",
    //       nickname:""
    //       plan: '',
    //     }
    //   ],
    //   pageNumber: 1,
    //   hasNext: false
    //   totalCount: 11
    // }
    return `This action returns all article`;
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }
}
