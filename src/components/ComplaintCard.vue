<template>
  <q-card class="shadow-5">
    <q-card-section class="text-center">
      <q-avatar>
        <img :src="Image ? Image : 'person.png'">
      </q-avatar>
    </q-card-section>
    <q-card-section>
      <p class="text-center text-body1"> {{ Nome }} </p>
      <p class="paragraph">
        {{ Complaint }}
      </p>
      <p class="text-negative paragraph">
        {{ Status }}
      </p>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    Image: String,
    Complaint: String,
    Nome: String,
    Status: String
  },
  methods: {
    getImage (img) {
      return img || 'person.png'
    }
  }
}
</script>

<style>

</style>
