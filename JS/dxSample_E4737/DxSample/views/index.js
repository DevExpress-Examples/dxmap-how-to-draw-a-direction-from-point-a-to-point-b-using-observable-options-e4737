DxSample.Index = function (params) {
    function ViewModel() {
        this.latA = ko.observable(40.849825);
        this.lngA = ko.observable(-73.989963);

        this.latB = ko.observable(40.749865);
        this.lngB = ko.observable(-73.987983);

        this.mapOptions = {
            markers: ko.observableArray([
               {
                   location: { lat: this.latA(), lng: this.lngA() },
                   tooltip: 'Point A'
               },
               {
                   location: { lat: this.latB(), lng: this.lngB() },
                   tooltip: 'Point B'
               }
            ]),
            routes: ko.observableArray([
                {
                    locations: [
                        { lat: this.latA(), lng: this.lngA() },
                        { lat: this.latB(), lng: this.lngB() }
                    ]
                }
            ]),
            width: 1200,
            height: 700,
        };

        this.btnClick = function () {
            var viewModel = this;

            viewModel.mapOptions.markers([
               { location: { lat: this.latA(), lng: this.lngA() }, },
               { location: { lat: this.latB(), lng: this.lngB() }, }
            ]);

            viewModel.mapOptions.routes([{
                locations: [
                  { lat: this.latA(), lng: this.lngA() },
                  { lat: this.latB(), lng: this.lngB() }
                ]
            }]);
        };
    }

    return new ViewModel();
};