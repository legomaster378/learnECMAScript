/**
 * Swap the the source with target
 * @param {Array} array
 * @param {number} left or source destination
 * @param {number} right or target destination
 */
export function swap(array, left, right) {
  const temp = array[right];
  array[right] = array[left];
  array[left] = temp;
}

export { swap as default };
