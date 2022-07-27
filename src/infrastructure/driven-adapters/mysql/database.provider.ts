import { TypeOrmModule } from '@nestjs/typeorm';
import { User} from '../../../domain/models'

export const DatabaseProvider = [
    TypeOrmModule.forRootAsync({
        useFactory: () =>{
          return {
            type: 'mysql',
            host: process.env.DB_HOST,
            port: 3306,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            ssl: false,
            entities: [User],
            synchronize: true,
          }
        }
      }),
];