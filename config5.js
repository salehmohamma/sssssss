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
            id: 'chapter5',
            alignment: 'right',
            hidden: false,
            title: 'إدلب.. دمار ومخيمات للنازحين',
            image: '',
            video: '',
            description: 'تعرضت مناطق عدة في إدلب لهجمات وعمليات قصف بالأسلحة الثقيلة، ومسح النظام وحلفاؤه أبنية وأحياء في المحافظة. وتقدر الأمم المتحدة أن عدد أبنيتها المتضررة بلغ ما لا يقل عن 1,415 مبنى.',
            location: {
                center: [36.64952, 35.87005],
                zoom: 9.74,
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


