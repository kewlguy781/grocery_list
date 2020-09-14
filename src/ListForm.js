import React from 'react';

class ListForm extends React.Component {

    state = {name: ''}

// (This prevents the submission of the form)
handleSubmit = (f) => {
    f.preventDefault();
    console.log('name :>> ', this.state.name);

    // "action" when press enter:
    this.props.addItem(this.state.name);
    this.setState({name: ''})
}

// Store the form, note, it will store at every keystroke because
// told them to track "change" on this one
handleChange = (f) => {
    this.setState({name: f.target.value})
    console.log('handleChange trigger, name :>> ', this.state.name);

}

   render() {

    const { name } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={name} name="name" onChange={this.handleChange} required placeholder="add an Item" />
                        {/* ^ store into value      ^ call function when key is pressed         ^placeholder */}
            </form>
        )
    }
}

export default ListForm
