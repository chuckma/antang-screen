/**
 * Created by yuri on 16-11-7.
 */
// 路径配置
require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});
// 使用
require(
    [
        'echarts',
        'echarts/theme/macarons',
        'echarts/chart/line', // 使用柱状图就加载bar模块，按需加载
        'echarts/chart/bar'
    ],
    drawEcharts
);
function drawEcharts(ec) {
    drawLine1(ec);
    drawLine2(ec);
    drawBar1(ec);
    drawBar2(ec);
}
function drawLine1(ec) {
    // 基于准备好的dom，初始化echarts图表
    var myChart = ec.init(document.getElementById('left_line'));
    var option1 = {
        title: {
            show: true,
            text: '企业备案数量',
            x: 'center',
            y: 20,
            textStyle: {
                fontSize: 18,
                fontWeight: 'bolder',
                color: '#333'
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        calculable: true,
        xAxis: [
            {
                name: '备案园区',
                type: 'category',
                boundaryGap: true,
                data: ['江干园区', '滨江园区', '上城园区', '下城园区', '萧山园区', '西湖园区', '拱墅园区', '富阳园区', '余杭园区'],
                axisLabel: {
                    //X轴刻度配置
                    interval: 0,      //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                    textStyle: {
                        align: 'center'

                    }
                },
                axisTick: {
                    inside: true,
                    length: 10
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
                max:20,
                boundaryGap: [0.2, 0.2],
                axisLabel:{
                    formatter:'{value} W'
                },
                axisTick: {
                    show: true,
                    length: 10,
                    inside: true
                },
                splitLine: {
                    show: false
                }
            }
        ],
        grid: {
            x: '20%',
            width: '60%'
        },
        series: [
            {
                name: '数量',
                type: 'line',
                stack: '总量',

                data: [10, 8, 11, 12, 15, 12.5,8,7,7.5]
            }
        ]
    };
    // 为echarts对象加载数据
    myChart.setOption(option1, true);
}
;
function drawLine2(ec) {
    // 基于准备好的dom，初始化echarts图表
    var myChart = ec.init(document.getElementById('right_line'));
    var option2 = {
        title: {
            show: true,
            text: '商品备案数量',
            x: 'center',
            y: 20,
            textStyle: {
                fontSize: 18,
                fontWeight: 'bolder',
                color: '#333'
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        calculable: true,
        xAxis: [
            {
                name: '电商平台',
                type: 'category',
                boundaryGap: true,
                data: ['天猫国际', '京东', '淘宝', '考拉海购', '亚马逊', '苏宁易购', '一号店', '聚美优品', '蘑菇街'],
                axisLabel: {
                    //X轴刻度配置
                    interval: 0,      //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                    textStyle: {
                        align: 'center'

                    }
                },
                axisTick: {
                    inside: true,
                    length: 10
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
                max:20,
                axisLabel:{
                    formatter:'{value} W'
                },
                axisTick: {
                    show: true,
                    length: 10,
                    inside: true
                },
                splitLine: {
                    show: false
                }
            }
        ],
        grid: {
            x: '20%',
            width: '60%'
        },
        series: [
            {
                name: '数量',
                type: 'line',
                stack: '总量',
                data: [10, 8, 11, 12, 15, 12.5,8,7,7.5]
            }
        ]
    };
    // 为echarts对象加载数据
    myChart.setOption(option2, true);
}
;
var barColor = {
    normal: {
        color: function (param) {
            console.log("addd" + param);
            var colors = [
                '#FF0000', '#FF9900', '#FF9933', '#FFCC33', '#FFFF33', '#99FF33', '#66FF66'
            ];
            return colors[param++]
        }
    }
};
function drawBar1(ec) {
    // 基于准备好的dom，初始化echarts图表
    var myChart = ec.init(document.getElementById('left_bar'), 'macarons');
    var option3 = {
        title: {
            text: '2016年B2B',
            x: 'center'
        },
        tooltip: {
            trigger: 'axis'
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                data: ['奶粉', '皮草', '香水', '奶粉', '食品', '美国', '俄国'],
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
                max:20,
//                    splitNumber:3,

                axisLabel:{
                    formatter:'{value} W'
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }

            }
        ],
        grid: {
            x: '20%',
            width: '60%',
            backgroundColor: '#969696'
        },
        series: [
            {
                name: '总货值',
                type: 'bar',
//                    itemStyle:barColor,
                data: [5.0, 7.0, 9.0, 12.0, 14.6, 16.7, 18.6]
                /* markPoint : {
                 data : [
                 {type : 'max', name: '最大值'},
                 {type : 'min', name: '最小值'}
                 ]
                 },
                 markLine : {
                 data : [
                 {type : 'average', name: '平均值'}
                 ]
                 }*/
            }/*,
             {
             name:'降水量',
             type:'bar',
             data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
             markPoint : {
             data : [
             {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
             {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
             ]
             },
             markLine : {
             data : [
             {type : 'average', name : '平均值'}
             ]
             }
             }*/
        ]
    };
    // 为echarts对象加载数据
    myChart.setOption(option3, true);
}
;
function drawBar2(ec) {
    // 基于准备好的dom，初始化echarts图表
    var myChart = ec.init(document.getElementById('right_bar'), 'macarons');
    var option4 = {
        title: {
            text: '2016年B2C',
            x: 'center'
        },
        tooltip: {
            trigger: 'axis'
        },
        calculable: true,
        xAxis: [
            {

                type: 'category',
                data: ['奶粉', '皮草', '香水', '奶粉', '食品', '美国', '俄国'],
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
                max:20,
                axisLabel:{
                    formatter:'{value} W'
                },
                axisLine: {
                    show: false
                }
            }

        ],
        grid: {
            x: '20%',
            width: '60%',
            backgroundColor: '#969696',

        },
        series: [
            {
                name: '总货值',
                type: 'bar',
//                    itemStyle:barColor,
                data: [5.0, 7.0, 9.0, 12.0, 14.6, 16.7, 18.6]
                /*markPoint : {
                 data : [
                 {type : 'max', name: '最大值'},
                 {type : 'min', name: '最小值'}
                 ]
                 }*/
                /*    markLine : {
                 data : [
                 {type : 'average', name: '平均值'}
                 ]
                 }*/
            }/*,
             {
             name:'降水量',
             type:'bar',
             data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
             markPoint : {
             data : [
             {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
             {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
             ]
             },
             markLine : {
             data : [
             {type : 'average', name : '平均值'}
             ]
             }
             }*/
        ]
    };
    // 为echarts对象加载数据
    myChart.setOption(option4, true);
}
