import { Publisher } from './publisher';

export interface Client {
  ClientName :string;
  run(Object:any):Boolean;
}