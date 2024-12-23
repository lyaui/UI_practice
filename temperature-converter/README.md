# Temperature Converter

Build a simple temperature converter widget that contains two text inputs temperatures in Celsius and Fahrenheit respectively, allowing for conversion between the temperature scales.

## Requirements
- Initially, both fields are empty. When a number value is entered into a text input, the other input will be calculated and reflected.
- Round to 4 decimal places where necessary.
If a non-numerical string is entered into one input, the other input will be blank.
- The last two requirements might not be given to you during interviews, you're expected to clarify.

P.S. To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.


## Reviews
1. 方向沒有錯，就是那麼直覺的 C, F 二組 input value 和二組轉換算式
2. 轉換前要先確定是否為數字，如果不是數字就可以將其設為空
    ```javascript
    const handleInputChange = (event) => {
      // 不在這邊進行 convert 和 format，而是集中在 onChange 中
      onChange(event.target.value);
    };

    const convert = (value, calcFn) => {
      const numericValue = Number(value);
      // 驗證
      const isValid = !Number.isNaN(numericValue) && Boolean(value); // 不包含 0
      // 轉換
      return isValid ? format(calcFn(numericValue)) : '';
    };
    ```
3. 重點在如何正確 format 值，寫不出 regex 的話，可以利用`split`分割字串，然後根據前後位數判斷是否需要 round
    ```javascript
    const formatDegree = (n) => {
      // Show 4 d.p. if number has more than 4 decimal places.
      // /\.\d{5}/.test(number)
      const [_, decimalPart] = String(n).split('.');
      if (decimalPart && decimalPart.length > 4) {
        return Number(n).toFixed(4);
      }
      return n;
    };
    ```
4. 加上 `<label>` 提高 a11y