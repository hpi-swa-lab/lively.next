/* global beforeEach, afterEach, before, after, describe, it */

import { expect } from 'mocha-es6';
import { arr, obj } from 'lively.lang';

import { parseDirectoryListFromLs, convertDirectoryUploadEntriesToFileInfos } from '../client-fs-helper.js';

describe('client fs', function () {
  it(' parse directory list output', function () {
    let tests = [{
      rootDirectory: null,
      string: '-rw-r-r-       1 robert   SAP_ALL\\Domain User       5298 Dec 17 14:04:02 2012 test.html',
      expected: [{
        mode: '-rw-r-r-',
        linkCount: 1,
        isLink: false,
        user: 'robert',
        group: 'SAP_ALL\\Domain User',
        size: 5298,
        lastModified: new Date('Dec 17 14:04:02 2012 GMT'),
        path: 'test.html',
        fileName: 'test.html',
        isDirectory: false,
        rootDirectory: null
      }]
    }, {
      rootDirectory: null,
      string: 'drwxrwxr-x  2 lively lively       4096 Aug 29 03:39 bin\n',
      expected: [{
        mode: 'drwxrwxr-x',
        linkCount: 2,
        isLink: false,
        // linkTarget: undefined,
        user: 'lively',
        group: 'lively',
        size: 4096,
        lastModified: new Date('Aug 29 03:39 GMT'),
        path: 'bin',
        fileName: 'bin',
        isDirectory: true,
        rootDirectory: null
      }]
    }, {
      rootDirectory: null,
      string: 'drwxrwxrwx  279 i834382  1824234391  9486 Dec 10 19:39:02 2013 ./',
      expected: [{
        mode: 'drwxrwxrwx',
        linkCount: 279,
        isLink: false,
        user: 'i834382',
        group: '1824234391',
        size: 9486,
        lastModified: new Date('Dec 10 19:39:02 2013 GMT'),
        path: '',
        fileName: '.',
        isDirectory: true,
        rootDirectory: null
      }]
    }, {
      rootDirectory: null,
      string: '-rw-rw-r-- 1 lively lively 9 May 28 08:44:50 2014 ./foo.txt',
      expected: [{
        mode: '-rw-rw-r--',
        linkCount: 1,
        isLink: false,
        user: 'lively',
        group: 'lively',
        size: 9,
        lastModified: new Date('May 28 01:44:50 2014 PDT'),
        path: 'foo.txt',
        fileName: 'foo.txt',
        isDirectory: false,
        rootDirectory: null
      }]
    }];

    tests.forEach(({ string, rootDirectory, expected }, i) => {
      // var result = parseDirectoryListFromLs(tests[0].string, tests[0].rootDirectory);
      let result = parseDirectoryListFromLs(string, rootDirectory);
      expect(obj.inspect(expected)).equals(obj.inspect(result), i + 'parseDirectoryListFromLs');
    });
  });

  it('convert directory upload entries to file infos', function () {
    // directory upload entries come from webkit dragn drop directories /
    // file system access

    let fileEntries = {
      filesystem: {},
      fullPath: '/test',
      isDirectory: true,
      isFile: false,
      name: 'test',
      children: [
        { filesystem: {}, fullPath: '/test/dir2', isDirectory: true, isFile: false, name: 'dir2', children: [] },
        { filesystem: {}, fullPath: '/test/foo.txt', isDirectory: false, isFile: true, name: 'foo.txt' },
        {
          filesystem: {},
          fullPath: '/test/dir1',
          isDirectory: true,
          isFile: false,
          name: 'dir1',
          children: [
            { filesystem: {}, fullPath: '/test/dir1/bar.txt', isDirectory: false, isFile: true, name: 'bar.txt' },
            {
              filesystem: {},
              fullPath: '/test/dir1/dir12',
              isDirectory: true,
              isFile: false,
              name: 'dir12',
              children: [{ filesystem: {}, fullPath: '/test/dir1/dir12/baz.txt', isDirectory: false, isFile: true, name: 'baz.txt' }]
            }]
        }]
    };

    let expected = [{
      fileName: 'test',
      path: 'test',
      rootDirectory: './',
      isDirectory: true,
      isLink: undefined,
      lastModified: undefined,
      linkCount: undefined,
      mode: undefined,
      size: undefined,
      group: undefined,
      user: undefined
    }, {
      fileName: 'test/foo.txt',
      path: 'test/foo.txt',
      rootDirectory: './',
      isDirectory: false,
      isLink: undefined,
      lastModified: undefined,
      linkCount: undefined,
      mode: undefined,
      size: undefined,
      group: undefined,
      user: undefined
    }, {
      fileName: 'test/dir1',
      path: 'test/dir1',
      rootDirectory: './',
      isDirectory: true,
      isLink: undefined,
      lastModified: undefined,
      linkCount: undefined,
      mode: undefined,
      size: undefined,
      group: undefined,
      user: undefined
    }, {
      fileName: 'test/dir1/bar.txt',
      path: 'test/dir1/bar.txt',
      rootDirectory: './',
      isDirectory: false,
      isLink: undefined,
      lastModified: undefined,
      linkCount: undefined,
      mode: undefined,
      size: undefined,
      group: undefined,
      user: undefined
    }, {
      fileName: 'test/dir1/dir12',
      path: 'test/dir1/dir12',
      rootDirectory: './',
      isDirectory: true,
      isLink: undefined,
      lastModified: undefined,
      linkCount: undefined,
      mode: undefined,
      size: undefined,
      group: undefined,
      user: undefined
    }, {
      fileName: 'test/dir1/dir12/baz.txt',
      path: 'test/dir1/dir12/baz.txt',
      rootDirectory: './',
      isDirectory: false,
      isLink: undefined,
      lastModified: undefined,
      linkCount: undefined,
      mode: undefined,
      size: undefined,
      group: undefined,
      user: undefined
    }, {
      fileName: 'test/dir2',
      path: 'test/dir2',
      rootDirectory: './',
      isDirectory: true,
      isLink: undefined,
      lastModified: undefined,
      linkCount: undefined,
      mode: undefined,
      size: undefined,
      group: undefined,
      user: undefined
    }];

    let result = convertDirectoryUploadEntriesToFileInfos(fileEntries);
    expect(arr.sortByKey(expected, 'path')).deep.equals(arr.sortByKey(result, 'path'));
  });
});
