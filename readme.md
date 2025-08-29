<!-- Question-1 -->

getElementById :
Finds a single element by its unique id attribute in the HTML document.

getElementsByClassName :
Returns all elements with the specified class name. Since it gives back a collection, you usually loop through them to work with each one.

querySelector :
Selects the first element that matches a CSS selector (id, class, tag, or attribute).

querySelectorAll :
Works like querySelector, but returns all matching elements as a static NodeList.

<!-- Question-2 -->

To add a new element into the DOM:

Use document.createElement("tagName") to create the element.

Store it in a variable.

Then use methods like appendChild() or append() to insert it into the DOM.

<!-- Question-3 -->

Event bubbling means that when an event (like a click) happens on a child element, it automatically “bubbles up” through its parent elements one by one until it reaches the top (document). Parents can also handle the same event unless bubbling is stopped.

<!-- Question-4 -->

Event delegation means attaching a single event listener to a parent element instead of adding listeners to each child. When a child triggers the event, it bubbles up, and the parent detects and handles it efficiently.

<!-- Question-5 -->

preventDefault() : stops the browser’s normal action for an event (like submitting a form, opening a link, or showing the context menu).

stopPropagation() : prevents the event from moving further through the DOM, so it won’t trigger handlers on parent or ancestor elements.



