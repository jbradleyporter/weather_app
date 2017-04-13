## 5 Day Forecast Weather App

You will need to have [Node](https://nodejs.org/en/download/) installed to run this project's 'npm' statements. All of the following commands should be run from the root directory of the project.

### Running the application in development mode

```sh
$ npm install
$ npm start
```

### Running tests

```sh
$ npm test
```

### Build the app for production to the `build` folder

```sh
$ npm run build
```

This correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. For more info on this, please visit the documentation [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment).

### Explanation for using React.js

When I was given this project last Friday (Apr 7), I was already planning to create a small application using **React.js** the following week just to try it out and learn it, as I've read a _lot_ of good things about it in the past month.

_For better or worse,_ I decided that I'd attempt to complete this project and also fulfill my prior goal of learning a base level understanding of React in **one fell swoop**. The library is known for its strength of splitting the UI into independent, reusable pieces, so I figured it was a good choice.

After trying it out, although it worked, I'm not sure that it was the best idea for this challenge, since it took me a lot longer than it would have by just using a library/framework that I'm already familiar with.

However, I still think I did a good job for never having used React before, and I did my best to use best practices where applicable, so I'm pretty proud of the results.

### My thought process

At first, I looked up mock designs of weather apps. I figured that I'd be able to show a current, larger view of today's weather forecast, and then have the following 4 days as smaller data.

_However_, when I examined the OpenWeatherMap 5 day weather forecast API and started testing sample data with it, I soon realized that it didn't provide the full forecast of the current day, so I figured that featuring today's weather wouldn't work.

From looking at the data that was returned, I decided that I'd show the 5 days following today's date in 5 columns. At first, I thought I'd just display the lowest and highest temperature of each day, but I soon realized _I could do a lot more_, as I noticed that the API call returns a list of data corresponding to every 3 hours of each day.

I then decided that the UI would show each column displaying the day of the week, with the month and numerical day underneath it. Beneath that, I'd show relevant data for each hour: the hour itself, the given weather icon with its description, and the temperature.

After that, I went over React documentation for awhile, decided to use Facebook's **Create React App** to get me started, and then worked on building out the components within a single js file.

Once I felt like I had a good foundation of the components, I wrote a function to call the API for my current city, and another to parse the results into a data model that I felt made sense for the forecast view.

Following that, I tested passing the data model into my base level component and rendering the view, and then I styled the page to my liking and made it responsive on desktop.

Then, I read over the requirements again, and realized that **"responsive"** in this day and age probably meant more than just working with a desktop view... so I emailed Elizabeth for clarification, and she confirmed that making the page _"look good on a mobile device would be ideal."_

From that, I added media queries to the CSS and tested different scenarios on Chrome's device emulator to ensure that the page did indeed visually please on all screen sizes.

Then, I decided that I would organize the components into their own files, and created relevant sub-folders.

I constantly wondered if I was doing things correctly... so I read a "React for Beginners" article and it suggested that I use React's **"prop-types"** library to typecheck all my component props, so I made sure to enforce that.

Now, it was time for tests. I learned about **Jest** and used it to write a test to throw an error if any of the prop-types checks failed. Then I wrote a test for each component to make sure it rendered correctly. 

I figured that probably wasn't enough tests, so I installed Enzyme and used that to make copies of each component, and then added another test for each component to test that the copy matched the expected rendered output.

Almost done -- time to upload the project and ensure that it works for others without global dependencies.

And _finally,_ I edited and added to this file!

### If I had more time...

**There's so much I could do.** The fact that this exercise doesn't have an explicit time limit *made me want to do everything possible,* but after my third day of working on this, I had to tell myself, *"Brad, you've got to stop somewhere!"*

* First of all, **the weather data doesn't seem to be quite correct.** It's odd,* although I've debugged it many times,* **the data shows warmer temperatures at midnight than at noon**, like they should be reversed, along with the surrounding data. I figured problems with the API aren't up to me, though, so I've let that one go.
* The location for weather is hard-coded to "Denver" right now. Anyone with access to the code can easily change that value, but it would certainly be nice to have some kind of field for **inputting a location** on the app. I thought of using geolocation, but that requires https, which would require a certificate. I also played around with an input box, but after an initial attempt, it seemed like it was going to make this project take *much* longer.
* Display **additional weather data**. Possibly by clicking a day and having a panel fold out with detailed information.
* Since I didn't design this with a mobile-first mindset, the mobile view only allows for vertical scrolling. If I had more time, I'd make each day **horizontally "swipeable"**.
* **More tests**. The _parseWeatherData_ function could use a test to validate that a provided input should return an expected output. I wanted to write this, but even after a few hours of searching, I wasn't sure how to test a function that wasn't part of a component using Jest. I'm sure I could download another framework / eventually figure it out, but alas, _time_.

### Want to check out this app without building the project?

Take a look at it on my site here: [http://www.comradebrad.com/side_projects/WeatherForecast/](http://www.comradebrad.com/side_projects/WeatherForecast/)