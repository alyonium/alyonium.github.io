<i18n>
{
  "ru": {
    "name": "Алёна",
    "age": "год",
    "country": "Россия",
    "city": "Санкт-Петербург",
    "university": "программная инженерия",
    "experience": "года опыта"
  },
  "en": {
    "name": "Alona",
    "age": "y/o",
    "country": "Russia",
    "city": "Saint-Petersburg",
    "university": "software engineering",
    "experience": "years of experience"
  }
}
</i18n>
<template>
  <v-row
    class="no-gutters pt-8 pb-5 pa-0">
    <v-col
        cols="12"
        md="7"
        class="d-flex justify-center align-center"
        order-md="1"
        order="2">
      <p
        class="slide-text">
        💅🏼 {{ $t('name') }}<br>
        🎂 21 {{ $t('age') }}<br>
        🌏 {{ $t('country') }}, <nobr>{{ $t('city') }}</nobr><br>
        👩‍🏫 {{ $t('university') }}<br>
        ❤️ frontend<br>
        👩‍💻 2 {{ $t('experience') }}<br>
        👄 🇷🇺 🇺🇸<br>
      </p>
    </v-col>

    <v-col
        cols="12"
        md="4"
        offset-md="1"
        offset="0"
        class="d-flex justify-center align-center"
        order-md="2"
        order="1">
      <animated-border-wrapper style="position: relative">
        <img src="../../assets/img/myFace.jpeg" alt="it's me" class="photo">
      </animated-border-wrapper>
    </v-col>
  </v-row>
</template>

<script>
import AnimatedBorderWrapper from '@/components/AnimatedBorderWrapper';

export default {
  name: 'AboutContent',
  components: {
    AnimatedBorderWrapper,
  },
};
</script>
<style lang="scss">
@import '~vuetify/src/styles/styles.sass';

  .slide-text {
    font-size: 2.4rem;
    color: map-get($deep-purple, accent-1);
    padding-left: 40px;
    margin-bottom: 0 !important;
    text-shadow: -1px 1px 1px map-get($pink, darken-3);
  }

  .photo {
    width: 400px;
    height: 400px;
    object-fit: cover;
    border: 5px solid transparent;
    transition: 0.3s;
  }

  .photo:hover {
    transition: 0.3s;
    transform: rotate(-10deg);
    border: 8px solid transparent;
  }

  @media (max-width: 1264px) {
    .photo {
      width: 300px;
      height: 300px;
      margin-top: 20px;
      border: 2px solid map-get($deep-purple, accent-2);
      box-shadow: 0 0 10px 2px map-get($deep-purple, accent-1);
      &:hover {
        transform: none;
        border: 2px solid map-get($deep-purple, accent-2);
        transition: none;
      }
    }
    .slide-text {
      font-size: 1.8rem;
      margin-top: 40px;
      margin-bottom: 20px !important;
      padding-left: 20px;
    }

  }

  @media (max-width: 959px) {
    .slide-text {
      padding-left: 0;
      max-width: 500px;
      margin-top: 50px;
    }

    .photo {
      width: 440px;
      height: 440px;
    }
  }

  @media (max-width: 600px) {
    .slide-text {
      max-width: 300px;
    }

    .photo {
      width: 300px;
      height: 300px;
    }
  }

  @media (max-width: 400px) {
    .slide-text {
      max-width: 300px;
      font-size: 25px;
      padding-left: 10px;
    }

    .photo {
      width: 290px;
      height: 290px;
    }
  }
</style>
