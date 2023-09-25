import getBuffer from '../getbuffer';
import ArrayBufferConverter from '../app';

test('load data', () => {
  const buffer = getBuffer();
  const bufferArray = new ArrayBufferConverter();
  bufferArray.load(buffer);
  expect(bufferArray.buffer).toEqual(getBuffer());
});

test('get string from buffer', () => {
  const buffer = getBuffer();
  const bufferArray = new ArrayBufferConverter();
  bufferArray.load(buffer);
  expect(bufferArray.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
