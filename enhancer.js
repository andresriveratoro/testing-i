module.exports = {
  success: (item) => {
    // Item's enhancement level is increased by 1
    item.enhancement += 1;

    // Update name to reflect new enhancement level
    switch (item.enhancement) {
      case 1: case 2: case 3: case 4: case 5: case 6:
      case 7: case 8: case 9: case 10: case 11: case 12:
      case 13: case 14: case 15:
        item.name = `[+${item.enhancement}] ${item.baseName}`;
        break;
      case 16:
        item.name = `[PRI] ${item.baseName}`;
        break;
      case 17:
        item.name = `[DUO] ${item.baseName}`;
        break;
      case 18:
        item.name = `[TRI] ${item.baseName}`;
        break;
      case 19:
        item.name = `[TET] ${item.baseName}`;
        break;
      case 20:
        item.name = `[PEN] ${item.baseName}`;
        break;
      default:
            // do nothing
    }

    return item;
  },

  fail: (item) => {
    // If an item's enhancement level is less than 15, decrease durability by 5
    if (item.enhancement < 15) {
      item.durability -= 5;
      return item;
    }

    // If an item's enhancement level is greater than 14, decrease durability by 10
    if (item.enhancement > 14) {
      item.durability -= 10;
    }

    /* If an item's enhancement level is greater than 16, decrease enhancement level by 1 and
    update name to reflect new enhancement level */
    if (item.enhancement > 16) {
      item.enhancement -= 1;

      switch (item.enhancement) {
        case 16:
          item.name = `[PRI] ${item.baseName}`;
          break;
        case 17:
          item.name = `[DUO] ${item.baseName}`;
          break;
        case 18:
          item.name = `[TRI] ${item.baseName}`;
          break;
        case 19:
          item.name = `[TET] ${item.baseName}`;
          break;
        default:
            // do nothing
      }
    }

    return item;
  },

  repair: (item) => {
    // Restore durability to 100
    item.durability = 100;
    return item;
  },
};
