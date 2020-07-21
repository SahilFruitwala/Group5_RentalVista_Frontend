# Rental Vista

    Project Proposal

    Date Created: 3 Jun 2020
    Last Modification Date: 23 Jun 2020

## Authors

| Name               | Banner ID    | Email                   |
|--------------------|--------------|-------------------------|
| Amogh Bangalore    | B00833535    | am210633@dal.ca         |
| Gaurav Anand       | B00832139    | gaurav.anand@dal.ca     |
| Harshitha M S      | B00838019    | Harshitha.MS@dal.ca     |
| Krupa Patel        | B00828120    | Krupa.Patel@dal.ca      |
| Naitik Prajapati   | B00856835    | naitik.prajapati@dal.ca |
| Sahil Fruitwala    | B00844489    | sahil.fruitwala@dal.ca  |

### Demo Website Link: https://rentalvista.herokuapp.com/

### Github Repository Link: https://github.com/SahilFruitwala/rental-vista

## Content

We have created 10 pages of the main feature and one 404 pages. The pages are Landing Page, User Profile Management pages, List posts, View room, Post room, Payment, Blogs, Wishlist, Request contact, Support pages. Moreover, when the user will try to access any URL which is not implemented yet, he/she will be redirected to the 404 page.

## How to install and run on a local system

To run this project on a local system need to do the following tasks:

1. Install a stable version of Node.js - a javascript runtime environment
2. Install a stable version of Node Package Manager(npm)
3. Clone repository from the terminal using command `git clone https://github.com/SahilFruitwala/rental-vista.git`
4. open terminal or command prompt in the cloned repository folder
5. run `npm install` in terminal
6. run `npm run start` and open localhost:3000 to see the application

## Navigation in website

I have created five pages and those can be accessed by method given below:

1. For home-page / landing-page click on **RentalVista logo/button**.
2. To see a list of houses click on **House** on the navigation bar.
3. To view the details of a particular post click on **View Rooms** button of the listed page.
4. To add a posting click on **Add Post** button in navigation bar.
5. To look at the blogs click on **Blogs** button in nav bar.
6. For login and signup click on **Login** and **Signup** buttons respectively on nav bar.
7. For the edit profile page click on the **Login** button. It will show you a button that can lead one to edit the profile page.
8. To view the list of saved rooms and to request contact got to **Edit profile** page where the buttons for saved rooms and request contact are accessible.
9. For Aboutus and FAQ click on **About** and **FAQ** buttons in the footer.
5. If a user enters any wrong path or URL application will lead it to a **404 page**.

### Link of Pages

1. [Landing Page](https://rentalvista.herokuapp.com/)
2. [Houses](https://rentalvista.herokuapp.com/house)
3. [Blog](https://rentalvista.herokuapp.com/blog)
4. [Edit Profile](https://rentalvista.herokuapp.com/edit)
5. [404](https://rentalvista.herokuapp.com/404)

## Deployment

For deployment, I tried deploying using the Heroku dashboard in the previous project but I could not do it. So, this time, I have used Heroku CLI for deployment using buildpack property as suggested by [Mark Hall](https://github.com/mars/create-react-app-buildpack)[1] in his Github repository which is also suggested method of the Heroku platform.

To deploy and view application, I have used following commands:

`heroku create rentalvista --buildpack mars/create-react-app`
`git push heroku master`
`heroku open`

### Used Frameworks & Library

For creating web application I have used **[ReactJS](https://reactjs.org/)** front-end libary that is created and open sourced by Facebook. In addition to this, I have used following libraries:

1. [react-bootstrap](https://reacttraining.com/react-router/web/guides/quick-start) - CSS library (derived from bootstrap framework) used for better customization and responsiveness
2. [react-router-dom](https://react-bootstrap.github.io/) - navigate between different pages of the website
3. [react-fontawesome](https://github.com/FortAwesome/react-fontawesome) - used for icons

### Used Tools

I have listed all the tools and platform used, from creating to the deployment process:

1. [Visual Studio Code](https://code.visualstudio.com/) - to write and manage code.
2. [Git](https://git-scm.com/) - for version control
3. [Chrome](https://www.google.com/chrome/) & [Firefox](https://www.mozilla.org/en-US/firefox/new/) - debug and test application
4. [Heroku](https://www.heroku.com/) - for deployment of website
5. [Github](https://github.com/) - to house and maintain repository/project

---

### Choosing fonts and colours

According to Google Design [2], **Robot** font would be well applicable for long projects which in my case, is a web application. As per WebsiteBulderExpert[3] website, the main two colours on my website are for impulse shoppers which is suitable for my purpose.

### Note

To make an application compatible with Internet Explorer and Microsoft Edge, I have used Polyfill[4] _CDN_ and _react-app-polyfill_ npm package which is suggested on GitHub issues for of **create-react-app** repository[5].

### Sources Used

> **File:** [/src/utilities/FontAwesome.js](/src/utilities/FontAwesome.js) (whole file)

The below code is taken from [[6]](https://github.com/FortAwesome/react-fontawesome) website.

```
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)
```

I have used above code but this is a standard code snippent how one can use _font-awesome_ icons in react application. Below is modified verson of original code.

```import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faPhone,
  faEnvelope,
  faChevronUp,
  faExclamationCircle,
  faLongArrowAltRight,
  faTimes,
  faSlidersH,
  faFilter,
  faStar
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faSearch,
  faPhone,
  faEnvelope,
  faChevronUp,
  faExclamationCircle,
  faLongArrowAltRight,
  faTimes,
  faSlidersH,
  faFilter,
  faStar
);
```

> **File:** [/src/components/profile/index.js](/src/components/profile/index.js) (line 22 - 69)

The code below is original code, which I have taken from [[7]](https://www.w3schools.com/howto/howto_css_sidebar_responsive.asp) website.

```
 <!-- The sidebar -->
<div class="sidebar">
  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>

<!-- Page content -->
<div class="content">
  ..
</div>
```

As I am new in web development, I am not vey well aware of how to create a sidebar. Due to this reason I have to use the code above and modify it. Code below is modified version of this code snippet.

```
<div>
      <div className="sidebar" style={{color:"#FFFFFF !important"}}>
        <button href="" onClick={() => handleOnClick(initialMessage)}>
          Edit Profile
        </button>
        <button
          onClick={() =>
            handleOnClick({
              title: "Success!",
              body: "Your Password has been changed",
            })
          }
        >
          Reset Password
        </button>
        <button
          href=""
          onClick={() =>
            handleOnClick({
              title: "No Saved Rooms!",
              body: "Currently, you do not have any saved rooms!",
            })
          }
        >
          Saved Rooms
        </button>
        <button
          href=""
          onClick={() =>
            handleOnClick({
              title: "Sorry!",
              body: "Currently, you do not have any contact request approved!",
            })
          }
        >
          Requested Contacts
        </button>
      </div>
      <div className="container">
        {
          message.title === "" ? (
            <EditProfile />
          ) : (
            <OtherPages message={message} />
          )
        }
      </div>
    </div>
```

> **File:** [/src/components/profile/index.css](/src/components/profile/index.css) (line 52 - 88)

The below is taken from [[7]](https://www.w3schools.com/howto/howto_css_sidebar_responsive.asp) website. I have used below style code and modify is according to my UI style and responsiveness.

```
 /* The side navigation menu */
.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

/* Sidebar links */
.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}

/* Active/current link */
.sidebar a.active {
  background-color: #4CAF50;
  color: white;
}

/* Links on mouse-over */
.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}

/* Page content. The value of the margin-left property should match the value of the sidebar's width property */
div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}

/* On screens that are less than 700px wide, make the sidebar into a topbar */
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {float: left;}
  div.content {margin-left: 0;}
}

/* On screens that are less than 400px, display the bar vertically, instead of horizontally */
@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}
```

The code below is modified version.

```
@media screen and (max-width: 740px) {
  .sidebar {
    margin: 0;
    padding: 0;
    width: 200px;
    background: #4b79a1; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to bottom bottom,
      #283e51,
      #4b79a1
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to bottom bottom,
      #283e51,
      #4b79a1
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    position: fixed;
    height: 100%;
    overflow: auto;
  }
}

@media screen and (min-width: 740px) {
  .sidebar {
    /* margin: 0;
    padding: 0; */
    width: 200px;
    background: #4b79a1; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to bottom bottom,
      #283e51,
      #4b79a1
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to bottom bottom,
      #283e51,
      #4b79a1
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    position: fixed;
    height: 45vh;
    overflow: auto;
    padding-top: 5vh;
    margin-top: 10vh;
    color: #ffffffff;
  }
}

.root {
  color: #ffffff !important;
}

.sidebar button {
  display: block;
  color: #ffffffff;
  background-color: #4b79a1;
  border: none;
  outline: none;
  padding: 16px;
  text-decoration: none;
}

.sidebar button.active {
  background-color: #f7a231;
  color: white;
}

.sidebar button:hover:not(.active) {
  background-color: #555;
  color: white;
}

@media screen and (max-width: 740px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar button {
    float: left;
  }
}

@media screen and (max-width: 400px) {
  .sidebar button {
    text-align: center;
    float: none;
  }
}

```

### Acknowledgement & Appreciations for sources I used

1. All of the illustrations on the landing page are taken from the [Undraw](https://undraw.co/) website. Which has saved a lot of time by providing good customizable illustrations?
2. I have used some icons provided by [Font Awesome](https://fontawesome.com/start) using [7] website.
3. [Placeholder](https://placeholder.com/) website saved my time by providing fixed-size images with colour options [8].
4. The most helpful resource was [React-Bootstrap](https://react-bootstrap.github.io/) and [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/) library and documentation. I have used some styles and code from Bootstrap [9] documentation and modify it for my purpose.
5. For design inspiration, I have used [Dribbble](https://dribbble.com/) which is a website where designer showcase their designs [10].

---

### References

[1] Hall, M., 2020. Mars/Create-React-App-Buildpack. [online] GitHub. Available at: <https://github.com/mars/create-react-app-buildpack> [Accessed 14 June 2020].  
[2] "Choosing Web Fonts: A Beginner’s Guide - Library - Google Design", Google Design, 2020. [Online]. Available: https://design.google/library/choosing-web-fonts-beginners-guide/. [Accessed: 14- Jun- 2020].  
[3] "How to Choose Good Website Color Schemes (June 2020)", Website Builder Expert, 2020. [Online]. Available: https://www.websitebuilderexpert.com/designing-websites/how-to-choose-color-for-your-website/. [Accessed: 10- Jun- 2020].  
[4] "Polyfill.io", Cdn.polyfill.io, 2020. [Online]. Available: https://cdn.polyfill.io/v3/. [Accessed: 14- Jun- 2020].  
[5] "Create react app is not loaded (not working) in internet explorer 11 browser · Issue #7084 · facebook/create-react-app", GitHub, 2020. [Online]. Available: https://github.com/facebook/create-react-app/issues/7084. [Accessed: 14- Jun- 2020].  
[6] "FortAwesome/react-fontawesome", GitHub, 2020. [Online]. Available: https://github.com/FortAwesome/react-fontawesome. [Accessed: 10- Jun- 2020].  
[7] "How To Create a Responsive Sidebar", W3schools.com, 2020. [Online]. Available: https://www.w3schools.com/howto/howto_css_sidebar_responsive.asp. [Accessed: 11- Jun- 2020].  
[8] "Placeholder.com: Placeholder.com – The Free Image Placeholder Service Favoured By Designers", 2020. [Online]. Available: https://placeholder.com/. [Accessed: 13- Jun- 2020].  
[9] "Introduction", Getbootstrap.com, 2020. [Online]. Available: https://getbootstrap.com/docs/4.5/getting-started/introduction/. [Accessed: 13- Jun- 2020].  
[10] "Dribbble - Discover the World’s Top Designers & Creative Professionals", Dribbble.com, 2020. [Online]. Available: https://dribbble.com/. [Accessed: 10- Jun- 2020].
