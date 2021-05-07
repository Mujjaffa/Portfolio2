<template>
  <v-app>
    <v-app-bar id="Navi" app height="100px" elevation="0" width="auto">
    
        <img id="Logo" src="./assets/mb-logo-hvid.png" alt="MB Design Logo" />

        <v-spacer></v-spacer>

        <div class="menu">
          <router-link id="knapper" class="white--text" to="/"
            >Hjem</router-link
          >

          <router-link id="knapper" class="white--text" to="/produkter"
            >Produkter</router-link
          >

          <router-link id="knapper" class="white--text" to="/Om mig"
            >Om mig</router-link
          >
        </div>

        <v-toolbar-sidebar-icon class="" @click="drawer = !drawer">
          <v-icon color="blue lighten-1">mdi-menu</v-icon>
        </v-toolbar-sidebar-icon>
  

      <v-navigation-drawer v-model="drawer" app  absolute class="indigo" width="100%">
        
        <router-link id="knapper1" class="white--text" to="/">Hjem</router-link>

        <router-link id="knapper1" class="white--text" to="/produkter"
          >Produkter</router-link
        >

        <router-link id="knapper1" class="white--text" to="/Om mig"
          >Om mig</router-link
        >
      </v-navigation-drawer>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer dark padless color="black">
      <v-card class="flex" flat tile>
        <v-card-title class="black white--text">
          <strong class="subheading">Find mig på de sociale medier</strong>

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <a :href="icon.urllink" class="#489CD3--text">
              <v-icon size="24px">
                {{ icon.name }}
              </v-icon>
            </a>
          </v-btn>
        </v-card-title>

        <v-card-text class="black #489CD3--text text-center">
          {{ new Date().getFullYear() }} — <strong>M.B Design</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: false,
    icons: [
      {
        name: "mdi-facebook",
        urllink: "https://www.facebook.com/MB-Design-108123568018691",
      },
      {
        name: "mdi-linkedin",
        urllink: "https://www.linkedin.com/in/mustafa-lucas-barut-591703209/",
      },
      {
        name: "mdi-instagram",
        urllink: "https://www.instagram.com/m.b_design01/",
      },
    ],
  }),
};
</script>
<style >
#knapper1 {
  position: relative;
  z-index: 5555;
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  font-size: 40px;
  
}
.v-toolbar__content {
  padding: 0 !important;
  background-color: rgba(0, 0, 0, 0);
}

</style>
<style lang="scss" scoped>

.menu {
  font-family: bungee;
}

a {
  text-decoration: none;
}
#Logo {
  height: 80px;
  width: 80px;
  margin: 20px;
}

#Navi {
 background-color: rgba(0, 0, 0, 0);
  height:80px !important;
}
.theme--light.v-toolbar.v-sheet {
  background-color: #00000000 !important;
}
.v-main {
  margin-top: -100px;
}
.v-footer {
  background-color: red;
}

.v-toolbar__content {
  opacity: 0;
}

#knapper {
  margin: 20px;
  font-size: 20px;
}

/*
h1 {
  margin-left: 20px;
}
*/
.indigo {
  background-color: rgba(0, 0, 0, 0.5);
  font-family: bungee;
}

.v-icon.v-icon {
  font-size: 50px;
}

.v-application .indigo {
  background-color: rgba(0, 0, 0, 0.5) !important;
  border-color: rgba(0, 0, 0, 0.5) !important;
  font-size: 25px;
  padding-top: 60px;
  text-align: center;
}


v-toolbar-sidebar-icon {
  display: none;
}

@media screen and (max-width: 1024px) {
  div.title {
    font-size: 90px;
  }
}

@media screen and (max-width: 375px) {
  div.title {
    h1 {
      font-size: 20px;
    }
  }
}

@media screen and (max-width: 784px) {
  div.menu {
    display: none;
  }
}

@media screen and (max-width: 780px) {
  v-toolbar-sidebar-icon {
    display: flex;
  }
}
</style>