import {EmbeddedList} from './embedded-list.interface';

export interface ListResult<T> {
  _embedded: EmbeddedList<T>;
  _links: any;
  page: any;
}

