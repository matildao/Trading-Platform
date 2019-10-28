[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/Maoo17/Trading-Platform/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/Maoo17/Trading-Platform/?branch=master) [![Build Status](https://scrutinizer-ci.com/g/Maoo17/Trading-Platform/badges/build.png?b=master)](https://scrutinizer-ci.com/g/Maoo17/Trading-Platform/build-status/master)
<br>
<br>
<div style="text-align:center">
<img src="src/assets/poketrade_purple.png" alt="drawing" width="100"/>
</div>

<div style="text-align:center"></div>

<h1 style="text-align: center;">Trading Platform Project</h1>
&nbsp;

**Made with:**
[Vue](https://vuejs.org/),
[Vuetify](https://vuetifyjs.com/en/),
[Socket.io](https://socket.io/)

**Tests with:** Jest & Enzyme with Istanbul code coverage

&nbsp;

---
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
&nbsp;

---


&nbsp;

## Motivation For Tools & Frameworks

#### Vue & Vuetify

I've chosen the javaScript framework Vue because I wanted to try something new. Before this project I've used React and Angular but preferred React over Angular. Instead of choosing React for safety(since I've used it before), I chose Vue to be able to learn more frameworks. Vue also seemed like a good framework for creating small projects where one would want free choices in the framwork.

To accompany Vue, I chose the CSS framework Vuetify that is compatible with Vue and works with components and grids. I chose this framework because I've previously used CSS frameworks and wanted to atleast accompany a new framework with something I knew how to manouver. In the earlier part of this course I used material ui vue which I didn't think was good because of the lack of documentation and components. Vuetify was also chosen because I think it looked better than material ui vue.

Socket.io was chosen because of me using it in the previous part of the course and it has a really good integration with vue.

&nbsp;

#### Testing Tools

The tools I've chosen for the testing is Jest, Enzyme and Istanbul. I chose Jest and Enzyme before and I liked it when I used it. I've also tested Selenium before and I didn't like it as much as Jest.

&nbsp;

#### Test Cases
There are some problems showcased when running the tests. This is because Jest is not recognizing vue-form validator. The tests are not effect.

**SellingCard.spec.js** - Should pass props correctly to the component.

**RegisterForm.spec.js** - Should not post to api when no information is given.

**EmptyState.spec.js** - Should pass props correctly and display them  correclty in the template view.

**Dashboard.spec.js** - Displays headings correclty on template render.

**AvailableCard.spec.js** - Should pass props correctly and display them correctly on template render.