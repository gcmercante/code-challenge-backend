import { IncomingHttpHeaders } from 'http';

export interface CustomHeaders extends IncomingHttpHeaders {
  user: string
}