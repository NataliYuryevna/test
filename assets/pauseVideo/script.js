(function() {
    'use strict';
    $('.modalWindow').on('hidden.bs.modal', function (event) {
        var video = $(event.target).find('iframe');
        if(/youtu/.test(video.attr('src'))) video[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        else if(/vimeo/.test(video.attr('src'))) {
            var vimeoPlayer = new Vimeo.Player(video);
            vimeoPlayer.pause();
        }
    });
})();