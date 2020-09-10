const assert = require('assert');
const arrayRotate = require('../array-rotate');
const maxDepthOfATree = require('../max-depth-of-tree');

describe('Algo unit test cases', () => {
    it('should call arrayRotate with input and rotate by 2 steps', () => {
        assert.deepEqual(arrayRotate([12, 10, 5, 6, 52, 36], 2), [5, 6, 52, 36, 12, 10]);
    });
    it('should call arrayRotate with input and dont pass rotate step', () => {
        assert.deepEqual(arrayRotate([12, 10, 5, 6, 52, 36]), [12, 10, 5, 6, 52, 36]);
    });
    it('should call maxDepthOfATree with input', () => {
        assert.deepEqual(maxDepthOfATree([3, 9, 20, 12, 9, 12, null, 15, 7]), 4);
    });
});

