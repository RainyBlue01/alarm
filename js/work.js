function getYearsCount() {
  $.ajax({
    url: '/alarm/alarms/getYearsCount',
    type: 'get',
    dataType: 'json',
    success: function (data) {
      var v = data.data
    },
  })
}
function getMonthCount() {
  $.ajax({
    url: '/alarm/alarms/getMonthCount',
    type: 'get',
    dataType: 'json',
    success: function (data) {
      var v = data.data
    },
  })
}
function getAlarmSystemCount() {
  $.ajax({
    url: '/alarm/alarms/getAlarmSystemCount',
    type: 'get',
    dataType: 'json',
    success: function (data) {
      var v = data.data
    },
  })
}
function getDetectionAreaCount() {
  $.ajax({
    url: '/alarm/alarms/getDetectionAreaCount',
    type: 'get',
    dataType: 'json',
    success: function (data) {
      var v = data.data
    },
  })
}
function getAlarmTypeCount() {
  $.ajax({
    url: '/alarm/alarms/getAlarmTypeCount',
    type: 'get',
    dataType: 'json',
    success: function (data) {
      var v = data.data
    },
  })
}
function reportform() {
  tipe = 6
  localStorage.setItem('tipe', 6)
  $('#tableaaa').hide()
  $('#sendasda').hide()
  $('#begin').removeClass('active')
  $('#all').removeClass('active')
  $('#before').removeClass('active')
  $('#after').removeClass('active')
  $('#StatisticsList').hide()
  $('#reportformList').show()
  $('#Statistics').show()
  $('#search').hide()
}
function analysis() {
  tipe = 5
  localStorage.setItem('tipe', 5)
  lay('#version').html('-v' + laydate.v)
  laydate.render({
    elem: '#time1',
    type: 'datetime',
    range: true,
  })
  laydate.render({
    elem: '#time2',
    type: 'datetime',
    range: true,
  })
  $('#begin').removeClass('active')
  $('#all').removeClass('active')
  $('#before').removeClass('active')
  $('#after').removeClass('active')
  $('#Statistics').show()
  $('#search').hide()
  $('#StatisticsList').show()
  $('#tableaaa').hide()
  $('#sendasda').hide()
  var fontColor = '#30eee9'
  var option = {
    backgroundColor: 'rgba(0,0,0,0)',
    grid: {
      left: '5%',
      right: '10%',
      top: '20%',
      bottom: '15%',
    },
    legend: {
      show: true,
      x: 'center',
      y: '35',
      icon: 'stack',
      textStyle: {
        color: '#1bb4f6',
      },
      data: [
        'IT大道分控',
        '成渝路分控',
        '成新路分控',
        '八二分控',
        '北部新城分控',
      ],
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          color: fontColor,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#062e5f',
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#071d38',
            type: 'dashed',
          },
        },
        data: [
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月',
          '7月',
          '8月',
          '9月',
          '10月',
          '11月',
          '12月',
        ],
      },
    ],
    yAxis: [
      {
        type: 'value',
        min: 0,
        // max: 140,
        splitNumber: 4,
        axisLine: {
          show: true,
          lineStyle: {
            color: '#062e5f',
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: '#11366e',
          },
        },
      },
    ],
    series: [
      {
        name: 'IT大道分控',
        type: 'line',
        symbol: 'circle',
        showAllSymbol: true,
        symbolSize: 8,
        itemStyle: {
          normal: {
            color: '#4eeb08',
            lineStyle: {
              color: '#4eeb08',
            },
          },
        },
        data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330],
      },
      {
        name: '成渝路分控',
        type: 'line',
        symbol: 'circle',
        symbolSize: 8,
        showAllSymbol: true,
        itemStyle: {
          normal: {
            color: '#615997',
            lineStyle: {
              color: '#615997',
            },
          },
        },
        data: [20, 182, 191, 234, 290, 330, 310, 201, 154, 190, 330, 410],
      },

      {
        name: '成新路分控',
        type: 'line',
        symbol: 'circle',
        symbolSize: 8,
        showAllSymbol: true,
        itemStyle: {
          normal: {
            color: '#c5b08a',
            lineStyle: {
              color: '#c5b08a',
            },
          },
        },
        data: [130, 182, 191, 134, 120, 130, 130, 121, 114, 119, 310, 140],
      },

      {
        name: '八二分控',
        type: 'line',
        symbol: 'circle',
        symbolSize: 8,
        showAllSymbol: true,
        itemStyle: {
          normal: {
            color: '#8fae3b',
            lineStyle: {
              color: '#8fae3b',
            },
          },
        },
        data: [402, 112, 111, 224, 120, 130, 430, 211, 114, 110, 120, 140],
      },

      {
        name: '北部新城分控',
        type: 'line',
        symbol: 'circle',
        symbolSize: 8,
        showAllSymbol: true,
        itemStyle: {
          normal: {
            color: '#398777',
            lineStyle: {
              color: '#398777',
            },
          },
        },
        data: [110, 120, 21, 213, 123, 330, 110, 101, 254, 120, 130, 110],
      },
    ],
  }
  //初始化echarts实例
  var myChart = echarts.init(document.getElementById('chartmain'))

  //使用制定的配置项和数据显示图表
  myChart.setOption(option)

  var option1 = {
    backgroundColor: '#090c11',
    color: ['#b23636', '#a65839', '#a68b39'],
    legend: {
      orient: 'vertical',
      left: '400',
      top: 75,
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    series: [
      {
        type: 'pie',
        radius: ['35%', '70%'],
        left: -200,
        data: [
          {
            value: 0,
            name: '高危报警',
            label: { color: '#b23636', formatter: '{d}%' },
          },
          {
            value: 735,
            name: '中级报警',
            label: { color: '#a65839', formatter: '{d}%' },
          },
          {
            value: 580,
            name: '低级报警',
            label: { color: '#a68b39', formatter: '{d}%' },
          },
        ],
      },
    ],
  }
  var chart2 = echarts.init(document.getElementById('chartpie'))
  chart2.setOption(option1)
}
