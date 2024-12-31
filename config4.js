var config = {
    style: 'mapbox://styles/mohhh/cm56fcpke007201saenn0h0v9',
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
            title: 'الدمار ينتشر في حمص أكبر محافظات سوريا',
            image: '',
            video: '',
            description: 'حولت قوات الأسد وحلفاؤها أحياء في المحافظة إلى كتل من الركام، إذ تعرضت أحياؤها التي انتشرت فيها فصائل المعارضة إلى قصف بشتى أنواع الأسلحة الثقيلة، وتضرر فيها ما لا يقل عن 13,778 مبنى، منها 3,082 مبنى دُمر بالكامل.',
            location: {
                center: [36.72808, 34.68351],
                zoom: 9.17,
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
