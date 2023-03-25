if (document.location.pathname === ROUTES['app_home']) {
    // Progression of movement
    var progression = 0;

    function moveButtons() {
        // Width of buttons
        var buttonWidth = 208;
        // X start of animation
        var start = document.body.clientWidth / 7.6;
        // X distance between two bar's centers
        var dist = buttonWidth / 2;
        // X distance between two buttons of the same bar
        var spacing = 30;

        progression++;

        var firstButtons = document.querySelectorAll("#first-button-bar a");
        var firstButtonBar = document.getElementById('first-button-bar');

        var secondButtons = document.querySelectorAll("#second-button-bar a");
        var secondButtonBar = document.getElementById('first-button-bar');

        if (firstButtonBar.style.display !== 'none' && firstButtons.length > 0 && secondButtonBar.style.display !== 'none' && secondButtons.length > 0) {
            var barWidth = buttonWidth * firstButtons.length + spacing * (firstButtons.length - 1);
            var firstX = start - dist / 2 + (progression % (document.body.clientWidth + buttonWidth));
            var secondX = start + dist / 2 - (progression % (document.body.clientWidth + buttonWidth));

            for (var i = 0; i < firstButtons.length; i++) {
                var button = firstButtons[i];
                var leftValue = firstX + (i * (buttonWidth + spacing));

                if (leftValue > document.body.clientWidth) {
                    leftValue -= document.body.clientWidth + buttonWidth
                }

                button.style.left = leftValue + 'px'
            }

            for (var i = 0; i < secondButtons.length; i++) {
                var button = secondButtons[i];
                var leftValue = secondX + (i * (buttonWidth + spacing));

                if (leftValue < -buttonWidth) {
                    leftValue += document.body.clientWidth + buttonWidth
                }

                button.style.left = leftValue + 'px'
            }
        }
    }

    setInterval(moveButtons, 10);
}

if (document.location.pathname === ROUTES['app_formation']) {
    var currentFrame = 1;
    var lastChange = 0;

    window.addEventListener('wheel', function (e) {
        var currentFrameElement = document.getElementById('frame-box-' + currentFrame);

        if (Date.now() - lastChange >= 400) {
            var scrollables = document.querySelectorAll('#frame-box-' + currentFrame + ' .info-text');

            for (var i = 0; i < scrollables.length; i++) {
                if (scrollables[i].contains(e.target)) {
                    return;
                }
            }

            if (e.deltaY < 0) {
                newFrame = document.getElementById('frame-box-' + (currentFrame - 1));

                if (newFrame !== null) {
                    currentFrame --;
                    lastChange = Date.now();

                    if (currentFrameElement !== null) {
                        currentFrameElement.style.pointerEvents = 'none';
                        currentFrameElement.style.opacity = 0;
                    }

                    newFrame.style.pointerEvents = 'auto';
                    newFrame.style.opacity = 1;
                }
            } else if (e.deltaY > 0) {
                newFrame = document.getElementById('frame-box-' + (currentFrame + 1));

                if (newFrame !== null) {
                    currentFrame ++;
                    lastChange = Date.now();

                    if (currentFrameElement !== null) {
                        currentFrameElement.style.pointerEvents = 'none';
                        currentFrameElement.style.opacity = 0;
                    }

                    newFrame.style.pointerEvents = 'auto';
                    newFrame.style.opacity = 1;
                }
            }
        }
    });
}