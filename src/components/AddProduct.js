import React from 'react';

class AddProduct extends React.Component {
    
    state = {
        nom: "",
        prix: "",
        description: "",
    };

    add = (e) => {
        e.preventDefault();
        if(this.state.nom === "" || this.state.prix === "" || this.state.description === "") {
            alert("Tous les champs doit etre remplit");
            return
        }
        this.props.AddProductHandler(this.state);
        this.setState({ nom:"", prix: "", description: ""});
        this.props.history.push("/");
    };

    render() {
        return (
            <div className="mt-4">
                <h2 className="text-center">Ajouter Produit</h2>
                <form className="col-lg-6">
                    <div class="form-group">
                        <label>nom</label>
                        <input
                            type="text" class="form-control"  placeholder="nom"
                            value={this.state.nom}
                            onChange={ (e) => this.setState({nom: e.target.value})}
                        />
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">prix</label>
                        <input
                            type="number" class="form-control"  placeholder="prix"
                            value={this.state.prix}
                            onChange={ (e) => this.setState({prix: e.target.value})}
                         />
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Description</label>
                        <input
                            type="text" class="form-control"  placeholder="description"
                            value={this.state.description}
                            onChange={ (e) => this.setState({description: e.target.value})}
                         />
                    </div>
                    <div className="form-group">
                        <button type="button" class="btn btn-success" onClick={this.add}>Add</button>
                    </div>
                    
                </form>
            </div>
        );
    }
}


export default AddProduct