var config = {
    style: 'mapbox://styles/mohhh/cm52hu8nm00cx01r1bked1v95',
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
            id: 'chapter1',
            alignment: 'right',
            hidden: false,
            title: 'هرب الأسد وترك وراءه بلداً مدمراً',
            image: '',
            slidercontainer: '',
        
            description: 'على مدار الـ 13 عاماً الأخيرة، تعرضت المدن السورية التي ثارت على النظام إلى شتى أنواع القصف بالأسلحة الثقيلة، بدءاً من قصفها بالسلاح الكيماوي وصولاً إلى البراميل المتفجرة والصواريخ الفراغية.',
            location: {
                center: [37.96957, 34.86198],
                zoom: 6.33,
                pitch: 0.00,
                bearing: 0,
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
            id: 'chapter2',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            video: '',
            description: 'تغيرت معالم العشرات من المناطق السورية خلال الفترة بين 2011 (تاريخ انطلاق الثورة) وحتى نهاية العام 2024، وتكشفت المزيد من مشاهد الدمار مع رحيل الأسد وقدرة وسائل الإعلام على الدخول إلى المناطق المتضررة ومعاينة الخراب فيها.<br><br> يرصد عربي بوست في هذا التقرير الدمار الهائل في سوريا <br><br><br> والبداية من حلب..',
            location: {
                center: [37.16817, 36.14796],
                zoom: 7.77,
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
    
    ]
};
