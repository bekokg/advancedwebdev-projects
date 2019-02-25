import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';
import './RecipeList.css';


class RecipeList extends Component {
	static defaultProps = {
		recipes: [
			{
				img: 'spaghetti.jpg',
				title: 'Spaghetti',
				ingredients: ['pasta', '8 cups water', '1 box spaghetti'],
				instructions: 'Open jar of Spaghetti sauce. Bring to simmer. Boil water.Cook pasta until done. Combine pasta and sauce.'
			},
			{
				img: 'milkshake.jpg',
				title: 'Milkshake',
				ingredients: ['2 Scoops Ice cream', '8 Ounces milk'],
				instructions: 'Combine Ice cream and milk. Blend until creamy.'
			},
			{
				img: 'avocado_toast.jpg',
				title: 'Avocado Toast',
				ingredients: ['2 slices of Bread', '1 avocado', '1 table spoon olive oil', '1 pinch of salt', 'pepper'],
				instructions: 'Toast bread. Slice avocado and spread on bread. Add salt, oil, and pepper to taste.'
			}
		]
	}

	static propTypes = {
		recipes: PropTypes.arrayOf(PropTypes.object).isRequired
	}
	render() {
		const recipes = this.props.recipes.map((recipe,ind) => (
			<Recipe key={ind} img={recipe.img} title={recipe.title}
			 ingredients={recipe.ingredients} instructions={recipe.instructions}
			 />
			));
		return (
			<div className='recipe-list'>
			{recipes}
			</div>
			)
	}
}

export default RecipeList;