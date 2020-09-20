<template>
  <q-page class="container my-background">
    <div class="row q-pt-md q-col-gutter-lg">
      <div class="recomedation col-12" style="z-index: 1">
        <recomedation/>
      </div>
      <Aside/>
      <div class="col-7 column">
        <div class="col-2 text-center">
          <span class="titulo"> Histórico de reclamações </span>
          <p class="paragraph"> Este é o histórico da empresa, com todos os dados sobre quantos chamados foram atendidos e quantos não foram </p>
        </div>
        <div class="col-4">
          <div class="row justify-center">
            <div class="col-8">
              <graph-bar Height="150" :isHorizontal="false" :Dados="dadosHistorico" :Labels="labelsGraph"/>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="row justify-end">
            <div class="col-12 text-center q-pb-lg">
              <span class="titulo"> Reclamações </span>
            </div>
            <div class="col-12 row justify-center q-col-gutter-md">
              <div class="col-3" :key="index" v-for="(reclamacao, index) in empresaSelecionada.reclamacoes">
                <complaint-card :Image="reclamacao.foto" :Complaint="reclamacao.reclamacao" :Nome="reclamacao.nome" :Status="reclamacao.status"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import GraphBar from 'components/GraphBar'
import ComplaintCard from 'components/ComplaintCard'
import Recomedation from 'components/Recomendation.vue'
import Aside from 'components/Aside.vue'
import { mapState } from 'vuex'
export default {
  name: 'PageIndex',
  components: {
    GraphBar,
    Recomedation,
    Aside,
    ComplaintCard
  },
  data () {
    return {
      dadosHistorico: [],
      labelsGraph: [
        ['Atendidos'],
        ['Não atendidos']
      ]
    }
  },
  computed: {
    ...mapState('empresas', ['empresaSelecionada'])
  },
  created () {
    console.log('empresas selecionada => ', this.empresaSelecionada)
    this.setDadosHistorico()
  },
  methods: {
    setDadosHistorico () {
      const data = this.empresaSelecionada.historicoReclamacoes.map(item => item.value)
      this.dadosHistorico = [
        {
          name: 'Histórico',
          data: data
        }
      ]
    }
  }
}
</script>

<style>
.recomedation {
  margin-top: -10vh;
  padding-bottom: 5vh;
}
.my-background {
  background-color: #F2F6F9;
}
</style>
