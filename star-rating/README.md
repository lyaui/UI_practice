# Star Rating

Create a star rating widget that allows users to select a rating value.

## Requirements
- The widget accepts two parameters: the maximum number of stars and the number of currently filled stars.
- When a star is clicked, it is filled along with all the stars to its left.
- When the user hovers over the stars, all the stars under the cursor and its left are filled.
  -- The stars which need to be filled during hover take priority over existing filled state.
  -- If the cursor leaves the widget and no new selection is made, the appropriate stars revert to the filled state before the hovering.
- Make the star rating widget reusable such that multiple instances can be rendered within the same page.
The star icons, both empty and filled, are provided to you as SVGs.

A StarRating.js skeleton component has been created for you. You are free to decide the props of <StarRating />.

## Reviews
1. 了解題目意思，傳入的 props 不是 `defaultRating` 而是 `rating`，且透過傳入 `onChange` 更改 `rating` 的值而不是直接寫在元件內部。 
2. 保持 `StarIcon` 單純，event handler 相關操作保留在 `StarRating` 元件內部。
3. event handler 不要使用 closure 以保持函式的單純。
4. `tempRating` 使用 `null` 而不是 `0` 以強調狀態。