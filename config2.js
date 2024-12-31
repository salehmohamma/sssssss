var config = {
    style: 'mapbox://styles/mohhh/cm5557b5m00dq01sb0h9e8srr',
    accessToken: 'pk.eyJ1IjoibW9oaGgiLCJhIjoiY201MmV3bDk2MjFscjJocXdrOWcyemZ0NCJ9.kIhxS0VxLOakhZ9-S7p5Kg',
    showMarkers: false,
    markerColor: '#00b7e0',
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    Auther: 'By: Arabic Post',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'دمشق',
            image: '',
            slidercontainer: '',
        
            description: ' تشير تقديرات سابقة للأمم المتحدة إلى أن ما لا يقل عن 35,722 مبنى متضرر في حلب، من بينها ما لا يقل عن 4,773 مبنى مدمراً.',
            location: {
                center: [36.35904, 33.29965],
                zoom: 8.35,
                pitch: 0.0,
                bearing: 0.0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'myCustomFunction',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'غزة بأكملها تعرضت للدمار',
            image: '',
            video: 'https://www.youtube.com/watch?v=pK60Lq5MRto',
            description: '45 مليون طن مجموع ما خلفه استهداف الاحتلال للمباني السكنية في قطاع غزة45 مليون طن مجموع ما خلفه استهداف الاحتلال للمباني السكنية في قطاع غزة45 مليون طن مجموع ما خلفه استهداف الاحتلال للمباني السكنية في قطاع غزة45 مليون طن مجموع ما خلفه استهداف الاحتلال للمباني السكنية في قطاع غزة',
            location: {
                center: [36.26829, 33.52134],
                zoom: 10.86,
                pitch: 0.0,
                bearing: 0.0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'وسط غزة',
            image: 'https://arabicpost.net/wp-content/uploads/2024/08/663580-2-1170x600.jpeg',
            description: 'تركز الدمار في وسط غزة من مبان سكنية ومستشفيات ومدارس، مخلفا العدوان نحو 15 مليونا من الركام 45 مليون طن مجموع ما خلفه استهداف الاحتلال للمباني السكنية في قطاع غزة45 مليون طن مجموع ما خلفه استهداف الاحتلال للمباني السكنية في قطاع غزة45 مليون طن مجموع ما خلفه استهداف الاحتلال للمباني السكنية في قطاع غزة',
            location: {
                center: [34.43207, 31.47819],
                zoom: 13.52,
                pitch: 30.66,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'الوسطى، دير البلح',
            image: '',
            description: ' 45 مليون طن مجموع ما خلفه استهداف الاحتلال للمباني السكنية في قطاع غزة45 مليون طن مجموع ما خلفه استهداف الاحتلال للمباني السكنية في قطاع غزةخلف العدوان 10 ملايين طن مني قطاع غزةخلف العدوان 10 ملايين طن مني قطاع غزةخلف العدوان 10 ملايين طن مني قطاع غزةخلف العدوان 10 ملايين طن مني قطاع غزةخلف العدوان 10 ملايين طن مني قطاع غزةخلف العدوان 10 ملايين طن مني قطاع غزةخلف العدوان 10 ملايين طن مني قطاع غزةخلف العدوان 10 ملايين طن من الركام',
            location: {
                center: [34.36869, 31.41926],
                zoom: 13.20,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'five-chapter',
            alignment: 'right',
            hidden: false,
            title: 'خان يونس',
            image: 'https://arabicpost.net/wp-content/uploads/2024/08/aa-20240819-35441302-35441298-mqtl_6_flstynyyn_fy_qsf_sryyly_grb_gz-1170x600.jpg',
            description: ' 45 مليون طن مجموع ما خلفه استهداف الاحتلال للمباني السكنية في قطاع غزة45 مليون طن مجموع ما خلفه استهداف الاحتلال للمباني السكنية في قطاع غزة45 مليون طن مجموع ما خلفه استهداف الاحتلال للمباني السكنية في قطاع غزةخلف العدوان 10 ملايين طن من الركام',
            location: {
                center: [34.30495, 31.34073],
                zoom: 13.20,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [] 
        },
        {
            id: 'six-chapter',
            alignment: 'left',
            hidden: false,
            title: 'رفح',
            image: '',
            description: ' 45 مليون طن مجموع ما خلفه استهداف الاحتلال للمباني السكنية في قطاع غزة45 مليون طن مجموع ما خلفه استهداف الاحتلال للمباني السكنية في قطاع غزة45 مليون طن مجموع ما خلفه استهداف الاحتلال للمباني السكنية في قطاع غزةخلف العدوان 10 ملايين طن من الركام',
            location: {
                center: [34.26141, 31.28412],
                zoom: 12.50,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
        }  
    ]
};
