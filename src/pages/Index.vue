<template>
  <q-page class="container">
    <div class="row q-pt-md justify-center">
      <div class="col-12 row justify-center">
        <div class="col-12 row justify-center">
          <span class="col-5"> Procurar </span>
        </div>
        <q-input class="col-5" dense outlined placeholder="Digite o nome da loja">
          <template v-slot:append>
            <q-icon name="search" dense/>
          </template>
        </q-input>
      </div>
      <div class="row col-12 q-pt-lg justify-center q-col-gutter-sm">
        <div class="col-5 row justify-center">
          <div class="col-12">
            <graph-bar/>
          </div>
        </div>
        <div class="col-5 row justify-center self-end">
          <div class="col-12">
            <card-ranking/>
          </div>
        </div>
      </div>
      <div class="col-10 q-pt-md">
        <comments/>
      </div>
    </div>
  </q-page>
</template>

<script>
import GraphBar from 'components/GraphBar'
import CardRanking from 'components/CardRanking'
import Comments from 'components/Comments.vue'
export default {
  name: 'PageIndex',
  components: {
    GraphBar,
    CardRanking,
    Comments
  }
}
</script>
