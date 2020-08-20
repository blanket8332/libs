export const className = (className = "", allowedMods = [], props = {}) => {
  if (!Array.isArray(allowedMods)) {
    props = allowedMods;
    allowedMods = Object.keys(props).map((name) =>
      props[name] === true ? name : undefined
    );
  }
  const classes = [className];
  for (const mod of allowedMods) {
    if (mod === undefined) {
      continue;
    }
    props[mod] === true && classes.push(`${className}__${mod}`);
  }
  return classes.join(" ");
};
