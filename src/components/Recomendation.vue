<template>
  <div class="row col-12 justify-center q-col-gutter-lg">
    <div class="col-5 row">
      <div class="col-2">
        <img width="70" height="70" src="aprovado.png"/>
      </div>
      <div class="col-8">
        <span class="titulo"> Recomendamos a empresa X - Varejo </span>
      </div>
      <div class="q-pt-md paragraph">
        <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.  </p>
      </div>
    </div>
    <div class="col-4">
      <graph-bar :isHorizontal="true" Height="100"/>
    </div>
  </div>
</template>

<script>
import GraphBar from 'components/GraphBar'
export default {
  components: {
    GraphBar
  }
}
</script>

<style lang="sass" scoped>
.titulo
  font-size: 1.5em

</style>
