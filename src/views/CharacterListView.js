import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";

// import actions
import { fetchingPeople } from "../actions/";

class CharacterListView extends React.Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
        this.props.fetchingPeople();

        // call our action
    }

    render() {
        if (this.props.fetching) {
            // return something here to indicate that you are fetching data
        }
        return (
            <div className="CharactersList_wrapper">
                <CharacterList characters={this.props.characters} />
            </div>
        );
    }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
    return {
        characters: state.charsReducer.characters,
        fetching: state.charsReducer.fetching
    };
};

export default connect(
    mapStateToProps, { fetchingPeople } /* mapStateToProps replaces null here */

    )(CharacterListView);
    
    /* action creators go here--- Keep on page for reference VISUAL  */