import React, {useState} from 'react';
// import {Link} from 'react-router-dom';

export default function Navbar() {
    return <div id="nav">
        <head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css" />
        </head>
        <container>
            <span class="glyphicon glyphicon-home" align="left"></span>
            <site-title>
                <a href="/">LikeHome</a>
            </site-title>
            <navitem>
                <a href="/">MyBookings</a>
            </navitem>
        </container>
        <container>
            <navitem>
                <a href="/"><b>Login</b></a>
            </navitem>
            <navitem>
                <button type="button"> Create an Account </button>
            </navitem>
        </container>
    </div>
}