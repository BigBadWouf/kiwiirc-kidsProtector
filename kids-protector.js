kiwi.plugin('kidsProtector', function (kiwi, log) {
    // Detect new buffer (channel or query)
    kiwi.on("buffer.new", function (event) {
        // If name don't start with # it's a query
        if (!event.buffer.name.startsWith('#')) {
            // If warn is active
            if (kiwi.state.getSetting("settings.kids-protector.warnOnQuery")) {
                // Get the user information
                let user = kiwi.state.getUser(event.buffer.networkid, event.buffer.name);
                // If user have ASL Information
                if (user && user.asl !== null && user.asl.a < 18) {
                    // Get message from settings
                    let message = kiwi.state.getSetting("settings.kids-protector.warnMessage");
                    // Send warning message
                    kiwi.state.addMessage(event.buffer, {
                        time: event.time,
                        nick: 'ATTENTION',
                        channel: null,
                        target: event.buffer.name,
                        message: "\x02\x1f\x0304" + message + "\x02\x1f\x03",
                        type: 'notice',
                    });
                }
            }
        }

    });
});
