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
            name: 'lemon2',
            artist: 'kenshi yonezu',
            url: '/uploads/Lemon_(hydro.fm).mp3',
            cover: '/uploads/lemon.png',
        }
    ]
});