(function() {
    const devtools = {
        isOpen: false,
        orientation: null
    };

    const threshold = 160;

    const emitEvent = (isOpen, orientation) => {
        window.dispatchEvent(new CustomEvent('devtoolschange', {
            detail: {
                isOpen,
                orientation
            }
        }));
    };

    setInterval(() => {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        const orientation = widthThreshold ? 'vertical' : 'horizontal';

        if (
            !(heightThreshold && widthThreshold) &&
            ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)
        ) {
            if (!devtools.isOpen || devtools.orientation !== orientation) {
                emitEvent(true, orientation);
            }
            devtools.isOpen = true;
            devtools.orientation = orientation;
        } else {
            if (devtools.isOpen) {
                emitEvent(false, null);
            }
            devtools.isOpen = false;
            devtools.orientation = null;
        }
    }, 500);

    window.addEventListener('devtoolschange', event => {
        if (event.detail.isOpen) {
            window.close(); // Close the page when dev tools are open
        }
    });
})();
