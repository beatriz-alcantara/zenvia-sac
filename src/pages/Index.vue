<template>
  <q-page class="container my-background">
    <div class="row q-pt-md q-col-gutter-lg">
      <div class="recomedation" style="z-index: 1">
        <recomedation/>
      </div>
      <Aside/>
      <div class="col-7 column">
        <div class="col-2 text-center">
          <span class="titulo"> Histórico de reclamações </span>
          <p class="paragraph"> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour. Or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text </p>
        </div>
        <div class="col-4">
          <div class="row justify-center">
            <div class="col-8">
              <graph-bar Height="200" :isHorizontal="false"/>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="row justify-end">
            <div class="col-12 text-center q-pb-lg">
              <span class="titulo"> Reclamações </span>
            </div>
            <div class="col-12 row justify-center q-col-gutter-md">
              <div class="col-3">
                <complaint-card Image="cliente-01.png"/>
              </div>
              <div class="col-3">
                <complaint-card Image="cliente-02.png"/>
              </div>
              <div class="col-3">
                <complaint-card Image="cliente-03.png"/>
              </div>
              <div class="col-3">
                <complaint-card Image="cliente-04.png"/>
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
// import CardRanking from 'components/CardRanking'
// import Comments from 'components/Comments.vue'
// import CardTopics from 'components/CardTopics.vue'
import Recomedation from 'components/Recomendation.vue'
import Aside from 'components/Aside.vue'
export default {
  name: 'PageIndex',
  components: {
    GraphBar,
    Recomedation,
    Aside,
    ComplaintCard
    // CardRanking,
    // Comments,
    // CardTopics
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
