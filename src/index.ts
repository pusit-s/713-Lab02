import add, { subtract } from './function';

const result = add(1,2) + 0;
const result2 = subtract(1,2) + 0;

console.log(result, 'type of result:', typeof result);
console.log(result2, 'type of result2:', typeof result2);

import findMax from './function2';

const num_list = [1, 2, 3, 4, 5];
console.log(findMax(num_list));