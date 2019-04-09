var flashVPaid = new VPAIDFLASHClient(element, flashVPAIDWrapperLoaded);
function flashVPAIDWrapperLoaded(err, result) {
    if (err) {
        //handle error here
        return;
    }

    flashVPaid.loadAdUnit('TestAd.swf', function (error, adUnit) {

        if (err) {
            //handle error here
            return;
        }

        adUnit.on('AdLoaded', function (err, result) {
            console.log('event:AdLoaded', err, result);
            startAd();
        });

        adUnit.on('AdStarted', function (err, result) {
            console.log('event:AdStarted', err, result);
            checkAdProperties();
        });

        adUnit.handshakeVersion('2.0', function (err, result) {
            initAd();
        });

        function initAd() {
            adUnit.initAd(0, 0, 'normal', -1, '', '', function (err) {
                console.log('initAd', err);
            });
        }

        function startAd() {
            adUnit.startAd(function (err, result) {
                console.log('startAd call', err, result);
            });
        }

        function checkAdProperties() {
            adUnit.getAdIcons(function (err, result) {
                console.log('getAdIcons', result);
            });
            adUnit.setAdVolume(10, function (err, result) {
                console.log('setAdVolume', result);
            });
            adUnit.getAdVolume(function (err, result) {
                console.log('getAdVolume', result);
            });
        }

    });
}
