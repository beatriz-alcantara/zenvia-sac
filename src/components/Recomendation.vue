<template>
  <div class="row col-12 justify-center q-col-gutter-lg">
    <div class="col-5 row">
      <div class="col-2">
        <img width="70" height="70" src="aprovado.png"/>
      </div>
      <div class="col-8">
        <span class="titulo"> Recomendação {{ empresaSelecionada.nome }} </span>
      </div>
      <div class="q-pt-md paragraph">
        <p> {{ empresaSelecionada.recomendacao }} </p>
      </div>
    </div>
    <div class="col-4">
      <graph-bar :isHorizontal="true" Height="100" :Dados="principaisReclamacoes" :Labels="labelGraph"/>
    </div>
  </div>
</template>

<script>
import GraphBar from 'components/GraphBar'
import { mapState } from 'vuex'
export default {
  components: {
    GraphBar
  },
  computed: {
    ...mapState('empresas', ['empresaSelecionada'])
  },
  data () {
    return {
      principaisReclamacoes: [],
      labelGraph: [
        ['Prazo'],
        ['Atendimento'],
        ['Entrega']
      ]
    }
  },
  created () {
    this.setPrincipaisReclamacoes()
  },
  methods: {
    setPrincipaisReclamacoes () {
      const data = this.empresaSelecionada.principaisReclamacoes.map(item => item.value)
      this.principaisReclamacoes = [
        {
          name: 'Principais reclamações',
          data: data
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.titulo
  font-size: 1.5em

</style>
