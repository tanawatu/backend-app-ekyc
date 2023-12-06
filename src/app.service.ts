import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(){
    const res = new UnauthorizedException()
    return res;
  }
}
