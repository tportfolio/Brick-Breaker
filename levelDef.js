// Level 1//
// board

var board1 = 
    //0, 1, 2, 3, 4, 5, 6, 7, 8
  [ [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 0
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 1
    [0, 2, 2, 2, 0, 2, 2, 0, 0 ], // 6
    [0, 0, 0, 2, 0, 2, 0, 2, 0 ], // 8
    [0, 2, 2, 2, 0, 2, 0, 2, 0 ], // 10
    [0, 0, 0, 2, 0, 2, 0, 2, 0 ], // 12
    [0, 2, 2, 2, 0, 2, 2, 0, 0 ], // 14
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 17
    [2, 0, 2, 0, 2, 0, 2, 0, 2 ], // 16
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ] // 18
  ];
  



  var board2 = 
    //0, 1, 2, 3, 4, 5, 6, 7, 8
  [ [0, 0, 0, 0, 1, 0, 0, 0, 0 ], // 0
    [0, 0, 0, 1, 0, 1, 0, 0, 0 ], // 1
    [0, 0, 0, 1, 0, 1, 0, 0, 0 ], // 6
    [0, 0, 0, 0, 1, 0, 0, 0, 0 ], // 18
	[0, 0, 0, 0, 1, 0, 0, 0, 0 ], // 10
    [0, 0, 1, 1, 1, 1, 1, 0, 0 ], // 8
    [0, 0, 0, 0, 1, 0, 0, 0, 0 ], // 17
    [0, 1, 0, 0, 1, 0, 0, 1, 0 ], // 12
    [0, 0, 1, 0, 1, 0, 1, 0, 0 ], // 14
    [0, 0, 0, 1, 1, 1, 0, 0, 0 ], // 16
  ];

var board3 = 
    //0, 1, 2, 3, 4, 5, 6, 7, 8
   [[0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 18
    [0, 0, 0, 0, 3, 0, 0, 0, 0 ], // 16
    [0, 0, 3, 0, 3, 0, 3, 0, 0 ], // 0
    [0, 3, 3, 0, 3, 0, 3, 3, 0 ], // 1
    [0, 0, 0, 3, 3, 3, 0, 0, 0 ], // 6
    [0, 0, 0, 0, 3, 0, 0, 0, 0 ], // 10
    [0, 0, 0, 3, 3, 3, 0, 0, 0 ], // 8
    [0, 3, 3, 0, 3, 0, 3, 3, 0 ], // 17
    [0, 0, 3, 0, 3, 0, 3, 0, 0 ], // 12
    [0, 0, 0, 0, 3, 0, 0, 0, 0 ], // 14

  ];
  
  var board4 = 
    //0, 1, 2, 3, 4, 5, 6, 7, 8
   [[0, 0, 0, 0, 4, 0, 0, 0, 0 ], // 18
    [0, 0, 0, 4, 4, 4, 0, 0, 0 ], // 16
    [0, 0, 4, 4, 4, 4, 4, 0, 0 ], // 0
    [0, 0, 4, 4, 4, 4, 4, 0, 0 ], // 1
    [0, 4, 4, 4, 4, 4, 4, 4, 0 ], // 6
    [0, 0, 4, 4, 4, 4, 4, 0, 0 ], // 10
    [0, 0, 4, 4, 4, 4, 4, 0, 0 ], // 8
    [0, 0, 0, 0, 4, 0, 0, 0, 0 ], // 17
    [0, 0, 0, 0, 4, 0, 0, 0, 0 ], // 12
    [0, 0, 0, 0, 4, 0, 0, 0, 0 ], // 14

  ];
  
    var board5 = 
    //0, 1, 2, 3, 4, 5, 6, 7, 8
   [[0, 0, 0, 0, 5, 0, 0, 0, 0 ], // 18
    [0, 0, 0, 5, 5, 5, 0, 0, 0 ], // 16
    [0, 0, 5, 5, 5, 5, 5, 0, 0 ], // 0
    [0, 0, 5, 5, 5, 5, 5, 0, 0 ], // 1
    [0, 5, 5, 5, 5, 5, 5, 5, 0 ], // 6
    [5, 5, 5, 5, 5, 5, 5, 5, 5 ], // 10
    [0, 5, 5, 5, 5, 5, 5, 5, 0 ], // 8
    [0, 0, 5, 5, 5, 5, 5, 0, 0 ], // 17
    [0, 0, 0, 5, 5, 5, 0, 0, 0 ], // 12
    [0, 0, 0, 0, 5, 0, 0, 0, 0 ], // 14

  ];



// Empty Board
var board00 = 
    //0, 1, 2, 3, 4, 5, 6, 7, 8
  [ [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 0
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 1
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 2
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 3
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 4
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 5
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 6
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 7
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 8
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 9
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 10
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 11
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 12
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 13
  ];


// Empty Board
var boardWin = 
    //0, 1, 2, 3, 4, 5, 6, 7, 8
  [ [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 4
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 5
    [5, 0, 5, 0, 1, 0, 2, 0, 2 ], // 9
    [5, 0, 5, 1, 0, 1, 2, 0, 2 ], // 10
    [0, 5, 0, 1, 0, 1, 2, 0, 2 ], // 11
    [0, 5, 0, 0, 1, 0, 0, 2, 2 ], // 12
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 6
    [0, 0, 3, 0, 3, 0, 3, 3, 0 ], // 7
    [0, 3, 3, 0, 3, 0, 3, 0, 3 ], // 0
    [3, 3, 0, 0, 3, 0, 3, 0, 3 ], // 1
  ];

// Filled board
var board11 = 
    //0, 1, 2, 3, 4, 5, 6, 7, 8
  [ [1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 1
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 1
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 2
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 3
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 4
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 5
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 6
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 7
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 8
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 9
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 11
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 11
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 12

  ];

  // Filled board
var boardRandom = 
    //0, 1, 2, 3, 4, 5, 6, 7, 8
  [ [1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 1
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 1
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 2
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 3
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 4
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 5
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 6
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 7
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 8
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 9
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 11
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 11
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 12

  ];
  
  
// Temp board
var boardTemp = 
    //0, 1, 2, 3, 4, 5, 6, 7, 8
  [ [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 0
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 1
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 2
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 3
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 4
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 5
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 6
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 7
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 8
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 9
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 10
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 11
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 12
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 13
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 14
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 15
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 16
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 17
    [0, 0, 0, 0, 0, 0, 0, 0, 0 ]  // 18
  ];