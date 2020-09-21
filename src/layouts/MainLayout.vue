<template>
  <q-layout view="lHh Lpr lFf" class="my-background">
    <q-header elevated style="position: relative">
      <q-toolbar class="bg-primary q-py-md row" style="z-index: 1">
        <q-toolbar-title class="row col-2 q-pb-xl"> VINDII </q-toolbar-title>

        <div class="col-8 row justify-center q-pb-lg">
          <div class="col-12 row justify-center">
            <span class="col-8"> Pesquise uma empresa </span>
          </div>
          <q-input class="col-8" color="white" @keyup.enter="getLoja()" v-model="pesquisa" dark dense outlined placeholder="Digite o nome da loja">
            <template v-slot:append>
              <q-icon color="white" name="search" dense @click="getLoja()"/>
            </template>
          </q-input>
          <div class="col-12 row justify-center q-mt-sm">
            <span class="col-8 text-h5"> {{ empresaSelecionada.nome }} </span>
          </div>
        </div>
      </q-toolbar>
      <div class="col-12 row justify-center">
        <div class="col-12 row justify-center q-gutter-md topics">
          <card-topics :Amount="problema.value" :Title="problema.label" :key="index" v-for="(problema, index) in empresaSelecionada.problemas"/>
        </div>
      </div>
    </q-header>

    <q-page-container class="my-background">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import CardTopics from 'components/CardTopics.vue'
import db from 'boot/database'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'MainLayout',
  components: {
    CardTopics
  },
  data () {
    return {
      leftDrawerOpen: false,
      pesquisa: ''
    }
  },
  computed: {
    ...mapState('empresas', ['empresas', 'empresaSelecionada'])
  },
  mounted () {
    db.ref('/').once('value')
      .then(res => {
        this.SET_EMPRESAS(res.val())
      })
  },
  methods: {
    ...mapMutations('empresas', ['SET_EMPRESASELECIONADA', 'SET_EMPRESAS']),
    getLoja () {
      const resultado = this.empresas.filter(item => {
        return item.empresa.nome.match(new RegExp(this.pesquisa.toLowerCase(), 'gi'))
      })
      console.log('resultado => ', resultado)
      this.SET_EMPRESASELECIONADA(resultado[0].empresa)
    }
  }
}
</script>

<style scoped>
.topics {
  position: absolute;
  z-index: 2;
  top: 20vh;
}
</style>
