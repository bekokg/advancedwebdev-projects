import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';
import './RecipeList.css';


class RecipeList extends Component {
	render() {
		const {onDelete} = this.props;
		const recipes = this.props.recipes.map(recipe => (
			<Recipe key={recipe.id} img={recipe.img} title={recipe.title}
			 ingredients={recipe.ingredients} instructions={recipe.instructions} id={recipe.id} onDelete={onDelete}
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