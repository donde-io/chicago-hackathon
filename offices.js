window.offices = [
    {
        "type": "Feature",
        "properties": {
            "name": "Chicago office",
            "img": "images/rob.png",
            "distance":0
        },
        "geometry" : {
            "type" : "Point",
            "coordinates" : [
                -87.636692,
                41.894551
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Vancouver office",
            "img":"images/yvr_office.jpg"
        },
        "geometry" : {
            "type" : "Point",
            "coordinates" : [
                -123.119164,
                49.277654
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Toronto office",
            "img": "images/trnto_office.jpg"
        },
        "geometry" : {
            "type" : "Point",
            "coordinates" : [
                -79.413799,
                43.703007
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Reading office",
            "img": "images/uk_office.jpg"
        },
        "geometry" : {
            "type" : "Point",
            "coordinates" : [
                -0.980600,
                51.444803
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Kiev office",
            "img": "images/kiev_office.jpg",
            "y-allowance": 100
        },
        "geometry" : {
            "type" : "Point",
            "coordinates" : [
                30.469488,
                50.439322
            ]
        }
    }
];

function enrichOffices(){
    for(var i=0;i<offices.length;i++){
        offices[i]["properties"]["bearing"] = turf.bearing(user_location, offices[i]);
        offices[i]["properties"]["distance"] = turf.distance(user_location, offices[i]);

        //bearing = 90 - (180/pi)*atan2(y2-y1, x2-x1)
        offices[i]["properties"]["flat_bearing"] = 90 - (180/Math.PI)*Math.atan2(offices[i]["geometry"]["coordinates"][1] - user_location["geometry"]["coordinates"][1], offices[i]["geometry"]["coordinates"][0] - user_location["geometry"]["coordinates"][0])

        console.log("Bearing Chicago - "+offices[i]["properties"]["name"]+" : "+offices[i]["properties"]["bearing"]);

        console.log("Flat Bearing Chicago - "+offices[i]["properties"]["name"]+" : "+offices[i]["properties"]["flat_bearing"]);
    }

    //calculating the scale
    var max_distance = Math.max.apply(null, offices.map(function(office){
        return office["properties"]["distance"];
    }));
    for(var i=1;i<offices.length;i++){
        offices[i]["properties"]["scale"] = offices[i]["properties"]["distance"]/max_distance;
    }

    //removing locations which are too close for better display
    offices = offices.filter(function(office){
        return office["properties"]["distance"] > 100;
    });
}