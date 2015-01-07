---
layout: project
title: Permissions
gh-page: https://github.com/j-/permissions
site: http://j-.github.io/permissions/
---

A simple tool for converting file system permissions between formats.

### Responsive design

This project uses [Bootstrap][bootstrap] to easily implement a responsive
design. The page adapts to various browser widths by moving and resizing
elements, as well as adjusting font sizes.

### MVC architecture

This project responds and adapts to user input with ease and speed by
implementing a [Model/View/Controller][mvc] architecture. The [`ok` framework]
[ok], which I built myself, allows for rapid and extensible development.

### Little big details

Small features can make a big difference. When permissions on the page are
changed, the [favicon][favicon] automatically updates to reflect the user input.

Page state is reinitialized on page load via the [localStorage][localstorage]
API. It is also maintained in the page URL's [fragment identifier][hash].

[bootstrap]: http://getbootstrap.com/
[mvc]: http://en.wikipedia.org/wiki/Model-view-controller
[ok]: https://github.com/j-/ok
[favicon]: http://en.wikipedia.org/wiki/Favicon
[localstorage]: https://developer.mozilla.org/en-US/docs/Web/API/localStorage
[hash]: https://developer.mozilla.org/en-US/docs/Web/Events/hashchange