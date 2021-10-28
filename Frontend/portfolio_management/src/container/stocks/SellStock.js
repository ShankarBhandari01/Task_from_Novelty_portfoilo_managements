import React, { Component } from 'react'
import axios from 'axios'
export default class SellStock extends Component {
    state = {
        stockName: "",
        amount: "",
        quantity: "",
        total: 0,
        Unit: 0,
        date: new Date().toLocaleDateString()
    }

    componentDidMount() {
        axios.get('http://localhost:90/GetSingleBuyStock/' + this.props.match.params.id, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(
                (response) => {
                    console.log(response.data.data)
                    this.setState({
                        stockName: response.data.data.stockName,
                        amount: response.data.data.amount,
                        quantity: response.data.data.quantity,
                        Unit: response.data.data.Unit,
                        total: response.data.data.total
                    })

                }


            ).catch(
                (err) => {
                    console.log(err.response)
                }
            )
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    buyStock = () => {
        axios.post('http://localhost:90/SellStock', this.state, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((response) => {
            alert(response.data.message)
            console.log(response)
        }).catch((e) => {
            alert(e)
        })
    }
    render() {
        return (
            <section className="Form my-2 mx-2 pt-2 pb-2">
                <div className="container-fluid h-100">
                    <div className="row h-100 justify-content-center align-items-center pt-5" >
                        <div className="col-lg-5 no-gutters shadow" style={{ background: 'white', padding: "30px", borderRadius: '5px' }}>

                            <h1 className="font-weight-bold py-4" style={{ fontWeight: "bolder", fontSize: "35px", color: "#a018a0", fontFamily: "roboto" }}>Sell Your {this.state.stockName} Stock</h1>
                            <form>
                                <div className="form-row ">
                                    <div className="col-lg-12">
                                        <label style={{ fontFamily: "roboto", fontSize: "20px" }}> Name:</label>
                                        <input type="text" className="form-control" value={this.state.stockName} name="Name" disabled />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="col-lg-12">
                                        <label style={{ fontFamily: "roboto", fontSize: "20px" }}> Current Value:</label>
                                        <input type="text" className="form-control" value={this.state.amount} name="amount" disabled />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-lg-12">
                                        <label style={{ fontFamily: "roboto", fontSize: "20px" }}> Total Unit:</label>
                                        <input type="text" className="form-control" value={this.state.Unit} onSelect={this.calculate} onChange={this.changeHandler} name="Unit" disabled />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-lg-12">
                                        <label style={{ fontFamily: "roboto", fontSize: "20px" }}>Total Price:</label>
                                        <input type="text" className="form-control" value={this.state.total} name="total" disabled />
                                    </div>
                                </div>
                            </form>
                            <div className="form-row ">
                                <div className="col-lg-5">
                                    <button style={{ backgroundColor: "#51227F", color: "white", fontWeight: "bold", marginTop: "10px", border: 'none', fontFamily: "roboto", fontSize: "18px" }} onClick={this.buyStock} className="btn btn-primary"> Sell </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>

                    </div>
                </div>

            </section >
        )
    }
}
