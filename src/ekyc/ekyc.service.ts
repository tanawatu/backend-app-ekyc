import { Injectable } from '@nestjs/common';
import { DtoCreateEKYC } from './bto.create-ekyc';

@Injectable()
export class EkycService {
    getHello(): string {
        return 'Hello World!';
      }

    async create( dtoCreateEKYC : DtoCreateEKYC) {
        try{
            const data = dtoCreateEKYC
            return {status: 'success',url: `https://beta.phr.healthtag.io/?u=00000000000000000000000000000000?token=${data.tsn_token}`, data:data}
        } 
        catch(err){
            return {status: 'fail', message: err.message}
        }
    }
}
