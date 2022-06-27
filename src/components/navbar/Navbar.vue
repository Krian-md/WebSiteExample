<template>
  <v-app-bar :src="backgroundNavbar" app dark>
    <v-layout justify-center> 
      <v-flex class="white--text" xs12 md4>
        <v-layout align-center>
          <v-app-bar-nav-icon>
            <v-img  :src="logo" aspect-ratio="1" @click="routerTodo"></v-img>
          </v-app-bar-nav-icon>
          <v-toolbar-title @click="routerTodo">
            Beauty Todos
          </v-toolbar-title>
        </v-layout>
      </v-flex>
      <v-flex v-if="!$vuetify.breakpoint.smAndDown" xs12 md4>
          <v-tabs
            class="white--text"
            centered
            background-color="transparent"
          >
            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab @click="routerTodo">
              Todo
            </v-tab>
            <v-tab @click="routerAbout">
              About
            </v-tab>
            <v-tab @click="routerCatalog">
              Catalog
            </v-tab>
          </v-tabs>
      </v-flex>
      <v-flex xs12 md4>
        <v-layout justify-end>

          <div v-if="$vuetify.breakpoint.mdAndUp">
            <BaseButton plain icon>
              <BaseIcon icon-name="mdi-heart"/>
            </BaseButton>
            <BaseButton plain icon>
              <BaseIcon icon-name="mdi-magnify"/>
            </BaseButton>
            <BaseButton plain icon>
              <BaseIcon icon-name="mdi-account" @click.native="open"/>
            </BaseButton>
          </div>

          <v-menu v-if="$vuetify.breakpoint.smAndDown" bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-app-bar-nav-icon v-on="on" v-bind="attrs"></v-app-bar-nav-icon>
            </template>
            
            <v-list>
              <v-layout justify-center>
                <BaseButton plain icon>
                  <BaseIcon icon-name="mdi-heart"/>
                </BaseButton>
                <BaseButton plain icon>
                  <BaseIcon icon-name="mdi-magnify"/>
                </BaseButton>
                <BaseButton plain icon>
                  <BaseIcon icon-name="mdi-account" @click.native="open"/>
                </BaseButton>
              </v-layout>
              <v-list-item v-for="(nav, i) in navigation" :key="i" @click="nav.click">
                <v-list-item-title>{{nav.title}}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

        </v-layout>
      </v-flex>
    </v-layout>
  </v-app-bar>
</template>

<script>
import images from '@/styles/images';
import appStates from '@/enums/appStates';
import popupStates from '@/enums/popupStates';

import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      backgroundNavbar: images.backgroundNavbar,
      logo: images.logo,
      dialog: false,
      navigation: [
        {
          title: 'Todo',
          click: this.routerTodo
        },
        {
          title: 'About',
          click: this.routerAbout
        },
        {
          title: 'Catalog',
          click: this.routerCatalog
        },
      ],
    }
  },
  methods: {
    ...mapMutations(['openDialog']),
    open() {
      this.openDialog({name: popupStates.USER_POPUP, props: []});
    },
    routerTodo() {
      this.$router.push({name: appStates.TODO});
    },
    routerAbout() {
       this.$router.push({name: appStates.ABOUT});
    },
    routerCatalog () {
       this.$router.push({name: appStates.CATALOG});
    }
  },
}
</script>

<style scoped>
</style>