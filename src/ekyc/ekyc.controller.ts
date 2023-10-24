import { Body, Controller, Get, Post } from '@nestjs/common';
import { EkycService } from './ekyc.service';
import { DtoCreateEKYC } from './bto.create-ekyc';

@Controller('api/ekyc')
export class EkycController {
  constructor(private readonly ekycService: EkycService) {}

  @Get()
  getHello(): string {
    return this.ekycService.getHello();
  }
""
  @Post('/')
  create(@Body() dtoCreateEKYC : DtoCreateEKYC){
    try{
      return this.ekycService.create(dtoCreateEKYC);
   } catch(err) {
      return {status: 'error', message: err.message}
   }
  }
}
