<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="text-h5">User Profile</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field label="Legal first name*" required />
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                label="Legal middle name"
                hint="example of helper text only on focus"
              />
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                label="Legal last name*"
                hint="example of persistent helper text"
                persistent-hint
                required
              />
            </v-col>
            <v-col cols="12">
              <v-text-field label="Email*" required />
            </v-col>
            <v-col cols="12">
              <v-text-field label="Password*" type="password" required />
            </v-col>
            <v-col cols="12" sm="6">
              <v-select :items="ages" label="Age*" required />
            </v-col>
            <v-col cols="12" sm="6">
              <v-autocomplete
                :items="autoCompletedItems"
                label="Interests"
                multiple
              />
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="blue darken-1" text @click="close"> Close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations } from 'vuex';
import popupStates from '@/enums/popupStates';

export default {
  name: 'UserPopup',
  methods: {
    ...mapMutations(['closeDialog']),
    close() {
      this.dialog = false;
    },
  },
  watch: {
    dialog() {
      if (this.dialog === false) {
        this.closeDialog(popupStates.USER_POPUP);
      }
    },
  },
  data() {
    return {
      dialog: true,
      ages: ['0-17', '18-29', '30-54', '54+'],
      autoCompletedItems: [
        'Skiing',
        'Ice hockey',
        'Soccer',
        'Basketball',
        'Hockey',
        'Reading',
        'Writing',
        'Coding',
        'Basejump',
      ],
    };
  },
};
</script>

<style></style>
