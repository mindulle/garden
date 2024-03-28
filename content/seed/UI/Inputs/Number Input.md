---
tags:
  - human
  - howToCall
  - UI
---
# Anatomy
>You may find the ==Number Input== in several presentations, either as an Input, or a Label with increment and decrement buttons next to it. This component requires that the user less effort than selecting the input field, tapping the digit “2” on the keypad, and hitting Enter or dismissing the keyboard. For example, to increase the number of guests from 1 to 2 in a form, the user only needs one tap on the plus button.
![Anatomy for Number Input Component](https://ui-guideline-components.netlify.app/components/number-input/anatomy/desktop/images/number-input.png)
- Possible Names: ==Number Input==, Stepper Input, Input Number, Spin Button, Counter, Stepper, Field Number
- Grouping: `Inputs`

## Properties

| Property                                                                                        | Value        | Default Value | Is Required? | DESCRIPTION                                                                             |
| ----------------------------------------------------------------------------------------------- | ------------ | ------------- | ------------ | --------------------------------------------------------------------------------------- |
| min                                                                                             | number       | 0             | No           | The minimum value of the ==Number Input==                                               |
| max                                                                                             | number       | -             | Yes          | The maximum value of the ==Number Input==                                               |
| step                                                                                            | number       | 1             | No           | Specify how much the value should increase / decrease upon clicking on up / down button |
| value                                                                                           | number       | -             | No           | Current value of Input                                                                  |
| [isDisabled](https://www.figma.com/file/5JEAJqpoFd6UNe2L8geww0/Number-Input?node-id=901%3A671)  | yes / no     | no            | No           | Whether or not the component is disabled                                                |
| [size](https://www.figma.com/file/5JEAJqpoFd6UNe2L8geww0/Number-Input?node-id=1003%3A747)       | sm / md / lg | md            | No           | Specify the size of the ==Number Input==                                                |
| [isReadOnly](https://www.figma.com/file/5JEAJqpoFd6UNe2L8geww0/Number-Input?node-id=1003%3A691) | yes/no       | no            | No           | Specify if the component should be read-only                                            |


## [Stencil](https://www.figma.com/file/5JEAJqpoFd6UNe2L8geww0/Number-Input?node-id=799%3A122)
### Layers structure
```
NumberInput.variants
    ├── MinusButton.comp
    │   └── icon.comp
    │       └── svg.img
    ├── Input.comp
    │   └── value.text
    └── PlusButton.comp
        └── icon.comp
            └── svg.img
```

## HTML Structure
### BEM
```html
<div class="NumberInput NumberInput--md">
  <!-- Button (Down) -->
  <button class="Button" type="button" title="Decrease number" aria-label="Decrease number" tabindex="-1" aria-disabled="false">
    <span class="Icon">
      <svg width="16" height="17" fill="currentColor" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" role="img"><path d="M14.389 7.667H1.61a.278.278 0 00-.278.277v1.112c0 .153.125.277.278.277H14.39a.278.278 0 00.278-.277V7.944a.278.278 0 00-.278-.277z" /></svg>
    </span>
  </button>

  <!-- Input -->
  <input class="Input" type="number" placeholder="100" autocomplete="off" role="spinbutton" aria-valuemin="1" aria-valuemax="100" aria-valuenow="25" value="25" />

  <!-- Button (Up) -->
  <button class="Button" type="button" title="Increase number" aria-label="Increase number" tabindex="-1" aria-disabled="false">
    <span class="Icon">
      <svg width="16" height="17" fill="currentColor" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" role="img"><path d="M14.389 7.667H8.833V2.11a.278.278 0 00-.277-.278H7.444a.278.278 0 00-.277.278v5.556H1.61a.278.278 0 00-.278.277v1.112c0 .153.125.277.278.277h5.556v5.556c0 .153.124.278.277.278h1.112a.278.278 0 00.277-.278V9.333h5.556a.278.278 0 00.278-.277V7.944a.278.278 0 00-.278-.277z" /></svg>
    </span>
  </button>
</div>

```

### Tailwind
```html
<div class="flex items-center space-x-4 w-40">
  <!-- Button (Down) -->
  <button class="bg-white border border-black hover:bg-gray-100 rounded-full p-2" type="button" title="Decrease number" aria-label="Decrease number" tabindex="-1" aria-disabled="false">
    <span>
      <svg width="16" height="17" fill="currentColor" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" role="img"><path d="M14.389 7.667H1.61a.278.278 0 00-.278.277v1.112c0 .153.125.277.278.277H14.39a.278.278 0 00.278-.277V7.944a.278.278 0 00-.278-.277z" /></svg>
    </span>
  </button>

  <!-- Input -->
  <input class="py-1 text-2xl w-full focus:bg-gray-100 outline-none text-center" type="number" placeholder="100" autocomplete="off" role="spinbutton" aria-valuemin="1" aria-valuemax="100" aria-valuenow="25" value="25" />

  <!-- Button (Up) -->
  <button class="bg-white border border-black hover:bg-gray-100 rounded-full p-2" type="button" title="Increase number" aria-label="Increase number" tabindex="-1" aria-disabled="false">
    <span>
      <svg width="16" height="17" fill="currentColor" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" role="img"><path d="M14.389 7.667H8.833V2.11a.278.278 0 00-.277-.278H7.444a.278.278 0 00-.277.278v5.556H1.61a.278.278 0 00-.278.277v1.112c0 .153.125.277.278.277h5.556v5.556c0 .153.124.278.277.278h1.112a.278.278 0 00.277-.278V9.333h5.556a.278.278 0 00.278-.277V7.944a.278.278 0 00-.278-.277z" /></svg>
    </span>
  </button>
</div>

<style>
  /* Turn Off Number Input spinners */
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>

```