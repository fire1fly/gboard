import { classNames } from './classNames';

describe('classNames', () => {
  test('with 1 arg', () => {
    expect(classNames('class1')).toEqual('class1');
  });
  test('with multiple args', () => {
    expect(classNames('class1', 'class2 class3'))
      .toEqual('class1 class2 class3');
  });
  test('with false args', () => {
    expect(classNames('class1', { condClass: false }, 'class3'))
      .toEqual('class1 class3');
  });
  test('with true args', () => {
    expect(classNames('class1', { condClass: true }, 'class3'))
      .toEqual('class1 condClass class3');
  });
  test('with undefined arg', () => {
    expect(classNames(undefined)).toEqual('');
  });
  test('with undefined and defined args', () => {
    expect(classNames('class1', undefined)).toEqual('class1');
  });
});
