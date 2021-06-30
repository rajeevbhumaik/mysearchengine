import React from "react";
import BarSearch from "./BarSearch";
//import data from "../data.json";
import "../css/Search.css";
import logo from "../images/googlelogo.png";
import SearchIcon from "@material-ui/icons/Search";
import ImageIcon from "@material-ui/icons/Image";
import DescriptionIcon from "@material-ui/icons/Description";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { searchURL } from "../API/URL";

function Search() {
  const search_val = useSelector((state) => state.reducer);

  //console.log("data", data);
  const [response, setResponse] = useState("");
  //const [search, setSearch] = useState(search_val.search_value);

  const getData = async (searchValue) => {
    console.log("Search Value", searchValue);
    if (searchValue) {
      fetch(searchURL + searchValue)
        .then((res) => res.json())
        .then(
          (data) => {
            setResponse(data);
            console.log("response.items", data.items);
            //return response;
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {}
        );
    }
  };

  useEffect(() => {
    getData(search_val.search_value);
  }, [search_val.search_value]);

  return (
    <div className="search_page">
      <div className="Search_Header">
        <div className="search_logo">
          <Link to="/">
            <img src={logo} alt="google" />
          </Link>
        </div>
        <div className="input_bar">
          <BarSearch visible={false}></BarSearch>
        </div>

        <div className="search_options">
          <div className="search_options_right">
            <div className="searchpage_option">
              <SearchIcon />
              <Link to="/all"> All</Link>
            </div>
            <div className="searchpage_option">
              <LocalOfferIcon />
              <Link to="/shopping"> Shopping</Link>
            </div>
            <div className="searchpage_option">
              <ImageIcon />
              <Link to="/images"> Images</Link>
            </div>
            <div className="searchpage_option">
              <DescriptionIcon />
              <Link to="/news"> News</Link>
            </div>
            <div className="searchpage_option">
              <OndemandVideoIcon />
              <Link to="/videos">Videos</Link>
            </div>
            <div className="searchpage_option">
              <MoreVertIcon />
              <Link to="/more">More</Link>
            </div>
          </div>
          <div className="search_options_left">
            <div className="searchpage_option">
              <Link to="/settings">Settings</Link>
            </div>
            <div className="searchpage_option">
              <Link to="/tools">Tools</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="no_results">
        <p>
          {response ? (
            `About ${response?.queries.request[0].totalResults} results (${response?.searchInformation.formattedSearchTime} seconds)`
          ) : (
            <span></span>
          )}
        </p>
      </div>
      <div className="Info">
        {response ? (
          response?.items.map((val, index) => {
            return (
              <div className="searchpage_result" key={index}>
                <a id="url" href={val.link}>
                  {val.displayLink}
                  <ArrowDropDownIcon id="arrow" />
                </a>
                <br />
                <a id="title" href={val.link}>
                  {val.title}
                </a>
                <p id="snipet">{val.snippet}</p>
              </div>
            );
          })
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
}

export default Search;
