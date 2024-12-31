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
            alignment: 'left',
            hidden: false,
            title: 'كيف ترك الأسد سوريا؟',
            image: '',
            slidercontainer: '',
        
            description: ' ترك رئيس النظام المخلوع بشار الأسد، الذي فرّ من سوريا يوم 8 ديسمبر/كانون الأول 2024، شواهد واضحة على الحقبة الزمنية التي واجه فيها بعنف ثورة السوريين التي أطاحت به في النهاية، مخلفاً وراءه مدناً وأحياءً مدمرة ومنهوبة، ومخيمات نزوح تمتد على عشرات الكيلومترات، والتي يمكن مشاهدتها بشكل واضح من صور الأقمار الاصطناعية.',
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
    
    
    ]
};
