const twoSum = (nums, target) => {
  const map = nums.reduce(
    (previousValue, currentValue, currentIndex) => ({
      ...previousValue,
      [currentValue]: currentIndex,
    }),
    {}
  );

  for (const index in nums) {
    const num = nums[index];
    const partB = target - num;

    if (map[partB]) {
      const otherIndex = map[partB];
      return [index, otherIndex];
    }
  }
};

console.log(twoSum([1, 11, 15, 2, 7, 99], 9));
