import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";

import PhotoList from "./components/PhotoList";
import Home from "./components/Home"
import key from "./config/Config";
import Header from "./components/Header";

export default class App extends Component {
    state = {
        pictures: [],
    };

    componentDidMount() {
        this.querySearch();
    }
    querySearch = async (query="cats") => {
        await axios
            .get(
                `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&page=1&format=json&nojsoncallback=1`
            )
            .then((responseData) =>
                this.setState({ pictures: responseData.data.photos.photo })
            )
            .catch((error) => {
                console.error(
                    "there was a problem getting the data",
                    error.status
                );
            });
    };

    render() {
        return (
         <div className="container">
         <Router>
            
            <Header  onSearch={this.querySearch}/>
            
            <Routes>
            <Route path="/" render={()=><Home />} />
            <Route path="/:query" element={ <PhotoList data={this.state.pictures} key={this.state.pictures.id}/>} />
            </Routes>
            </Router>
        </div>
        )
    }
}
