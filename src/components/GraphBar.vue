<template>
  <q-card>
    <q-card-section>
      <apexchart ref="realtimeChart" type="bar" height="200" :options="chartOptions" :series="series" />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'GraphBar',
  data () {
    return {
      series: [{
        name: 'Atendimentos',
        data: [10, 41]
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'bar',
          events: {
            click: function (chart, w, e) {
              // console.log(chart, w, e)
            }
          }
        },
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true
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
            style: {
              fontSize: '12px'
            }
          }
        }
      }
    }
  }
}
</script>

<style>

</style>
