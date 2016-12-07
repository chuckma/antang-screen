function drawLeftRadar() {
    var myCharts = echarts.init(document.getElementById('left2Radar'));

    var option = {
        tooltip: {
            trigger: 'axis'
        },
        polar: [
            {
                radius: 90,
                indicator: [
                    {
                        text: '销售量',
                        max: 100
                    }, /*(Sales) (Refund Rate) (Negative Evaluation) (Complaints Report) (Disease) (Warning) (Public Opinions)*/
                    {text: '退货率', max: 100},
                    {text: '负面评价', max: 100},
                    {text: '投诉举报', max: 100},
                    {text: '疫情疫病', max: 100},
                    {text: '警示通报', max: 100},
                    {text: '媒体舆情', max: 100}
                ],
                name: {
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 12
                    }
                }

            }
        ],

        series: [
            {
                name: '抽样检测数据',
                type: 'radar',
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },
                data: [
                    {
                        value: [48, 78, 52, 63, 28, 53, 29],
                        name: '抽样检测数据'
                    }
                ]
            }
        ]
    };
    myCharts.setOption(option);
}
function drawCenterRadar() {
    var myCharts = echarts.init(document.getElementById('center4Top_left2'));

    var option = {
        tooltip: {
            trigger: 'axis'
        },
        polar: [
            {
                radius: 150,
                indicator: [
                    {
                        text: '销售量',
                        max: 100
                    }, /*(Sales) (Refund Rate) (Negative Evaluation) (Complaints Report) (Disease) (Warning) (Public Opinions)*/
                    {text: '退货率', max: 100},
                    {text: '负面评价', max: 100},
                    {text: '投诉举报', max: 100},
                    {text: '疫情疫病', max: 100},
                    {text: '警示通报', max: 100},
                    {text: '媒体舆情', max: 100}
                ],
                name: {
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 14
                    }
                }

            }
        ],

        series: [
            {
                name: '抽样检测数据',
                type: 'radar',
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },
                data: [
                    {
                        value: [48, 78, 52, 63, 28, 53, 29],
                        name: '抽样检测数据'
                    }
                ]
            }
        ]
    };
    myCharts.setOption(option);
}
function drawCenterPie3() {
    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('center4Top_right2'));

    var labelTop = {
        normal: {
            label: {
                show: true,
                position: 'center',
                formatter: '{b}',
                textStyle: {
                    baseline: 'bottom',
                    fontSize: 12
                }
            },
            labelLine: {
                show: false
            }
        }
    };
    var labelFromatter = {
        normal: {
            label: {
                formatter: function (params) {
                    return 100 - params.value + '%'
                },
                textStyle: {
                    color: '#ffffff',
                    baseline: 'top',
                    fontSize: 12
                }
            }
        }
    }
    var labelBottom = {
        normal: {
            color: '#ccc',
            label: {
                show: true,
                position: 'center'
            },
            labelLine: {
                show: false
            }
        },
        emphasis: {
            color: 'rgba(0,0,0,0)'
        }
    };
    var radius = ['20%', '30%'];
    var option = {
        /*        legend: {
         x: 'center',
         y: '280px',
         data: [
         {name: '食品', icon: 'bar'},
         {name: '纺织', icon: 'bar'},
         {name: '机电', icon: 'bar'},
         {name: '轻工', icon: 'bar'},
         {name: '化妆品', icon: 'bar'}
         ],
         textStyle: {
         color: '#FFFFFF'
         }
         },*/

        calculable: true,
        series: [

            {
                name: '面积模式',
                type: 'pie',
                minAngle: 8,
                radius: [30, 100],
                center: ['50%', '200px'],
                roseType: 'radius',

                x: '50%',               // for funnel
                max: 40,                // for funnel
                sort: 'ascending',     // for funnel
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var colorList = [
                                '#F1573D', '#FF7D2F', '#FFB400', '#00BECC', '#9A76BE', '#9bca63'
                            ];
                            return colorList[params.dataIndex]
                        }
                    }
                },
                data: [
                    {value: 85, name: '食品'},
                    {value: 73, name: '纺织'},
                    {value: 9, name: '机电'},
                    {value: 70, name: '轻工'},
                    {value: 14, name: '化妆品'},

                ],

            }
        ]
    };
    myChart.setOption(option);
    // 为echarts对象加载数据
    setInterval(function () {
        var myChart2 = echarts.init(document.getElementById('center4Top_right2'));
        myChart2.setOption(option);

    }, 5000);
};
function drawLeftBar() {
    var myChart = echarts.init(document.getElementById('left3_bar'));
    /*, 'macarons'*/
    var option4 = {
        // tooltip: {
        //     trigger: 'axis'
        // },
        xAxis: [
            {
                name: '监控产品',
                type: 'category',
                data: ['食品', '化妆品', '纺织', '轻工', '机电'],
                axisLabel: {
                    textStyle: {
                        fontWeight: 'bold',
                        color: '#FFFFFF',
                        fontSize: 12
                    },
                    interval: 0,
                    rotate: 30
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                name: '数量',
                type: 'value',
                splitNumber: 2,
                // max: 10,
                axisLabel: {
                    formatter: '{value}k',
                    textStyle: {
                        // fontWeight:'bold',
                        fontSize: 14,
                        color: '#FFFFFF'
                    }
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }

        ],
        grid: {
            x: '30px',
            y: '5px',
            width: '260px',
            height: '60px'
        },
        series: [
            {
                name: '总货值',
                type: 'bar',
                barWidth: 10,    // bar 的宽度
                itemStyle: {
                    normal: {
                        color: '#46CCEF'
                    }
                },
                data: [2.589, 1.645, 0.837, 0.978, 0.512]
            }
        ]
    };
    myChart.setOption(option4);
};
function drawRightBar1() {
    var myChart = echarts.init(document.getElementById('left_bar'), 'macarons');
    /*, 'macarons'*/
    var option4 = {
        title: {
            text: '2016进口B2C(货值)',
            x: 'center',
            y: 'top',
            textAlign: 'center',
            textStyle: {
                fontSize: 12,
                align: 'center',
                color: '#FFFFFF'
            }
        },
        // tooltip: {
        //     trigger: 'axis'
        // },
        xAxis: [
            {
                type: 'category',
                data: ['奶粉', '纸尿裤', '沐浴用品', '面膜', '维生素制品', '鱼油制品'],
                // data: ['奶粉', '皮草', '香水', '药品', '食品', '数码', '玩具'],
                axisLabel: {
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 10
                    },
                    interval: 0,
                    rotate: 30,
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitNumber: 5,
//                 max: 20,
                axisLabel: {
                    formatter: '{value}mil',
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 10
                    }
                },
                axisLine: {
                    show: false
                }
            }

        ],
        grid: {
            x: '52px',
            y: '40px',
            width: '245px',
            height: '166px'
        },
        series: [
            {
                name: '总货值',
                type: 'bar',
                barWidth: '10',
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var colorList = [
                                '#FE0606', '#FF6E0B', '#FE9A04', '#FECD04', '#FFFF0F', '#AFE708', '#0ACE0A'
                            ];

                            return colorList[params.dataIndex]
                        }
                    }
                },
                data: [133.2, 15.5, 11.6, 11.9, 10.3, 6.8],
                // data: [5.0, 7.0, 9.0, 12.0, 14.6, 16.7, 18.6]

            }
        ]
    };
    myChart.setOption(option4, true);
};
function drawCenterBar1() {
    var myChart = echarts.init(document.getElementById('center_bar1'), 'macarons');
    /*, 'macarons'*/
    var option4 = {
        tooltip: {
            trigger: 'axis'
        },
        xAxis: [
            {
                type: 'category',
                // data: ['奶粉', '皮草', '香水', '奶粉', '食品', '美国', '俄国'],
                data: ['纺织制品', '珍珠宝石', '鞋帽', '皮革制品', '塑料制品', '金属及制品'],
                axisLabel: {
                    textStyle: {
                        color: '#FFFFFF'
                    },
                    interval: 0,
                    rotate: 30,
                },
                axisLine: {
                    show: false
                },
                axisTick: {},
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitNumber: 5,
//                 max: 20,
                axisLabel: {
                    formatter: '{value} mil',
                    textStyle: {
                        color: '#FFFFFF'
                    }
                },
                axisLine: {
                    show: false
                }
            }

        ],
        grid: {
            x: '60px',
            y: '30px',
            width: '350px',
            height: '220px',
            // backgroundColor: '#969696',

        },
        series: [
            {
                name: '总货值',
                type: 'bar',
                barWidth: '25',
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var colorList = [
                                '#FE0606', '#FF6E0B', '#FE9A04', '#FECD04', '#FFFF0F', '#AFE708', '#0ACE0A'
                            ];
                            return colorList[params.dataIndex]
                        }
                    }
                },
                data: [7.932, 1.9877, 0.8762, 0.6211, 0.5911, 0.4638]

            }
        ]
    };
    myChart.setOption(option4, true);
};
function drawCenterBar2() {
    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('center_bar2'), 'macarons');
    /*, 'macarons'*/
    var option4 = {
        tooltip: {
            trigger: 'axis'
        },
        xAxis: [
            {

                type: 'category',
                data: ['奶粉', '纸尿裤', '沐浴用品', '面膜', '维生素制品', '鱼油制品'],
                // data: ['奶粉', '皮草', '香水', '奶粉', '食品', '美国', '俄国'],
                axisLabel: {
                    textStyle: {
                        color: '#FFFFFF'
                    },
                    interval: 0,
                    rotate: 30,
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitNumber: 5,
//                 max: 20,
                axisLabel: {
                    formatter: '{value} mil',
                    textStyle: {
                        color: '#FFFFFF'
                    }
                },
                axisLine: {
                    show: false
                }
            }

        ],
        grid: {
            x: '65px',
            y: '30px',
            width: '350px',
            height: '220px',
            // backgroundColor: '#969696',

        },
        series: [
            {
                name: '总货值',
                type: 'bar',
                barWidth: '25',
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var colorList = [
                                '#FE0606', '#FF6E0B', '#FE9A04', '#FECD04', '#FFFF0F', '#AFE708', '#0ACE0A'
                            ];
                            return colorList[params.dataIndex]
                        }
                    }
                },
                // data: [133208.5, 15484.3, 11357.6, 11134.9, 10003, 6376.8]
                // data: [5.0, 7.0, 9.0, 12.0, 14.6, 16.7, 18.6]
                data: [133.2, 15.5, 11.6, 11.9, 10.3, 6.8]

            }
        ]
    };
    myChart.setOption(option4, true);
};
function drawCenterBar3() {
    var myChart = echarts.init(document.getElementById('center_bar3'));
    /*, 'macarons'*/
    var option4 = {
        tooltip: {
            trigger: 'axis'
        },
        xAxis: [
            {
                name: '监控产品',
                type: 'category',
                data: ['食品', '化妆品', '纺织', '轻工', '机电'],
                axisLabel: {
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 14
                    }
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                name: '数量',
                type: 'value',
                splitNumber: 2,
                // max: 10,
                axisLabel: {
                    formatter: '{value}k',
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 14
                    }
                },
                axisLine: {
                    show: false
                }
            }

        ],
        grid: {
            x: '80px',
            y: '20px',
            width: '600px',
            height: '320px',
            borderWidth: 2
        },
        series: [
            {
                name: '总货值',
                type: 'bar',
                barWidth: 35,    // bar 的宽度
                itemStyle: {
                    normal: {
                        color: '#46CCEF'
                    }
                },
                data: [2.589, 1.645, 0.837, 0.978, 0.512]
            }
        ]
    };
    myChart.setOption(option4);
};
function drawCenterPie4() {
    var myChart = echarts.init(document.getElementById('center_Pie4'));
    var centerY = '160px';
    var option = {
        series: [
            {
                name: '企业备案数量',
                type: 'pie',
                radius: '100px',
                minAngle: 8, // 最小角度
                center: ['220px', centerY],
                data: [
                    {value: 346, name: '下沙园区'},
                    {value: 150, name: '下城园区'},
                    {value: 242, name: '空港园区'}
                ],
                itemStyle: {
                    normal: {
                        label: {
                            textStyle: {
                                fontSize: 12
                            }
                        }
                    }
                }

            }
        ]
    };
    myChart.setOption(option);
    setInterval(function () {
        var myChart2 = echarts.init(document.getElementById('center_Pie4'));
        myChart2.setOption(option);

    }, 8000);

};
function drawCenterPie5() {
    var myChart = echarts.init(document.getElementById('center_Pie5'));
    var centerY = '160px';
    var option = {
        series: [
            {
                name: '商品备案数量',
                type: 'pie',
                radius: '100px',
                minAngle: 8, // 最小角度
                center: ['220px', centerY],
                data: [
                    {value: 4534, name: '天猫国际'},
                    {value: 883, name: '宁波谨道'},
                    {value: 346, name: '海豚跨境'},
                    {value: 135, name: '上海牵趣'},
                    {value: 130, name: '紫楹花贸易'},
                    {value: 81, name: '易斯百'}
                ],
                itemStyle: {
                    normal: {
                        label: {
                            textStyle: {
                                fontSize: 12
                            }
                        }
                    }
                }

            }
        ]
    };
    myChart.setOption(option);
    setInterval(function () {
        var myChart2 = echarts.init(document.getElementById('center_Pie5'));
        myChart2.setOption(option);

    }, 5000);
};
function drawCenterScatter() {
    var myChart = echarts.init(document.getElementById('center4Bottom_right2'));
    /*var option = {
     tooltip : {
     trigger: 'axis',
     showDelay : 0,
     formatter : function (params) {
     if (params.value.length > 1) {
     return params.seriesName + ' :<br/>'
     + params.value[0] + 'cm '
     + params.value[1] + 'kg ';
     }
     else {
     return params.seriesName + ' :<br/>'
     + params.name + ' : '
     + params.value + 'kg ';
     }
     },
     axisPointer:{
     show: false,
     type : 'cross',
     lineStyle: {
     type : 'dashed',
     width : 1
     }
     }
     },
     legend: {
     data:['卫生指标','营养指标','机械安全','安全标识','使用说明','品质'],
     textStyle:{
     color:'#ffffff',
     fontSize:10
     }
     },
     xAxis : [
     {
     type : 'value',
     scale:true,
     boundaryGap:[0],
     // data: ['一季度', '二季度', '三季度', '四季度'],
     axisLabel : {
     textStyle:{
     color:'#ffffff',
     }
     },
     axisTick:{
     inside:true,
     lineStyle:{
     color:'#ffffff'
     }
     },
     axisLine:{
     show:false
     },
     splitLine:{
     show:false
     }
     }
     ],
     yAxis : [
     {
     type : 'value',
     scale:false,
     axisLabel : {
     formatter: '{value}',
     textStyle:{
     color:'#ffffff'
     }
     },
     axisLine:{
     show:false
     },
     splitLine:{
     show:false
     }
     }
     ],
     grid: {
     x: '36px',
     y: '35px',
     width: '480px',
     height: '220px',

     },
     series : [
     {
     name: '卫生指标',
     type: 'scatter',
     symbolSize: 5,
     max: 20,
     data: [[1.1, 11], [1.2, 15], [1.3, 13], [1.4, 10], [1.5, 12],
     [1.6, 11], [1.7, 17], [1.8, 13], [1.9, 10], [1.10, 12], [1.11, 15],
     [1.12, 2], [1.13, 1], [1.14, 2], [1.15, 8], [1.16, 5], [1.17, 0],
     [1.18, 11], [1.19, 15], [1.19, 13], [1.20, 10], [1.21, 12], [1.22, 16],
     [1.23, 11], [1.23, 15], [1.25, 13], [1.26, 10], [1.27, 12], [1.28, 10],
     [1.29, 11], [1.30, 12], [1.31, 10],

     [2.1, 11], [2.2, 15], [2.3, 13], [2.4, 10], [2.5, 12],
     [2.6, 11], [2.7, 17], [2.8, 13], [2.9, 10], [2.10, 12],
     [2.11, 15], [2.12, 2], [2.13, 1], [2.14, 2], [2.15, 8],
     [2.16, 5], [2.17, 0], [2.18, 11], [2.19, 15], [2.19, 13], [2.20, 10],
     [2.21, 12], [2.22, 16], [2.23, 11], [2.23, 15], [2.25, 13],
     [2.26, 10], [2.27, 12], [2.28, 10], [2.29, 11],

     [3.1, 11], [3.2, 15], [3.3, 13], [3.4, 10], [3.5, 12],
     [3.6, 11], [3.7, 17], [3.8, 13], [3.9, 10], [3.10, 12],
     [3.11, 15], [3.12, 2], [3.13, 1], [3.14, 2], [3.15, 8],
     [3.16, 5], [3.17, 0], [3.18, 11], [3.19, 15], [3.19, 13], [3.20, 10],
     [3.21, 12], [3.22, 16], [3.23, 11], [3.23, 15], [3.25, 13],
     [3.26, 10], [3.27, 12], [3.28, 10], [3.29, 11], [3.30, 12], [3.31, 10],

     [4.1, 11], [4.2, 15], [4.3, 13], [4.4, 10], [4.5, 12],
     [4.6, 11], [4.7, 17], [4.8, 13], [4.9, 10], [4.10, 12],
     [4.11, 15], [4.12, 2], [4.13, 1], [4.14, 2], [4.15, 8],
     [4.16, 5], [4.17, 0], [4.18, 11], [4.19, 15], [4.19, 13], [4.20, 10],
     [4.21, 12], [4.22, 16], [4.23, 11], [4.23, 15], [4.25, 13],
     [4.26, 10], [4.27, 12], [4.28, 10], [4.29, 11], [4.30, 12],

     [5.1, 11], [5.2, 15], [5.3, 13], [5.4, 10], [5.5, 12],
     [5.6, 11], [5.7, 17], [5.8, 13], [5.9, 10], [5.10, 12],
     [5.11, 15], [5.12, 2], [5.13, 1], [5.14, 2], [5.15, 8],
     [5.16, 5], [5.17, 0], [5.18, 11], [5.19, 15], [5.19, 13], [5.20, 10],
     [5.21, 12], [5.22, 16], [5.23, 11], [5.23, 15], [5.25, 13],
     [5.26, 10], [5.27, 12], [5.28, 10], [5.29, 11], [5.30, 12], [5.31, 10],

     [6.1, 11], [6.2, 15], [6.3, 13], [6.4, 10], [6.5, 12],
     [6.6, 11], [6.7, 17], [6.8, 13], [6.9, 10], [6.10, 12],
     [6.11, 15], [6.12, 2], [6.13, 1], [6.14, 2], [6.15, 8],
     [6.16, 5], [6.17, 0], [6.18, 11], [6.19, 15], [6.19, 13], [6.20, 10],
     [6.21, 12], [6.22, 16], [6.23, 11], [6.23, 15], [6.25, 13],
     [6.26, 10], [6.27, 12], [6.28, 10], [6.29, 11], [6.30, 12],

     [7.1, 11], [7.2, 15], [7.3, 13], [7.4, 10], [7.5, 12],
     [7.6, 11], [7.7, 17], [7.8, 13], [7.9, 10], [7.10, 12],
     [7.11, 15], [7.12, 2], [7.13, 1], [7.14, 2], [7.15, 8],
     [7.16, 5], [7.17, 0], [7.18, 11], [7.19, 15], [7.19, 13], [7.20, 10],
     [7.21, 12], [7.22, 16], [7.23, 11], [7.23, 15], [7.25, 13],
     [7.26, 10], [7.27, 12], [7.28, 10], [7.29, 11], [7.30, 12], [7.31, 10],

     [8.1, 11], [8.2, 15], [8.3, 13], [8.4, 10], [8.5, 12],
     [8.6, 11], [8.7, 17], [8.8, 13], [8.9, 10], [8.10, 12],
     [8.11, 15],[8.12, 2], [8.13, 1], [8.14, 2], [8.15, 8],
     [8.16, 5], [8.17, 0], [8.18, 11],[8.19, 15],[8.19, 13], [8.20, 10],
     [8.21, 12],[8.22, 16],[8.23, 11],[8.23, 15],[8.25, 13],
     [8.26, 10],[8.27, 12],[8.28, 10],[8.29, 11],[8.30, 12],[8.31,10],

     [9.1, 11], [9.2, 15], [9.3, 13], [9.4, 10], [9.5, 12],
     [9.6, 11], [9.7, 17], [9.8, 13], [9.9, 10], [9.10, 12],
     [9.11, 15],[9.12, 2], [9.13, 1], [9.14, 2], [9.15, 8],
     [9.16, 5], [9.17, 0], [9.18, 11],[9.19, 15],[9.19, 13], [9.20, 10],
     [9.21, 12],[9.22, 16],[9.23, 11],[9.23, 15],[9.25, 13],
     [9.26, 10],[9.27, 12],[9.28, 10],[9.29, 11],[9.30, 12],

     [10.1, 11], [10.2, 15], [10.3, 13], [10.4, 10], [10.5, 12],
     [10.6, 11], [10.7, 17], [10.8, 13], [10.9, 10], [10.10, 12],
     [10.11, 15],[10.12, 2], [10.13, 1], [10.14, 2], [10.15, 8],
     [10.16, 5], [10.17, 0], [10.18, 11],[10.19, 15],[10.19, 13], [10.20, 10],
     [10.21, 12],[10.22, 16],[10.23, 11],[10.23, 15],[10.25, 13],
     [10.26, 10],[10.27, 12],[10.28, 10],[10.29, 11],[10.30, 12],[10.31,10],

     [11.1, 11], [11.2, 15], [11.3, 13], [11.4, 10], [11.5, 12],
     [11.6, 11], [11.7, 17], [11.8, 13], [11.9, 10], [11.10, 12],
     [11.11, 15],[11.12, 2], [11.13, 1], [11.14, 2], [11.15, 8],
     [11.16, 5], [11.17, 0], [11.18, 11],[11.19, 15],[11.19, 13], [11.20, 10],
     [11.21, 12],[11.22, 16],[11.23, 11],[11.23, 15],[11.25, 13],
     [11.26, 10],[11.27, 12],[11.28, 10],[11.29, 11],[11.30, 12],

     // [12.1, 11], [12.2, 15], [12.3, 13], [10.4, 10], [10.5, 12],
     // [12.6, 11], [12.7, 17], [12.8, 13], [10.9, 10], [10.10, 12],
     // [12.11, 15],[12.12, 2], [12.13, 1], [10.14, 2], [10.15, 8],
     // [12.16, 5], [12.17, 0], [12.18, 11],[10.19, 15],[10.19, 13], [10.20, 10],
     // [12.21, 12],[12.22, 16],[12.23, 11],[10.23, 15],[10.25, 13],
     // [12.26, 10],[12.27, 12],[12.28, 10],[10.29, 11],[10.30, 12],[10.31,10],
     ]
     }*/
    // {    name:'营养指标',
    //     type:'scatter',
    //     max:20,
    //     // data: [['一季度', 13], ['二季度', 11], ['三季度', 8], ['四季度', 16]],
    // },
    // {
    //     name:'机械安全',
    //     type:'scatter',
    //     max:20,
    //     data: [['一季度', 4], ['二季度', 8], ['三季度', 6], ['四季度', 5]]
    // },
    // {
    //     name:'安全标识',
    //     type:'scatter',
    //     max:20,
    //     data: [['一季度', 1], ['二季度', 3], ['三季度', 5], ['四季度', 2]]
    // },
    // {
    //     name:'使用说明',
    //     type:'scatter',
    //     max:20,
    //     data: [['一季度', 0.5], ['二季度', 2], ['三季度', 1], ['四季度', 9]]
    // },
    // {
    //     name:'品质',
    //     type:'scatter',
    //     max:20,
    //     data: [['一季度', 1], ['二季度', 5], ['三季度', 2], ['四季度', 7]]
    // }
    //  ]
    //};

    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: '80px',
            y: '60px',
            data: ['营养指标', '品质', '安全标识', '安全卫生指标', '机械安全', '标示和使用说明'],
            textStyle: {
                color: '#FFFFFF'
            }
        },

        calculable: true,
        series: [
            {
                name: '',
                type: 'pie',
                radius: ['50%', '70%'],
                center: ['340px', '150px'],
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    emphasis: {
                        label: {
                            show: true,
                            position: 'center',
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    }
                },
                data: [
                    {value: 6, name: '营养指标'},
                    {value: 8, name: '品质'},
                    {value: 9, name: '安全标识'},
                    {value: 8, name: '安全卫生指标'},
                    {value: 10, name: '机械安全'},
                    {value: 99, name: '标示和使用说明'}
                ]
            }
        ]
    };

    myChart.setOption(option);
}
function drawCenterMap() {
    var myChart = echarts.init(document.getElementById('center2'));
    echarts.util.mapData.params.params.continent = {
        getGeoJson: function (callback) {
            $.getJSON('json/continent_geo.json', callback);
        }
    }
    var option = {

        tooltip: {
            // trigger: 'item',
            // formatter: function (params) {
            //     var value = params.value + '万人次 （' + (params.value / 98.19).toFixed(2) + '%）';
            //     return params.seriesName + '<br/>' + params.name + ' : ' + value;
            // }
        },
        dataRange: {
            show: false,
            // selectedMode:single,
            min: 0,
            max: 1000,
            text: ['热', '冷'],
            splitNumber: 0,
            color: ['orangered', 'yellow', 'lightskyblue']
        },
        series: [
            {
                name: '2016年入境商品（洲际统计）',
                type: 'map',
                // hoverable:false,
                mapType: 'continent', // 自定义扩展图表类型
                mapLocation: {
                    x: '0px'
                },
                itemStyle: {
                    normal: {
                        label: {show: true},
                        areaStyle: {color: '#f60'},

                    },
                    emphasis: {label: {show: true}}
                },
                data: [
                    {name: '杭州', value: 8967.69},
                    {name: '大洋洲', value: 592.09},
                    {name: '欧洲', value: 183.62},
                    {name: '北美洲', value: 41.63},
                    {name: '南美洲', value: 10.41},
                    {name: '非洲', value: 22.5837}
                ],
                // 文本位置修正
                textFixed: {
                    '大洋洲': [265, 0],
                    '非洲': [10, -30],
                    '北美洲': [20, 0],
                    '南美洲': [0, -10],
                    '杭州': [20, -30],
                    '欧洲': [120, -10],
                }
            },

        ]
    };
    myChart.setOption(option);
}
function drawCenterMap1() {
    var myChart = echarts.init(document.getElementById('center2'));
    echarts.util.mapData.params.params.continent = {
        getGeoJson: function (callback) {
            $.getJSON('json/continent_geo.json', callback);
        }
    }
    var option = {

        dataRange: {
            show: false,
            // selectedMode:single,
            min: 0,
            max: 1000,
            // text: ['热', '冷'],
            splitNumber: 0,
            color: ['orangered', 'yellow', 'lightskyblue']
        },
        series: [
            {
                name: '2016年入境商品（洲际统计）',
                type: 'map',
                hoverable: false,
                mapType: 'continent', // 自定义扩展图表类型
                mapLocation: {
                    x: '0px'
                },
                itemStyle: {
                    normal: {
                        label: {show: true},
                        areaStyle: {color: '#f60'},

                    },
                    emphasis: {label: {show: true}}
                },
                data: [
                    {name: '亚洲', value: 8967.69},
                    {name: '大洋洲', value: 592.09},
                    {name: '欧洲', value: 183.62},
                    {name: '北美洲', value: 41.63},
                    {name: '南美洲', value: 10.41},
                    {name: '非洲', value: 22.5837}
                ],
                // 文本位置修正
                textFixed: {
                    '大洋洲': [265, 0],
                    '非洲': [10, -30],
                    '北美洲': [20, 0],
                    '南美洲': [20, -50],
                    '亚洲': [10, -20],
                    '欧洲': [180, -60],
                }
            },
            {
                name: '杭州',
                type: 'map',
                roam: false,
                hoverable: false,
                mapType: 'continent',
                itemStyle: {
                    normal: {
                        // borderColor:'rgba(100,149,237,1)',
                        borderWidth: 0.5,
                        areaStyle: {
                            color: '#1b1b1b'
                        }
                    }
                },
                data: [],
                geoCoord: {
                    '杭州': [120.1504, 30.2764],
                    '欧洲': [48.1558, 55.4994],
                    '大洋洲': [133.7751, -25.2743],
                    '北美洲': [-95.7128, 37.0902],
                    '南美洲': [-50.0219, -10.5444],
                    '非洲': [25.8276, -0.2280]
                },
                markLine: {
                    smooth: true,
                    effect: {
                        show: true,
                        scaleSize: 2, // 移动点大小
                        period: 20, // 速度
                        color: '#fff',
                        shadowBlur: 10
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            label: {
                                show: false
                            },
                            lineStyle: {
                                type: 'solid',
                                shadowBlur: 10
                            }
                        }
                    },
                    data: [
                        [{name: '杭州', smoothness: 0.4}, {name: '欧洲'}],
                        [{name: '欧洲', smoothness: 0.3}, {name: '杭州'}]
                    ]
                },
                markPoint: {
                    symbol: 'emptyCircle',
                    symbolSize: function (v) {
                        return 10 + v / 10
                    },
                    effect: {
                        show: true,
                        shadowBlur: 0,
                        color: '#ff0000'
                    },
                    itemStyle: {
                        normal: {
                            label: {show: false}
                        },
                        emphasis: {
                            label: {position: 'top'}
                        }
                    },
                    data: [
                        {name: '杭州', value: 90},
                    ]
                }
            },
            {
                name: '南美洲',
                type: 'map',
                mapType: 'continent',
                data: [],
                markLine: {
                    smooth: true,
                    effect: {
                        show: true,
                        scaleSize: 2,
                        period: 30,
                        color: '#fff',
                        shadowBlur: 10
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            label: {
                                show: false
                            },
                            lineStyle: {
                                type: 'solid',
                                shadowBlur: 10
                            }
                        }
                    },
                    data: [
                        [{name: '杭州', smoothness: 0.4}, {name: '南美洲'}],
                        [{name: '南美洲', smoothness: 0.3}, {name: '杭州'}],
                    ]
                }
            },
            {
                name: '大洋洲',
                type: 'map',
                mapType: 'continent',
                data: [],
                markLine: {
                    smooth: true,
                    effect: {
                        show: true,
                        scaleSize: 2,
                        period: 30,
                        color: '#fff',
                        shadowBlur: 10
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            label: {
                                show: false
                            },
                            lineStyle: {
                                type: 'solid',
                                shadowBlur: 10
                            }
                        }
                    },
                    data: [
                        [{name: '杭州', smoothness: 0.2}, {name: '大洋洲'}],
                        [{name: '大洋洲', smoothness: 0.3}, {name: '杭州'}],

                    ]
                }
            },
            {
                name: '北美洲',
                type: 'map',
                mapType: 'continent',
                data: [],
                markLine: {
                    smooth: true,
                    effect: {
                        show: true,
                        scaleSize: 2,
                        period: 30,
                        color: '#fff',
                        shadowBlur: 10
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            label: {
                                show: false
                            },
                            lineStyle: {
                                type: 'solid',
                                shadowBlur: 10
                            }
                        }
                    },
                    data: [
                        [{name: '杭州', smoothness: 0.3}, {name: '北美洲'}],
                        [{name: '北美洲', smoothness: 0.3}, {name: '杭州'}]

                    ]
                }
            },
            {
                name: '非洲',
                type: 'map',
                mapType: 'continent',
                data: [],
                markLine: {
                    smooth: true,
                    effect: {
                        show: true,
                        scaleSize: 2,
                        period: 30,
                        color: '#fff',
                        shadowBlur: 10
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            label: {
                                show: false
                            },
                            lineStyle: {
                                type: 'solid',
                                shadowBlur: 10
                            }
                        }
                    },
                    data: [
                        [{name: '杭州', smoothness: 0.2}, {name: '非洲'}],
                        [{name: '非洲', smoothness: 0.3}, {name: '杭州'}]

                    ]
                }
            }

        ]
    };
    myChart.setOption(option);
}
function drawCenterMap2() {
    var myChart = echarts.init(document.getElementById('earth'));
    echarts.util.mapData.params.params.continent = {
        getGeoJson: function (callback) {
            $.getJSON('json/continent_geo.json', callback);
        }
    }
    var option = {
        dataRange: {
            show: false,
            // selectedMode:single,
            min: 0,
            max: 1000,
            // text: ['热', '冷'],
            splitNumber: 0,
            color: ['orangered', 'yellow', 'lightskyblue']
        },
        series: [
            {
                name: '2016年入境商品（洲际统计）',
                type: 'map',
                hoverable: false,
                mapType: 'continent', // 自定义扩展图表类型
                mapLocation: {
                    x: '0px'
                },
                itemStyle: {
                    normal: {
                        label: {show: true},
                        areaStyle: {color: '#f60'},

                    },
                    emphasis: {label: {show: true}}
                },
                data: [
                    {name: '亚洲', value: 8967.69},
                    {name: '大洋洲', value: 592.09},
                    {name: '欧洲', value: 183.62},
                    {name: '北美洲', value: 41.63},
                    {name: '南美洲', value: 10.41},
                    {name: '非洲', value: 22.5837}
                ],
                // 文本位置修正
                textFixed: {
                    '大洋洲': [265, 0],
                    '非洲': [10, -30],
                    '北美洲': [20, 0],
                    '南美洲': [0, -10],
                    '亚洲': [10, -20],
                    '欧洲': [180, -60],
                }
            },
            {
                name: '杭州',
                type: 'map',
                roam: false,
                hoverable: false,
                mapType: 'continent',
                itemStyle: {
                    normal: {
                        // borderColor:'rgba(100,149,237,1)',
                        borderWidth: 0.5,
                        areaStyle: {
                            color: '#1b1b1b'
                        }
                    }
                },
                data: [],
                geoCoord: {
                    '杭州': [120.1504, 30.2764],
                    '欧洲': [48.1558, 55.4994],
                    '大洋洲': [133.7751, -25.2743],
                    '北美洲': [-95.7128, 37.0902],
                    '南美洲': [-63.6166, -10.4160],
                    '非洲': [25.8276, -0.2280]
                },
                markLine: {
                    smooth: true,
                    effect: {
                        show: true,
                        scaleSize: 1, // 移动点大小
                        period: 25, // 速度
                        color: '#fff',
                        shadowBlur: 10
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            label: {
                                show: false
                            },
                            lineStyle: {
                                type: 'solid',
                                shadowBlur: 10
                            }
                        }
                    },
                    data: [
                        [{name: '杭州', smoothness: 0.4}, {name: '欧洲'}],
                        [{name: '欧洲', smoothness: 0.3}, {name: '杭州'}]
                    ]
                },
                markPoint: {
                    symbol: 'emptyCircle',
                    symbolSize: 5,
                    symbolSize: function (v) {
                        return 10 + v / 10
                    },
                    effect: {
                        show: true,
                        shadowBlur: 0,
                        color: '#ff0000'
                    },
                    itemStyle: {
                        normal: {
                            label: {show: false}
                        },
                        emphasis: {
                            label: {position: 'top'}
                        }
                    },
                    data: [
                        {name: '杭州', value: 90},
                    ]
                }
            },
            {
                name: '南美洲',
                type: 'map',
                mapType: 'continent',
                data: [],
                markLine: {
                    smooth: true,
                    effect: {
                        show: true,
                        scaleSize: 1,
                        period: 25,
                        color: '#fff',
                        shadowBlur: 10
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            label: {
                                show: false
                            },
                            lineStyle: {
                                type: 'solid',
                                shadowBlur: 10
                            }
                        }
                    },
                    data: [
                        [{name: '杭州', smoothness: 0.4}, {name: '南美洲'}],
                        [{name: '南美洲', smoothness: 0.3}, {name: '杭州'}],
                    ]
                }
            },
            {
                name: '大洋洲',
                type: 'map',
                mapType: 'continent',
                data: [],
                markLine: {
                    smooth: true,
                    effect: {
                        show: true,
                        scaleSize: 2,
                        period: 30,
                        color: '#fff',
                        shadowBlur: 10
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            label: {
                                show: false
                            },
                            lineStyle: {
                                type: 'solid',
                                shadowBlur: 10
                            }
                        }
                    },
                    data: [
                        [{name: '杭州', smoothness: 0.2}, {name: '大洋洲'}],
                        [{name: '大洋洲', smoothness: 0.3}, {name: '杭州'}],

                    ]
                }
            },
            {
                name: '北美洲',
                type: 'map',
                mapType: 'continent',
                data: [],
                markLine: {
                    smooth: true,
                    effect: {
                        show: true,
                        scaleSize: 1,
                        period: 25,
                        color: '#fff',
                        shadowBlur: 10
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            label: {
                                show: false
                            },
                            lineStyle: {
                                type: 'solid',
                                shadowBlur: 10
                            }
                        }
                    },
                    data: [
                        [{name: '杭州', smoothness: 0.3}, {name: '北美洲'}],
                        [{name: '北美洲', smoothness: 0.3}, {name: '杭州'}]

                    ]
                }
            },
            {
                name: '非洲',
                type: 'map',
                mapType: 'continent',
                data: [],
                markLine: {
                    smooth: true,
                    effect: {
                        show: true,
                        scaleSize: 1,
                        period: 25,
                        color: '#fff',
                        shadowBlur: 10
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            label: {
                                show: false
                            },
                            lineStyle: {
                                type: 'solid',
                                shadowBlur: 10
                            }
                        }
                    },
                    data: [
                        [{name: '杭州', smoothness: 0.2}, {name: '非洲'}],
                        [{name: '非洲', smoothness: 0.3}, {name: '杭州'}]

                    ]
                }
            }

        ]
    };
    myChart.setOption(option);
}
function drawCenterPie7() {
    var myChart = echarts.init(document.getElementById('center-left'));
    var centerY = '120px';
    var option = {
        series: [
            // {
            //     name: '入境按国家',
            //     type: 'pie',
            //     radius: '80px',
            //     minAngle:8,
            //     center: ['250px', centerY],
            //     data: [
            //         {value: 31, name: '法国'},
            //         {value: 47, name: '英国'},
            //         {value: 200, name: '美国'},
            //         {value: 650, name: '日本'},
            //         {value: 180, name: '韩国'},
            //         {value: 102, name: '意大利'},
            //         {value: 72 , name: '德国'},
            //         {value: 59, name: '澳大利亚'},
            //         {value: 53, name:'泰国'},
            //         {value: 38, name:'萨摩亚'},
            //         {value:600,name:'其他'}
            //     ],
            //     itemStyle:{
            //         normal:{
            //             label:{
            //                 textStyle:{
            //                     fontSize:12
            //                 }
            //             }
            //         }
            //     }
            // },
            {
                name: '入境按类别',
                type: 'pie',
                radius: '80px',
                minAngle: 8,
                center: ['200px', centerY],
                data: [
                    {value: 147.00, name: '动物产品'},
                    {value: 165.00, name: '植物产品'},
                    {value: 518.00, name: '食品'},
                    {value: 762.00, name: '化工产品'},
                    {value: 264.00, name: '纺织品'},
                    {value: 193.00, name: '金属制品'},
                    {value: 885.00, name: '机电产品'},
                    {value: 82.00, name: '纸制品'},
                ],
                itemStyle: {
                    normal: {
                        label: {
                            textStyle: {
                                fontSize: 12
                            }
                        }
                    }
                }
            }

        ],
        // color: ['#B1DA4D', '#FFF45C', ' #00B8EE', '#F2914A'] /*B1DA4D FFF45C*/

    };
    // 为echarts对象加载数据
    myChart.setOption(option);
};
function drawCenterPie8() {
    var myChart = echarts.init(document.getElementById('center-leftOn'));
    var centerY = '120px';
    var option = {
        series: [
            {
                name: '出境按类别',
                type: 'pie',
                radius: '80px',
                minAngle: 8,
                center: ['200px', centerY],
                data: [
                    {value: 126058.80, name: '食品,化妆品及原料'},
                    {value: 1815878.16, name: '纺织品'},
                    {value: 1644528.06, name: '轻工品'},
                    {value: 7120.16, name: '矿产品'},
                    {value: 890757.30, name: '金属及其制品'},
                    {value: 1035604.62, name: '化工品'},
                    {value: 13830364.58, name: '机电产品'},
                    {value: 580.65, name: '其他产品'}

                ],
                itemStyle: {
                    normal: {
                        label: {
                            textStyle: {
                                fontSize: 12
                            }
                        }
                    }
                }
            }
        ],
        // color: ['#B1DA4D', '#FFF45C', ' #00B8EE', '#F2914A'] /*B1DA4D FFF45C*/

    };
    myChart.setOption(option);
};
function drawCenterMap3() {
    var myChart = echarts.init(document.getElementById('center2'));
    echarts.util.mapData.params.params.continent = {
        getGeoJson: function (callback) {
            $.getJSON('json/continent_geo.json', callback);
        }
    }
    var option = {

        dataRange: {
            show: false,
            // selectedMode:single,
            min: 0,
            max: 1000,
            // text: ['热', '冷'],
            splitNumber: 0,
            color: ['orangered', 'yellow', 'lightskyblue']
        },
        series: [
            // {
            //     name: '2016年入境商品（洲际统计）',
            //     type: 'map',
            //     hoverable: false,
            //     mapType: 'continent', // 自定义扩展图表类型
            //     mapLocation: {
            //         x: '0px'
            //     },
            //     itemStyle: {
            //         normal: {
            //             label: {show: true},
            //             areaStyle: {color: '#f60'},
            //
            //         },
            //         emphasis: {label: {show: true}}
            //     },
            //     data: [
            //         {name: '亚洲', value: 8967.69},
            //         {name: '大洋洲', value: 592.09},
            //         {name: '欧洲', value: 183.62},
            //         {name: '北美洲', value: 41.63},
            //         {name: '南美洲', value: 10.41},
            //         {name: '非洲', value: 22.5837}
            //     ],
            //     // 文本位置修正
            //     textFixed: {
            //         '大洋洲': [265, 0],
            //         '非洲': [10, -30],
            //         '北美洲': [20, 0],
            //         '南美洲': [20, -50],
            //         '亚洲': [40, -30],
            //         '欧洲': [180, -60],
            //     }
            // },
            {
                name: '2016年入境商品（洲际统计）',
                type: 'map',
                hoverable:false,
                mapType: 'continent', // 自定义扩展图表类型
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '亚洲', value: 8967.69},
                    {name: '大洋洲', value: 592.09},
                    {name: '欧洲', value: 183.62},
                    {name: '北美洲', value: 41.63},
                    {name: '南美洲', value: 10.41},
                    {name: '非洲', value: 22.5837}
                ],
                // 文本位置修正
                textFixed : {
                    '大洋洲' : [320, 0],
                    '非洲' : [10, -30],
                    '北美洲' : [20, 0],
                    '南美洲' : [0, -30],
                    '亚洲' : [20, -50],
                    '欧洲' : [150, -10],
                }
            },
            {
                name: '杭州',
                type: 'map',
                roam: false,
                hoverable: false,
                mapType: 'continent',
                itemStyle: {
                    normal: {
                        // borderColor:'rgba(100,149,237,1)',
                        borderWidth: 0.5,
                        areaStyle: {
                            color: '#1b1b1b'
                        }
                    }
                },
                data: [],
                geoCoord: {
                    '杭州': [120.1504, 30.2764],
                    '欧洲': [48.1558, 55.4994],
                    '大洋洲': [133.7751, -25.2743],
                    '北美洲': [-95.7128, 37.0902],
                    '南美洲': [-50.0219, -10.5444],
                    '非洲': [15.8276, -0.2280]
                },
                markLine: {
                    smooth: true,
                    effect: {
                        show: true,
                        scaleSize: 2, // 移动点大小
                        period: 20, // 速度
                        color: '#fff',
                        shadowBlur: 10
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            label: {
                                show: false
                            },
                            lineStyle: {
                                type: 'solid',
                                shadowBlur: 10
                            }
                        }
                    },
                    data: [
                        [{name: '杭州', smoothness: 0.4}, {name: '欧洲'}],
                        [{name: '欧洲', smoothness: 0.3}, {name: '杭州'}]
                    ]
                },
                markPoint: {
                    symbol: 'emptyCircle',
                    symbolSize: function (v) {
                        return 10 + v / 10
                    },
                    effect: {
                        show: true,
                        shadowBlur: 0,
                        color: '#ff0000'
                    },
                    itemStyle: {
                        normal: {
                            label: {show: false}
                        },
                        emphasis: {
                            label: {position: 'top'}
                        }
                    },
                    data: [
                        {name: '杭州'},
                    ]
                }
            },
            {
                name: '南美洲',
                type: 'map',
                mapType: 'continent',
                data: [],
                markLine: {
                    smooth: true,
                    effect: {
                        show: true,
                        scaleSize: 2,
                        period: 30,
                        color: '#fff',
                        shadowBlur: 10
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            label: {
                                show: false
                            },
                            lineStyle: {
                                type: 'solid',
                                shadowBlur: 10
                            }
                        }
                    },
                    data: [
                        [{name: '杭州', smoothness: 0.2}, {name: '南美洲'}],
                        [{name: '南美洲', smoothness: 0.3}, {name: '杭州'}],
                    ]
                }
            },
            {
                name: '大洋洲',
                type: 'map',
                mapType: 'continent',
                data: [],
                markLine: {
                    smooth: true,
                    effect: {
                        show: true,
                        scaleSize: 2,
                        period: 30,
                        color: '#fff',
                        shadowBlur: 10
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            label: {
                                show: false
                            },
                            lineStyle: {
                                type: 'solid',
                                shadowBlur: 10
                            }
                        }
                    },
                    data: [
                        [{name: '杭州', smoothness: 0.2}, {name: '大洋洲'}],
                        [{name: '大洋洲', smoothness: 0.3}, {name: '杭州'}],

                    ]
                }
            },
            {
                name: '北美洲',
                type: 'map',
                mapType: 'continent',
                data: [],
                markLine: {
                    smooth: true,
                    effect: {
                        show: true,
                        scaleSize: 2,
                        period: 30,
                        color: '#fff',
                        shadowBlur: 10
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            label: {
                                show: false
                            },
                            lineStyle: {
                                type: 'solid',
                                shadowBlur: 10
                            }
                        }
                    },
                    data: [
                        [{name: '杭州', smoothness: 0.2}, {name: '北美洲'}],
                        [{name: '北美洲', smoothness: 0.3}, {name: '杭州'}]

                    ]
                }
            },
            {
                name: '非洲',
                type: 'map',
                mapType: 'continent',
                data: [],
                markLine: {
                    smooth: true,
                    effect: {
                        show: true,
                        scaleSize: 2,
                        period: 30,
                        color: '#fff',
                        shadowBlur: 10
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            label: {
                                show: false
                            },
                            lineStyle: {
                                type: 'solid',
                                shadowBlur: 10
                            }
                        }
                    },
                    data: [
                        [{name: '杭州', smoothness: 0.2}, {name: '非洲'}],
                        [{name: '非洲', smoothness: 0.3}, {name: '杭州'}]

                    ]
                }
            }

        ]
    };
    myChart.setOption(option);
}
function drawLeftPie() {
    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('left2Pie'));

    var labelTop = {
        normal: {
            label: {
                show: true,
                position: 'center',
                formatter: '{b}',
                textStyle: {
                    // color:'green',
                    baseline: 'bottom',
                    fontSize: 12
                }
            },
            labelLine: {
                show: false
            }
        }
    };
    var labelFromatter = {
        normal: {
            label: {
                formatter: function (params) {
                    return 100 - params.value + '%'
                },
                textStyle: {
                    color: '#ffffff',
                    baseline: 'top',
                    fontSize: 10
                }
            },
            color: function (params) {
                var colorList = [
                    '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
                    '#ff69b4', '#ba55d3'
                ];
                return colorList[params.dataIndex]
            }
        }
    }
    var labelBottom = {
        normal: {
            color: '#ccc',
            label: {
                show: true,
                position: 'center'
            },
            labelLine: {
                show: false
            }
        },
        emphasis: {
            color: 'rgba(0,0,0,0)'
        }
    };
    var radius = ['15%', '23%'];
    var centerY1 = '30px';
    var centerY2 = '110px';
    var option = {
        // legend: {
        //
        //     orient: 'vertical',
        //     x: '20px',
        //     y: '165px',
        //     padding:5,
        //     itemGap: 10,
        //     itemWidth: 25,
        //     itemHeight: 15,
        //
        //     data: [
        //         {name: '销售量', icon: 'bar'},
        //         {name: '退货率', icon: 'bar'},
        //         {name: '负面评价', icon: 'bar'},
        //         {name: '投诉举报', icon: 'bar'},
        //         {name: '疫情疫病', icon: 'bar'},
        //         {name: '警示通报', icon: 'bar'},
        //         {name: '媒体舆情', icon: 'bar'},
        //     ],
        //     textStyle: {
        //         color: "#ffffff",
        //         fontSize: 12
        //     }
        //
        // },
        series: [
            {
                type: 'pie',
                center: ['40px', centerY1],
                radius: radius,
                x: '0%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 62, itemStyle: labelBottom},
                    {name: '销售量', value: 38, itemStyle: labelTop}
                ],
                // color:['#FF8463']
            },
            {
                type: 'pie',
                center: ['115px', centerY1],
                radius: radius,
                x: '20%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 56, itemStyle: labelBottom},
                    {name: '退货率', value: 44, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['190px', centerY1],
                radius: radius,
                x: '40%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 82, itemStyle: labelBottom},
                    {name: '负面评价', value: 18, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['265px', centerY1],
                radius: radius,
                x: '60%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 47, itemStyle: labelBottom},
                    {name: '投诉举报', value: 53, itemStyle: labelTop}
                ],
                // color:['#61C0DE']
            },
            {
                type: 'pie',
                center: ['75px', centerY2],
                radius: radius,
                x: '80%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 82, itemStyle: labelBottom},
                    {name: '疫情疫病', value: 18, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['155px', centerY2],
                radius: radius,
                y: '55%',   // for funnel
                x: '0%',    // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 88, itemStyle: labelBottom},
                    {name: '警示通报', value: 12, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['235px', centerY2],
                radius: radius,
                y: '55%',   // for funnel
                x: '20%',    // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 91, itemStyle: labelBottom},
                    {name: '媒体舆情', value: 9, itemStyle: labelTop}
                ]
            }
        ]
    };
    // 为echarts对象加载数据
    myChart.setOption(option);
};
function drawCenterPie1() {
    var myChart = echarts.init(document.getElementById('center-pie1'));
    var centerY = '100px';
    var option = {
        series: [
            {
                name: '出境按国家',
                type: 'pie',
                radius: '60px',
                minAngle: 8, // 最小角度
                center: ['130px', centerY],
                data: [
                    {value: 176483.00, name: '比利时'},
                    {value: 176287.53, name: '日本'},
                    {value: 175517.54, name: '美国'},
                    {value: 125615.00, name: '哥伦比亚'},
                    {value: 73727.00, name: '韩国'},
                    {value: 50973.34, name: '德国'},
                    {value: 50635.60, name: '法国'},
                    {value: 19560.03, name: '香港'},
                    {value: 10949.44, name: '越南'},
                    {value: 9898.12, name: '新加坡'},
                    {value: 4950.00, name: '马来西亚'},
                    {value: 2715.00, name: '阿曼'},
                    {value: 2606.00, name: '秘鲁'},
                    {value: 2471.00, name: '斯里兰卡'},
                    {value: 2263.73, name: '俄罗斯'},
                    {value: 112.00, name: '格鲁吉亚'}

                ],
                itemStyle: {
                    normal: {
                        label: {
                            textStyle: {
                                fontSize: 12
                            }
                        }
                    }
                }

            },
            {
                name: '出境按类别',
                type: 'pie',
                radius: '60px',
                minAngle: 8,
                center: ['350px', centerY],
                data: [
                    {value: 126058.80, name: '食品,化妆品及原料'},
                    {value: 1815878.16, name: '纺织品'},
                    {value: 1644528.06, name: '轻工品'},
                    {value: 7120.16, name: '矿产品'},
                    {value: 890757.30, name: '金属及其制品'},
                    {value: 1035604.62, name: '化工品'},
                    {value: 13830364.58, name: '机电产品'},
                    {value: 580.65, name: '其他产品'}

                ],
                itemStyle: {
                    normal: {
                        label: {
                            textStyle: {
                                fontSize: 12
                            }
                        }
                    }
                }
            },
            {
                name: '入境按国家',
                type: 'pie',
                radius: '60px',
                minAngle: 8,
                center: ['560px', centerY],
                data: [
                    {value: 31, name: '法国'},
                    {value: 47, name: '英国'},
                    {value: 200, name: '美国'},
                    {value: 650, name: '日本'},
                    {value: 180, name: '韩国'},
                    {value: 102, name: '意大利'},
                    {value: 72, name: '德国'},
                    {value: 59, name: '澳大利亚'},
                    {value: 53, name: '泰国'},
                    {value: 38, name: '萨摩亚'},
                    {value: 600, name: '其他'}
                ],
                itemStyle: {
                    normal: {
                        label: {
                            textStyle: {
                                fontSize: 12
                            }
                        }
                    }
                }
            },
            {
                name: '入境按类别',
                type: 'pie',
                radius: '60px',
                minAngle: 8,
                center: ['780px', centerY],
                data: [
                    {value: 147.00, name: '动物产品'},
                    {value: 165.00, name: '植物产品'},
                    {value: 518.00, name: '食品'},
                    {value: 762.00, name: '化工产品'},
                    {value: 264.00, name: '纺织品'},
                    {value: 193.00, name: '金属制品'},
                    {value: 885.00, name: '机电产品'},
                    {value: 82.00, name: '纸制品'},
                ],
                itemStyle: {
                    normal: {
                        label: {
                            textStyle: {
                                fontSize: 12
                            }
                        }
                    }
                }
            }

        ],
        // color: ['#B1DA4D', '#FFF45C', ' #00B8EE', '#F2914A'] /*B1DA4D FFF45C*/

    };
    // 为echarts对象加载数据
    myChart.setOption(option);
};
function drawCenterPie2() {
    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('center4Top_left2'));

    var labelTop = {
        normal: {
            label: {
                show: true,
                position: 'center',
                formatter: '{b}',
                textStyle: {
                    baseline: 'bottom',
                    fontSize: 14
                }
            },
            labelLine: {
                show: false
            }
        }
    };
    var labelFromatter = {
        normal: {
            label: {
                formatter: function (params) {
                    return 100 - params.value + '%'
                },
                textStyle: {
                    color: '#ffffff',
                    baseline: 'top',
                    fontSize: 14
                }
            }
        }
    }
    var labelBottom = {
        normal: {
            color: '#ccc',
            label: {
                show: true,
                position: 'center'
            },
            labelLine: {
                show: false
            }
        },
        emphasis: {
            color: 'rgba(0,0,0,0)'
        }
    };
    var radius = ['40px', '58px'];
    var option = {
        legend: {
            orient: 'vertical',
            x: '0px',
            y: '320px',
            itemGap: 0,
            itemWidth: 30,
            itemHeight: 20,
            data: [
                {name: '销售量', icon: 'bar'},
                {name: '退货率', icon: 'bar'},
                {name: '负面评价', icon: 'bar'},
                {name: '投诉举报', icon: 'bar'},
                {name: '疫情疫病', icon: 'bar'},
                {name: '警示通报', icon: 'bar'},
                {name: '媒体舆情', icon: 'bar'},
            ],
            textStyle: {
                color: "#ffffff",
                fontSize: 12
            }

        },
        // title: {
        //     text: '抽样检测数据',
        //     // subtext: '来自 xxx 数据中心',
        //     x: 'center',
        //     textStyle: {
        //         color: '#FFFFFF',
        //         fontSize: 16
        //     }
        // },

        series: [
            {
                type: 'pie',
                center: ['70px', '35%'],
                radius: radius,
                x: '0%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 62, itemStyle: labelBottom},
                    {name: '销售量', value: 38, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['220px', '35%'],
                radius: radius,
                x: '20%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 56, itemStyle: labelBottom},
                    {name: '退货率', value: 44, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['370px', '35%'],
                radius: radius,
                x: '40%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 82, itemStyle: labelBottom},
                    {name: '负面评价', value: 18, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['520px', '35%'],
                radius: radius,
                x: '60%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 47, itemStyle: labelBottom},
                    {name: '投诉举报', value: 53, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['145px', '70%'],
                radius: radius,
                x: '80%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 82, itemStyle: labelBottom},
                    {name: '疫情疫病', value: 18, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['295px', '70%'],
                radius: radius,
                y: '55%',   // for funnel
                x: '0%',    // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 88, itemStyle: labelBottom},
                    {name: '警示通报', value: 12, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['445px', '70%'],
                radius: radius,
                y: '55%',   // for funnel
                x: '20%',    // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 91, itemStyle: labelBottom},
                    {name: '媒体舆情', value: 9, itemStyle: labelTop}
                ]
            }
        ]
    };
    // 为echarts对象加载数据
    myChart.setOption(option);
};
function drawRightBar2() {
    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('right_bar'));
    /*, 'macarons'*/
    var option4 = {
        title: {
            text: '2016年B2C',
            x: 'center',
            y: 'top',
            textAlign: 'center',
            textStyle: {
                fontSize: 8,
                align: 'center',
                color: '#FFFFFF'
            }
        },
        // tooltip: {
        //     trigger: 'axis'
        // },
        xAxis: [
            {

                type: 'category',
                data: ['奶粉', '皮草', '香水', '奶粉', '食品', '美国', '俄国'],
                axisLabel: {
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 8
                    }
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
//                    splitNumber:3,
                max: 20,
                axisLabel: {
                    formatter: '{value} w',
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 8
                    }
                },
                axisLine: {
                    show: false
                }
            }

        ],
        grid: {
            x: '10%',
            y: '10%',
            width: '80%',
            height: '80%',
            // backgroundColor: '#969696',

        },
        series: [
            {
                name: '总货值',
                type: 'bar',
                barWidth: '10',
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var colorList = [
                                '#FE0606', '#FF6E0B', '#FE9A04', '#FECD04', '#FFFF0F', '#AFE708', '#0ACE0A'
                            ];
                            return colorList[params.dataIndex]
                        }
                    }
                },
                data: [5.0, 7.0, 9.0, 12.0, 14.6, 16.7, 18.6]

            }
        ]
    };
    myChart.setOption(option4);
};
function drawRightLine1() {
    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('left_line'));
    var option1 = {
        title: {
            show: true,
            text: '企业备案数量',
            x: 'center',
            y: 'top',
            textStyle: {
                fontSize: 12,
                fontWeight: 'bolder',
                color: '#FFFFFF'
            }
        },
        // tooltip: {
        //     trigger: 'axis'
        // },
        xAxis: [
            {
                name: '备案园区',
                type: 'category',
                boundaryGap: false,
                data: ['下沙园区', '下城园区', '空港园区'],
                // data: ['江干区', '滨江区', '上城区', '下城区', '萧山区', '西湖区', '拱墅区', '富阳区', '余杭区'],
                axisLabel: {
                    //X轴刻度配置
                    // rotate:-45,
                    interval: 0,      //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                    textStyle: {
                        align: 'center',
                        color: '#FFFFFF',
                        fontSize: 10

                    }
                },
                axisLine: {
                    show: false,
                    textStyle: {
                        color: '#797979'
                    }
                },
                axisTick: {
                    inside: true,
                    length: 2,
                    lineStyle: {
                        color: "#FFFFFF"
                    }
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                name: '备案数量',
                type: 'value',
                // max: 20,
                // boundaryGap: [0.2, 0.2],
                splitNumber: 5,
                axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 12
                    }
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: true,
                    length: 2,
                    inside: true,
                    lineStyle: {
                        color: "#FFFFFF"
                    }
                },
                splitLine: {
                    show: false
                }
            }
        ],
        grid: {
            x: '45px',
            y: '18px',
            width: '245px',
            height: '80px'
        },
        // series: [
        //     {
        //         name: '数量',
        //         type: 'line',
        //         stack: '总量',
        //
        //         data: [10, 8, 11, 12, 15, 12.5, 8, 7, 7.5]
        //     }
        // ]
        series: [
            {
                name: '电商平台',
                type: 'line',
                stack: '总量',

                data: [346, 150, 242]
                // data: [346, 0, 0, 150, 15, 12.5, 8, 7, 7.5]
            },
            {
                name: '电商企业',
                type: 'line',
                stack: '总量',
                data: [860, 647, 500]
            }
        ]
    };
    // 为echarts对象加载数据
    myChart.setOption(option1, true);
};
function drawRightLine2() {
    var myChart = echarts.init(document.getElementById('right_line'));
    var option2 = {
        title: {
            show: true,
            text: '商品备案数量',
            x: 'center',
            y: 0,
            textStyle: {
                fontSize: 8,
                fontWeight: 'bolder',
                color: '#FFFFFF'
            }
        },
        // tooltip: {
        //     trigger: 'axis'
        // },
        xAxis: [
            {
                name: '电商平台',
                type: 'category',
                boundaryGap: false,
                data: ['天猫国际', '京东', '淘宝', '考拉海购', '亚马逊', '苏宁易购', '一号店', '聚美优品', '蘑菇街'],
                axisLabel: {
                    //X轴刻度配置
                    rotate: -45,
                    interval: 0,      //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                    textStyle: {
                        align: 'center',
                        color: '#FFFFFF'

                    }
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    inside: true,
                    length: 2,
                    lineStyle: {
                        color: "#FFFFFF"
                    }
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                name: '备案数量',
                type: 'value',
                max: 20,
                axisLabel: {
                    formatter: '{value} w',
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 8
                    }
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: true,
                    length: 2,
                    inside: true,
                    lineStyle: {
                        color: "#FFFFFF"
                    }
                },
                splitLine: {
                    show: false
                }
            }
        ],
        grid: {
            x: '20%',
            y: '10%',
            width: '60%',
            height: '80%'
        },
        series: [
            {
                name: '数量',
                type: 'line',
                stack: '总量',
                data: [10, 8, 11, 12, 15, 12.5, 8, 7, 7.5]
            }
        ]
    };
    // 为echarts对象加载数据
    myChart.setOption(option2, true);
};
function drawCenterLine1() {
    var myChart = echarts.init(document.getElementById('center_line1'));
    var option1 = {
        // title: {
        //     show: true,
        //     text: '企业备案数量',
        //     x: 'center',
        //     y: 0,
        //     textStyle: {
        //         fontSize: 8,
        //         fontWeight: 'bolder',
        //         color: '#FFFFFF'
        //     }
        // },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['电商平台', '电商企业'],
            textStyle: {
                color: '#ffffff'
            }
        },
        xAxis: [
            {
                name: '备案园区',
                type: 'category',
                boundaryGap: false,
                data: ['下沙园区', '下城园区', '空港园区'], /*'滨江区', '上城区', '下城区','西湖区', '拱墅区', '富阳区', '余杭区' */
                axisLabel: {
                    //X轴刻度配置
                    interval: 0,      //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                    textStyle: {
                        align: 'center',
                        color: '#FFFFFF',
                        fontSize: 12

                    }
                },
                axisLine: {
                    show: false,
                    textStyle: {
                        color: '#797979'
                    }
                },
                axisTick: {
                    inside: true,
                    length: 5,
                    lineStyle: {
                        color: "#FFFFFF"
                    }
                },
                splitLine: {
                    show: false
                }
                // markLine: {
                //     symbolSize: ['none'],
                //     itemStyle: {
                //         emphasis: {
                //             lineStyle: {
                //                 type: 'dotted',
                //                 width: 1
                //             }
                //         }
                //     }
                // }


            }
        ],
        yAxis: [
            {
                name: '备案数量',
                type: 'value',
                // max: 500,
                // splitNumber:5,
                boundaryGap: [0.2, 0.2],
                textStyle: {
                    // align: 'center',
                    color: '#797979',
                    fontSize: 8

                },
                axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 12

                    },
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: true,
                    length: 5,
                    inside: true,
                    lineStyle: {
                        color: "#FFFFFF"
                    }
                },
                splitLine: {
                    show: false
                }
            }
        ],
        grid: {
            x: '50px',
            y: '35px',
            width: '350px',
            height: '220px',

        },
        series: [
            {
                name: '电商平台',
                type: 'line',
                stack: '总量',
                // markPoint : {
                //     data : [
                //         {type : 'max', name: '最大值'},
                //         {type : 'min', name: '最小值'}
                //     ]
                // },
                // markLine : {
                //     data : [
                //         {type : 'average', name: '平均值'}
                //     ]
                // },
                data: [346, 150, 242]
                // data: [346, 0, 0, 150, 15, 12.5, 8, 7, 7.5]
            },
            {
                name: '电商企业',
                type: 'line',
                stack: '总量',
                data: [860, 647, 500]
            }
        ]
    };
    // 为echarts对象加载数据
    myChart.setOption(option1, true);
};
function drawCenterLine2() {
    var myChart = echarts.init(document.getElementById('center_line2'));
    var option2 = {
        legend: {
            data: ['商品数量'],
            textStyle: {
                color: '#ffffff'
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: [
            {
                name: '电商平台',
                type: 'category',
                boundaryGap: false,
                // data: ['天猫国际', '京东', '淘宝', '考拉海购', '亚马逊', '苏宁易购', '一号店', '聚美优品', '蘑菇街'],
                data: ['天猫国际', '宁波谨道', '海豚跨境', '上海牵趣', '紫楹花贸易', '易斯百'],
                axisLabel: {
                    //X轴刻度配置
                    interval: '0',      //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                    textStyle: {
                        align: 'center',
                        color: '#FFFFFF',
                        fontSize: 12

                    }
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    inside: true,
                    length: 5,
                    lineStyle: {
                        color: "#FFFFFF"
                    }
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                name: '备案数量',
                type: 'value',
                // max: 20,
                axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 12

                    },
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: true,
                    length: 5,
                    inside: true,
                    lineStyle: {
                        color: "#FFFFFF"
                    }
                },
                splitLine: {
                    show: false
                }
            }
        ],
        grid: {
            x: '50px',
            y: '35px',
            width: '350px',
            height: '220px',
        },
        series: [
            {
                name: '商品数量',
                type: 'line',
                stack: '总量',
                data: [4534, 883, 346, 135, 130, 81]
            }
        ]
    };
    // 为echarts对象加载数据
    myChart.setOption(option2, true);
};
function drawCenterLine3() {
    var myChart = echarts.init(document.getElementById('center4Bottom_right2'));
    var option3 = {

        tooltip: {
            trigger: 'item'
        },
        legend: {
            data: ['卫生指标', '营养指标', '机械安全', '安全标识', '使用说明', '品质'],
            textStyle: {
                color: '#ffffff',
                fontSize: 10
            }
        },
        xAxis: [
            {
                // name:'',
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 10
                    }
                },
                axisTick: {
                    inside: true,
                    length: 5,
                    lineStyle: {
                        color: "#FFFFFF"
                    }
                },
                splitLine: {
                    show: false
                },
                data: ['日本', '美国', '韩国', '意大利', '德国', '澳大利亚', '英国']
            }
        ],
        yAxis: [
            {
                name: '不合格数量',
                type: 'value',
                axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                        color: '#ffffff'
                    }
                },
                axisTick: {
                    show: true,
                    inside: true,
                    length: 5,
                    lineStyle: {
                        color: "#FFFFFF"
                    }
                },
                splitLine: {
                    show: false
                },
                splitNumber: 4
            }
        ],
        grid: {
            x: '36px',
            y: '50px',
            width: '277px',
            height: '210px'
        },
        series: [
            {
                name: '卫生指标',
                type: 'line',
                data: [11, 11, 15, 13, 12, 13, 10],
                // markPoint : {
                //     data : [
                //         {type : 'max', name: '最大值'},
                //         {type : 'min', name: '最小值'}
                //     ]
                // },
                // markLine : {
                //     data : [
                //         {type : 'average', name: '平均值'}
                //     ]
                // }
            },
            {
                name: '营养指标',
                type: 'line',
                data: [13, 11, 8, 5, 7, 11, 16]
            },
            {
                name: '机械安全',
                type: 'line',
                data: [4, 5, 9, 9, 7, 6, 8]
            },
            {
                name: '安全标识',
                type: 'line',
                data: [1, 3, 2, 5, 3, 2, 0]
            },
            {
                name: '使用说明',
                type: 'line',
                data: [0.5, 2, 1, 3, 9, 5, 8]
            },
            {
                name: '品质',
                type: 'line',
                data: [1, 5, 2, 3, 7, 2, 0]
            }
        ]
    };
    myChart.setOption(option3);
};
