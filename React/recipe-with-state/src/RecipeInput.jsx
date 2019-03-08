import React, { Component } from 'react';
import './RecipeInput.css';

class RecipeInput extends Component {
	static defaultProps = {
		onSave() {},
		onClose() {}
	}
	constructor() {
		super();
		this.state = {
			title: '',
			instructions: '',
			ingredients: [''],
			img: ''
		}
	}

	handleChange = (e) => {
	  this.setState({[e.target.name]: e.target.value});
	}

	handleNewIngredients = () => {
		this.setState({ingredients: [...this.state.ingredients, '']})
	}

	handleChangeIng = e => {
		const index = Number(e.target.name.split('-')[1]);
		const ingredients = this.state.ingredients.map((ing, ind) => (
			ind === index? e.target.value: ing
			));
		this.setState({ingredients})
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.onSave({...this.state});
		this.setState({
			title: '',
			instructions: '',
			ingredients: [''],
			img: ''
		})
		}

	render() {
	  const {title, instructions, ingredients, img} = this.state;
	  let inputs = ingredients.map((ing, ind) => (
		  <div className='recipe-form-line' key={`ingredient-${ind}`}>
			<label>{ind+1}.
			  <input
				  type='text'
				  name={`ingredients-${ind}`}
				  value={ing}
				  size={45}
				  autoComplete='off'
				  placeholder='Ingredient'
				  onChange={this.handleChangeIng}
			  />
			</label>
		  </div>
	))
	  return (
		<div className = 'recipe-form-container'>
		  <form className='recipe-form' onSubmit={this.handleSubmit}>
		  	<button type='button' className='close-button' onClick={this.props.onClose}>
		  	  X
		  	</button>
		  	<div className='recipe-form-line'>
		  	  <label htmlFor='recipe-title-input'>Title</label>
		  	  <input
		  	    id='recipe-title-input'
		  	    key='title'
		  	    name='title'
		  	    type='text'
		  	    value={title}
		  	    size={42}
		  	    autoComplete='off'
		  	    onChange={this.handleChange}
		  	  />
		  	</div>
		  	<label
		  	 htmlFor='recipe-instructions-input'
		  	 style={{marginTop: '5px'}}
		  	>
		  	  Instructions
		  	</label>
		  	<textarea
		  	  key='instructions'
		  	  id='recipe-instructions-input'
		  	  type='Instructions'
		  	  name='instructions'
		  	  rows='8'
		  	  cols='50'
		  	  autoComplete='off'
		  	  value={instructions}
		  	  onChange={this.handleChange}
		  	/>
		  	{inputs}
		  	<button
		  	  type='button'
		  	  onClick={this.handleNewIngredients}
		  	  className='buttons'
		  	>
		  	  +
		  	</button>
		  	<div className='recipe-form-line'>
		  	  <label htmlFor='recipe-img-input'>Image Url</label>
		  	  <input
		  	    id='recipe-img-input'
		  	    type='text'
		  	    placeholder=''
		  	    name='img'
		  	    value={img}
		  	    size={36}
		  	    autoComplete='off'
		  	    onChange={this.handleChange}
		  	  />
		  	</div>
		  	<button
		  	  type='submit'
		  	  className='buttons'
		  	  style={{alignSelf: 'flex-end', marginRight: 0}}
		  	>
		  	  SAVE
		  	</button>
		  </form> 	
		</div>
		)
	}
}

export default RecipeInput;