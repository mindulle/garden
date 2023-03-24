To use the Mozilla Protocol via a CDN (Content Delivery Network), you will need to include the CDN link to the Mozilla Protocol in the `<head>` section of your HTML file:

```html
<head>
  <script src="https://cdn.jsdelivr.net/npm/@mozilla-protocol/core@latest/dist/index.min.js"></script>
</head>
```

Once you have included the CDN link in your HTML file, you can use the Mozilla Protocol in your JavaScript code by creating a new instance of the `MozillaProtocol` object and calling its methods:

```javascript
const mp = new MozillaProtocol(); mp.connect().then(() => { console.log('Connected to the Mozilla Protocol!'); });
```

Keep in mind that you will need to include this CDN link on every page of your website where you want to use the Mozilla Protocol.