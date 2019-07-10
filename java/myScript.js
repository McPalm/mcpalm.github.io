$(document).ready(function() {
  $(document).keydown(function() {
    handleInput(event.which);
    event.preventDefault();
  });
});

function handleInput(keyCode) {
  switch (keyCode) {
    case 37:
      tryPush(player, -1, 0);
      moveObjectRelative(player, -1, 0);
      break;
    case 38:
      tryPush(player, 0, -1);
      moveObjectRelative(player, 0, -1);
      break;
    case 39:
      tryPush(player, 1, 0);
      moveObjectRelative(player, 1, 0);
      break;
    case 40:
      tryPush(player, 0, 1);
      moveObjectRelative(player, 0, 1);
      break;
  }
}

function tryPush(source, dx, dy) {
  let mapObject = objectAt(source.x + dx, source.y + dy);
  if (mapObject != undefined && mapObject.push == true) {
    moveObjectRelative(mapObject, dx, dy);
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

function objectAt(x, y) {
  return obstacles.find(function(o) {
    return x == o.x && y == o.y;
  });
}

function clamp(v, min, max) {
  return v < min ? min : v > max ? max : v;
}

let obstacles = [];
let player = { x: 1, y: 2, id: "player" };
let wall1 = { x: 3, y: 5, id: "wall1" };
let wall2 = { x: 4, y: 4, id: "wall2" };
let block = { x: 6, y: 6, id: "block1", push: true };
obstacles.push(player, wall1, wall2, block);
obstacles.forEach(refreshObject);
