import React, { Component } from 'react'
import axios from 'axios'
export default class View extends Component {


    state = {
        sold: 0,
        profit: 0,
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


        axios.get('http://localhost:90/OverAllprofit', {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((response) => {
            if (response.data.data.length == 0) {
                this.setState(
                    { totalUnit: 0 }
                )
            }
            else {
                this.setState({
                    profit: response.data.data[0].totalUnit
                })
            }

        }).catch((e) => {
            console.log(e)
        })


        axios.get('http://localhost:90/totalSold', {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((response) => {
            if (response.data.data.length == 0) {
                this.setState(
                    { totalUnit: 0 }
                )
            }
            else {
                this.setState({
                    sold: response.data.data[0].totalUnit
                })
            }


        }).catch((e) => {

        })
    }
    render() {


        return (
            <div>
                <div className="card">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card-body">
                                <h5 className="card-title">{this.state.stockName}</h5>
                            </div>
                            <hr></hr>
                            <div className="card-body">
                                <h4 style={{ color: '#51127F', fontWeight: 'bolder', marginTop: '10px' }}>Total Unit :  <span style={{ color: '#BF3A89', fontWeight: 'bolder', marginTop: '10px' }}>{this.state.Unit}</span></h4>
                            </div>
                            <hr></hr>
                            <div className="card-body">
                                <h4 style={{ color: '#51127F', fontWeight: 'bolder', marginTop: '10px' }}>Sold Amount :  <span style={{ color: '#BF3A89', fontWeight: 'bolder', marginTop: '10px' }}>{this.state.sold}</span></h4>
                            </div>
                            <hr></hr>
                            <div className="card-body">
                                <h4 style={{ color: '#51127F', fontWeight: 'bolder', marginTop: '10px' }}>Over All Profit :  <span style={{ color: '#BF3A89', fontWeight: 'bolder', marginTop: '10px' }}>{this.state.profit}</span></h4>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5">
                            <div className="card-body mt-5">
                                <h4 style={{ color: '#51127F', fontWeight: 'bolder', marginTop: '10px' }}>Total Investments :  <span style={{ color: '#BF3A89', fontWeight: 'bolder', marginTop: '10px' }}>{this.state.total}</span></h4>
                            </div>
                            <hr></hr>
                            <div className="card-body">
                                <h4 style={{ color: '#51127F', fontWeight: 'bolder', marginTop: '10px' }}>Current Amount :  <span style={{ color: '#BF3A89', fontWeight: 'bolder', marginTop: '10px' }}>{this.state.amount}</span></h4>
                            </div>
                            <hr></hr>
                        </div>
                    </div>

                    <hr></hr>

                </div>
            </div>
        )
    }
}
