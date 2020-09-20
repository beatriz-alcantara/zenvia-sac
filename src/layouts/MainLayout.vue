<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style="position: relative">
      <q-toolbar class="bg-primary q-py-md row" style="z-index: 1">
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        /> -->
        <q-toolbar-title class="row col-2 q-pb-xl"> VINDII </q-toolbar-title>

        <div class="col-8 row justify-center q-pb-lg">
          <div class="col-12 row justify-center">
            <span class="col-8"> Pesquise uma empresa </span>
          </div>
          <q-input class="col-8" dark dense outlined placeholder="Digite o nome da loja">
            <template v-slot:append>
              <q-icon color="white" name="search" dense/>
            </template>
          </q-input>
          <div class="col-12 row justify-center q-mt-sm">
            <span class="col-8 text-h5"> Empresa X - Varejo </span>
          </div>
        </div>
        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
      <div class="col-12 row justify-center">
        <div class="col-12 row justify-center q-gutter-md topics">
          <card-topics Icon="icone-reclam.png" :Amount="3600" Title="Reclamações"/>
          <card-topics Icon="icone-views.png" :Amount="13500" Title="Visualizações"/>
          <card-topics Icon="icone-call.png" :Amount="8506" Title="Chamadas"/>
          <card-topics Icon="icone-naores.png" :Amount="1523" Title="Não resolvidas"/>
        </div>
      </div>
    </q-header>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"

    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container class="my-background">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import CardTopics from 'components/CardTopics.vue'

export default {
  name: 'MainLayout',
  components: {
    CardTopics
  },
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style>
.topics {
  position: absolute;
  z-index: 2;
  top: 20vh;
}
</style>
