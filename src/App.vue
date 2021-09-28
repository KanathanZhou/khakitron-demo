<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "styles/main";

@font-face {
  font-family: "Graviti Euclid";
  src: local("Graviti Euclid"),
  url("./assets/fonts/euclid-circular-a/EuclidCircularA-Light-WebTrial.woff") format("woff");
  font-weight: 300;
}

@font-face {
  font-family: "Graviti Euclid";
  src: local("Graviti Euclid"),
  url("./assets/fonts/euclid-circular-a/EuclidCircularA-LightItalic-WebTrial.woff") format("woff");
  font-weight: 300;
  font-style: italic;
}

@font-face {
  font-family: "Graviti Euclid";
  src: local("Graviti Euclid"),
  url("./assets/fonts/euclid-circular-a/EuclidCircularA-Regular-WebTrial.woff") format("woff");
  font-weight: 400;
}

@font-face {
  font-family: "Graviti Euclid";
  src: local("Graviti Euclid"),
  url("./assets/fonts/euclid-circular-a/EuclidCircularA-RegularItalic-WebTrial.woff")
  format("woff");
  font-weight: 400;
  font-style: italic;
}

@font-face {
  font-family: "Graviti Euclid";
  src: local("Graviti Euclid"),
  url("./assets/fonts/euclid-circular-a/EuclidCircularA-Medium-WebTrial.woff") format("woff");
  font-weight: 500;
}

@font-face {
  font-family: "Graviti Euclid";
  src: local("Graviti Euclid"),
  url("./assets/fonts/euclid-circular-a/EuclidCircularA-MediumItalic-WebTrial.woff") format("woff");
  font-weight: 500;
  font-style: italic;
}

@font-face {
  font-family: "Graviti Euclid";
  src: local("Graviti Euclid"),
  url("./assets/fonts/euclid-circular-a/EuclidCircularA-Semibold-WebTrial.woff")
  format("woff");
  font-weight: 600;
}

@font-face {
  font-family: "Graviti Euclid";
  src: local("Graviti Euclid"),
  url("./assets/fonts/euclid-circular-a/EuclidCircularA-SemiboldItalic-WebTrial.woff")
  format("woff");
  font-weight: 600;
  font-style: italic;
}

@font-face {
  font-family: "Graviti Euclid";
  src: local("Graviti Euclid"),
  url("./assets/fonts/euclid-circular-a/EuclidCircularA-Bold-WebTrial.woff") format("woff");
  font-weight: 700;
}

@font-face {
  font-family: "Graviti Euclid";
  src: local("Graviti Euclid"),
  url("./assets/fonts/euclid-circular-a/EuclidCircularA-BoldItalic-WebTrial.woff") format("woff");
  font-weight: 700;
  font-style: italic;
}

/*@font-face {
  font-family: "Graviti Euclid";
  src: local("Graviti Euclid"),
  url("./assets/fonts/euclid-circular-a/EuclidCircularA-Bold-WebTrial.woff") format("woff"),
  url("./assets/fonts/euclid-circular-a/EuclidCircularA-BoldItalic-WebTrial.woff") format("woff"),
  url("./assets/fonts/euclid-circular-a/EuclidCircularA-Light-WebTrial.woff") format("woff"),
  url("./assets/fonts/euclid-circular-a/EuclidCircularA-LightItalic-WebTrial.woff") format("woff"),
  url("./assets/fonts/euclid-circular-a/EuclidCircularA-Medium-WebTrial.woff") format("woff"),
  url("./assets/fonts/euclid-circular-a/EuclidCircularA-MediumItalic-WebTrial.woff") format("woff"),
  url("./assets/fonts/euclid-circular-a/EuclidCircularA-Regular-WebTrial.woff") format("woff"),
  url("./assets/fonts/euclid-circular-a/EuclidCircularA-RegularItalic-WebTrial.woff")
  format("woff"),
  url("./assets/fonts/euclid-circular-a/EuclidCircularA-Semibold-WebTrial.woff")
  format("woff"),
  url("./assets/fonts/euclid-circular-a/EuclidCircularA-SemiboldItalic-WebTrial.woff")
  format("woff");
}*/

#app {
  font-family: "Graviti Euclid", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $dark;
  font-weight: 500;
}
</style>
