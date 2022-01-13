<i18n>
{
  "ru": {
    "success-message": "Ваше сообщение отправлено",
    "placeholder-message": "Сообщение",
    "button-sent": "Отправить",
    "contact": "Ваши контактные данные"
  },
  "en": {
    "success-message": "Message sent successfully",
    "placeholder-message": "Message",
    "button-sent": "Sent",
    "contact": "Your contact"
  }
}
</i18n>
<template>
    <v-card
    class="myCard">
    <v-snackbar
      v-model="snackbar"
      absolute
      top
      right
      color="purple lighten-3"
    >
      <span>{{ $t('success-message') }}!🥰</span>
    </v-snackbar>
    <v-form
      ref="form"
      v-model="valid"
      @submit.prevent="submit"
    >
      <v-container fluid
      class="form">
        <v-row>
          <v-col
            cols="12"
          >
            <v-text-field
              v-model="form.contact"
              :rules="rules.contact"
              type="contact"
              color="purple lighten-2"
              :label="`${$t('contact')}`"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea
              v-model="form.message"
              :rules="rules.message"
              color="purple lighten-2"
            >
              <template v-slot:label>
                <div>
                  {{ $t('placeholder-message') }}
                </div>
              </template>
            </v-textarea>
          </v-col>
          <v-card-actions>
            <v-btn
              :disabled="!valid"
              text
              color="purple lighten-2"
              type="submit"
              @click="validate"
            >
              {{ $t('button-sent') }}
            </v-btn>
          </v-card-actions>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import { sendMessage } from '@/resources';

export default {
  name: 'WriteMe',
  data() {
    const defaultForm = Object.freeze({
      contact: '',
      message: '',
    });
    return {
      form: { ...defaultForm },
      rules: {
        message: [(val) => (val || '').length > 0 || '❗❗❗'],
      },
      snackbar: false,
      valid: true,
      defaultForm,
    };
  },
  methods: {
    submit() {
      this.snackbar = true;
    },
    async validate() {
      await sendMessage(this.form.contact, this.form.message);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 50%;
}

.myCard {
  max-width: 800px;
}

.v-snack {
  z-index: 999999;
}

@media (max-width: 1264px) {
  .form {
    -webkit-box-shadow: 0 0 15px 5px rgba(124,77,255,1);
    -moz-box-shadow: 0 0 15px 5px rgba(124,77,255,1);
    box-shadow: 0 0 15px 5px rgba(124,77,255,1);
  }
}
@media (max-width: 599px) {
  .myCard {
    width: 380px;
  }
}

@media (max-width: 467px) {
  .myCard {
    max-width: 300px;
  }
}

@media (max-width: 399px) {
  .myCard {
    max-width: 290px;
  }
}
</style>
