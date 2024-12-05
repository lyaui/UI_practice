# Todo List

You're given some existing HTML for a Todo List app. Add the following functionality to the app:

1. Add new tasks on clicking the "Submit" button.
2. The `<input>` field should be cleared upon successful addition.
Remove tasks from the Todo List upon clicking the "Delete" button.

## Notes
- The focus of this question is on functionality, not the styling. There's no need to write any custom CSS.
- You may modify the markup (e.g. adding ids, data attributes, replacing some tags, etc), but the result should remain the same visually.
- You may want to think about ways to improve the user experience of the application and implement them (you get bonus credit for doing that during interviews).

## Reviews
1. 雖然進行了同值檢查，但理論上還是使用 `id` 管理會比較好，`id` 設定：
    - 差：全域變數進人 `id++`
    - 佳：使用 closure 來產生 `id`
2. 在 input 上加入 `aria-label` 可以提高 a11y
3. 使用 `<form>` 觸發 submit 事件，可以使用 enter 執行提交
4. 對空值進行檢查