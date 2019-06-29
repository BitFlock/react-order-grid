import React from "react";
import OfferCard from "./OfferCard";

import * as offerActions from "../actions/offerActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

class OfferGrid extends React.Component {

    componentDidMount() {
        this.props.actions.getOffers();
    }

    handleChange = event => {
        this.props.actions.sortOffersBy(event.target.value);
    }

    renderCards = () => {
        const cards = this.props.offers.map(offer => <OfferCard key={offer.id} name={offer.description} image={offer.images.medium} price={offer.prices.payablePrice.amount} />);
        return <div className="OfferGrid">{cards}</div>;
    }

    render() {
        return (
            <div>
                <div style={{display: "flex", alignItems: "center"}}>
                    <InputLabel htmlFor="sortBy" style={{margin: 15}}>Sort by</InputLabel>
                    <Select
                        value={this.props.sortBy}
                        onChange={this.handleChange}
                        inputProps={{
                            name: "sortBy",
                            id: "sortBy",
                        }}
                    >
                        <MenuItem value="popularity">Popularity</MenuItem>
                        <MenuItem value="name">Name</MenuItem>
                        <MenuItem value="price">Price</MenuItem>
                    </Select>
                </div>
                {this.renderCards()}
            </div>
        );
    }
}
    
const mapStateToProps = state => ({
    offers: state.offers.slice().sort((a, b) => a.sortIndexes[state.sortBy] - b.sortIndexes[state.sortBy]),
    sortBy: state.sortBy
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({},
        offerActions
    ), dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OfferGrid);