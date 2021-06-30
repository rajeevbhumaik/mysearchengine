import React from "react";
import "../css/Bar_Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { search_value } from "../service/actions";

function BarSearch(props) {
  //console.log("props", props.visible);

  const dispatch = useDispatch();

  const [search_val, setSearch_val] = useState("");
  //const [isbtnVisible, setisbtnVisible] = useState(true);
  const history = useHistory();
  function search(e) {
    e.preventDefault();
    if (search_val) {
      dispatch(search_value(search_val));
      history.push("/search");
    }
  }

  return (
    <>
      <form className="home_search">
        <div className="searchbar">
          <div className="searchIcon">
            <SearchIcon />
          </div>
          <div className="searchInput">
            <input
              type="text"
              value={search_val}
              onChange={(e) => setSearch_val(e.target.value)}
              placeholder="Search Google or type a URL"
            ></input>
          </div>
          <div className="micIcon">
            <MicIcon />
          </div>
        </div>
        {props.visible ? (
          <Button className="btn_submit" type="submit" onClick={search}>
            Search
          </Button>
        ) : (
          <Button className="btn_submit_hide" type="submit" onClick={search}>
            Search
          </Button>
        )}
      </form>
    </>
  );
}

export default BarSearch;
