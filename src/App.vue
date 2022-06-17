<template>
 <v-app>
    <v-app-bar src="https://picsum.photos/1920/1080?113" app dark>
      <v-app-bar-nav-icon>
        <v-img  :src="logo" aspect-ratio="1" @click="$router.push('/')"></v-img>
      </v-app-bar-nav-icon>
      <v-toolbar-title class="white--text" @click="$router.push('/')">
          Beauty Todos
      </v-toolbar-title>

      <v-spacer></v-spacer>

        <v-tabs
          centered
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tab class="white--text" 
            @click="$router.push('/')">
            Todo
          </v-tab>
          <v-tab class="white--text"  
            @click="$router.push('/about')">
            About
          </v-tab>
           <v-tab class="white--text"  
            @click="$router.push('/catalog')">
            Catalog
          </v-tab>
        </v-tabs>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon> mdi-heart </v-icon> 
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      
      <Popup v-model="dialog"> 
        <v-card>
          <v-card-title>
            <span class="text-h5">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Legal first name*" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Legal last name*" hint="example of persistent helper text" persistent-hint required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Email*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Password*" type="password" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select :items="ages" label="Age*" required></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-autocomplete :items="autoCompletedItems" label="Interests" multiple></v-autocomplete>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </Popup>

        <v-btn icon @click="dialog = !dialog">
          <v-icon>mdi-account</v-icon>
        </v-btn>

      <v-menu bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-app-bar-nav-icon v-on="on" v-bind="attrs"></v-app-bar-nav-icon>
        </template>
        <v-list>
          <v-list-item v-for="(nav, i) in navigation" :key="i" @click="() => {}">
            <v-list-item-title>{{ nav.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
    
    <v-footer padless>
      <v-card
      flat
      tile
      class="blue darken-3 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
    
    </v-footer>
  </v-app>
</template>


<script>
import images from './styles/images.js';
import Popup from './components/popup/Popup.vue'

export default {
  data () {
    return {
      logo: images.logo,
      dialog: false,
      navigation: [
        {
          title: 'Action menu',
        },
        {
          title: 'Stories menu',
        },
        {
          title: 'Alright',
        },
        {
          title: 'Hey hop',
        },
      ],
      routers: [
        {
          title: 'Todo',
        },
        {
          title: 'About',
        },
      ],
      ages: ['0-17', '18-29', '30-54', '54+'],
      autoCompletedItems: ['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump'],
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }
  },
  name: 'Example',
  components: {
    Popup
  }
};
</script>

<style scoped>
  a {
      text-decoration: none;
  }
  .margin-left {
    margin-right: 20px;
  }
</style>