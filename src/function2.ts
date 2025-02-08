const findMax = (arr: number[]): string => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
        max = arr[i];
        }
    }
    return max.toString();
    }

export default findMax;