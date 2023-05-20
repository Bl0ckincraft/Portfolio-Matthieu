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

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;

    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };

    window.requestAnimationFrame(step);
}


const incrementObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let elem = entry.target;

            let start = Number.parseInt(elem.dataset.incrementStart);
            let end = Number.parseInt(elem.dataset.incrementEnd);

            animateValue(elem, start, end, 1200)

            observer.unobserve(elem);
        }
    });
});

document.addEventListener("DOMContentLoaded", e => {
    document.querySelectorAll(".increment-number").forEach(element => {
        incrementObserver.observe(element);
    });
})

