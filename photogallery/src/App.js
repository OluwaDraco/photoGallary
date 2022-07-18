import React, { Component } from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import axios from "axios";
import "./App.css";

import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import PhotoList from "./components/PhotoList";
import key from "./config/Config";

export default class App extends Component {
    state = {
        pictures: [],
    };

    componentDidMount() {
        this.querySearch();
    }
    querySearch = async (query = "cats") => {
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
                <Nav />
                <SearchForm onSearch={this.querySearch} />
                <BrowserRouter>
                <Routes>
                <Route path="/" element={Nav} />
                <Route path="/search" render={()=> <PhotoList data={this.state.pictures} key={this.state.pictures.id}/>} />
                </Routes>
                </BrowserRouter>
            </div>
        );
    }
}
