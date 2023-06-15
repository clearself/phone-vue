/** 标记点**/
export const markers = [{
    id: 'new-marker1',
    position: {
        yaw: '0deg',
        pitch: '0deg'
    },
    image: require('./../assets/img/arrow.gif'),
    size: {
        width: 50,
        height: 50
    },
    tooltip: {
        content: 'go ahead',
        className: 'custom-tooltip',
        position: 'top',
        trigger: 'chan'
    }
},
{
    id: 'new-marker2',
    position: {
        yaw: '-170deg',
        pitch: '20deg'
    },
    image: require('./../assets/img/arrow.gif'),
    size: {
        width: 50,
        height: 50
    }
},
{
    id: 'new-marker3',
    tooltip: {
        content: '恭喜你，获得意外宝藏！',
        class: 'custom-tooltip',
        position: 'top',
        trigger: 'click'
    },
    position: {
        yaw: '4deg',
        pitch: '-52deg'
    },
    image: require('./../assets/img/local.png'),
    size: {
        width: 38,
        height: 38
    },
    anchor: 'Holly'
}
// {
//     // polyline marker
//     id: 'polyline',
//     polylinePixels: [
//         [2478, 1635], [2184, 1747], [1674, 1953], [1166, 1852],
//         [709, 1669], [301, 1519], [94, 1399], [34, 1356]
//     ],
//     svgStyle: {
//         stroke: 'rgba(140, 190, 10, 0.8)',
//         strokeLinecap: 'round',
//         strokeLinejoin: 'round',
//         strokeWidth: '10px'
//     },
//     tooltip: 'A dynamic polyline marker'
// }
]
/** 全景图片列表**/
export const photos = [
    {
        id: 'sphere0',
        name: 'sphere0',
        panorama: require('./../assets/img/vr4.jpg'),
        thumbnail: require('./../assets/img/vr4.jpg'),
        options: {
            caption: '图一'
        },

        // defaultHoverScale: { amount: 1, duration: 150 },
        markers: [
            {
                id: 'new-marker1',
                position: {
                    yaw: '0deg',
                    pitch: '0deg'
                },
                image: require('./../assets/img/arrow.gif'),
                size: {
                    width: 50,
                    height: 50
                },
                pause: 0,
                tooltip: {
                    content: '进入第二张',
                    className: 'custom-tooltip',
                    position: 'top',
                    trigger: 'chan'
                }
            },
            {
                id: 'new-marker1-1',
                position: {
                    yaw: ((1 + Math.random()) * 2 * Math.PI) / 5,
                    pitch: (Math.random() * Math.PI) / 3 - Math.PI / 6
                },
                image: require('./../assets/img/arrow.gif'),
                size: {
                    width: 50,
                    height: 50
                },
                pause: 2000,
                tooltip: {
                    content: 'This is marker',
                    position: 'bottom left'
                }
            }, {
                id: 'new-marker1-2',
                position: {
                    yaw: ((2 + Math.random()) * 2 * Math.PI) / 4,
                    pitch: (Math.random() * Math.PI) / 3 - Math.PI / 6
                },
                image: require('./../assets/img/bao.png'),
                size: {
                    width: 50,
                    height: 50
                },
                pause: 2000,
                tooltip: {
                    content: 'This is marker1131',
                    position: 'bottom left'
                }
            }
        ]
    }, {
        id: 'sphere1',
        name: 'sphere1',
        panorama: require('./../assets/img/vr0.jpg'),
        thumbnail: require('./../assets/img/vr0.jpg'),
        options: {
            caption: '图二'
        },
        markers: [
            {
                id: 'new-marker2',
                position: {
                    yaw: '0deg',
                    pitch: '0deg'
                },
                image: require('./../assets/img/arrow.gif'),
                size: {
                    width: 50,
                    height: 50
                },
                tooltip: {
                    content: '进入第三张',
                    className: 'custom-tooltip11',
                    position: 'top',
                    trigger: 'chan'
                }
            }
        ]
    },
    {
        id: 'sphere2',
        panorama: require('./../assets/img/vr1.jpg'),
        thumbnail: require('./../assets/img/vr1.jpg'),
        name: 'Test sphere',
        options: {
            caption: '图三'
        },
        markers: [{
            id: 'new-marker3',
            position: {
                yaw: '0deg',
                pitch: '0deg'
            },
            image: require('./../assets/img/arrow.gif'),
            size: {
                width: 50,
                height: 50
            },
            tooltip: {
                content: '进入第四张',
                className: 'custom-tooltip222',
                position: 'top',
                trigger: 'chan'
            }
        }]
    },
    {
        id: 'sphere3',
        panorama: require('./../assets/img/vr2.jpg'),
        thumbnail: require('./../assets/img/vr2.jpg'),
        name: 'Key Biscayne',
        options: {
            caption: '图四'
        },
        markers: []
    }
]
