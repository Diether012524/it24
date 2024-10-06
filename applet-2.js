class LeafletMap {

    constructor(containerId, center, zoom) {
        this.map = L.map(containerId).setView(center, zoom);
        this.initTileLayer();
        
        this.attendanceCountTEP = 0;
        this.attendanceCountCSS = 0;
        this.attendanceCountBA = 0;

        this.markerCounts = {};
        this.markers = [];
        this.loggedData = []; 

        this.btn = document.getElementById('btn');
        this.btn1 = document.getElementById('btn1');
        this.btn2 = document.getElementById('btn2');
        this.btnclear = document.getElementById('btnclear');
        this.logCountElement = document.getElementById('logCountTEP');
        this.logCount1Element = document.getElementById('logCountCCS');
        this.logCount2Element = document.getElementById('logCountBA');
        this.idContainer = document.getElementById('logContainer');

        this.btn.addEventListener('click', () => this.dataTEP());
        this.btn1.addEventListener('click', () => this.dataCSS());
        this.btn2.addEventListener('click', () => this.dataBA());
        this.btnclear.addEventListener('click', () => this.clearLogs());

    }

    initTileLayer() {
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    }

    addMarker(lat, long, message) {
        const marker = L.marker([lat, long]).addTo(this.map);
        this.markerCounts[message] = (this.markerCounts[message] || 0) + 1;
        this.updateMarkerPopup(marker, message);

        marker.on('click', () => {
            this.markerCounts[message]++;
            this.updateMarkerPopup(marker, message);
        });

        this.markers.push(marker);
    }

    loadMarkersFromJson(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {class LeafletMap {
                constructor(containerId, center, zoom) {
                    this.map = L.map(containerId).setView(center, zoom);
                    this.initTileLayer();
                }
                initTileLayer() {
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        maxZoom: 19,
                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    }).addTo(this.map);
                }
                addMarker(lat, lng, message) {
                    const marker = L.marker([lat, lng]).addTo(this.map);
                    marker.bindPopup(message);
                }
                loadMarkersFromJson(url) {
                    fetch(url)
                        .then(response => response.json())
                        .then(data => {
                            data.forEach(marker => {
                                this.addMarker(marker.latitude, marker.longitude, marker.message);
                            });
                        })
                        .catch(error => console.error('Error loading markers:', error));
                }
            }
            const myMap = new LeafletMap('map', [8.360004, 124.868419], 18);
            
            myMap.addMarker(8.359879, 124.869242, 'TEP Building');
            myMap.addMarker(8.359576,124.869183, 'CCS Building');
            myMap.addMarker(8.359141,124.868592,'BSBA Building');
            myMap.loadMarkersFromJson('applet-2.json');
                data.forEach(marker => {
                    this.addMarker(marker.latitude, marker.longitude, marker.message);
                });
            })
            .catch(error => console.error('Error loading markers:', error));
    }
}

const myMap = new LeafletMap('map', [8.360004, 124.868419], 18);

myMap.addMarker(8.359879, 124.869242, 'TEP building');
myMap.addMarker(8.359576,124.869183, 'CSS Building');
myMap.addMarker(8.359141,124.868592, 'BA Building');


myMap.loadMarkersFromJson('applet-2.json');


myMap.loadMarkersFromJson('applet-2.json');