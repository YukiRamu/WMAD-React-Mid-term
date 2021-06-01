import React from 'react';
import CheckOut from '../CheckOut/CheckOut';

class FetchAPI extends React.Component {
    state = {
        allProducts: [],
        allCategories: [],
        addNewProduct: []
    };


    componentDidMount() {

        //ALL PRODUCTS API

        fetch("https://fakestoreapi.com/products")
            .then(response => {
                if (response.status !== 200) {
                    console.log(`We have a problem! ${response.status}`);
                }
                response.json()
                    .then(data => {
                        console.log("PRODUCTS DATA" + data);
                        this.setState({
                            allProducts: data
                        });
                    });
            })
            .catch((error) => {
                console.log((`Error ${error}`));
            });

        //ALL COTEGORIES API    

        fetch("https://fakestoreapi.com/products/categories")
            .then(response => {
                if (response.status !== 200) {
                    console.log(`We have a problem! ${response.status}`);
                }
                response.json()
                    .then(data => {
                        console.log("CATEGORIES DATA" + data);
                        this.setState({
                            allCategories: data
                        });
                    });
            })
            .catch((error) => {
                console.log((`Error ${error}`));
            });

        //ADD NEW PRODUCT

        fetch("https://fakestoreapi.com/products", {
            method: "POST",
            body: JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc', //PRODUCT IMAGE
                    category: 'electronic'
                }
            )
        })
            .then(response => {
                if (response.status !== 200) {
                    console.log(`We have a problem! ${response.status}`);
                }else {
                   const data =  response.json()
                   return data;
                }
                
                    // .then(data => {
                    //     console.log("NEW PRODUCT DATA" + data);
                    //     this.setState({
                    //         addNewProduct: data
                    //     });
                    // });
            })
            .catch((error) => {
                console.log((`Error ${error}`));
            });
    }

    render() {
        console.log(this.state.allProducts);
        console.log(this.state.allCategories);
        console.log(this.state.addNewProduct);

        return (
            <>
                <div>
                    <CheckOut allProductsList={this.state.allProducts} />
                    
                </div>
            </>
        );
    }
};

export default FetchAPI;