/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 50.0, "minX": 0.0, "maxY": 27932.0, "series": [{"data": [[0.0, 50.0], [0.1, 53.0], [0.2, 53.0], [0.3, 54.0], [0.4, 55.0], [0.5, 56.0], [0.6, 56.0], [0.7, 56.0], [0.8, 58.0], [0.9, 59.0], [1.0, 60.0], [1.1, 61.0], [1.2, 61.0], [1.3, 61.0], [1.4, 62.0], [1.5, 62.0], [1.6, 63.0], [1.7, 64.0], [1.8, 65.0], [1.9, 65.0], [2.0, 67.0], [2.1, 68.0], [2.2, 69.0], [2.3, 69.0], [2.4, 69.0], [2.5, 69.0], [2.6, 72.0], [2.7, 72.0], [2.8, 73.0], [2.9, 73.0], [3.0, 73.0], [3.1, 73.0], [3.2, 74.0], [3.3, 74.0], [3.4, 75.0], [3.5, 75.0], [3.6, 75.0], [3.7, 75.0], [3.8, 77.0], [3.9, 77.0], [4.0, 77.0], [4.1, 78.0], [4.2, 79.0], [4.3, 79.0], [4.4, 80.0], [4.5, 80.0], [4.6, 80.0], [4.7, 80.0], [4.8, 82.0], [4.9, 82.0], [5.0, 82.0], [5.1, 83.0], [5.2, 84.0], [5.3, 84.0], [5.4, 84.0], [5.5, 85.0], [5.6, 85.0], [5.7, 85.0], [5.8, 86.0], [5.9, 86.0], [6.0, 86.0], [6.1, 86.0], [6.2, 86.0], [6.3, 87.0], [6.4, 87.0], [6.5, 87.0], [6.6, 87.0], [6.7, 87.0], [6.8, 87.0], [6.9, 87.0], [7.0, 87.0], [7.1, 88.0], [7.2, 88.0], [7.3, 89.0], [7.4, 89.0], [7.5, 89.0], [7.6, 90.0], [7.7, 90.0], [7.8, 91.0], [7.9, 92.0], [8.0, 93.0], [8.1, 93.0], [8.2, 93.0], [8.3, 93.0], [8.4, 94.0], [8.5, 94.0], [8.6, 95.0], [8.7, 95.0], [8.8, 96.0], [8.9, 97.0], [9.0, 97.0], [9.1, 97.0], [9.2, 97.0], [9.3, 100.0], [9.4, 100.0], [9.5, 100.0], [9.6, 100.0], [9.7, 101.0], [9.8, 101.0], [9.9, 102.0], [10.0, 104.0], [10.1, 104.0], [10.2, 104.0], [10.3, 105.0], [10.4, 105.0], [10.5, 106.0], [10.6, 107.0], [10.7, 107.0], [10.8, 108.0], [10.9, 109.0], [11.0, 109.0], [11.1, 109.0], [11.2, 109.0], [11.3, 110.0], [11.4, 112.0], [11.5, 113.0], [11.6, 113.0], [11.7, 113.0], [11.8, 113.0], [11.9, 114.0], [12.0, 114.0], [12.1, 115.0], [12.2, 116.0], [12.3, 117.0], [12.4, 117.0], [12.5, 117.0], [12.6, 117.0], [12.7, 118.0], [12.8, 118.0], [12.9, 119.0], [13.0, 120.0], [13.1, 120.0], [13.2, 120.0], [13.3, 121.0], [13.4, 121.0], [13.5, 122.0], [13.6, 122.0], [13.7, 122.0], [13.8, 123.0], [13.9, 123.0], [14.0, 123.0], [14.1, 124.0], [14.2, 125.0], [14.3, 125.0], [14.4, 126.0], [14.5, 127.0], [14.6, 127.0], [14.7, 127.0], [14.8, 128.0], [14.9, 129.0], [15.0, 129.0], [15.1, 132.0], [15.2, 132.0], [15.3, 132.0], [15.4, 133.0], [15.5, 134.0], [15.6, 135.0], [15.7, 136.0], [15.8, 136.0], [15.9, 137.0], [16.0, 137.0], [16.1, 138.0], [16.2, 138.0], [16.3, 138.0], [16.4, 138.0], [16.5, 139.0], [16.6, 140.0], [16.7, 140.0], [16.8, 140.0], [16.9, 141.0], [17.0, 141.0], [17.1, 142.0], [17.2, 143.0], [17.3, 144.0], [17.4, 145.0], [17.5, 146.0], [17.6, 148.0], [17.7, 149.0], [17.8, 150.0], [17.9, 150.0], [18.0, 151.0], [18.1, 151.0], [18.2, 151.0], [18.3, 151.0], [18.4, 152.0], [18.5, 152.0], [18.6, 153.0], [18.7, 154.0], [18.8, 159.0], [18.9, 160.0], [19.0, 160.0], [19.1, 160.0], [19.2, 161.0], [19.3, 161.0], [19.4, 162.0], [19.5, 162.0], [19.6, 165.0], [19.7, 165.0], [19.8, 166.0], [19.9, 167.0], [20.0, 169.0], [20.1, 172.0], [20.2, 172.0], [20.3, 172.0], [20.4, 174.0], [20.5, 174.0], [20.6, 174.0], [20.7, 176.0], [20.8, 177.0], [20.9, 178.0], [21.0, 179.0], [21.1, 179.0], [21.2, 180.0], [21.3, 180.0], [21.4, 182.0], [21.5, 182.0], [21.6, 184.0], [21.7, 184.0], [21.8, 185.0], [21.9, 185.0], [22.0, 185.0], [22.1, 185.0], [22.2, 185.0], [22.3, 186.0], [22.4, 187.0], [22.5, 188.0], [22.6, 188.0], [22.7, 189.0], [22.8, 193.0], [22.9, 195.0], [23.0, 195.0], [23.1, 196.0], [23.2, 197.0], [23.3, 198.0], [23.4, 200.0], [23.5, 200.0], [23.6, 201.0], [23.7, 201.0], [23.8, 202.0], [23.9, 202.0], [24.0, 204.0], [24.1, 205.0], [24.2, 205.0], [24.3, 205.0], [24.4, 206.0], [24.5, 207.0], [24.6, 207.0], [24.7, 208.0], [24.8, 208.0], [24.9, 210.0], [25.0, 211.0], [25.1, 212.0], [25.2, 213.0], [25.3, 213.0], [25.4, 215.0], [25.5, 216.0], [25.6, 218.0], [25.7, 218.0], [25.8, 220.0], [25.9, 221.0], [26.0, 225.0], [26.1, 225.0], [26.2, 226.0], [26.3, 227.0], [26.4, 229.0], [26.5, 230.0], [26.6, 230.0], [26.7, 234.0], [26.8, 235.0], [26.9, 235.0], [27.0, 235.0], [27.1, 235.0], [27.2, 237.0], [27.3, 238.0], [27.4, 238.0], [27.5, 239.0], [27.6, 240.0], [27.7, 241.0], [27.8, 243.0], [27.9, 243.0], [28.0, 244.0], [28.1, 248.0], [28.2, 249.0], [28.3, 250.0], [28.4, 252.0], [28.5, 253.0], [28.6, 253.0], [28.7, 254.0], [28.8, 259.0], [28.9, 259.0], [29.0, 259.0], [29.1, 260.0], [29.2, 260.0], [29.3, 260.0], [29.4, 262.0], [29.5, 262.0], [29.6, 264.0], [29.7, 264.0], [29.8, 265.0], [29.9, 265.0], [30.0, 267.0], [30.1, 268.0], [30.2, 268.0], [30.3, 269.0], [30.4, 270.0], [30.5, 271.0], [30.6, 272.0], [30.7, 272.0], [30.8, 273.0], [30.9, 276.0], [31.0, 277.0], [31.1, 277.0], [31.2, 281.0], [31.3, 281.0], [31.4, 282.0], [31.5, 283.0], [31.6, 285.0], [31.7, 285.0], [31.8, 286.0], [31.9, 286.0], [32.0, 288.0], [32.1, 288.0], [32.2, 290.0], [32.3, 290.0], [32.4, 294.0], [32.5, 295.0], [32.6, 296.0], [32.7, 297.0], [32.8, 297.0], [32.9, 298.0], [33.0, 301.0], [33.1, 303.0], [33.2, 306.0], [33.3, 307.0], [33.4, 309.0], [33.5, 309.0], [33.6, 312.0], [33.7, 314.0], [33.8, 316.0], [33.9, 316.0], [34.0, 317.0], [34.1, 317.0], [34.2, 317.0], [34.3, 320.0], [34.4, 323.0], [34.5, 324.0], [34.6, 326.0], [34.7, 326.0], [34.8, 331.0], [34.9, 331.0], [35.0, 331.0], [35.1, 332.0], [35.2, 334.0], [35.3, 334.0], [35.4, 335.0], [35.5, 336.0], [35.6, 337.0], [35.7, 340.0], [35.8, 342.0], [35.9, 345.0], [36.0, 349.0], [36.1, 349.0], [36.2, 352.0], [36.3, 352.0], [36.4, 355.0], [36.5, 357.0], [36.6, 359.0], [36.7, 361.0], [36.8, 362.0], [36.9, 362.0], [37.0, 363.0], [37.1, 363.0], [37.2, 364.0], [37.3, 365.0], [37.4, 365.0], [37.5, 365.0], [37.6, 367.0], [37.7, 368.0], [37.8, 369.0], [37.9, 371.0], [38.0, 377.0], [38.1, 377.0], [38.2, 383.0], [38.3, 384.0], [38.4, 390.0], [38.5, 391.0], [38.6, 391.0], [38.7, 391.0], [38.8, 393.0], [38.9, 394.0], [39.0, 397.0], [39.1, 398.0], [39.2, 398.0], [39.3, 398.0], [39.4, 401.0], [39.5, 403.0], [39.6, 407.0], [39.7, 407.0], [39.8, 410.0], [39.9, 414.0], [40.0, 418.0], [40.1, 419.0], [40.2, 420.0], [40.3, 421.0], [40.4, 430.0], [40.5, 430.0], [40.6, 430.0], [40.7, 431.0], [40.8, 433.0], [40.9, 433.0], [41.0, 436.0], [41.1, 438.0], [41.2, 442.0], [41.3, 447.0], [41.4, 447.0], [41.5, 447.0], [41.6, 447.0], [41.7, 448.0], [41.8, 448.0], [41.9, 449.0], [42.0, 454.0], [42.1, 456.0], [42.2, 456.0], [42.3, 456.0], [42.4, 457.0], [42.5, 458.0], [42.6, 460.0], [42.7, 461.0], [42.8, 465.0], [42.9, 465.0], [43.0, 469.0], [43.1, 470.0], [43.2, 470.0], [43.3, 472.0], [43.4, 473.0], [43.5, 474.0], [43.6, 475.0], [43.7, 476.0], [43.8, 477.0], [43.9, 480.0], [44.0, 482.0], [44.1, 487.0], [44.2, 488.0], [44.3, 489.0], [44.4, 491.0], [44.5, 492.0], [44.6, 492.0], [44.7, 493.0], [44.8, 495.0], [44.9, 495.0], [45.0, 496.0], [45.1, 497.0], [45.2, 499.0], [45.3, 504.0], [45.4, 505.0], [45.5, 508.0], [45.6, 510.0], [45.7, 510.0], [45.8, 510.0], [45.9, 511.0], [46.0, 512.0], [46.1, 518.0], [46.2, 520.0], [46.3, 521.0], [46.4, 522.0], [46.5, 522.0], [46.6, 523.0], [46.7, 524.0], [46.8, 524.0], [46.9, 525.0], [47.0, 525.0], [47.1, 525.0], [47.2, 525.0], [47.3, 526.0], [47.4, 527.0], [47.5, 528.0], [47.6, 531.0], [47.7, 531.0], [47.8, 532.0], [47.9, 535.0], [48.0, 538.0], [48.1, 539.0], [48.2, 540.0], [48.3, 541.0], [48.4, 546.0], [48.5, 547.0], [48.6, 547.0], [48.7, 548.0], [48.8, 551.0], [48.9, 551.0], [49.0, 556.0], [49.1, 559.0], [49.2, 561.0], [49.3, 561.0], [49.4, 562.0], [49.5, 562.0], [49.6, 565.0], [49.7, 567.0], [49.8, 567.0], [49.9, 569.0], [50.0, 571.0], [50.1, 572.0], [50.2, 573.0], [50.3, 573.0], [50.4, 576.0], [50.5, 579.0], [50.6, 579.0], [50.7, 582.0], [50.8, 585.0], [50.9, 586.0], [51.0, 588.0], [51.1, 590.0], [51.2, 594.0], [51.3, 594.0], [51.4, 597.0], [51.5, 601.0], [51.6, 602.0], [51.7, 603.0], [51.8, 603.0], [51.9, 604.0], [52.0, 613.0], [52.1, 615.0], [52.2, 615.0], [52.3, 616.0], [52.4, 618.0], [52.5, 619.0], [52.6, 625.0], [52.7, 626.0], [52.8, 628.0], [52.9, 629.0], [53.0, 630.0], [53.1, 630.0], [53.2, 632.0], [53.3, 633.0], [53.4, 634.0], [53.5, 635.0], [53.6, 637.0], [53.7, 637.0], [53.8, 639.0], [53.9, 640.0], [54.0, 641.0], [54.1, 642.0], [54.2, 642.0], [54.3, 645.0], [54.4, 648.0], [54.5, 648.0], [54.6, 648.0], [54.7, 648.0], [54.8, 651.0], [54.9, 656.0], [55.0, 658.0], [55.1, 659.0], [55.2, 660.0], [55.3, 664.0], [55.4, 669.0], [55.5, 673.0], [55.6, 681.0], [55.7, 682.0], [55.8, 682.0], [55.9, 689.0], [56.0, 691.0], [56.1, 693.0], [56.2, 700.0], [56.3, 701.0], [56.4, 705.0], [56.5, 710.0], [56.6, 711.0], [56.7, 711.0], [56.8, 721.0], [56.9, 722.0], [57.0, 724.0], [57.1, 728.0], [57.2, 737.0], [57.3, 744.0], [57.4, 748.0], [57.5, 751.0], [57.6, 752.0], [57.7, 753.0], [57.8, 754.0], [57.9, 755.0], [58.0, 761.0], [58.1, 761.0], [58.2, 761.0], [58.3, 762.0], [58.4, 768.0], [58.5, 772.0], [58.6, 774.0], [58.7, 774.0], [58.8, 779.0], [58.9, 783.0], [59.0, 787.0], [59.1, 788.0], [59.2, 792.0], [59.3, 799.0], [59.4, 800.0], [59.5, 801.0], [59.6, 803.0], [59.7, 812.0], [59.8, 813.0], [59.9, 813.0], [60.0, 819.0], [60.1, 824.0], [60.2, 827.0], [60.3, 835.0], [60.4, 837.0], [60.5, 841.0], [60.6, 848.0], [60.7, 854.0], [60.8, 858.0], [60.9, 862.0], [61.0, 862.0], [61.1, 862.0], [61.2, 868.0], [61.3, 873.0], [61.4, 876.0], [61.5, 876.0], [61.6, 877.0], [61.7, 877.0], [61.8, 879.0], [61.9, 883.0], [62.0, 885.0], [62.1, 890.0], [62.2, 893.0], [62.3, 895.0], [62.4, 898.0], [62.5, 898.0], [62.6, 900.0], [62.7, 901.0], [62.8, 905.0], [62.9, 911.0], [63.0, 912.0], [63.1, 913.0], [63.2, 926.0], [63.3, 928.0], [63.4, 939.0], [63.5, 949.0], [63.6, 952.0], [63.7, 954.0], [63.8, 955.0], [63.9, 958.0], [64.0, 960.0], [64.1, 962.0], [64.2, 967.0], [64.3, 977.0], [64.4, 982.0], [64.5, 985.0], [64.6, 988.0], [64.7, 991.0], [64.8, 1001.0], [64.9, 1002.0], [65.0, 1003.0], [65.1, 1003.0], [65.2, 1007.0], [65.3, 1009.0], [65.4, 1014.0], [65.5, 1016.0], [65.6, 1022.0], [65.7, 1024.0], [65.8, 1026.0], [65.9, 1026.0], [66.0, 1032.0], [66.1, 1033.0], [66.2, 1035.0], [66.3, 1037.0], [66.4, 1039.0], [66.5, 1043.0], [66.6, 1047.0], [66.7, 1048.0], [66.8, 1051.0], [66.9, 1054.0], [67.0, 1057.0], [67.1, 1058.0], [67.2, 1064.0], [67.3, 1064.0], [67.4, 1066.0], [67.5, 1068.0], [67.6, 1073.0], [67.7, 1079.0], [67.8, 1079.0], [67.9, 1083.0], [68.0, 1086.0], [68.1, 1088.0], [68.2, 1089.0], [68.3, 1091.0], [68.4, 1101.0], [68.5, 1102.0], [68.6, 1108.0], [68.7, 1108.0], [68.8, 1111.0], [68.9, 1113.0], [69.0, 1117.0], [69.1, 1118.0], [69.2, 1123.0], [69.3, 1128.0], [69.4, 1132.0], [69.5, 1134.0], [69.6, 1136.0], [69.7, 1136.0], [69.8, 1140.0], [69.9, 1144.0], [70.0, 1155.0], [70.1, 1162.0], [70.2, 1162.0], [70.3, 1163.0], [70.4, 1172.0], [70.5, 1176.0], [70.6, 1179.0], [70.7, 1180.0], [70.8, 1184.0], [70.9, 1185.0], [71.0, 1186.0], [71.1, 1187.0], [71.2, 1199.0], [71.3, 1204.0], [71.4, 1210.0], [71.5, 1211.0], [71.6, 1214.0], [71.7, 1219.0], [71.8, 1225.0], [71.9, 1229.0], [72.0, 1235.0], [72.1, 1235.0], [72.2, 1236.0], [72.3, 1239.0], [72.4, 1239.0], [72.5, 1240.0], [72.6, 1241.0], [72.7, 1241.0], [72.8, 1243.0], [72.9, 1244.0], [73.0, 1245.0], [73.1, 1248.0], [73.2, 1255.0], [73.3, 1260.0], [73.4, 1262.0], [73.5, 1263.0], [73.6, 1278.0], [73.7, 1279.0], [73.8, 1280.0], [73.9, 1292.0], [74.0, 1300.0], [74.1, 1306.0], [74.2, 1306.0], [74.3, 1306.0], [74.4, 1312.0], [74.5, 1321.0], [74.6, 1323.0], [74.7, 1336.0], [74.8, 1340.0], [74.9, 1345.0], [75.0, 1356.0], [75.1, 1367.0], [75.2, 1382.0], [75.3, 1387.0], [75.4, 1388.0], [75.5, 1391.0], [75.6, 1400.0], [75.7, 1401.0], [75.8, 1404.0], [75.9, 1404.0], [76.0, 1413.0], [76.1, 1427.0], [76.2, 1429.0], [76.3, 1434.0], [76.4, 1448.0], [76.5, 1448.0], [76.6, 1451.0], [76.7, 1467.0], [76.8, 1490.0], [76.9, 1493.0], [77.0, 1493.0], [77.1, 1505.0], [77.2, 1535.0], [77.3, 1538.0], [77.4, 1539.0], [77.5, 1542.0], [77.6, 1553.0], [77.7, 1562.0], [77.8, 1566.0], [77.9, 1573.0], [78.0, 1582.0], [78.1, 1591.0], [78.2, 1605.0], [78.3, 1607.0], [78.4, 1612.0], [78.5, 1613.0], [78.6, 1614.0], [78.7, 1614.0], [78.8, 1636.0], [78.9, 1638.0], [79.0, 1641.0], [79.1, 1646.0], [79.2, 1670.0], [79.3, 1673.0], [79.4, 1675.0], [79.5, 1681.0], [79.6, 1686.0], [79.7, 1691.0], [79.8, 1720.0], [79.9, 1721.0], [80.0, 1736.0], [80.1, 1738.0], [80.2, 1741.0], [80.3, 1742.0], [80.4, 1755.0], [80.5, 1756.0], [80.6, 1757.0], [80.7, 1761.0], [80.8, 1773.0], [80.9, 1776.0], [81.0, 1785.0], [81.1, 1794.0], [81.2, 1806.0], [81.3, 1808.0], [81.4, 1812.0], [81.5, 1818.0], [81.6, 1833.0], [81.7, 1838.0], [81.8, 1841.0], [81.9, 1852.0], [82.0, 1863.0], [82.1, 1869.0], [82.2, 1873.0], [82.3, 1892.0], [82.4, 1921.0], [82.5, 1929.0], [82.6, 1939.0], [82.7, 1942.0], [82.8, 1953.0], [82.9, 1954.0], [83.0, 1956.0], [83.1, 1958.0], [83.2, 1974.0], [83.3, 1974.0], [83.4, 1988.0], [83.5, 1988.0], [83.6, 1992.0], [83.7, 1994.0], [83.8, 1997.0], [83.9, 1998.0], [84.0, 2002.0], [84.1, 2008.0], [84.2, 2010.0], [84.3, 2013.0], [84.4, 2023.0], [84.5, 2024.0], [84.6, 2039.0], [84.7, 2044.0], [84.8, 2110.0], [84.9, 2117.0], [85.0, 2117.0], [85.1, 2117.0], [85.2, 2124.0], [85.3, 2129.0], [85.4, 2133.0], [85.5, 2139.0], [85.6, 2151.0], [85.7, 2151.0], [85.8, 2157.0], [85.9, 2167.0], [86.0, 2179.0], [86.1, 2185.0], [86.2, 2185.0], [86.3, 2185.0], [86.4, 2207.0], [86.5, 2208.0], [86.6, 2226.0], [86.7, 2255.0], [86.8, 2279.0], [86.9, 2281.0], [87.0, 2283.0], [87.1, 2289.0], [87.2, 2303.0], [87.3, 2312.0], [87.4, 2314.0], [87.5, 2318.0], [87.6, 2336.0], [87.7, 2347.0], [87.8, 2354.0], [87.9, 2354.0], [88.0, 2379.0], [88.1, 2389.0], [88.2, 2411.0], [88.3, 2445.0], [88.4, 2452.0], [88.5, 2457.0], [88.6, 2461.0], [88.7, 2467.0], [88.8, 2521.0], [88.9, 2548.0], [89.0, 2558.0], [89.1, 2573.0], [89.2, 2581.0], [89.3, 2601.0], [89.4, 2622.0], [89.5, 2659.0], [89.6, 2665.0], [89.7, 2666.0], [89.8, 2673.0], [89.9, 2676.0], [90.0, 2687.0], [90.1, 2697.0], [90.2, 2708.0], [90.3, 2723.0], [90.4, 2785.0], [90.5, 2786.0], [90.6, 2833.0], [90.7, 2839.0], [90.8, 2882.0], [90.9, 2896.0], [91.0, 2962.0], [91.1, 2980.0], [91.2, 3018.0], [91.3, 3053.0], [91.4, 3060.0], [91.5, 3066.0], [91.6, 3116.0], [91.7, 3154.0], [91.8, 3205.0], [91.9, 3237.0], [92.0, 3320.0], [92.1, 3357.0], [92.2, 3419.0], [92.3, 3433.0], [92.4, 3462.0], [92.5, 3486.0], [92.6, 3508.0], [92.7, 3555.0], [92.8, 3622.0], [92.9, 3627.0], [93.0, 3630.0], [93.1, 3633.0], [93.2, 3677.0], [93.3, 3689.0], [93.4, 3705.0], [93.5, 3720.0], [93.6, 3729.0], [93.7, 3751.0], [93.8, 3774.0], [93.9, 3806.0], [94.0, 3851.0], [94.1, 3905.0], [94.2, 3907.0], [94.3, 3995.0], [94.4, 4053.0], [94.5, 4115.0], [94.6, 4124.0], [94.7, 4177.0], [94.8, 4267.0], [94.9, 4281.0], [95.0, 4293.0], [95.1, 4321.0], [95.2, 4352.0], [95.3, 4392.0], [95.4, 4395.0], [95.5, 4447.0], [95.6, 4460.0], [95.7, 4466.0], [95.8, 4468.0], [95.9, 4548.0], [96.0, 4644.0], [96.1, 4646.0], [96.2, 4663.0], [96.3, 5022.0], [96.4, 5289.0], [96.5, 5357.0], [96.6, 5515.0], [96.7, 5517.0], [96.8, 5617.0], [96.9, 5991.0], [97.0, 7006.0], [97.1, 7021.0], [97.2, 7052.0], [97.3, 7165.0], [97.4, 7294.0], [97.5, 7299.0], [97.6, 7372.0], [97.7, 7377.0], [97.8, 7450.0], [97.9, 7472.0], [98.0, 7509.0], [98.1, 7609.0], [98.2, 7613.0], [98.3, 7649.0], [98.4, 7750.0], [98.5, 7800.0], [98.6, 7897.0], [98.7, 7959.0], [98.8, 8991.0], [98.9, 10151.0], [99.0, 13734.0], [99.1, 13981.0], [99.2, 14206.0], [99.3, 14323.0], [99.4, 14441.0], [99.5, 14515.0], [99.6, 14619.0], [99.7, 14822.0], [99.8, 15210.0], [99.9, 16828.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 176.0, "series": [{"data": [[0.0, 116.0], [600.0, 59.0], [700.0, 40.0], [800.0, 40.0], [900.0, 28.0], [1000.0, 45.0], [1100.0, 36.0], [1200.0, 34.0], [1300.0, 20.0], [1400.0, 18.0], [1500.0, 14.0], [1600.0, 20.0], [1700.0, 17.0], [1800.0, 15.0], [1900.0, 21.0], [2000.0, 10.0], [2100.0, 20.0], [2300.0, 12.0], [2200.0, 10.0], [2400.0, 8.0], [2500.0, 6.0], [2600.0, 11.0], [2700.0, 5.0], [2800.0, 5.0], [2900.0, 2.0], [3000.0, 6.0], [3100.0, 2.0], [3300.0, 3.0], [3200.0, 2.0], [3400.0, 5.0], [3500.0, 3.0], [3700.0, 6.0], [3600.0, 7.0], [3800.0, 3.0], [3900.0, 3.0], [4000.0, 2.0], [4200.0, 3.0], [4100.0, 4.0], [4300.0, 5.0], [4400.0, 5.0], [4600.0, 4.0], [4500.0, 1.0], [5100.0, 1.0], [5000.0, 1.0], [5200.0, 1.0], [5300.0, 1.0], [5500.0, 3.0], [5600.0, 1.0], [5900.0, 1.0], [7000.0, 4.0], [7100.0, 1.0], [7200.0, 2.0], [7400.0, 3.0], [7300.0, 3.0], [7600.0, 4.0], [7500.0, 1.0], [7700.0, 1.0], [7800.0, 2.0], [7900.0, 1.0], [8600.0, 1.0], [8900.0, 1.0], [10100.0, 1.0], [13700.0, 1.0], [14300.0, 1.0], [13900.0, 1.0], [14200.0, 1.0], [14100.0, 1.0], [14500.0, 2.0], [14600.0, 1.0], [14400.0, 1.0], [14800.0, 1.0], [15200.0, 1.0], [16800.0, 1.0], [100.0, 176.0], [27900.0, 1.0], [200.0, 120.0], [300.0, 80.0], [400.0, 74.0], [500.0, 77.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 27900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 287.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 566.0, "series": [{"data": [[0.0, 566.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 397.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 287.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 88.61119999999995, "minX": 1.77208398E12, "maxY": 88.61119999999995, "series": [{"data": [[1.77208398E12, 88.61119999999995]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77208398E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 78.83333333333333, "minX": 1.0, "maxY": 7308.000000000001, "series": [{"data": [[2.0, 715.5], [3.0, 5888.6], [4.0, 2433.5], [5.0, 2879.5], [6.0, 391.0], [7.0, 2233.1428571428573], [8.0, 3205.4444444444443], [9.0, 89.25], [10.0, 4504.6], [11.0, 100.0], [12.0, 92.42857142857142], [13.0, 81.2], [14.0, 1988.1874999999993], [15.0, 1348.3636363636363], [16.0, 3326.222222222222], [17.0, 586.7857142857144], [18.0, 78.83333333333333], [19.0, 91.875], [20.0, 628.1428571428571], [21.0, 109.33333333333333], [22.0, 115.0], [23.0, 116.42857142857143], [24.0, 177.0], [25.0, 2328.1], [26.0, 142.33333333333334], [27.0, 1442.4285714285716], [28.0, 1584.1250000000002], [29.0, 338.1818181818182], [30.0, 131.5], [31.0, 1102.875], [32.0, 2747.6666666666665], [33.0, 681.8], [35.0, 1072.6], [34.0, 191.25], [37.0, 1169.5], [36.0, 348.6], [38.0, 1720.1666666666665], [39.0, 1283.0], [40.0, 741.8333333333334], [41.0, 570.0], [42.0, 572.4615384615383], [43.0, 296.75], [44.0, 583.2499999999999], [45.0, 517.1666666666669], [46.0, 486.66666666666663], [47.0, 328.2222222222223], [48.0, 346.8], [49.0, 439.0], [50.0, 2787.666666666667], [51.0, 378.0], [52.0, 219.75], [53.0, 470.37500000000006], [54.0, 553.4285714285714], [55.0, 314.57142857142856], [56.0, 749.0], [57.0, 536.3333333333334], [58.0, 450.25], [59.0, 1653.142857142857], [60.0, 441.1111111111111], [61.0, 554.5714285714286], [62.0, 540.8571428571429], [63.0, 687.4444444444445], [64.0, 763.5555555555555], [65.0, 367.0], [66.0, 497.4], [67.0, 1050.0], [68.0, 912.2857142857142], [69.0, 467.75], [70.0, 371.3333333333333], [71.0, 464.0], [72.0, 1272.7142857142858], [73.0, 1098.6], [74.0, 379.0], [75.0, 615.75], [76.0, 683.4], [77.0, 1290.0], [78.0, 648.3], [79.0, 785.75], [80.0, 454.0], [82.0, 2389.25], [83.0, 1353.142857142857], [81.0, 990.4285714285713], [84.0, 635.8], [85.0, 1365.6666666666667], [86.0, 1791.2], [87.0, 882.0], [88.0, 939.2941176470589], [89.0, 766.5], [90.0, 456.6666666666667], [91.0, 1616.5454545454545], [92.0, 657.6666666666666], [93.0, 1382.857142857143], [94.0, 1360.3333333333335], [95.0, 1081.8181818181818], [96.0, 1848.8999999999999], [97.0, 1690.3333333333333], [98.0, 622.5], [99.0, 1453.8333333333335], [100.0, 1061.6923076923078], [101.0, 783.0], [102.0, 496.4], [103.0, 974.6153846153845], [104.0, 1118.875], [105.0, 819.3333333333334], [106.0, 1212.2857142857142], [107.0, 1061.5], [108.0, 969.9000000000002], [109.0, 1712.7142857142856], [110.0, 1063.1666666666667], [111.0, 1509.181818181818], [112.0, 1634.375], [113.0, 1071.1666666666667], [114.0, 1266.2222222222222], [115.0, 405.0], [117.0, 922.1818181818181], [116.0, 1109.5], [119.0, 2229.125], [120.0, 660.7142857142858], [121.0, 671.5], [122.0, 1573.4], [123.0, 911.2], [125.0, 948.416666666667], [124.0, 1336.75], [126.0, 2056.714285714286], [127.0, 1539.75], [128.0, 1886.5454545454547], [129.0, 1158.7272727272727], [130.0, 1256.6666666666667], [131.0, 690.25], [132.0, 802.5], [133.0, 1264.0588235294117], [134.0, 2494.294117647059], [135.0, 2242.3333333333335], [136.0, 2016.4444444444443], [137.0, 1233.8333333333335], [138.0, 1123.0], [139.0, 2196.8], [140.0, 1058.6], [141.0, 1106.5], [142.0, 1356.1249999999998], [143.0, 1432.1666666666667], [144.0, 1258.7142857142858], [145.0, 1362.6666666666667], [146.0, 1295.4444444444443], [147.0, 1603.1290322580646], [148.0, 1490.0], [149.0, 1471.8181818181818], [150.0, 1682.5454545454545], [151.0, 2354.0], [152.0, 1560.0], [153.0, 1390.7142857142858], [154.0, 706.8571428571429], [155.0, 2044.3888888888885], [156.0, 1414.4285714285716], [157.0, 1586.4285714285713], [158.0, 1380.15], [159.0, 1320.857142857143], [160.0, 2187.666666666667], [161.0, 1235.038461538462], [163.0, 1872.6666666666667], [162.0, 443.3333333333333], [1.0, 7308.000000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[88.61119999999995, 1226.865599999998]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 163.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 26583.333333333332, "minX": 1.77208398E12, "maxY": 614808.2666666667, "series": [{"data": [[1.77208398E12, 614808.2666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77208398E12, 26583.333333333332]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77208398E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1226.865599999998, "minX": 1.77208398E12, "maxY": 1226.865599999998, "series": [{"data": [[1.77208398E12, 1226.865599999998]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77208398E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 740.6360000000001, "minX": 1.77208398E12, "maxY": 740.6360000000001, "series": [{"data": [[1.77208398E12, 740.6360000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77208398E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 58.352000000000004, "minX": 1.77208398E12, "maxY": 58.352000000000004, "series": [{"data": [[1.77208398E12, 58.352000000000004]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77208398E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 50.0, "minX": 1.77208398E12, "maxY": 27932.0, "series": [{"data": [[1.77208398E12, 27932.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77208398E12, 50.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77208398E12, 2686.100000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77208398E12, 13855.030000000002]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77208398E12, 570.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77208398E12, 4305.600000000001]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77208398E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 88.5, "minX": 2.0, "maxY": 1247.0, "series": [{"data": [[2.0, 639.5], [9.0, 104.0], [11.0, 90.0], [12.0, 112.5], [58.0, 238.0], [61.0, 950.0], [63.0, 590.5], [64.0, 270.5], [71.0, 857.0], [75.0, 812.0], [74.0, 1093.5], [77.0, 365.0], [80.0, 88.5], [87.0, 1073.0], [90.0, 1247.0], [23.0, 147.5], [97.0, 728.0], [6.0, 90.0], [107.0, 791.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 107.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 78.0, "minX": 2.0, "maxY": 585.5, "series": [{"data": [[2.0, 183.0], [9.0, 79.0], [11.0, 88.0], [12.0, 101.5], [58.0, 173.0], [61.0, 538.0], [63.0, 382.0], [64.0, 167.5], [71.0, 461.0], [75.0, 399.0], [74.0, 465.5], [77.0, 208.0], [80.0, 88.5], [87.0, 537.0], [90.0, 585.5], [23.0, 122.0], [97.0, 409.0], [6.0, 78.0], [107.0, 486.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 107.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 20.833333333333332, "minX": 1.77208398E12, "maxY": 20.833333333333332, "series": [{"data": [[1.77208398E12, 20.833333333333332]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77208398E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 20.833333333333332, "minX": 1.77208398E12, "maxY": 20.833333333333332, "series": [{"data": [[1.77208398E12, 20.833333333333332]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77208398E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 20.833333333333332, "minX": 1.77208398E12, "maxY": 20.833333333333332, "series": [{"data": [[1.77208398E12, 20.833333333333332]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77208398E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 20.833333333333332, "minX": 1.77208398E12, "maxY": 20.833333333333332, "series": [{"data": [[1.77208398E12, 20.833333333333332]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77208398E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

