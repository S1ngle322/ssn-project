import {Controller, Get} from '@nestjs/common'
import { AppService } from './app.service';

let iter = 0

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    if (iter === 2) {
      return { error: 'FORBIDDEN' }
    }
    iter++
    return this.appService.getHello();
  }
  
  @Get('/ssn/group')
  getSsnGroup() {
    if (iter === 2) {
      return { error: 'FORBIDDEN' }
    }
    iter++
    return this.appService.getGroup()
  }
}

