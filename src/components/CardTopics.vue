<template>
  <q-card class="row items-center q-py-sm q-pl-sm" style="width: 18vw;">
    <div class="col-4">
      <q-icon color="black" size="50px" :name="`img:${getImage(Title)}`"/>
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
    Amount: Number,
    Title: String
  },
  methods: {
    getImage (opt) {
      switch (opt) {
        case 'Reclamações':
          return 'icone-reclam.png'
        case 'Visualizações':
          return 'icone-views.png'
        case 'Chamadas':
          return 'icone-call.png'
        case 'Não resolvidas':
          return 'icone-naores.png'
      }
    }
  }
}
</script>

<style>

</style>
