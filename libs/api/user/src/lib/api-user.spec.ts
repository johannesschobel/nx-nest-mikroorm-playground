import { apiUser } from './api-user';

describe('apiUser', () => {
  it('should work', () => {
    expect(apiUser()).toEqual('api-user');
  });
});
