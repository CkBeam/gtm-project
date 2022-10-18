# GTM - Project

This documents purpose is to assist with getting the test environement setup, which demonstrates how to use Google Tag Manager in a React Environement.

## NPM Setup

```
navigate to the root directory and npm install, npm start.
```

### You can also manually add you Google Tag Manager tags into the `<head>` and `<body>` section of your index.html, if you do not want to use a npm package.

---

Note: This project is using extra npm packages and
create-react-app

```
"react-router-dom": "^6.4.1",
"react-gtm-module": "^2.0.11"
```

---

## Google Tag Manager - Setup/Changes

### **When using GA4**

-   Setup Google Analytics: GA4 Configuration
-   <b>Make sure to uncheck </b> _"Send a page view event when this configuration loads"_ (unticking this allows history event to fire correctly on initial page load).

`Below is the configuration, add your own measurement id.`

![image](https://user-images.githubusercontent.com/113032974/196537138-c9e8ef99-b4d0-4fed-913f-99ec46cae573.png)

`Add the following code to your index.js`

### `DO NOT USE the gtmId below `, this is for my personal account. You will need to add your own gtmId

```
const tagManagerArgs = {
    gtmId: 'GTM-MMBS767',
};

TagManager.initialize(tagManagerArgs);
```

![image](https://user-images.githubusercontent.com/113032974/194597255-a237e1f2-32dc-4d61-b51e-da5baa07b607.png)

` Create a trigger called All history change (or whatever you'd like)`

![image](https://user-images.githubusercontent.com/113032974/196515292-d9b75b74-3a2a-4366-bbc5-5f9beead6465.png)

` Create your customer trigger`

![custom-event-trigger](https://user-images.githubusercontent.com/113032974/196514534-16909cd4-c7f7-4582-bb7a-684e1ba140cf.PNG)

`Here is the settings for the trigger`

![trigger-settings](https://user-images.githubusercontent.com/113032974/196514564-037fae70-ee3a-4340-95e4-07bd237adfba.PNG)

`Here is a list of the triggers I am using`

![image](https://user-images.githubusercontent.com/113032974/196516100-57dc7c3b-7cd4-4bb1-9f60-9d2a2f9b3cc1.png)

`Create a new tag for the trigger`

![custom-tag](https://user-images.githubusercontent.com/113032974/196514544-5f5f6f7a-fafc-44e1-8487-efdd858afa20.PNG)

`It will be a custom GA4 Event` <br>
(Note: Make sure to click "Advanced Settings" dropdown and change tag firing options to once per page, otherwise it fires the event multiple times on one click.)

![image](https://user-images.githubusercontent.com/113032974/196520469-59bc6828-e8d4-4c0a-86a9-54da97957a0c.png)

`For page views, I just added this code to my app.js, to track any page changes, and passed in the page_location object to pull the url and title of the page.`

```

    window.dataLayer.push({
        event: 'virtualPageview',
        page_location: {
            url: window.location.href,
            title: document.title,
        },
    });

```

`To update the datalayer, I created a function that pushes the event name.`

```

const PushTagManager = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: "test_button_event",
    });
};

```

`Below is a function with all the conventional parameters that can be passed in, as I am just using "event" in my implementation, but other data can be passed. These parameters can be renamed, however they should have use this structure.`

```

    window.dataLayer.push({
        event: 'event',
        eventProps: {
            category: category,
            action: action,
            label: label,
            value: value
        }
    });

```

## Create DataLayer Variables

`These are built in DataLayer Variables. You will most likely need to add all of the history related varibles in manually, and create the "Event" custom variable. `

![Capture](https://user-images.githubusercontent.com/113032974/194591388-a33e3e44-4516-44d5-89fe-962a88d2a449.PNG)

## Google Analytics - Setup/Changes

` When using GA4 -`

```

Turn off Enhanced measurement. It does not work well with Single Page Applications, all of the time. Google analytics does not take into account url fragments (when the # symbols is in url), we fix this by manually overriding the page_location parameter in all other GA4 tags as well(including config tag and other event tags). This applies to future GA4 tags as well.

```
