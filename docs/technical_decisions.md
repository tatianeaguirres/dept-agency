## 🛠️ Technical Decisions

### Tech stack

- [ReactJS](https://reactjs.org/) as JavaScript framework
- [Prettier](https://prettier.io/) to format the code
- [Pretty Quick](https://github.com/azz/pretty-quick) to run Prettier on the changed files
- [Husky](https://github.com/typicode/husky) to add pre-commit settings
- [React Testing Library](https://github.com/testing-library/react-testing-library) to test UI components in a user-centric way
- [DOM Testing Library](https://github.com/testing-library/dom-testing-library) to test web pages by querying and interacting with DOM nodes
- [Jest DOM Testing Library](https://github.com/testing-library/jest-dom) to custom jest matchers to test the DOM state
- [Cypress](https://www.cypress.io/) and [Cypress Image Snapshot](https://github.com/palmerhq/cypress-image-snapshot) to visual regression tests
- [BEM](http://getbem.com/introduction/) as CSS architecture
- [Gitmoji](https://gitmoji.carloscuesta.me/) as emoji guide for commit messages

## 👷‍♀️ Architectural Decisions

- **Hooks > Classes**: I'm using Hooks instead of classes as a new feature of React 16v, because there is no need to use lifecycle methods and it's easier to reuse stateful logic between components. It's easier to write and understand code using functional programming.
- **Mocks**: I'm using JS files as mocking strategy to simulate a backend and creating a real API experience.
- **Form POST**: I created a form with a real data posting that works if you have a server running. For now, it has only an modal for success and error validation, but the next step would be to implement these features. I had no time to do that.
- **Hook to lock body scroll**: I used a hook to lock the body scroll while the menu or a modal is open to avoid that when closing it, the user is not in the same place on the page as before.
- **Small Commits**: Every developer knows the good practice of performing small commits. This leads to improved accuracy and makes it easier to change tracking. My commits history can be seen [here](https://github.com/tatianeaguirres/dept-agency/commits/master).
- **BEM**: I decided to use BEM because it's a great naming convention for modular and maintainable CSS classes. It's simple and easy, and guarantee good code readability. _"BEM is a kind of superhero — it keeps the world of CSS safe from mess and clutter."_ - Joanna Erd
- **Mobile First**: In a world where you just have to pick up your mobile phone to view a website, you need to think first about mobile design. It's also easier to start with the smaller screen size and adjust the styles as the size increases, than the opposite. So I started styling the app thinking only of the mobile device, and when it was done, I started doing the layout for tablets and desktops. This way, I guarantee a responsive quality design.
- **Media query**: Media queries are the most commonly used way to interpret the device that the user is using to access the application, so I can set a different style for each screen size.
- **Accessibility check**: I used the [WAVE](https://wave.webaim.org/) tool to check the accessibility level of my application because I wanted to guarantee maximum technical excellence in terms of accessibility in my website. It found a few errors and alerts that were fixed in [this commit](https://github.com/tatianeaguirres/dept-agency/commit/88977d08209f65d2d03abae7660a62dc3e4d4e23).
- **Contrast and Color Accessibility**: Contrast and color use are vital to accessibility. Users, including users with visual disabilities, must be able to perceive content on the page. The same tool mentioned above indicated the correct contrast for the application colors that were not accessible (the alert text in red and the text in gray titles, both on white background) and I made the correction in the same commit mentioned above.
- **Screen reader**: I used the Chrome and Mac screen reader to test my application, and for the elements that were not clearly read I added visually hidden text, following the best off-screen content practice available on [Web Accessibility in mind](https://webaim.org/techniques/css/invisiblecontent/) website.
- **Keyboard navigation**: Keyboard navigation occurs smoothly on links and buttons, for the rest of the cases I added the necessary elements for keyboard users to be able to use the entire application without problems.
- **Custom fonts**: I received just one font called _Keto_ to use in the code assignment, but in the designs available in Sketch there is also a font called _GoodPro_ used several times, which I didn't find for free download on the internet. I made the decision to use a similar font from Google Fonts called _Open Sans_ and use it instead of _GoodPro_ to ensure the closest possible experience to the design.
- **Responsive typography**: I chose to use Rem (root em) units because a font sized using rem units will always be relative to the root element of the website, which means the `<html>` element, and not from the parent element, that ensures consistency in sizes. I also chose to use 16px as the default font size, as it's already the default size of most browsers.
- **Splitting long words**: In the design available in Sketch, there are many bad line breaks. And for the texts exhibitions, I made the following decisions:
  1. Small screens:
     - Titles on `<CardImage/>`: displays the entire title.
     - Titles on `<CardText/>`: displays only 3 lines with ellipsis at the end.
     - Titles on `<CardTestemonial/>`: displays only 3 lines with ellipsis at the end.
     - Text content on `<Clients/>`: displays only 6 lines with ellipsis at the end.
  1. Big screens:
     - Titles on `<CardImage/>`: displays only 1 line with ellipsis at the end, and shows the full text when you hover over it.
     - Titles on `<CardText/>`: displays only 3 lines with ellipsis at the end.
     - Titles on `<CardTestemonial/>`: displays only 3 lines with ellipsis at the end, and shows the full text when you hover over it.
     - Text content on `<Clients/>`: displays only 6 lines with ellipsis at the end.
