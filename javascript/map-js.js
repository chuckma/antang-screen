/**
 * Created by 123 on 2016/11/28.
 */
function drawEarth() {
    var planet = planetaryjs.planet();
    var canvas = document.getElementById('globe');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    planet.loadPlugin(planetaryjs.plugins.earth({
        topojson: {file: 'world-110m.json'},
        oceans: {fill: '#001320'},
        land: {fill: '#06304e'},
        borders: {stroke: '#001320'}
    }));
    planet.projection.scale(window.innerHeight / 2 - 20).translate([window.innerWidth / 2, window.innerHeight / 2]).rotate([250, -20, 0]);
    var autorotate = function (degreesPerTick) {
        return function (planet) {
            var paused = false;
            planet.plugins.autorotate = {
                pause: function () {
                    paused = true;
                },
                resume: function () {
                    paused = false;
                },
                ispaused: function () {
                    return paused;
                }
            };
            planet.onDraw(function () {
                if (!paused) {
                    var rotation = planet.projection.rotate();
                    rotation[0] += degreesPerTick;
                    if (rotation[0] >= 180) rotation[0] -= 360;
                    planet.projection.rotate(rotation);
                }
            });
        };
    };
    planet.loadPlugin(autorotate(0.3));
    planet.loadPlugin(planetaryjs.plugins.zoom({
        scaleExtent: [50, 5000]
    }));
    planet.loadPlugin(planetaryjs.plugins.drag({
        onDragStart: function () {
            this.plugins.autorotate.pause();
        },
        onDragEnd: function () {
            this.plugins.autorotate.resume();
        }
    }));
    planet.loadPlugin(planetaryjs.plugins.pings());
    planet.draw(canvas);


    var colors = ['red', 'yellow', 'white', 'orange', 'green', 'cyan', 'pink'];
    var Asia = ['yellow'];//亚洲
    var Oceania = ['green'];//大洋洲
    var Europe = ['blue'];//欧洲
    var Africa = ['black'];//非洲
    var north_America = ['red'];//北美洲
    var south_America = ['red'];//南美洲
    setInterval(function () {
        var lat = 170 - 20;
        var lng = 360 - 160;
        //var color = colors[Math.floor(Math.random() * colors.length)];
        //planet.plugins.pings.add(lng, lat, { color: color, ttl: 2000, angle: Math.random() * 15 });
        //var color = colors[Math.floor(Math.random() * colors.length)];
        //planet.plugins.pings.add(120, 80, { color: color, ttl: 2000, angle: Math.random() * 15 })
        var color = Asia[Math.floor(Math.random() * Asia.length)];//亚洲
        planet.plugins.pings.add(820, 60, {color: color, ttl: 2000, angle: Math.random() * 15})
        var color = Asia[Math.floor(Math.random() * Asia.length)];//中国杭州
        planet.plugins.pings.add(840, 30, {color: color, ttl: 2000, angle: Math.random() * 15})
        var color = Oceania[Math.floor(Math.random() * Oceania.length)];//大洋洲
        planet.plugins.pings.add(855, -25, {color: color, ttl: 2000, angle: Math.random() * 15})
        var color = Europe[Math.floor(Math.random() * Europe.length)];//欧洲
        planet.plugins.pings.add(745, 50, {color: color, ttl: 2000, angle: Math.random() * 15})
        var color = Africa[Math.floor(Math.random() * Africa.length)];//非洲
        planet.plugins.pings.add(740, 10, {color: color, ttl: 2000, angle: Math.random() * 15})
        var color = north_America[Math.floor(Math.random() * north_America.length)];//北美洲
        planet.plugins.pings.add(620, 48, {color: color, ttl: 2000, angle: Math.random() * 15})
        var color = south_America[Math.floor(Math.random() * south_America.length)];//南美洲
        planet.plugins.pings.add(665, -15, {color: color, ttl: 2000, angle: Math.random() * 15})
    }, 150);
    var colors = ['red', 'yellow', 'white', 'orange', 'green', 'cyan', 'pink'];
    setInterval(function () {
        var url = '/planet/data.php?num=15';
        $.getJSON(url, function (data) {
            $('ul#ip').empty();
            $('ul#address').empty();
            $.each(data, function (i, item) {
                var keys = item.split(',');
                var x = keys[1];
                var y = keys[2];
                var ip = keys[0];
                var address = keys[3];
                planet.plugins.pings.add(x, y, {color: 'red', ttl: 20000, angle: 3});
                var htmlliip = '<li class="list-group-item">' + ip + '</li>';
                $('ul#ip').append(htmlliip);
                var htmlliaddress = '<li class="list-group-item" style="text-align:right;">' + address + '</li>';
                $('ul#address').append(htmlliaddress);
            });
        });
    }, 2000);
    $(document).keydown(function (event) {
        if (event.keyCode == 32) {
            var paused = planet.plugins.autorotate.ispaused();
            if (paused == false) {
                planet.projection.rotate([250, -20, 0]);
                planet.plugins.autorotate.pause();
            } else if (paused == true) {
                planet.plugins.autorotate.resume();
            }
        }
    });
}