
        function initMap() {
            var dumbo = {lat: 10.5105, lng:7.4165};
            var mapOptions = {
                center: dumbo,
                zoom: 12
            };
            var googlemap = new google.maps.Map(document.getElementById("map"), mapOptions);
        }

        var googlemap = new google.maps.Map(document.getElementById("map"), mapOptions);
            var marker = new google.maps.Marker({
                position: kaduna,
                map: googlemap
            });