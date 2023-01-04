To use the Mailchimp pattern library via CDN, you will need to include the following link in the `head` of your HTML file:

```html
<link href="https://cdn.jsdelivr.net/npm/@mailchimp-pattern-library/pattern-library@latest/dist/pattern-library.min.css" rel="stylesheet">
```

This will include the latest version of the Mailchimp pattern library CSS file, which contains all of the styles for the various components and patterns in the library.

You can then use the various components and patterns in your HTML by following the documentation provided by Mailchimp: [https://mailchimp.github.io/pattern-library/](https://mailchimp.github.io/pattern-library/).

For example, to use the button component, you would include the following HTML in your file:

```css
<button class="mc-btn mc-btn--primary mc-btn--lg">Button</button>
```

You can also include the pattern library JavaScript file in your HTML if you want to use any of the interactive components or patterns, such as modals or accordions. To do this, include the following script tag in the `head` of your HTML file:

```javascript
<script src="https://cdn.jsdelivr.net/npm/@mailchimp-pattern-library/pattern-library@latest/dist/pattern-library.min.js"></script>
```

Keep in mind that you may need to include additional dependencies, such as jQuery, if they are required by the pattern library. You can find more information about this in the documentation provided by Mailchimp.