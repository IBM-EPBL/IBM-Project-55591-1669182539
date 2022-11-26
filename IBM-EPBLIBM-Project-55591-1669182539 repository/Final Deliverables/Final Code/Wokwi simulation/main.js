{
  "version": 1,
  "author": "4003 Antony Renold Dickson",
  "editor": "wokwi",
  "parts": [
    { "type": "wokwi-esp32-devkit-v1", "id": "esp", "top": 4.5, "left": -91.06, "attrs": {} },
    {
      "type": "wokwi-led",
      "id": "led1",
      "top": -26.94,
      "left": 57.26,
      "attrs": { "color": "red" }
    },
    {
      "type": "wokwi-resistor",
      "id": "r1",
      "top": 46.96,
      "left": 125.68,
      "attrs": { "value": "1000" }
    },
    {
      "type": "wokwi-lcd1602",
      "id": "lcd1",
      "top": 165.99,
      "left": 92.86,
      "attrs": { "pins": "i2c" }
    },
    {
      "type": "wokwi-buzzer",
      "id": "bz1",
      "top": -71.84,
      "left": 259.8,
      "attrs": { "volume": "0.1" }
    }
  ],
  "connections": [
    [ "esp:TX0", "$serialMonitor:RX", "", [] ],
    [ "esp:RX0", "$serialMonitor:TX", "", [] ],
    [ "led1:C", "esp:GND.1", "green", [ "v0" ] ],
    [ "r1:1", "led1:A", "green", [ "v0" ] ],
    [ "esp:D2", "r1:2", "green", [ "h0" ] ],
    [ "lcd1:SDA", "esp:D21", "green", [ "h0" ] ],
    [ "lcd1:SCL", "esp:D22", "green", [ "h0" ] ],
    [ "lcd1:VCC", "esp:3V3", "red", [ "h0" ] ],
    [ "lcd1:GND", "esp:GND.2", "black", [ "h0" ] ],
    [ "bz1:2", "r1:1", "green", [ "v11.39", "h-164.16" ] ],
    [ "bz1:1", "esp:D13", "green", [ "v130.95", "h-380.08" ] ]
  ]
}