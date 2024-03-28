---
tags:
  - human
  - howToCall
  - UI
---
# Anatomy
> The ==Rating== provides insight regarding people's opinions of a product, service, or experience. Users can also rate what they've purchased.
![Anatomy for Rating Component](https://ui-guideline-components.netlify.app/components/Rating/anatomy/desktop/images/Rating.png)
- Possible Names: ==Rating==, Star Rating, Rate
- Grouping: `input`

## Properties

| Property                                                                                | Value        | Default Value | Is Required? | DESCRIPTION           |
| --------------------------------------------------------------------------------------- | ------------ | ------------- | ------------ | --------------------- |
| [size](https://www.figma.com/file/ZjpcRO6zyIgKk46VvfOobG/==Rating==?node-id=837%3A288)  | sm / md / lg | md            | No           | Size of the Star Icon |
| [value](https://www.figma.com/file/ZjpcRO6zyIgKk46VvfOobG/==Rating==?node-id=837%3A910) | number       | 0             | No           | The Rating value      |

## [Stencil](https://www.figma.com/file/ZjpcRO6zyIgKk46VvfOobG/==Rating==?node-id=799%3A122)
### Layers structure
```
==Rating==.variants
    ├── Star1.comp
    │   └── icon.frame
    │       └── svg.img
    ├── Star2.comp
    │   └── icon.frame
    │       └── svg.img
    ├── Star3.comp
    │   └── icon.frame
    │       └── svg.img
    ├── Star4.comp
    │   └── icon.frame
    │       └── svg.img
    └── Star5.comp
        └── icon.frame
            └── svg.img
```

## HTML Structure
### BEM
```css
<div class="==Rating==">
  <!-- Star -->
  <button class="Star" type="button" tabindex="-1" aria-label="==Rating== 1 of 5">
    <svg class="icon" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.877 2.696l-2.55 5.171-5.707.832c-1.023.148-1.433 1.41-.691 2.132l4.128 4.023-.976 5.683c-.176 1.027.906 1.797 1.812 1.317l5.105-2.684 5.105 2.683c.906.477 1.988-.289 1.812-1.316l-.976-5.683 4.128-4.023c.742-.722.332-1.984-.691-2.132l-5.707-.832-2.55-5.171c-.457-.922-1.781-.934-2.242 0z"
        fill="#E5A800"
      />
    </svg>
  </button>

  <!-- Star -->
  <button class="Star" type="button" tabindex="-1" aria-label="==Rating== 2 of 5">
    <svg class="icon" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.877 2.696l-2.55 5.171-5.707.832c-1.023.148-1.433 1.41-.691 2.132l4.128 4.023-.976 5.683c-.176 1.027.906 1.797 1.812 1.317l5.105-2.684 5.105 2.683c.906.477 1.988-.289 1.812-1.316l-.976-5.683 4.128-4.023c.742-.722.332-1.984-.691-2.132l-5.707-.832-2.55-5.171c-.457-.922-1.781-.934-2.242 0z"
        fill="#E5A800"
      />
    </svg>
  </button>

  <!-- Star -->
  <button class="Star" type="button" tabindex="-1" aria-label="==Rating== 3 of 5">
    <svg class="icon" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.877 2.696l-2.55 5.171-5.707.832c-1.023.148-1.433 1.41-.691 2.132l4.128 4.023-.976 5.683c-.176 1.027.906 1.797 1.812 1.317l5.105-2.684 5.105 2.683c.906.477 1.988-.289 1.812-1.316l-.976-5.683 4.128-4.023c.742-.722.332-1.984-.691-2.132l-5.707-.832-2.55-5.171c-.457-.922-1.781-.934-2.242 0z"
        fill="#E5A800"
      />
    </svg>
  </button>

  <!-- Star -->
  <button class="Star" type="button" tabindex="-1" aria-label="==Rating== 4 of 5">
    <svg class="icon" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.877 2.696l-2.55 5.171-5.707.832c-1.023.148-1.433 1.41-.691 2.132l4.128 4.023-.976 5.683c-.176 1.027.906 1.797 1.812 1.317l5.105-2.684 5.105 2.683c.906.477 1.988-.289 1.812-1.316l-.976-5.683 4.128-4.023c.742-.722.332-1.984-.691-2.132l-5.707-.832-2.55-5.171c-.457-.922-1.781-.934-2.242 0z"
        fill="#E5E9F2"
      />
      <path
        d="M12 2c-.445 0-.89.23-1.12.695L8.328 7.868l-5.707.828c-1.024.149-1.434 1.41-.692 2.133l4.13 4.024-.977 5.685c-.176 1.02.898 1.797 1.813 1.316L12 19.174V2z"
        fill="#E5A800"
      />
    </svg>
  </button>

  <!-- Star -->
  <button class="Star" type="button" tabindex="-1" aria-label="==Rating== 5 of 5">
    <svg class="icon" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.877 2.696l-2.55 5.171-5.707.832c-1.023.148-1.433 1.41-.691 2.132l4.128 4.023-.976 5.683c-.176 1.027.906 1.797 1.812 1.317l5.105-2.684 5.105 2.683c.906.477 1.988-.289 1.812-1.316l-.976-5.683 4.128-4.023c.742-.722.332-1.984-.691-2.132l-5.707-.832-2.55-5.171c-.457-.922-1.781-.934-2.242 0z"
        fill="#E5E9F2"
      />
    </svg>
  </button>
</div>
```

### Tailwind
```css
<div class="flex space-x-2">
  <!-- Star -->
  <button type="button" tabindex="-1" aria-label="==Rating== 1 of 5">
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        class="text-yellow-400"
        d="M10.877 2.696l-2.55 5.171-5.707.832c-1.023.148-1.433 1.41-.691 2.132l4.128 4.023-.976 5.683c-.176 1.027.906 1.797 1.812 1.317l5.105-2.684 5.105 2.683c.906.477 1.988-.289 1.812-1.316l-.976-5.683 4.128-4.023c.742-.722.332-1.984-.691-2.132l-5.707-.832-2.55-5.171c-.457-.922-1.781-.934-2.242 0z"
        fill="currentColor"
      />
    </svg>
  </button>

  <!-- Star -->
  <button type="button" tabindex="-1" aria-label="==Rating== 2 of 5">
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        class="text-yellow-400"
        d="M10.877 2.696l-2.55 5.171-5.707.832c-1.023.148-1.433 1.41-.691 2.132l4.128 4.023-.976 5.683c-.176 1.027.906 1.797 1.812 1.317l5.105-2.684 5.105 2.683c.906.477 1.988-.289 1.812-1.316l-.976-5.683 4.128-4.023c.742-.722.332-1.984-.691-2.132l-5.707-.832-2.55-5.171c-.457-.922-1.781-.934-2.242 0z"
        fill="currentColor"
      />
    </svg>
  </button>

  <!-- Star -->
  <button type="button" tabindex="-1" aria-label="==Rating== 3 of 5">
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        class="text-yellow-400"
        d="M10.877 2.696l-2.55 5.171-5.707.832c-1.023.148-1.433 1.41-.691 2.132l4.128 4.023-.976 5.683c-.176 1.027.906 1.797 1.812 1.317l5.105-2.684 5.105 2.683c.906.477 1.988-.289 1.812-1.316l-.976-5.683 4.128-4.023c.742-.722.332-1.984-.691-2.132l-5.707-.832-2.55-5.171c-.457-.922-1.781-.934-2.242 0z"
        fill="currentColor"
      />
    </svg>
  </button>

  <!-- Star -->
  <button type="button" tabindex="-1" aria-label="==Rating== 4 of 5">
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        class="text-gray-200"
        d="M10.877 2.696l-2.55 5.171-5.707.832c-1.023.148-1.433 1.41-.691 2.132l4.128 4.023-.976 5.683c-.176 1.027.906 1.797 1.812 1.317l5.105-2.684 5.105 2.683c.906.477 1.988-.289 1.812-1.316l-.976-5.683 4.128-4.023c.742-.722.332-1.984-.691-2.132l-5.707-.832-2.55-5.171c-.457-.922-1.781-.934-2.242 0z"
        fill="currentColor"
      />
      <path
        class="text-yellow-400"
        d="M12 2c-.445 0-.89.23-1.12.695L8.328 7.868l-5.707.828c-1.024.149-1.434 1.41-.692 2.133l4.13 4.024-.977 5.685c-.176 1.02.898 1.797 1.813 1.316L12 19.174V2z"
        fill="currentColor"
      />
    </svg>
  </button>

  <!-- Star -->
  <button type="button" tabindex="-1" aria-label="==Rating== 5 of 5">
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        class="text-gray-200"
        d="M10.877 2.696l-2.55 5.171-5.707.832c-1.023.148-1.433 1.41-.691 2.132l4.128 4.023-.976 5.683c-.176 1.027.906 1.797 1.812 1.317l5.105-2.684 5.105 2.683c.906.477 1.988-.289 1.812-1.316l-.976-5.683 4.128-4.023c.742-.722.332-1.984-.691-2.132l-5.707-.832-2.55-5.171c-.457-.922-1.781-.934-2.242 0z"
        fill="currentColor"
      />
    </svg>
  </button>
</div>
```