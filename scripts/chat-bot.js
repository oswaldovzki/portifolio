(function () {
    window.onload = function () {
        new BlipChat()
            .withAppKey('b3N3YWxkb3Z6a2k6NzQyMDk4MjItYmYzMi00OGJmLTkwOTMtYjU0NmU4YjA1ODIz')
            .withButton({ "color": "#0096fa", "icon": "" })
            .withCustomCommonUrl('https://filipe-lima-j48b7.chat.blip.ai/')
            .build();
    }
})();
