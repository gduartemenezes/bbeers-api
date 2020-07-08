module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert(
      'beers',
      [
        {
          name: 'Clown King',
          tag_line: 'US Style Barley Wine.',
          description:
            'A heavy hitting combination of rich malt flavours and relentless,',
          image_url: 'https://images.punkapi.com/v2/103.png',
          abv: '12',
          ibu: '85',
          food_pairing: [
            'Aged Stilton',
            'Flaky pastry beef pie and sweet potato mash',
            'Chocolate pecan praline cake',
          ],
          drinking_tips:
            'Leave this beer to chill in the cellar for a few months to round off the flavour profile.',
          user_id: 6,
          value: '20',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Hello My Name Is Sari',
          tag_line: 'Bilberry Double IPA.',
          description: 'Brewed exclusively for the Finnish market',
          image_url: 'https://images.punkapi.com/v2/103.png',
          abv: '8.2',
          ibu: '70',
          food_pairing: [
            'Steamed cod with ginger and spring onions',
            'Blueberry muffins',
            'Apple and blueberry pie',
          ],
          drinking_tips: 'Instead of adding the blueberry juice in the kettle.',
          user_id: 6,
          value: '20',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Berliner Weisse With Yuzu - B-Sides',
          tag_line: 'Japanese Citrus Berliner Weisse.',
          description:
            'Japanese citrus fruit intensifies the sour nature of this German classic.',
          image_url: 'https://images.punkapi.com/v2/keg.png',
          abv: '4.2',
          ibu: '8',
          food_pairing: [
            'Smoked chicken wings',
            'Miso ramen',
            'Yuzu cheesecake',
          ],
          drinking_tips:
            'Clean everything twice. All you want is the clean sourness of lactobacillus.',
          user_id: 5,
          value: '30',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Double IPA - Russian Doll',
          tag_line: 'Nesting Hop Bomb.',
          description:
            'The levels of hops vary throughout the range but by tweaking the amount',
          image_url: 'https://images.punkapi.com/v2/200.png',
          abv: '8',
          ibu: '85',
          food_pairing: [
            'Strong cheddar fondue',
            'Pork chops with spicy orange marmalade',
            'Rich crème brûlée',
          ],
          drinking_tips:
            'Create balance through experimentation with the hop amounts and malt backbone.',
          user_id: 5,
          value: '30',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('beers', [{}]);
  },
};
