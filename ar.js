(function () {
  document.onscroll = function () {
    var q = document.body.scrollTop
    if (q > 800) {
      document.getElementById('images').style.marginTop = '-2%'
      document.getElementById('images').style.opacity = '1'
      document.getElementById('images').style.transition = '1s'
    }

    if (q < 800) {
      document.getElementById('images').style.marginTop = '2%'
      document.getElementById('images').style.opacity = '0'
      document.getElementById('images').style.transition = '1s'
    }
    if (q > 1800) {
      // document.getElementById('registr').style.marginTop = '-2%'
      // document.getElementById('registr').style.opacity = '1'
      // document.getElementById('registr').style.transition = '0.5s'
    }
    if (q < 1800) {
      // document.getElementById('reg').style.marginTop = '2%'
      // document.getElementById('reg').style.opacity = '0'
      // document.getElementById('reg').style.transition = '0.5s'
    }

  }
})()
var vxod = document.getElementById('loginn');
var regist = document.getElementById('regist');
var grancum = document.getElementById('grancum')
vxod.onclick = function () {
  grancum.style.transition = '1s'
  grancum.style.display = 'block'
  reg.style.display = 'none'
}
regist.onclick = function () {
  grancum.style.display = 'none'
  reg.style.display = 'block'
  reg.style.transition = '1s'
}

var reg = document.getElementById('reg')
var allUser = [];
class User {
  constructor(firstName, lastName, username, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.username = username;
  }
}
var firstName = lastName = username = email = password = ''

var signup = document.getElementById('submit');
signup.style.cursor = 'pointer'
signup.onclick = function () {
  var e = document.getElementById('name');
  if (e.value == '') {
    e.style.boxShadow = ' 2px 2px 10px red, -2px -2px 10px red';
  } else if (!isNaN(+e.value)) {
    e.style.boxShadow = ' 2px 2px 10px red, -2px -2px 10px red';
  } else {
    e.style.boxShadow = ' 2px 2px 10px green, -2px -2px 10px green';
    firstName = e.value;
  }

  var azganun = document.getElementById('surname');
  if (azganun.value == '') {
    azganun.style.boxShadow = ' 2px 2px 10px red, -2px -2px 10px red';
  } else if (!isNaN(+azganun.value)) {
    azganun.style.boxShadow = ' 2px 2px 10px red, -2px -2px 10px red';
  } else {
    azganun.style.boxShadow = ' 2px 2px 10px green, -2px -2px 10px green';
    lastName = azganun.value;
  }

  var m = document.getElementById('maill');
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(m.value)) {
    m.style.boxShadow = ' 2px 2px 10px red, -2px -2px 10px red';
  } else {
    m.style.boxShadow = ' 2px 2px 10px green, -2px -2px 10px green'
    email = m.value;
  }

  var us = document.getElementById('username');
  if (us.value == '') {
    us.style.boxShadow = ' 2px 2px 10px red, -2px -2px 10px red';
  } else if (!isNaN(+us.value)) {
    us.style.boxShadow = ' 2px 2px 10px red, -2px -2px 10px red';
  } else {
    us.style.boxShadow = ' 2px 2px 10px green, -2px -2px 10px green';
    username = us.value;
  }

  var pas = document.getElementById('pas');
  if (pas.value == '') {
    pas.style.boxShadow = ' 2px 2px 10px red, -2px -2px 10px red';
  } else if ((pas.value).length >= 4) {
    pas.style.boxShadow = ' 2px 2px 10px red, -2px -2px 10px red';
  } else {
    pas.style.boxShadow = ' 2px 2px 10px green, -2px -2px 10px green';
    password = pas.value;
  }

  var con = document.getElementById('confirm');
  if (con.value == '') {
    con.style.boxShadow = ' 2px 2px 10px red, -2px -2px 10px red';
  } else if (con.value != pas.value) {
    con.style.boxShadow = ' 2px 2px 10px red, -2px -2px 10px red';
  } else {
    con.style.boxShadow = ' 2px 2px 10px green, -2px -2px 10px green';
    password = con.value;
  }

  if (firstName != '' && lastName != '' && username != '' && email != '' && password != '') {
    var oneUser = new User(firstName, lastName, username, email, password);
    reg.style.display = 'none'
    grancum.style.display = 'block'
    allUser.push(oneUser);
    console.log(allUser);
    signdiv.style.display = 'none'
    regdiv.style.display = 'block'
  }

}

var x = document.getElementById('log');
x.style.cursor = 'pointer'
x.onclick = function () {
  var a = document.getElementById('mail');
  var c = document.getElementById('pass');
  for (i = 0; i < allUser.length; i++) {
    if (password == c.value && email == a.value) {
      a.style.boxShadow = ' 2px 2px 10px green, -2px -2px 10px green'
      c.style.boxShadow = ' 2px 2px 10px green, -2px -2px 10px green'
      grancum.style.display = 'none';
      window.location.href = 'https://www.youtube.com/'
      // container.style.display = 'none'
    } else {
      a.style.boxShadow = ' 2px 2px 10px red, -2px -2px 10px red'
      c.style.boxShadow = ' 2px 2px 10px red, -2px -2px 10px red'
    }
  }

}

var a = 0
var menu = document.getElementById('menu');
menu.onclick = function () {

  if (a % 2 == 0) {
    document.getElementById('navbar').style.height = '250px'
    document.getElementById('navbar').style.transition = '0.5s'
    document.getElementById('homee').style.opacity = '1'
    // document.getElementById('homee').style.marginTop = '5%'
    document.getElementById('homee').style.transition = '0.5s'
    document.getElementById('aboutt').style.opacity = '1'
    document.getElementById('contactt').style.opacity = '1'
  } else {
    document.getElementById('navbar').style.height = '100px'
    document.getElementById('navbar').style.transition = '0.5s'
    document.getElementById('homee').style.opacity = '0'
    document.getElementById('aboutt').style.opacity = '0'
    document.getElementById('contactt').style.opacity = '0'
    document.getElementById('homee').style.transition = '0.5s'
  }
  a++
}
var redmore = document.getElementById('redmore');
var redmoreclick = document.getElementById('redmoreclick');
redmoreclick.onclick = function () {
  redmore.style.display = 'block'
}

var close = document.getElementById('close');
close.onclick = function () {
  redmore.style.display = 'none'
}

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 200,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
    },
    "opacity": {
      "value": 0,
      "random": false
    },
    "size": {
      "value": 2,
      "random": false,
      "anim": {
        "enable": false
      }
    },
    "line_linked": {
      "enable": true,
      "opacity": 0.2
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false
      },
      "resize": true
    },
    "modes": {
      "bubble": {
        "distance": 200,
        "size": 2,
        "duration": 2,
        "opacity": 1,
        "speed": 3
      }
    }
  },
  "retina_detect": true
});

$(document).on('ready', function () {
  $modal = $('.modal-frame');
  $overlay = $('.modal-overlay');

  /* Need this to clear out the keyframe classes so they dont clash with each other between ener/leave. Cheers. */
  $modal.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
    if ($modal.hasClass('state-leave')) {
      $modal.removeClass('state-leave');
    }
  });

  $('.close').on('click', function () {
    $overlay.removeClass('state-show');
    $modal.removeClass('state-appear').addClass('state-leave');
  });

  $('.open').on('click', function () {
    $overlay.addClass('state-show');
    $modal.removeClass('state-leave').addClass('state-appear');
  });

});