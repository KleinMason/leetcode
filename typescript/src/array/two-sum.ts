function twoSum(nums: number[], target: number): number[] {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    if (map.has(difference))
      return [map.get(difference), i];
    map.set(nums[i], i);
  }
  return [-1, -1];
};