<template>
  <q-card>
    <q-card-section>
      <apexchart ref="realtimeChart" type="bar" :height="Height" :options="chartOptions" :series="series" />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'GraphBar',
  props: {
    isHorizontal: Boolean,
    Height: String
  },
  data () {
    return {
      series: [{
        name: 'Atendimentos',
        data: [10, 41, 20]
      }],
      chartOptions: {
        chart: {
          height: 150,
          type: 'bar',
          events: {
            click: function (chart, w, e) {
              // console.log(chart, w, e)
            }
          }
        },
        plotOptions: {
          bar: {
            columnWidth: '50%',
            distributed: true,
            horizontal: this.isHorizontal
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        xaxis: {
          categories: [
            ['Atendidas'],
            ['Não atendidas']
          ],
          labels: {
            show: false,
            style: {
              fontSize: '12px'
            }
          }
        },
        yaxis: {
          show: false
        }
      }
    }
  }
}
</script>

<style>

</style>
