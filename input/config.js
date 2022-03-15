const fs = require("fs");
const width = 1000;
const height = 1000;
const dir = __dirname;

const rarity = [
  { key: "", val: "common" },
  { key: "_r", val: "rare" },
  { key: "_sr", val: "epic" },
];

const addRarity = (_str) => {
  let itemRarity;
  rarity.forEach((r) => {
    if (_str.includes(r.key)) {
      itemRarity = r.val;
    }
  });
  return itemRarity;
};

const cleanName = (_str) => {
  let name = _str.slice(0, -4);
  rarity.forEach((r) => {
    name = name.replace(r.key, "");
  });
  return name;
};

//gets file names for assets to build layesr and popultes element array
const getElements = (path) => {
  return fs
    .readdirSync(path)
    .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
    .map((i, index) => {
      return {
        id: index + 1,
        name: cleanName(i),
        filename: i,
        rarity: addRarity(i),
      };
    });
};

//think about how your layers are built up!
const layers = [
  {
    id: 1,
    name: "background",
    location: `${dir}/background/`,
    elements: getElements(`${dir}/background/`),
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    id: 2,
    name: "broth",
    location: `${dir}/broth/`,
    elements: getElements(`${dir}/broth/`),
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    id: 3,
    name: "noodle",
    location: `${dir}/noodle/`,
    elements: getElements(`${dir}/noodle/`),
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    id: 4,
    name: "seaweed",
    location: `${dir}/seaweed/`,
    elements: getElements(`${dir}/seaweed/`),
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    id: 5,
    name: "protein",
    location: `${dir}/protein/`,
    elements: getElements(`${dir}/protein/`),
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    id: 6,
    name: "egg",
    location: `${dir}/"egg/`,
    elements: getElements(`${dir}/egg/`),
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    id: 7,
    name: "middleGarnish",
    location: `${dir}/middleGarnish/`,
    elements: getElements(`${dir}/middleGarnish/`),
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    id: 8,
    name: "mushroom",
    location: `${dir}/mushroom/`,
    elements: getElements(`${dir}/mushroom/`),
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
];

console.log(layers);
