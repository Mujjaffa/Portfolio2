<template>
  <div class="Produkter">


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
              <h1>Pure gold</h1>
              <v-divider></v-divider>
              <p>Pure gold energy, er et ny opstartet energidrik mærke i Danmark.</p>
            </v-col>
          </v-row>
        </v-lazy>
      </v-container>


    
    <div class="eb_prod" >
      <v-row>
      
<v-col
     
      class="d-flex justify-center flex-wrap flex-direction pa-0"
      cols="12" md="6" sm="6" offset-sm="3" offset-md="3"
    >

 <v-card 
  v-for="product in products"
      :key="product.name"
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src="product.imageLink"
      height="200px"
    ></v-img>

    <v-card-title class="product">
      {{product.name}}
    </v-card-title>

    <v-card-subtitle class="product">
      {{product.description}}
    </v-card-subtitle>

    <v-card-actions>
    
      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="toogleIndividual(product)"
      >
        <v-icon>{{ product.toggleInd ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="product.toggleInd">
        <v-divider></v-divider>

        <v-card-text>
          {{product.content_text}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
    </v-col>
  </v-row>
  </div>

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
              <h1>Emmerske Biler</h1>
              <v-divider></v-divider>
              <p>Emmerske Biler, er en mellem-stor bilforhandler, placeret i Emmerske tæt på Tønder.</p>
            </v-col>
          </v-row>
        </v-lazy>
      </v-container>

      <div class="eb_prod" >
      <v-row>
      
<v-col
     
      class="d-flex justify-center flex-wrap flex-direction pa-0"
      cols="12" md="6" sm="6" offset-sm="3" offset-md="3"
    >

 <v-card 
  v-for="product in products1"
      :key="product.name"
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src="product.imageLink"
      height="200px"
    ></v-img>

    <v-card-title class="product">
      {{product.name}}
    </v-card-title>

    <v-card-subtitle class="product">
      {{product.description}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="#489CD3"
        text
        
        > 
  Afspil Video
      </v-btn>
    
      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="toogleIndividual(product)"
      >
        <v-icon>{{ product.toggleInd ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="product.toggleInd">
        <v-divider></v-divider>

        <v-card-text>
          {{product.content_text}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
    </v-col>
  </v-row>
  </div>

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
              <h1>HOLTS BILER</h1>
              <v-divider></v-divider>
              <p>Holts Biler er en enkeltmans virksomheder, der ligger placeret lige udenfor Løgumkloster.</p>
            </v-col>
          </v-row>
        </v-lazy>
      </v-container>

      <div class="eb_prod" >
      <v-row>
      
<v-col
     
      class="d-flex justify-center flex-wrap flex-direction pa-0"
      cols="12" md="6" sm="6" offset-sm="3" offset-md="3"
    >

 <v-card 
  v-for="product in products2"
      :key="product.name"
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src="product.imageLink"
      height="200px"
    ></v-img>

    <v-card-title class="product">
      {{product.name}}
    </v-card-title>

    <v-card-subtitle class="product">
      {{product.description}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="#489CD3"
        href="https://www.youtube.com/watch?v=vGMfb6KnW-c"
        target="_blank"
        text 
        > 
        Afspil Video
      </v-btn>
    
      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="toogleIndividual(product)"
      >
        <v-icon>{{ product.toggleInd ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="product.toggleInd">
        <v-divider></v-divider>

        <v-card-text>
          {{product.content_text}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
    </v-col>
  </v-row>
  </div>
   
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
              <h1>DONUT PAL</h1>
              <v-divider></v-divider>
              <p>Donut Pal er en ny opstartet virksomhed, placeret i Haderslev.</p>
            </v-col>
          </v-row>
        </v-lazy>
      </v-container>

      <div class="eb_prod" >
      <v-row>
      
<v-col
     
      class="d-flex justify-center flex-wrap flex-direction pa-0"
      cols="12" md="10" sm="6" offset-sm="3" offset-md="1"
    >

 <v-card 
  v-for="product in products3"
      :key="product.name"
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src="product.imageLink"
      height="200px"
    ></v-img>

    <v-card-title class="product">
      {{product.name}}
    </v-card-title>

    <v-card-subtitle class="product">
      {{product.description}}
    </v-card-subtitle>

    <v-card-actions>
     
    
      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="toogleIndividual(product)"
      >
        <v-icon>{{ product.toggleInd ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="product.toggleInd">
        <v-divider></v-divider>

        <v-card-text>
          {{product.content_text}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
    </v-col>
  </v-row>
  </div>


  </div>

</template>

<script>
export default {
    data: () => ({
      show: false,
      products1: [
        { //  for hver card(virksomhed/project) du skal have
          name: "REKLAME ANNONCE",
          description: "Intro annonce",
        content_text:"En reklamefilm af hele virksomhedens udvalg af biler. Videoen blev brugt til at køre som annonce på facebook.",
        toggleInd: false,
        urllink: require("../assets/emmerskebiler.mp4"),
        imageLink: require("../assets/Emmerske biler logo (hvid).png")
        },
        {
          name: "BIL ANNONCE",
          description: "Mercedes bil annonce",
           content_text:"En reklamefilm af en fin mercedes, der skulle bruges til bilbasen og på hjemmesiden for at fremvise bilens udstyr.",
          toggleInd: false,
          urllink: "",
        imageLink: require("../assets/Mercedes.jpeg")
        }
      ],

  products: [
        { //  for hver card(virksomhed/project) du skal have
          name: "FOTOGRAFERING",
          description: "Stilbillede 1",
        content_text:"Billedet blev taget i et industries kvarter, i Tønder. Den rustikke charme til billederne, fremhæver dåserne.",
        toggleInd: false,
        urllink: "",
        imageLink: require("../assets/pure-gold1.png")
        
        },
        {
          name: "FOTOGRAFERING",
          description: "Stilbillede 2",
           content_text:"Billedet er taget samme område som det første, dog i et gammelt opgravet kloak system som igen skaber en rustik charme.",
          toggleInd: false,
          urllink: "",
        imageLink: require("../assets/puregold2.png")
        }
      ],

  products2: [
        { //  for hver card(virksomhed/project) du skal have
          name: "REKLAME ANNONCE",
          description: "Intro annonce",
        content_text:"En reklamefilm af hele virksomhedens udvalg af biler. Videoen blev brugt til at køre som annonce på facebook.",
        toggleInd: false,
        urllink: "",
        imageLink: require("../assets/Holts Biler.png")
        
        },
  ],
  products3: [
        { //  for hver card(virksomhed/project) du skal have
          name: "LOGO DESIGN",
          description: "Standard logo",
        content_text:"Donut pal, fik både produceret et vertikalt og et horizontalt logo. Med det vertikale som standart logo.",
        toggleInd: false,
        urllink: "",
        imageLink: require("../assets/donut_pal_mockup_tlf.jpeg")
        
        },
        {
          name: "DONUT BOX",
          description: "Design på donut kasse",
           content_text:"Sammen med logoet, blev der også bestilt flere ting med på listen så som et design af kasserne til donutsne.",
          toggleInd: false,
          urllink: "",
        imageLink: require("../assets/donut_pal_box.png")
        },
         {
          name: "PRISSKILT",
          description: "Design af prisskilt",
           content_text:"Sammen med resten, mangede virksomheden også et prisskilt til at køre på skærmen i butikken.",
          toggleInd: false,
          urllink: "",
        imageLink: require("../assets/mockup_prisskilt.jpeg")
        }
      ],
    }),

   methods: {
      toogleIndividual(product) {
        product.toggleInd = !product.toggleInd
      },
    }
}

  
</script>



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

.mx-auto{
  margin-bottom: 80px;
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