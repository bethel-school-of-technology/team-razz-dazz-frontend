import { useEffect, useState } from "react";
// Admin Order List
const AdminOrders = function() {
    const [ adminOrders, setAdminOrders ] = useState([])

    useEffect(() => {
        setAdminOrders([
            {
                firstName: 'Mathew',
                lastName: 'Lukacs',
                email: 'email@email.com',
                phoneNumber: '845-555-5555',
                address: '3 cookie Rd',
                orderSummary: 'chocchip',
                id: 1
            },
            {
                firstName: 'Mathew',
                lastName: 'Lukacs',
                email: 'email@email.com',
                phoneNumber: '845-555-5555',
                address: '3 cookie Rd',
                orderSummary: 'chocchip',
                id: 2
            },
            {
                firstName: 'Mat',
                lastName: 'Lukacs',
                email: 'email@email.com',
                phoneNumber: '845-555-5555',
                address: '3 cookie Rd',
                orderSummary: 'chocchip',
                id: 3
            }
        ]);
    }, [adminOrders]);

    return (
        <div>
            <h1>Orders</h1>
                { adminOrders.map(order => 
                    <div>
                        <h2>{order.firstName}</h2>
                        <p>lastName: {order.lastName}</p>
                        <p>Email: {order.email}</p>
                        <p>Phone Number: {order.phoneNumber}</p>
                        <p>Address: {order.address}</p>
                        <p>Order Summary: {order.orderSummary}</p>
                    </div>
                )}
        </div>
    );
}

export default AdminOrders;