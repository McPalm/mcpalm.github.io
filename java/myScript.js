$(document).ready(function() {
  $(document).keydown(function() {
    handleInput(event.which);
    event.preventDefault();
  });
});

function handleInput(keyCode) {
  switch (keyCode) {
    case 37:
      moveObjectRelative(player, -1, 0);
      break;
    case 38:
      moveObjectRelative(player, 0, -1);
      break;
    case 39:
      moveObjectRelative(player, 1, 0);
      break;
    case 40:
      moveObjectRelative(player, 0, 1);
      break;
  }
}

function moveTo(domElement, x, y) {
  domElement.style = "grid-column:" + x + ";grid-row:" + y + ";";
}

function moveIdTo(id, x, y) {
  domElement = document.getElementById(id);
  moveTo(domElement, x, y);
}

function refreshObject(o) {
  moveIdTo(o.id, o.x, o.y);
}

function moveObjectRelative(o, dx, dy) {
  if (isEmpty(o.x + dx, o.y + dy)) {
    o.x = clamp(o.x + dx, 1, 12);
    o.y = clamp(o.y + dy, 1, 12);
    refreshObject(o);
  }
}

function isEmpty(x, y) {
  let index = obstacles.findIndex(function(o) {
    return x == o.x && y == o.y;
  });
  return index == -1;
}

function clamp(v, min, max) {
  return v < min ? min : v > max ? max : v;
}

let obstacles = [];
let player = { x: 1, y: 2, id: "player" };
let wall1 = { x: 3, y: 5, id: "wall1" };
let wall2 = { x: 4, y: 4, id: "wall2" };
obstacles.push(player, wall1, wall2);
obstacles.forEach(refreshObject);
