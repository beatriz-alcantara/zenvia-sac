<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
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
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container class="my-background">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import CardTopics from 'components/CardTopics.vue'
import db from 'boot/database'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'MainLayout',
  components: {
    // CardTopics
  },
  data () {
    return {
      leftDrawerOpen: false,
      pesquisa: ''
    }
  },
  computed: {
    ...mapState('empresas', ['empresas'])
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
      this.$router.push('/Dashboard')
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
