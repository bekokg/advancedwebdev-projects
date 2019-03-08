import React, { Component } from 'react';
import RecipeList from './RecipeList';
import Navbar from './Navbar';
import RecipeInput from './RecipeInput';

class RecipeApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recipes: [
			{	
				id: 0,
				img: 'spaghetti.jpg',
				title: 'Spaghetti',
				ingredients: ['pasta', '8 cups water', '1 box spaghetti'],
				instructions: 'Open jar of Spaghetti sauce. Bring to simmer. Boil water.Cook pasta until done. Combine pasta and sauce.'
			},
			{	
				id: 1,
				img: 'milkshake.jpg',
				title: 'Milkshake',
				ingredients: ['2 Scoops Ice cream', '8 Ounces milk'],
				instructions: 'Combine Ice cream and milk. Blend until creamy.'
			},
			{	
				id: 2,
				img: 'avocado_toast.jpg',
				title: 'Avocado Toast',
				ingredients: ['2 slices of Bread', '1 avocado', '1 table spoon olive oil', '1 pinch of salt', 'pepper'],
				instructions: 'Toast bread. Slice avocado and spread on bread. Add salt, oil, and pepper to taste.'
			}
			],
			nextRecipeId: 3,
			showForm: false
		}
	}

	handleSave = recipe => {
		this.setState((prevState, props) => {
			const newRecipe = {...recipe, id: this.state.nextRecipeId};
			return {
				nextRecipeId: prevState.nextRecipeId += 1,
				recipes: [...this.state.recipes, newRecipe],
				showForm: false
			}
		})
	}

	onDelete = id => {
		const recipes = this.state.recipes.filter(recipe => id !== recipe.id);
		this.setState({recipes})
	}
  render() {
  	const {showForm} = this.state;
    return (
      <div className="App">
        <Navbar onNewRecipe={()=> this.setState({showForm: true})}/>
        {showForm? <RecipeInput 
        	onClose={()=> this.setState({showForm: false})}
        	onSave={this.handleSave}/>: null}
        <RecipeList onDelete={this.onDelete} recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default RecipeApp;
