import React from 'react'
import Navigation from './Navigation'
import { Card, Table } from 'react-bootstrap'

export default function Leaderboard() {
    return (
        <div>
            <Navigation />
            <div className="mt-5">
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Username</th>
                    <th>W</th>
                    <th>L</th>
                    <th>D</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Adam</td>
                    <td>2</td>
                    <td>1</td>
                    <td>3</td>
                    </tr>
                    <tr>
                    <td>random123</td>
                    <td>2</td>
                    <td>33</td>
                    <td>2</td>
                    </tr>
                    <tr>
                    <td>thiser3</td>
                    <td>77</td>
                    <td>61</td>
                    <td>1</td>
                    </tr>
                </tbody>
                </Table>
            </div>
        </div>
    )
}
