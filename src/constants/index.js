export const ITEMS_PER_PAGE = 30;
export const LIST_TYPES = {
  top: 'top',
  new: 'new',
  show: 'show',
  ask: 'ask',
  jobs: 'jobs',
};

export const FETCH_LOCATIONS = {
  [LIST_TYPES.top]: 'https://hacker-news.firebaseio.com/v0/topstories.json',
  [LIST_TYPES.new]: 'https://hacker-news.firebaseio.com/v0/newstories.json',
  [LIST_TYPES.show]: 'https://hacker-news.firebaseio.com/v0/showstories.json',
  [LIST_TYPES.ask]: 'https://hacker-news.firebaseio.com/v0/askstories.json',
  [LIST_TYPES.jobs]: 'https://hacker-news.firebaseio.com/v0/jobstories.json',
};
