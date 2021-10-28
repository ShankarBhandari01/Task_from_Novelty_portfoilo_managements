import { useEffect, useState } from "react";
import axios from 'axios';
import { Button, Table, FormControl, InputGroup } from 'react-bootstrap';

const Dashboard = () => {
    const [searchValueBuy, setSearchBUY] = useState([]);
    const [searchValueSell, setSearchSell] = useState([]);
    const [stock, setStock] = useState([]);
    const [SellStock, setSellStock] = useState([]);
    const [TotalUnit, setTotalUnit] = useState({});
    const [TotalInvest, setTotalTotalInvest] = useState({});
    const [TotalSold, setTotalTotalSold] = useState({});
    const [currentAmount, setTotalcurrentAmount] = useState({});
    const [profit, setProfit] = useState({});
    useEffect(() => {

        axios.get('http://localhost:90/GetStock', {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(
                (response) => {
                    setStock(response.data.data)

                }

            ).catch(
                (err) => {
                    console.log(err.response)
                }
            )

        axios.get('http://localhost:90/GetSellStock', {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((response) => {
            setSellStock(response.data.data)
        }).catch((e) => {

        })



        axios.get('http://localhost:90/totalUnit', {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((response) => {

            console.log(response)
            if (response.data.data.length == 0) {
                setTotalUnit(
                    { totalUnit: 0 }
                )
            }
            else {
                setTotalUnit(response.data.data[0])
            }





        }).catch((e) => {

        })
        axios.get('http://localhost:90/totalInvest', {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((response) => {
            if (response.data.data.length == 0) {
                setTotalTotalInvest(
                    { totalUnit: 0 }
                )
            }
            else {
                setTotalTotalInvest(response.data.data[0])
            }


        }).catch((e) => {

        })

        axios.get('http://localhost:90/totalSold', {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((response) => {
            if (response.data.data.length == 0) {
                setTotalTotalSold(
                    { totalUnit: 0 }
                )
            }
            else {
                setTotalTotalSold(response.data.data[0])
            }


        }).catch((e) => {

        })
        axios.get('http://localhost:90/currentAmount', {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((response) => {
            if (response.data.data.length == 0) {
                setTotalcurrentAmount(
                    { totalUnit: 0 }
                )
            }
            else {
                setTotalcurrentAmount(response.data.data[0])
            }


        }).catch((e) => {

        })


        axios.get('http://localhost:90/OverAllprofit', {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((response) => {
            if (response.data.data.length == 0) {
                setProfit(
                    { totalUnit: 0 }
                )
            }
            else {
                setProfit(response.data.data[0])
            }

        }).catch((e) => {
            console.log(e)
        })

    }, []);

    const changeHandlerBUY = (e) => {
        setSearchBUY(
            e.target.value
        )

    }
    const changeHandler = (e) => {
        setSearchSell(
            e.target.value
        )

    }
    return (
        <div>
            <div className="container shadow my-5">
                <div className="card">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card-body">
                                <h5 className="card-title">Dashboard</h5>
                            </div>
                            <hr></hr>
                            <div className="card-body">
                                <h4 style={{ color: '#51127F', fontWeight: 'bolder', marginTop: '10px' }}>Total Unit :  <span style={{ color: '#BF3A89', fontWeight: 'bolder', marginTop: '10px' }}>{TotalUnit.totalUnit}</span></h4>
                            </div>
                            <hr></hr>
                            <div className="card-body">
                                <h4 style={{ color: '#51127F', fontWeight: 'bolder', marginTop: '10px' }}>Sold Amount :  <span style={{ color: '#BF3A89', fontWeight: 'bolder', marginTop: '10px' }}>{TotalSold.totalUnit}</span></h4>
                            </div>
                            <hr></hr>
                            <div className="card-body">
                                <h4 style={{ color: '#51127F', fontWeight: 'bolder', marginTop: '10px' }}>Over All Profit :  <span style={{ color: '#BF3A89', fontWeight: 'bolder', marginTop: '10px' }}>{profit.totalUnit}</span></h4>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5">
                            <div className="card-body mt-5">
                                <h4 style={{ color: '#51127F', fontWeight: 'bolder', marginTop: '10px' }}>Total Investments :  <span style={{ color: '#BF3A89', fontWeight: 'bolder', marginTop: '10px' }}>{TotalInvest.totalUnit}</span></h4>
                            </div>
                            <hr></hr>
                            <div className="card-body">
                                <h4 style={{ color: '#51127F', fontWeight: 'bolder', marginTop: '10px' }}>Current Amount :  <span style={{ color: '#BF3A89', fontWeight: 'bolder', marginTop: '10px' }}>{currentAmount.totalUnit}</span></h4>
                            </div>
                            <hr></hr>
                        </div>
                    </div>

                    <hr></hr>

                </div>





                <div className="row">
                    <div className="col-md-6">
                        <h2 style={{ color: '#51127F', fontWeight: 'bolder', marginTop: '10px' }}>Your Stocks  <span style={{ color: '#BF3A89', fontWeight: 'bolder', marginTop: '10px' }}>Are Here !!!</span></h2>

                    </div>
                    <div className="col-md-6 my-5">
                        <InputGroup>
                            <FormControl name="search" onChange={changeHandlerBUY}
                                placeholder="Enter the Name of the Stock"
                            />
                            <Button variant="outline-secondary">Search</Button>
                        </InputGroup>
                    </div>

                </div>
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>S.N</th>
                            <th>Stock Name</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                            <th>Transaction Type</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            stock.filter((Value) => {
                                if (searchValueBuy == "") {
                                    return Value
                                } else if (Value.stockName.toLowerCase().includes(searchValueBuy.toLowerCase())) {
                                    return Value
                                }
                            }).map((stock, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{stock.stockName}</td>
                                    <td>{stock.Unit}</td>
                                    <td>{stock.amount}</td>
                                    <td>{stock.type}</td>
                                    <td>{stock.date}</td>
                                    <td ><Button style={{ backgroundColor: '#BF3A89', border: 'none', margin: '2px', textAlign: 'center' }} href={"/viewSell/" + stock._id} variant="primary">Sell</Button>
                                        <Button style={{ backgroundColor: '#BF3A89', border: 'none', textAlign: 'center' }} href={"/StockView/" + stock._id} variant="primary">View</Button></td>
                                </tr>

                            ))
                        }
                    </tbody>
                </Table>

            </div>

            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h2 style={{ color: '#51127F', fontWeight: 'bolder', marginTop: '10px' }}>Your  Sold Stocks  <span style={{ color: '#BF3A89', fontWeight: 'bolder', marginTop: '10px' }}>Are Here !!!</span></h2>

                    </div>
                    <div className="col-md-6 my-5">
                        <InputGroup>
                            <FormControl name="search" onChange={changeHandler}
                                placeholder="Enter the Name of the Stock"
                            />
                            <Button variant="outline-secondary">Search</Button>
                        </InputGroup>
                    </div>

                </div>
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>S.N</th>
                            <th>Stock Name</th>
                            <th>Quantity</th>
                            <th>Sold Value</th>
                            <th>Transaction Type</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            SellStock.filter((Value) => {
                                if (searchValueSell == "") {
                                    return Value
                                } else if (Value.stockName.toLowerCase().includes(searchValueSell.toLowerCase())) {
                                    return Value
                                }
                            }).map((stock, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{stock.stockName}</td>
                                    <td>{stock.Unit}</td>
                                    <td>{stock.amount}</td>
                                    <td>{stock.type}</td>
                                    <td>{stock.date}</td>
                                </tr>

                            ))
                        }
                    </tbody>
                </Table>

            </div>
        </div>



    )
}

export default Dashboard;

