<template>
  <div class="om_mig">
    <v-lazy class="ts"
        v-model="isActive"
        :options="{
          threshold: 1.0,
        }"
        min-height="100"
        transition="fade-transition"
      >
        <v-carousel :dark="true" :show-arrows="false" class="virksomhed" hide-delimiters cycle max-height="10vh" height="50vh" interval="2500" max="50vw !important">
          <v-carousel-item
            v-for="(item, i) in items2"
            :key="i"
            :src="item.src"
            t
          ></v-carousel-item>
        </v-carousel>
      </v-lazy>
   
   <v-container class="overgang">
        <v-lazy
          v-model="isActive"
          :options="{
            threshold: 0.7
          }"
          min-height="100"
          transition="slide-x-transition"
        >
          <v-row class="d-flex justify-center mb-6 mt-12 flex-wrap">
            <v-col cols="12" sm="4" md="6" class="text-center">
              <h1>Hvem er jeg?</h1>
              <v-divider></v-divider>
              <p>Jeg er en 20 årig multimediedesigner, der til dagligt studerer på Ervhersakademiet Sydvet. Vil du høre mere om mig? Så klik på videoen forneden.
              </p>
            </v-col>
          </v-row>
        </v-lazy>
      </v-container>

<div>
  <section class="video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/8V1ti_Q2bqw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </section>
</div>
   


   <!-- class="CV d-flex justify-center align-item-center mb-12 mt-6 flex-wrap ma-2 width-50"  -->

  <div class="text-center my-10">
      <v-btn 
      outlined 
      href="mustafa_cv.pdf"
      download>
          DOWNLOAD MIT CV lIGE HER
    </v-btn>
  </div>





</div>

</template>

<script>

export default {
   components: {
    
  },
  data()  {
    return {
      items2: [
        {
           src: require("../assets/Smil_text.png"),
        },
        {
          src: require("../assets/sløret_text.png"),
        },
      ]
    }
  }
}

</script>

<style>
.CV{
  max-width: min-content !important;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.video{
  display: flex;
  justify-content: center;
  align-items: center;
}

.virksomhed .v-image__image--cover {
  background-size: cover !important;
}
</style>

<style lang="scss" scoped>

.overgang {
  
   h1 {
    font-family: bungee, sans-serif;
    font-weight: 400;
    color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
  }
   
   p{
      font-family: Novecento Sans, light;
      color: rgb(255, 255, 255);
    
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