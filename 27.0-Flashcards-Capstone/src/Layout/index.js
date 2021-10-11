import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Components/Home";
import CreateDeck from "../Components/DeckStuff/CreateDeck";
import StudyDeck from "../Components/DeckStuff/StudyDeck";
import ViewDeck from "../Components/DeckStuff/ViewDeck";
import AddCard from "../Components/CardStuff/AddCard";
import { Route, Switch, Redirect } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            {/* shows a list of decks with options to create, study, view, or delete a deck*/}
            <Home />
          </Route>
          <Route exact path="/decks">
            <Redirect to="/" />
          </Route>

          <Route path="/decks/new">
            {/* route for creating a new deck */}
            <CreateDeck />
          </Route>

          <Route exact path="/decks/:deckId">
            {/* route to view a specified deck */}
            <ViewDeck />
          </Route>

          <Route path="/decks/:deckId/study">
            {/* route to deck study home page */}
            <StudyDeck />
          </Route>

          <Route path="/decks/:deckId/cards/new">
            {/* route to add a new card to a specific deck */}
            <AddCard />
          </Route>

          <NotFound />
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
