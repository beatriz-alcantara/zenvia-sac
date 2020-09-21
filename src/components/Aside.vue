<template>
  <div class="col-4 row bg-primary q-ml-sm">
    <div class="col-12 row text-center q-pt-md items-center no-wrap">
      <span class="text-h6 text-white col-8 q-pl-md">
        {{ empresaSelecionada.nome }}
        <span class="text-caption text-white"> 8.6/10 </span>
      </span>
      <div class="col-1">
        <q-avatar>
          <img src="renner-logo.png">
        </q-avatar>
      </div>
      <div class="col-2">
        <q-icon size="sm" class="self-end" name="img:icone-medal.png"/>
      </div>
    </div>
    <div class="col-12 row q-py-lg justify-center">
      <div class="col-8">
        <span class="titulo-bio text-white"> Bio </span>
        <p class="text-white paragraph">
          {{ empresaSelecionada.bio }}
        </p>
      </div>
    </div>
    <q-separator color="grey-5" class="q-mx-sm"/>
    <div class="col-12 row justify-center q-py-xl">
      <div class="col-12 text-center">
        <span class="titulo text-white"> {{ empresaSelecionada.tempoResolucaoProblema }} min </span>
      </div>
      <div class="col-8">
        <p class="text-white paragraph"> Tempo médio que esta empresa leva para resolver os seus chamados. </p>
      </div>
    </div>
    <q-separator color="grey-5" class="q-mx-sm"/>
    <div class="col-12 row justify-center q-py-xl">
      <div class="col-12 text-center">
        <span class="titulo text-white"> {{ empresaSelecionada.porcentagemResolucao }}% </span>
      </div>
      <div class="col-8">
        <p class="text-white paragraph"> Quantidade de chamados resolvidos desde que a empresa inciou o uso da plataforma vindii. </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('empresas', ['empresaSelecionada'])
  }
}
</script>

<style lang="sass" scoped>
.titulo-bio
  font-size: 1.5em
</style>
