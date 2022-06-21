<template>
    <Popup v-bind="$attrs">
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
                <v-btn color="blue darken-1" text @click="isDialog = false">Close</v-btn>
                <v-btn color="blue darken-1" text @click="isDialog = false">Save</v-btn>
              </v-card-actions>
          </v-card>
    </Popup>
</template>

<script>
import Popup from './Popup.vue'

export default {
  components: { Popup },
  name: 'UserProfile',
  props: {
    isDialog: Boolean,
  },
  // emits: ['update:isDialog'],
  // methods: {
  //   changePageTitle(title) {
  //     this.$emit('update:isDialog', title) // раньше было `this.$emit('input', title)`
  //   }
  // },
  data() {
    return {
      ages: ['0-17', '18-29', '30-54', '54+'],
      autoCompletedItems: ['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump'],
    }
  }
}
</script>

<style>

</style>