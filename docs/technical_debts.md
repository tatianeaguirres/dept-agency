## 🐛 Technical debts

If I had more time I'd like to implement the following items and created issues on Github explaining in detail my idea and proposed solutions.

### **Cards components**

1. I started doing the application with three different cards: `<CardImage/>, <CardText/>` and `<CardTestemonial/>`, sometime later I realized that I can have just one `<Card/>` and the type could be a prop received. I put this issue in my backlog but I didn't have time to do it.
2. I also made the 3 card components without TDD. 😓 I have no excuse for that, I just needed to do it.

### **Works component**

The logic I created using slice to fill the card components in the loop is not the best solution. This was an MVP that I expected to have more time, in the end, to refactor and create a clearer and more repeatable logic, that regardless of the number of items would not break the layout.

### **Filters component**

If I had more time I would like to have implemented the selection and filter logic on the cards.

### **Form component**

The `<Form/>` component has a real POST implementation using fetch, I tested it using `json-server` to send the data and it works. But I would also like to implement error and success validation, which now only have an alert message.

### **Menu component**

1. Build a better loading animation for opening the menu modal.
2. Create a transition animation from the hamburger menu icon to the close X icon.

### **API**

I start doing the application using `json-server` to simulate a real API server, but I had problems when using images from json because according to the `create-react-app` documentation we can only import images through import in the javascript component itself or the css file, so the import with the local path coming from the json doesn't work.

So I would need to upload all the images to a URL available on the internet or convert the images using base64, this last option polluted too much the json because of the character size and in the end, it made the build very slow.

Seeing that this solution would take longer than expected to be developed, I chose to use API return mocks in JS files like MVP and then, in the end, improve and create a new version with `json-server` and uploaded images on the Internet.
