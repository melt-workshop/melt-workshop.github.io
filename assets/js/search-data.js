// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-call-for-papers",
          title: "Call for Papers",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cfp/";
          },
        },{id: "nav-schedule",
          title: "Schedule",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/schedule/";
          },
        },{id: "nav-keynotes",
          title: "Keynotes",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/keynotes/";
          },
        },];
