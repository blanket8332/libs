```javascript
const values = [224, 40, 382];

const colors = ["#db3535", "#0e65e5", "#dbad35"];

const data = glueArrs(["value", "color"], [values, colors]);

// data = [
//   { value: 224, color: "#db3535" },
//   { value: 40, color: "#0e65e5" },
//   { value: 382, color: "#dbad35" },
// ];
```
