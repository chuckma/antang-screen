// drawLeftPie();
// drawLeftBar();
// drawRightBar1();
// drawRightBar2();
// drawRightLine1();
// drawRightLine2();

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
    var centerY1 =  '30px';
    var centerY2 = '110px';
    var option = {
        legend: {

            orient: 'vertical',
            x: '20px',
            y: '165px',
            padding:5,
            itemGap: 10,
            itemWidth: 25,
            itemHeight: 15,

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
        //     link: '',
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
                center: ['40px', centerY1],
                radius: radius,
                x: '0%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 46, itemStyle: labelBottom},
                    {name: '销售量', value: 54, itemStyle: labelTop}
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
                    {name: 'other', value: 65, itemStyle: labelBottom},
                    {name: '负面评价', value: 35, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['265px', centerY1],
                radius: radius,
                x: '60%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 70, itemStyle: labelBottom},
                    {name: '投诉举报', value: 30, itemStyle: labelTop}
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
                    {name: 'other', value: 73, itemStyle: labelBottom},
                    {name: '疫情疫病', value: 27, itemStyle: labelTop}
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
                    {name: 'other', value: 78, itemStyle: labelBottom},
                    {name: '警示通报', value: 22, itemStyle: labelTop}
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
                    {name: 'other', value: 78, itemStyle: labelBottom},
                    {name: '媒体舆情', value: 22, itemStyle: labelTop}
                ]
            }
        ]
    };
    // 为echarts对象加载数据
    myChart.setOption(option);
};
function drawCenterPie1() {
    var myChart = echarts.init(document.getElementById('center_top'));
    var centerY = '100px';
    var option = {
        series: [
            {
                name: '出境按国家',
                type: 'pie',
                radius: '60px',
                minAngle:8, // 最小角度
                center: ['130px', centerY],
                data: [
                    {value:176483.00,name:'比利时'},
                    {value:176287.53,name:'日本'},
                    {value:175517.54,name:'美国'},
                    {value:125615.00,name:'哥伦比亚'},
                    {value:73727.00,name:'韩国'},
                    {value:50973.34,name:'德国'},
                    {value:50635.60,name:'法国'},
                    {value:19560.03,name:'香港'},
                    {value:10949.44,name:'越南'},
                    {value:9898.12,name:'新加坡'},
                    {value:4950.00,name:'马来西亚'},
                    {value:2715.00,name:'阿曼'},
                    {value:2606.00,name:'秘鲁'},
                    {value:2471.00,name:'斯里兰卡'},
                    {value:2263.73,name:'俄罗斯'},
                    {value:112.00,name:'格鲁吉亚'}

                ],
                itemStyle:{
                    normal:{
                        label:{
                            textStyle:{
                                fontSize:12
                            }
                        }
                    }
                }

            },
            {
                name: '出境按类别',
                type: 'pie',
                radius: '60px',
                minAngle:8,
                center: ['350px', centerY],
                data: [
                    {value:126058.80,name:'食品,化妆品及原料'},
                    {value:1815878.16,name:'纺织品'},
                    {value:1644528.06,name:'轻工品'},
                    {value:7120.16,name:'矿产品'},
                    {value:890757.30,name:'金属及其制品'},
                    {value:1035604.62,name:'化工品'},
                    {value:13830364.58,name:'机电产品'},
                    {value:580.65,name:'其他产品'}

                ],
                itemStyle:{
                    normal:{
                        label:{
                            textStyle:{
                                fontSize:12
                            }
                        }
                    }
                }
            },
            {
                name: '入境按国家',
                type: 'pie',
                radius: '60px',
                minAngle:8,
                center: ['560px', centerY],
                data: [
                    {value: 31, name: '法国'},
                    {value: 47, name: '英国'},
                    {value: 200, name: '美国'},
                    {value: 650, name: '日本'},
                    {value: 180, name: '韩国'},
                    {value: 102, name: '意大利'},
                    {value: 72 , name: '德国'},
                    {value: 59, name: '澳大利亚'},
                    {value: 53, name:'泰国'},
                    {value: 38, name:'萨摩亚'},
                    {value:600,name:'其他'}
                ],
                itemStyle:{
                    normal:{
                        label:{
                            textStyle:{
                                fontSize:12
                            }
                        }
                    }
                }
            },
            {
                name: '入境按类别',
                type: 'pie',
                radius: '60px',
                minAngle:8,
                center: ['780px', centerY],
                data: [
                    {value:147.00,name:'动物产品'},
                    {value:165.00,name:'植物产品'},
                    {value:518.00,name:'食品'},
                    {value:762.00,name:'化工产品'},
                    {value:264.00,name:'纺织品'},
                    {value:193.00,name:'金属制品'},
                    {value:885.00,name:'机电产品'},
                    {value:82.00,name:'纸制品'},
                ],
                itemStyle:{
                    normal:{
                        label:{
                            textStyle:{
                                fontSize:12
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
                    {name: 'other', value: 46, itemStyle: labelBottom},
                    {name: '销售量', value: 54, itemStyle: labelTop}
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
                    {name: 'other', value: 65, itemStyle: labelBottom},
                    {name: '负面评价', value: 35, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['520px', '35%'],
                radius: radius,
                x: '60%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 70, itemStyle: labelBottom},
                    {name: '投诉举报', value: 30, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['145px', '70%'],
                radius: radius,
                x: '80%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 73, itemStyle: labelBottom},
                    {name: '疫情疫病', value: 27, itemStyle: labelTop}
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
                    {name: 'other', value: 78, itemStyle: labelBottom},
                    {name: '警示通报', value: 22, itemStyle: labelTop}
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
                    {name: 'other', value: 78, itemStyle: labelBottom},
                    {name: '媒体舆情', value: 22, itemStyle: labelTop}
                ]
            }
        ]
    };
    // 为echarts对象加载数据
    myChart.setOption(option);
};
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
        legend: {
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
        },
        series: [

            {
                name: '面积模式',
                type: 'pie',
                minAngle:8,
                radius: [0, 75],
                center: ['50%', '150px'],
                // roseType: 'radius',
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
    // 为echarts对象加载数据
    myChart.setOption(option);
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
                data: ['奶粉', '皮草', '香水', '奶粉', '食品'],
                axisLabel: {
                    textStyle: {
                        fontWeight:'bold',
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
                max: 10,
                axisLabel: {
                    formatter: '{value} w',
                    textStyle: {
                        fontWeight:'bold',
                        fontSize: 14,
                        color: '#FFFFFF'
                    }
                },
                axisLine: {
                    show: false
                }
            }

        ],
        grid: {
            x: '20%',
            y: '0%',
            width: '60%',
            height: '70%'
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
                data: [5.5, 8.0, 9.0, 7.0, 6.5]
            }
        ]
    };
    myChart.setOption(option4);
};
function drawRightBar1() {
    var myChart = echarts.init(document.getElementById('left_bar'));
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
                data:['奶粉','纸尿裤','沐浴用品','面膜','维生素制品','鱼油制品'],
                // data: ['奶粉', '皮草', '香水', '药品', '食品', '数码', '玩具'],
                axisLabel: {
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 10
                    },
                    interval:0,
                    rotate:30,
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
                   splitNumber:5,
//                 max: 20,
                axisLabel: {
                    formatter: '{value}亿 ',
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 12
                    }
                },
                axisLine: {
                    show: false
                }
            }

        ],
        grid: {
            x: '34px',
            y: '18px',
            width: '245px',
            height: '85px'
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
                data: [133208.5, 15484.3, 11357.6, 11134.9, 10003, 6376.8],
                // data: [5.0, 7.0, 9.0, 12.0, 14.6, 16.7, 18.6]

            }
        ]
    };
    myChart.setOption(option4);
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
                data: ['下沙园区', '下城园区','空港园区'],
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
                },
                markLine: {
                    symbolSize: ['none'],
                    itemStyle: {
                        emphasis: {
                            lineStyle: {
                                type: 'dotted',
                                width: 1
                            }
                        }
                    }
                }


            }
        ],
        yAxis: [
            {
                name: '备案数量',
                type: 'value',
                // max: 20,
                // boundaryGap: [0.2, 0.2],
                splitNumber:5,
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
            x: '34px',
            y: '24px',
            width: '245px',
            height: '85px'
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
                name:'电商企业',
                type:'line',
                stack:'总量',
                data: [860,647,500]
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
                    rotate:-45,
                    interval: 0,      //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                    textStyle: {
                        align: 'center',
                        color:'#FFFFFF'

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
    // 基于准备好的dom，初始化echarts图表
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
        // tooltip: {
        //     trigger: 'axis'
        // },
        legend:{
            data:['电商平台','电商企业'],
            textStyle:{
                color:'#ffffff'
            }
        },
        xAxis: [
            {
                name: '备案园区',
                type: 'category',
                boundaryGap: false,
                data: ['下沙园区', '下城园区','空港园区'],/*'滨江区', '上城区', '下城区','西湖区', '拱墅区', '富阳区', '余杭区' */
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
                    length: 2,
                    lineStyle: {
                        color: "#FFFFFF"
                    }
                },
                splitLine: {
                    show: false
                },
                markLine: {
                    symbolSize: ['none'],
                    itemStyle: {
                        emphasis: {
                            lineStyle: {
                                type: 'dotted',
                                width: 1
                            }
                        }
                    }
                }


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
            x: '50px',
            y: '35px',
            width: '350px',
            height: '270px',

        },
        series: [
            {
                name: '电商平台',
                type: 'line',
                stack: '总量',

                data: [346, 150, 242]
                // data: [346, 0, 0, 150, 15, 12.5, 8, 7, 7.5]
            },
            {
                name:'电商企业',
                type:'line',
                stack:'总量',
                data: [860,647,500]
            }
        ]
    };
    // 为echarts对象加载数据
    myChart.setOption(option1, true);
};
function drawCenterLine2() {
    var myChart = echarts.init(document.getElementById('center_line2'));
    var option2 = {

        xAxis: [
            {
                name: '电商平台',
                type: 'category',
                boundaryGap: false,
                // data: ['天猫国际', '京东', '淘宝', '考拉海购', '亚马逊', '苏宁易购', '一号店', '聚美优品', '蘑菇街'],
                data: ['天猫国际','宁波谨道','海豚跨境','上海牵趣','紫楹花贸易','易斯百'],
                axisLabel: {
                    //X轴刻度配置
                    interval: '0',      //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                    textStyle: {
                        align: 'center',
                        color:'#FFFFFF',
                        fontSize:12

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
            x: '50px',
            y: '35px',
            width: '350px',
            height: '270px',
        },
        series: [
            {
                name: '数量',
                type: 'line',
                stack: '总量',
                data: [4534, 883, 346, 135, 130,81]
            }
        ]
    };
    // 为echarts对象加载数据
    myChart.setOption(option2, true);
};
function drawCenterBar1() {
    var myChart = echarts.init(document.getElementById('center_bar1'));
    /*, 'macarons'*/
    var option4 = {
        xAxis: [
            {
                type: 'category',
                // data: ['奶粉', '皮草', '香水', '奶粉', '食品', '美国', '俄国'],
                data:['纺织制品','珍珠宝石','鞋帽','皮革制品','塑料制品','金属及制品'],
                axisLabel: {
                    textStyle: {
                        color: '#FFFFFF'
                    },
                    interval:0,
                    rotate:30,
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                   splitNumber:5,
//                 max: 20,
                axisLabel: {
                    formatter: '{value} w',
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
            height: '260px',
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
                data: [7932, 1987.7, 876.2, 621.1, 591.1, 463.8]

            }
        ]
    };
    myChart.setOption(option4);
};
function drawCenterBar2() {
    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('center_bar2'));
    /*, 'macarons'*/
    var option4 = {
        xAxis: [
            {

                type: 'category',
                data:['奶粉','纸尿裤','沐浴用品','面膜','维生素制品','鱼油制品'],
                // data: ['奶粉', '皮草', '香水', '奶粉', '食品', '美国', '俄国'],
                axisLabel: {
                    textStyle: {
                        color: '#FFFFFF'
                    },
                    interval:0,
                    rotate:30,
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
                   splitNumber:5,
//                 max: 20,
                axisLabel: {
                    formatter: '{value} w',
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
            height: '260px',
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
                data: [133208.5, 15484.3, 11357.6, 11134.9, 10003, 6376.8]
                // data: [5.0, 7.0, 9.0, 12.0, 14.6, 16.7, 18.6]

            }
        ]
    };
    myChart.setOption(option4);
};
function drawCenterBar3() {
    var myChart = echarts.init(document.getElementById('center_bar3'));
    /*, 'macarons'*/
    var option4 = {
        // tooltip: {
        //     trigger: 'axis'
        // },
        xAxis: [
            {
                name: '监控产品',
                type: 'category',
                data: ['奶粉', '皮草', '香水', '奶粉', '食品'],
                axisLabel: {
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize:14
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
                max: 10,
                axisLabel: {
                    formatter: '{value} w',
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize:14
                    }
                },
                axisLine: {
                    show: false
                }
            }

        ],
        grid: {
            x: '10%',
            y: '20%',
            width: '80%',
            height: '70%',
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
                data: [5.5, 8.0, 9.0, 7.0, 6.5]
            }
        ]
    };
    myChart.setOption(option4);
};
function drawCenterLine3() {
    var myChart = echarts.init(document.getElementById('center4Bottom_right2'));
    var option3 = {

        // tooltip : {
        //     trigger: 'item'
        // },
        legend: {
            data:['卫生指标','营养指标','机械安全','安全标识','使用说明','品质'],
            textStyle:{
                color:'#ffffff',
                fontSize:10
            }
        },
        xAxis : [
            {
                // name:'',
                type : 'category',
                boundaryGap : false,
                axisLabel : {
                    textStyle:{
                        color:'#ffffff',
                        fontSize:10
                    }
                },
               splitLine:{
                   show:false
               },
                data : ['美国','英国','日本','韩国','印度','法国','俄罗斯']
            }
        ],
        yAxis : [
            {
                name:'不合格数量',
                type : 'value',
                axisLabel : {
                    formatter: '{value} w',
                    textStyle:{
                        color:'#ffffff'
                    }
                },
                splitLine:{
                    show:false
                },
                splitNumber:4
            }
        ],
        grid:{
            x:'36px',
            y:'50px',
            width:'277px',
            height:'210px'
        },
        series : [
            {
                name:'卫生指标',
                type:'line',
                data:[11, 11, 15, 13, 12, 13, 10],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'营养指标',
                type:'line',
                data:[13, 13, 17, 15, 15, 15, 12],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'机械安全',
                type:'line',
                data:[4, 5, 9, 9, 7, 6, 8],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'安全标识',
                type:'line',
                data:[1, 3, 2, 5, 3, 2, 0],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name : '平均值'}
                    ]
                }
            },
            {
                name:'使用说明',
                type:'line',
                data:[0.5, 2, 1, 3, 9, 5, 8],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name : '平均值'}
                    ]
                }
            },
            {
                name:'品质',
                type:'line',
                data:[1, 5, 2, 3, 7, 2, 0],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name : '平均值'}
                    ]
                }
            }
        ]
    };
    myChart.setOption(option3);
};

/*21272c 50%  49dbff macarons*/