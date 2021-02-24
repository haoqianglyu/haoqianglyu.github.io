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
            url: 'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_167255208&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3',
            cover: '/uploads/lemon.png',
        }
    ]
});