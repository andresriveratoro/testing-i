const enhancer = require('./enhancer.js');

const Ashkandi = {
  name: '[+15] Ashkandi',
  baseName: 'Ashkandi',
  type: 'Weapon',
  enhancement: 15,
  durability: 80,
};

const LionheartHelm = {
  name: '[TET] Lionheart Helm',
  baseName: 'Lionheart Helm',
  type: 'Armor',
  enhancement: 19,
  durability: 100,
};

const ChromaticBoots = {
  name: '[+3] Chromatic Boots',
  baseName: 'Chromatic Boots',
  type: 'Armor',
  enhancement: 3,
  durability: 100,
};

describe('Enhancement', () => {
  describe('Success function', () => {
    /* BEFORE: { name: '[+15] Ashkandi', enhancement: 15 }
       AFTER: { name: '[PRI] Ashkandi', enhancement: 16 }
    */
    test('Enhancement level is increased by 1', () => {
      expect(enhancer.success(Ashkandi).enhancement).toBe(16);
    });

    /* BEFORE: { name: '[PRI] Ashkandi', enhancement: 16 }
       AFTER: { name: '[DUO] Ashkandi', enhancement: 17 }
    */
    test('Update name to reflect new enhancement level', () => {
      expect(enhancer.success(Ashkandi).name).toBe('[DUO] Ashkandi');
    });
  });

  describe('Fail function', () => {
    /* BEFORE: { name: '[DUO] Ashkandi', enhancement: 17, durability: 80 }
       AFTER: { name: '[PRI] Ashkandi', enhancement: 16, durability: 70 }
    */
    test('Enhancement level is decreased by 1', () => {
      expect(enhancer.fail(Ashkandi).enhancement).toBe(16);
    });

    /* BEFORE: { name: '[TET] Lionheart Helm', enhancement: 19, durability: 100 }
       AFTER: { name: '[TRI] Lionheart Helm', enhancement: 18, durability: 90 }
    */
    test('Update name to reflect new enhancement level', () => {
      expect(enhancer.fail(LionheartHelm).name).toBe('[TRI] Lionheart Helm');
    });

    /* BEFORE: { name: '[+3] Chromatic Boots', durability: 100 }
       AFTER: { name: '[+3] Chromatic Boots', durability: 95 }
    */
    test('Decrease durability by 5 for item with an enhancement level 14 or lower', () => {
      expect(enhancer.fail(ChromaticBoots).durability).toBe(95);
    });

    /* BEFORE: { name: '[PRI] Ashkandi', enhancement: 16, durability: 70 }
       AFTER: { name: '[PRI] Ashkandi', enhancement: 16, durability: 60 }
    */
    test('Decrease durability by 10 for item with an enhancement level 15 or higher', () => {
      expect(enhancer.fail(Ashkandi).durability).toBe(60);
    });
  });

  describe('repair function', () => {
    /* BEFORE: { name: '[PRI] Ashkandi', enhancement: 16, durability: 60 }
       AFTER: { name: '[PRI] Ashkandi', enhancement: 16, durability: 100 }
    */
    test('Restore durability to 100', () => {
      expect(enhancer.repair(Ashkandi).durability).toBe(100);
    });
  });
});
