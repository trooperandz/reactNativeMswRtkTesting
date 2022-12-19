import AbortController from 'abort-controller';
import {fetch, Headers, Request, Response} from 'cross-fetch';
// import {server} from './src/server';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;
global.AbortController = AbortController;
