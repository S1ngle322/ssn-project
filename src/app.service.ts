import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  
  getGroup(): string[] {
    return [
        'Roman Klimov',
        'Vladislav Lamzenkov',
      'Maxim Ksenofontov',
      'Bogdan Lyubchenko',
      'Mbachan Fabrice',
      'Danis Valiev',
      'Khasan Abdurakhmanov',
      'Soh Moumbe',
      'Alexey Rakov',
      'Alexey Kosmachev',
      'Anna Miroshnichenko',
      'А Саадович',
      'Gleb Smetanin',
      'Vladimir Markov',
    ]
  }
}
