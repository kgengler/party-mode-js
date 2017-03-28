javascript: (function() {
    
    function createPlayer() {
        var parent = document.createElement('div');
        parent.style.position = 'fixed', parent.style.zIndex = 5e3, parent.style.right = 0, parent.style.top = 0, parent.style.opacity = .2;
        var div = document.createElement('div');
        div.id = 'pmjs', parent.appendChild(div), document.body.appendChild(parent), parent.onmouseover = function() {
            parent.style.opacity = 1
        }, parent.onmouseout = function() {
            parent.style.opacity = .2
        }, parent.style.webkitTransition = 'opacity 0.3s ease-in-out', parent.style.transition = 'opacity 0.3s ease-in-out';
        var tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
        var player;

        window.onYouTubeIframeAPIReady = function() {
            player = new YT.Player('pmjs', {
                height: '200',
                width: '305',
                videoId: '9bZkp7q19f0',
                events: {
                    onReady: onPlayerReady,
                    onStateChange: onPlayerStateChange
                }
            })
        };
    }

    function onPlayerReady(a) {
        a.target.playVideo()
    }

    function onPlayerStateChange(a) {
        a.data == YT.PlayerState.PLAYING && window.setTimeout(startPartyMode, 4e3)
    }

    function stopVideo() {
        player.stopVideo()
    }

    function startPartyMode() {
        window.setInterval(function() {
            ! function(a) {
                for (var b = 0; b < a.length; b++) a[b].style.backgroundColor = '#' + (16777215 * Math.random() << 0).toString(16)
            }(document.querySelectorAll('*'))
        }, 1e3)
    }

    createPlayer();
})();

