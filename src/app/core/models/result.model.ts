import { Product } from './product.model';

export interface ResultList<T> {
  Result: T[];
  Response: boolean;
  Message: string;
  Function: string;
  Href: string;
  Validations: any;
  status: number;
}

export interface Result<T> {
  Result: T;
  Response: boolean;
  Message: string;
  Function: string;
  Href: string;
  Validations: any;
  status: number;
}
