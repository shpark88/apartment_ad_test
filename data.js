var APP_DATA = {
  "scenes": [
    {
      "id": "0-living_room",
      "name": "Living_room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.8203854310244001,
          "pitch": 0.2618759677959126,
          "rotation": 0,
          "target": "2-dining_room"
        },
        {
          "yaw": -2.7907581336543217,
          "pitch": 0.27806065044094197,
          "rotation": 0,
          "target": "1-bed_room"
        },
        {
          "yaw": 1.566687651410665,
          "pitch": 0.17245324925467465,
          "rotation": 0,
          "target": "4-balcony_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bed_room",
      "name": "Bed_room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7845941701365504,
          "pitch": 0.31146500379425035,
          "rotation": 0,
          "target": "0-living_room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining_room",
      "name": "Dining_room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0122786668151385,
          "pitch": 0.3003955047874136,
          "rotation": 0,
          "target": "0-living_room"
        },
        {
          "yaw": -1.9034660000938501,
          "pitch": 0.3784832808140468,
          "rotation": 0,
          "target": "3-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0145051511379073,
          "pitch": 0.25200559374460774,
          "rotation": 0,
          "target": "2-dining_room"
        },
        {
          "yaw": -0.03180901071691444,
          "pitch": 0.48242837972531305,
          "rotation": 0,
          "target": "0-living_room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-balcony_2",
      "name": "Balcony_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.09094360256737843,
          "pitch": 0.15846209184521598,
          "rotation": 0,
          "target": "0-living_room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Apartment",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
