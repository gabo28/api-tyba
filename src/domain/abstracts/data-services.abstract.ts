import { User} from '../models';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract user: IGenericRepository<User>;
}