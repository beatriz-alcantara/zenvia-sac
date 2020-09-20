<template>
  <q-card class="shadow-5">
    <q-card-section class="text-center">
      <q-avatar>
        <img :src="Image">
      </q-avatar>
    </q-card-section>
    <q-card-section>
      <p class="text-center text-body1"> Lorem ipsum </p>
      <p class="paragraph">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.
      </p>
      <p class="text-negative paragraph">
        Não faria negócio novamente
      </p>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    Image: String
  }
}
</script>

<style>

</style>
