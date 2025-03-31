// Set - guestList
const guests = new Set(["Anastasiia", "Daria", "Alyona", "Viktoriia", "Mariia"]);

function isInvited(name) {
  return guests.has(name) ? `${name} is on the guest list.` : `${name} is not invited.`;
}

function addGuest(name) {
  guests.add(name);
  return `${name} has been added to the guest list.`;
}

function removeGuest(name) {
  if (guests.has(name)) {
    guests.delete(name);
    return `${name} has been removed from the guest list.`;
  }
  return `${name} is not found on the list.`;
}

function getGuestCount() {
  return "The number of invited guests is a secret!";
}

function getGuestList() {
  return "The guest list is a secret!";
}

// Map - menu
const menu = new Map([
    ["Beet Potato Salad", 50],
    ["Bohrach", 90],
    ["Beef Borscht", 90],
    ["Braised Pork with Gravy", 100],
    ["Turkey & Rice Cabbage Rolls", 80]
  ]);
  
  function getMenuItems() {
    let result = "";
    menu.forEach((price, dish) => {
      result += `${dish}: ${price}₴\n`;
    });
    return result.trim();
  }

// WeakSet - bankVault
const bankVault = new WeakSet();

const box1 = { credentials: "1234", contents: ["Cash"] };
const box2 = { credentials: "5678", contents: ["Documents"] };
const box3 = { credentials: "9101", contents: ["Records"] };
const box4 = { credentials: "1213", contents: ["Gold"] };
const box5 = { credentials: "1415", contents: ["Jewelry"] };

bankVault.add(box1);
bankVault.add(box2);
bankVault.add(box3);
bankVault.add(box4);
bankVault.add(box5);

function accessBox(box, providedCredential) {
  if (bankVault.has(box)) {
    return box.credentials === providedCredential ? `Contents: ${box.contents.join(", ")}` : "Access Denied!";
  }
  return "Box not found!";
}

// WeakMap - coinCollection
const coinCollection = new WeakMap();

const goldCoin = {};
coinCollection.set(goldCoin, "Gold Coin");

const silverCoin = {};
coinCollection.set(silverCoin, "Silver Coin");

const bronzeCoin = {};
coinCollection.set(bronzeCoin, "Bronze Coin");

const copperCoin = {};
coinCollection.set(copperCoin, "Copper Coin");

const platinumCoin = {};
coinCollection.set(platinumCoin, "Platinum Coin");

function viewCollection(coin) {
  return coinCollection.has(coin) ? `This is a ${coinCollection.get(coin)}.` : "Coin not found!";
}