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
            title: 'بقايا أحياء في دير الزور',
            image: '',
            video: '',
            description: 'بحسب تقديرات الأمم المتحدة، بلغ عدد المباني التي تضررت في دير الزور 6,405 مبانٍ، من بينها ما لا يقل عن 1,161 مبنى تم تدميره بالكامل.',
            location: {
                center: [40.10000, 35.27529],
                zoom: 9.19,
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