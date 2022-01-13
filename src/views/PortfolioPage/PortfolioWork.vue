<i18n>
{
  "ru": {
    "source": "исходный код",
    "online": "посмотреть проект"
  },
  "en": {
    "source": "source code",
    "online": "see project"
  }
}
</i18n>
<template>
  <fragment>
    <v-row
      class="no-gutters pt-8 pb-5 pa-0 justify-center">
      <v-col
        cols="12"
        offset="0"
        md="5"
        offset-md="1"
        sm="12"
        offset-sm="0"
        class="d-flex justify-center align-center"
      >
        <div class="images-container">
          <img
            v-if="work.images.laptop"
            :src="`${$backendUrl}${work.images.laptop}`"
            alt="laptop"
            class="laptop"
          >
          <img
            v-if="work.images.phone"
            :src="`${$backendUrl}${work.images.phone}`"
            alt="laptop"
            class="phone"
          >
        </div>
      </v-col>

      <v-col
        cols="12"
        offset="0"
        md="6"
        offset-md="0"
        sm="9"
        class="d-flex flex-column justify-center align-md-start align-center">
        <bracket-wrapper
          title=".technical-sheet"
          class="d-flex justify-center align-center technology-block pb-0"
          size="small"
          :isPortfolio="true"
        >
          <p
            v-for="technology in work.description"
          >
            {{ technology }},
          </p>
        </bracket-wrapper>
      </v-col>
    </v-row>
    <v-row
    class="no-gutters">
      <v-col
        cols="12"
        md="6"
        offset-md="6"
        class="d-flex justify-md-start justify-center">
        <div class="d-flex flex-column source-block">
          <a v-if="work.source" :href="work.source" target="_blank">{{ $t('source') }}</a>
          <a v-if="work.online" :href="work.online" target="_blank">{{ $t('online') }}</a>
          <p>{{ work.year }}</p>
        </div>
      </v-col>
    </v-row>
  </fragment>
</template>

<script>
import BracketWrapper from '@/components/BracketWrapper';
import { Fragment } from 'vue-fragment';

export default {
  name: 'PortfolioWork',
  components: {
    BracketWrapper,
    Fragment,
  },
  props: {
    work: Object,
  },
};
</script>
<style scoped lang="scss">
@import '~vuetify/src/styles/styles.sass';
img {
  object-fit: contain;
}

.images-container {
  position: relative;
}

.laptop {
  width: 400px;
  height: 400px;
  position: absolute;
  top: -180px;
  left: -253px;
  z-index: 1;
}

.phone {
  width: 180px;
  height: 180px;
  position: absolute;
  bottom: -80px;
  right: -264px;
  z-index: 1;
  transform: rotate(15deg);
}

a {
  color: map-get($pink, lighten-3) !important;
  transition: 0.2s;
  text-decoration: none;
  font-size: 1.8rem;
  padding-left: 40px;
}

a:hover,
a:active {
  transition: 0.5s;
  color: map-get($pink, darken-3) !important;
  text-decoration: none;
}

p {
  color: map-get($deep-purple, accent-1);
  margin-bottom: 0 !important;
  padding-left: 40px;
  font-size: 1.8rem;
  text-shadow: -1px 1px 1px map-get($pink, darken-3);
}

.technology-block {
  min-height: 380px;
}

.source-block {
  margin-left: 200px;
}

@media (max-width: 1903px) {
  .source-block {
    margin-left: 0;
  }
}
@media (max-width: 1264px) {
  .laptop {
    width: 300px;
    height: 300px;
    top: -120px;
    left: -215px;
  }

  .phone {
    width: 180px;
    height: 180px;
    bottom: -120px;
    right: -220px;
  }

  .technology-block {
    min-height: unset;
  }
}

@media (max-width: 959px) {
  .laptop {
    width: 300px;
    height: 300px;
    position: static;
  }

  .phone {
    width: 180px;
    height: 180px;
    top: -60px;
    position: relative;
    right: -25px;
  }

  .source-block {
    width: 360px;
  }
}

@media (max-width: 601px) {
  .phone {
    width: 180px;
    height: 180px;
    top: 150px;
    position: absolute;
    right: 50px;
    transform: rotate(30deg);
  }

  .source-block {
    width: 320px;
  }

  .phone {
    width: 150px;
    height: 150px;
    top: 55px;
    position: absolute;
    right: -45px;
    transform: rotate(15deg);
  }

  .laptop {
    width: 250px;
    height: 250px;
    position: relative;
    top: 0;
    left: -10px;
  }

  a,
  .source-block p {
    font-size: 1.7rem;
  }
}

@media (max-width: 400px) {
  .technology-block {
    padding-top: 25px;
  }

  .source-block {
    width: 300px;
  }

  .images-container {
    overflow: hidden;
  }

  .laptop {
    left: 0;
  }

  .phone {
    right: -40px;
  }

  a,
  .source-block p {
    font-size: 1.5rem;
    padding-left: 20px;
  }
}
</style>
