function navbarLoad() {
  if (document.getElementById('pageclass').innerHTML == "TBC") {
    document.getElementById('tbcnavbar').innerHTML = "<a class='navbar-brand ' href='#'>Linuxfan1</a><ul class='navbar-nav'><li class='nav-item dropdown'><a class='nav-link dropdown-toggle' id='tbc-toggle' data-toggle='dropdown'>TBC</a><div class='dropdown-menu'><a class='dropdown-item' href='https://goo.gl/iMUzzr'>TBC</a><a class='dropdown-item' href='https://goo.gl/5N1Vpg'>2 Hour Delay</a><a class='dropdown-item'><form onsubmit='return tbcDebug();' class='form-inline'><input id='debug' type='password' class='form-control' placeholder='Enable Debug'></form></a></div></li><li class='nav-item'><a class='nav-link' href='http://www.editey.com/preview/1oz7ztdAIrORCNRdFGNlvdcbbgbh-tZcU/chat.html?pe=nmetzger.2021@myiasd.cc'>Chat</a></li><button id='debugbutton' onclick='return debugFunctionEnable();' style='display:none;' class='nav-item btn btn-danger'>Debug</button></ul>";
    return pageLoad();
  } else if (document.getElementById('pageclass').innerHTML == "Other") {
    document.getElementById('tbcnavbar').innerHTML = "<a class='navbar-brand ' href='#'>Linuxfan1</a><ul class='navbar-nav'><li class='nav-item dropdown'><a class='nav-link dropdown-toggle' id='tbc-toggle' data-toggle='dropdown'>TBC</a><div class='dropdown-menu'><a class='dropdown-item' href='https://goo.gl/iMUzzr'>TBC</a><a class='dropdown-item' href='https://goo.gl/5N1Vpg'>2 Hour Delay</a><a class='dropdown-item'></a></div></li><li class='nav-item'><a class='nav-link' href='http://www.editey.com/preview/1oz7ztdAIrORCNRdFGNlvdcbbgbh-tZcU/chat.html?pe=nmetzger.2021@myiasd.cc'>Chat</a></li><button id='debugbutton' onclick='return debugFunctionEnable();' style='display:none;' class='nav-item btn btn-danger'>Debug</button></ul>";
    return pageLoad();
  } else {
    return False;
  }
}
