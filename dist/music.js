const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: 'lemon1',
            artist: 'kenshi yonezu',
            url: '/uploads/Lemon_(hydro.fm).mp3',
            cover: '/uploads/lemon.png',
        },
        {
            name: '可不可以',
            artist: '张紫豪',
            url: 'https://mp32.9ku.com/upload/128/2018/09/12/881837.mp3',
            cover: '/uploads/Picture1.jpg',
        },
        {
            name: '辞九门回忆',
            artist: '等什么君',
            url: 'https://mp32.9ku.com/upload/128/2019/04/16/890196.mp3',
            cover: '/uploads/Picture2.jpg',
        }
    ]
});