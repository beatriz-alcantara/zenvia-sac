<template>
  <q-card class="row items-center q-py-sm q-pl-sm" style="width: 18vw">
    <div class="col-4">
      <q-icon color="black" size="50px" :name="`img:${Icon}`"/>
    </div>
    <div class="col-5 row">
      <span class="col-12 text-black"> {{ Amount }} </span>
      <span class="col-12 text-black"> {{ Title }} </span>
    </div>
  </q-card>
</template>

<script>
export default {
  props: {
    Icon: String,
    Amount: Number,
    Title: String
  }
}
</script>

<style>

</style>
