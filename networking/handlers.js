import {rest} from 'msw';

export const handlers = [
  // rest.get(`*`, (req, res, ctx) => {
  //   console.log({ req });
  //   return res(ctx.status(200), ctx.json({ data: 'matt' }));
  // }),

  rest.get(
    'http://www.omdbapi.com/?apikey=9e1a811a&t=bewitched',
    (req, res, ctx) => {
      console.log({req});
      return res(ctx.status(200), ctx.json({Plot: 'matt'}));
    },
  ),
];
