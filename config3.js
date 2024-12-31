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
            title: '',
            image: '',
            video: '',
            description: 'كانت أحياء في الغوطتين الشرقية والغربية قد تعرضت لقصف بالسلاح الكيماوي في العام 2013، ما تسبب في مقتل نحو 1,450 مدنياً، بينهم أكثر من 200 طفل وامرأة.',
            location: {
                center: [36.25824, 33.32689],
                zoom: 8.45,
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