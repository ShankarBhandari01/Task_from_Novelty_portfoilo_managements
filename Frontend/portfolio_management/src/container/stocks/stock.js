import { useEffect, useState } from "react";
import axios from 'axios';
import { Button, Table, FormControl, InputGroup } from 'react-bootstrap';
import Header from '../../header/header';

const Stock = () => {
    const [searchValue, setSearch] = useState([]);
    const [stock, setStock] = useState([]);
    useEffect(() => {

        axios.get('http://localhost:90/AllStock', {
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

    }, []);

    const changeHandler = (e) => {
        setSearch(
            e.target.value
        )

    }
    return (
        <div>
            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h2 style={{ color: '#51127F', fontWeight: 'bolder', marginTop: '10px' }}>Your pending  <span style={{ color: '#BF3A89', fontWeight: 'bolder', marginTop: '10px' }}>Stocks</span></h2>
                        <p style={{ color: '#BF3A89', fontWeight: 'bold' }}>for you to see and exprolor !!!</p>
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
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            stock.filter((Value) => {
                                if (searchValue == "") {
                                    return Value
                                } else if (Value.stockName.toLowerCase().includes(searchValue.toLowerCase())) {
                                    return Value
                                }
                            }).map((stock, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{stock.stockName}</td>
                                    <td>{stock.quantity}</td>
                                    <td>{stock.amount}</td>
                                    <center><td ><Button style={{ backgroundColor: '#BF3A89', border: 'none', textAlign: 'center' }} href={"/view/"+stock._id} variant="primary">Buy</Button></td> </center>
                                </tr>

                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>



    )
}

export default Stock;

