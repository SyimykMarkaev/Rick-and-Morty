import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import "./styles.css";
import Characters from "./components/Characters";

export default function App() {
  // const [characters, setCharacters] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  const characterReducer = (state, action) => {
    switch (action.type) {
      case "INIT_SET_CHARACTERS":
        return {
          ...state,
          isLoading: true
        };
      case "SET_CHARACTERS":
        return {
          ...state,
          isLoading: false,
          data: action.payload
        };
      case "DELETE_CHARACTERS":
        return {
          ...state,
          data: state.data.filter((el) => el.id !== action.payload.id)
        };
      default:
        return state;
    }
  };

  const [characters, dispatchCharacters] = useReducer(characterReducer, {
    data: [],
    isLoading: false
  });

  const api = "https://rickandmortyapi.com/api/character";
  useEffect(() => {
    dispatchCharacters({
      type: "INIT_SET_CHARACTERS"
    });
    // setIsLoading(true);
    axios
      .get(api)
      .then((res) => {
        dispatchCharacters({
          type: "SET_CHARACTERS",
          payload: res.data.results
        });
      })
      // .then(setIsLoading(false))
      .catch((e) => console.log(e));
  }, []);

  const handleItemDelete = (item) => {
    // setCharacters(characters.filter((el) => el.id !== item.id));
    dispatchCharacters({
      type: "DELETE_CHARACTERS",
      payload: item
      // })
    });
  };

  return (
    <div className="App">
      {characters.isLoading ? (
        "Loading"
      ) : (
        <div>
          <h1>Rick and Morty</h1>
          <Characters
            characters={characters.data}
            handleItemDelete={handleItemDelete}
          />
          <iframe src="https://learn.seytech.co/courses"></iframe>
          <iframe src="https://www.youtube.com/"></iframe>
          <iframe src="https://docs.google.com/spreadsheets/d/17i1VrbT09sPZtY9jNELHm-8bGjppp9y1N1yoBIcFTNA/edit#gid=1931078467"></iframe>
        </div>
      )}
    </div>
  );
}
