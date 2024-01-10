import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  collaborate(name: string, phoneNumber: string, contactMethod: string) {
    return true;
  }
}
