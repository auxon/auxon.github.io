import { TestScheduler } from 'rxjs/testing';
import { throttleTime } from 'rxjs';
const bitwork = require('bitwork')
const bit = new bitwork(
  {  rpc: { user: "root", pass: "yg_(/`!kyAKc/`ZQ<miSvF0}D+6tOs{N~{/" } },
  { peer: { user: "root", pass: "yg_(/`!kyAKc/`ZQ<miSvF0}D+6tOs{N~{/" } } 
)
const testScheduler = new TestScheduler((actual, expected) => {
  // asserting the two objects are equal - required
  // for TestScheduler assertions to work via your test framework
  // e.g. using chai.
  expect(actual).toStrictEqual(expected);
});

// This test runs synchronously.
it('generates the stream correctly', () => {
  testScheduler.run((helpers) => {
    const { cold, time, expectObservable, expectSubscriptions } = helpers;
    const e1 = cold(' -a--b--c---|');
    const e1subs = '  ^----------!';
    const t = time('   ---|       '); // t = 3
    const expected = '-a-----c---|';

    expectObservable(e1.pipe(throttleTime(t))).toBe(expected);
    expectSubscriptions(e1.subscriptions).toBe(e1subs);
  });
});

it('get blockHeaders', (done) => {
  jest.setTimeout(1000000);
  bit.onheader()
});

