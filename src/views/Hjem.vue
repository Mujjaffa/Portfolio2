<template>
  <div class="Hjem">
    <div id="app">
      <video-bg :sources="[embeddedVideo]" img="">
       
              <v-img id="designlogo" src="../assets/mb-logo-stor-hvid.png" alt="MB Design Logo"  contain />

         
      </video-bg>

      <v-container class="overgang">
        <v-lazy
          v-model="isActive"
          :options="{
            threshold: 0.7
          }"
          min-height="100"
          transition=""
        >
          <v-row class="d-flex justify-center mb-6 mt-12 flex-wrap">
            <v-col cols="12" sm="3" md="6" class="text-center">
              <h1>Galleri</h1>
              <v-divider light="light"></v-divider>
              <p>Et lille indblik i hvad jeg beskæftiger mig med.</p>
            </v-col>
          </v-row>
        </v-lazy>
      </v-container>

      <div id="box1">
       <v-row>
    <v-col
      v-for="(item2, i) in items"
      :key="i"
      class="d-flex align-content-center justify-center flex-wrap flex-direction"
      cols="12" md="3" sm="6" offset-sm="3" offset-md="0"
    >
      <v-img
        :src="item2.src"
        aspect-ratio="1"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
      </div>

      <v-container>
        <v-lazy
          v-model="isActive"
          :options="{
            threshold: 1.0,
          }"
          min-height="100"
          transition="slide-x-transition"
        >
          <v-row class="d-flex align-content-center justify-center text-center flex-wrap ">
            <v-col
              
              id="cases_text" 
              
            >
              <h1 class="text_center mt-100px">Tidligere Samarbejdspartnere</h1>
              <v-divider></v-divider>
              <p class="text_fyld">Et udvalg af forskellige virksomeheder, jeg tidligere har haft et samarbejde med. Ift reklamefilm, logo og mere til.</p>
            </v-col>
          </v-row>
        </v-lazy>
      </v-container>

      <v-lazy class="ts"
        v-model="isActive"
        :options="{
          threshold: 1.0,
        }"
        min-height="100"
        transition="fade-transition"
      >
        <v-carousel :dark="true" :show-arrows="false" class="virksomhed" hide-delimiters cycle max-height="10vh" height="50vh" interval="2500" max="10vw !important">
          <v-carousel-item
            v-for="(item, i) in items2"
            :key="i"
            :src="item.src"
            t
          ></v-carousel-item>
        </v-carousel>
      </v-lazy>

      <v-container>
         <v-lazy
          v-model="isActive"
          :options="{
            threshold: 1.0,
          }"
          min-height="100"
          transition="slide-x-transition"
        >
        <v-row>
          <v-col 
            class="d-flex align-content-center justify-center flex-wrap my-70px"
            id="sturbox_bg_img"
           
          >
            <h1 class="align-content-center justify-center flex-wrap mb-5">Hvad tilbyder jeg?</h1>
            <p> Glæden ved at se sit eget produkt blive til virkelighed, er alene nok motivation for at lærer og udfolde mig.
              Kunsten i at skabe et produkt, processen og i sidste ende resultat. Er det vigtigste for mig, når jeg i samarbejde med virksomheder fører deres tanker og ideer ud i virkeligheden.
            </p>
          </v-col>
        </v-row>
         </v-lazy>
      </v-container>

    <v-container>
        <v-lazy
          v-model="isActive"
          :options="{
            threshold: 0.5,
          }"
          min-height="100"
          transition="slide-x-transition"
        >
          <v-row class="d-flex align-content-center justify-center text-center flex-wrap ">
            <v-col
              
              id="cases_text" 
              
            >
              <h1 class="text_center mt-100px">Lad dine produkter blive til virkelighed</h1>
              <v-divider></v-divider>
              <p class="text_fyld">Et indblik, i hvordan dit kommende design kunne se ud. </p>
            </v-col>
          </v-row>
        </v-lazy>
      </v-container>

      <v-lazy
        v-model="isActive"
        :options="{
          threshold: 1.0,
        }"
        min-height="400"
        transition="fade-transition"
      >
      
       <v-carousel :show-arrows="false" cycle interval="2500">
    <v-carousel-item
    
      v-for="(item,i) in items1"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
  
      </v-lazy>
    </div>
  </div>
</template>



<script>
export default {
  data()  {
    return {
      items2: [
        {
           src: require("../assets/Holts Biler.png"),
        },
        {
          src: require("../assets/puregold_logo.png"),
        },
        {
          src: require("../assets/Emmerske biler logo (hvid).png"),
        },
        {
          src: require("../assets/Donut Box Logo.png"),
        },
      ],
      items1: [
        {
          src: require("../assets/Visitkort.jpg"),
        },
        {
          src: require("../assets/Street.jpeg"),
        },
        {
          src: require("../assets/Forskellige Mockup.jpeg"),
        },
        {
          src: require("../assets/Poster Logo.jpeg"),
          
        },
        {
          src: require("../assets/Mundbind.jpeg"),
          
        },
      ],
      items: [
        {
           src: require("../assets/audi_kvadrat1.png"),
        },
        {
          src: require("../assets/Audi3_kvadrat.png"),
        },
        {
          src: require("../assets/puregold_kvadrat1.png"),
        },
        {
          src: require("../assets/puregold_kvadrat2.png"),
        },
      ],

      embeddedVideo: require("../assets/emmerskebiler.mp4"),
      video: {
        sources: [
          {
            src: require("../assets/emmerskebiler.mp4"),
            type: "video/mp4",
          },
        ],
        options: {
          autoplay: true,
          volume: 0,
          poster: "http://covteam.u.qiniudn.com/poster.png",
        },
      },
    };
  },
};
</script>

<style>
.virksomhed .v-image__image--cover {
  background-size: contain !important;
}
</style>

<style lang="scss" scoped>

#cases_text {
  margin-top: 10vw;
  h1 {
    font-family: bungee, sans-serif;
    color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
  }
   p{
      font-family: Novecento Sans, light;
      color: rgb(255, 255, 255);
    
    }

}

#sturbox_bg_img {
  background-image: url("../assets/computer_setup.png");
  height: auto;
  min-height: 70vh;
  margin-top: 60px;
  width: 100%;

}

.overgang {
  
   h1 {
    font-family: bungee, sans-serif;
    color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
  }
   p{
      font-family: Novecento Sans, light;
      color: rgb(255, 255, 255);
    
    }
}

#video-container {
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;
}

#designlogo {
  margin-top: 160px;
display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.my-pic {
  margin: 5vw;
}

#box1 {
  display: flex;
  align-content: center;
  // width: 80%;
  // height: 50vw;
  margin: 0;
  //padding: 200px !important;
}



.Overgang1 {
  font-family: Bungee;
  font-size: 50px;
}


h1 {
  font-family: bungee, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: white;
  text-align: center;
}

p{
  font-family:Novecento Sans, light;
  color: white;
  text-align: center;
}


@media only screen and(min-width:1024px) {
  #designlogo{
    width: 17%;
  }
}

@media only screen and(max-width:375px) {
  #designlogo{
    width: 60%;
  }
}

@media only screen and(min-width:1024px) {
 #sturbox_bg_img{
    width: 200px;
  }
}

@media only screen and(max-width:375px) {
 #sturbox_bg_img{
    width: 50px;
  }
}

@media only screen and(min-width:1024px) {
 
   h1{
   font-size: 50px;
   }

}

@media only screen and(max-width:375px) {
 
   h1{
    font-size: 25px !important;
   }

}

@media only screen and(min-width:1024px) {
 
   p{
    font-size: 28px;
    }

}

@media only screen and(max-width:375px) {
 
 p{ 
    font-size: 20px !important;
  }
}
</style>