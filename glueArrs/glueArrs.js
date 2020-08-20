const glueArrs = (names, arrs) => {
  const ret = [];

  arrs.forEach((arr, i) => {
    arr.forEach((value, j) => {
      ret[j] = {
        ...ret[j],
        [names[i]]: value,
      };
    });
  });

  return ret;
};

export default glueArrs;