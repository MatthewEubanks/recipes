import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeList.css';
import PropTypes from 'prop-types';

class RecipeList extends Component {
  static defaultProps = {
    recipes: [
      {
        title: 'Spaghetti',
        instructions: 'Open jar of spaghetti sauce. Pour sauce on noodle',
        ingredients: ['pasta', '8 cups water', '1 can spaghetti sauce'],
        img:
          'https://pixabay.com/get/e133b20c28f01c22d2524518b7444795ea76e5d004b0144292f0c771a4efb4_340.jpg',
      },
      {
        title: 'Milkshake',
        instructions: 'Combine ice cream and milk. Blend and pour',
        ingredients: ['2 scoops ice crea', '8 ounces milk'],
        img:
          'https://pixabay.com/get/e835b30e28f6063ed1584d05fb1d4e97e07ee3d21cac104496f7c17ea2eab2bd_340.jpg',
      },
      {
        title: 'Avocado toast',
        instructions: 'Toast bread. Slice Avocado.',
        ingredients: ['2 Slices bread', '1 Avocado'],
        img:
          'https://pixabay.com/get/e835b60821fc053ed1584d05fb1d4e97e07ee3d21cac104496f7c17ea2e5b5bd_340.jpg',
      },
    ],
  };

  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    const recipes = this.props.recipes.map((r, index) => (
      <Recipe key={index} {...r} />
    ));
    return <div className="recipe-list">{recipes}</div>;
  }
}

export default RecipeList;
