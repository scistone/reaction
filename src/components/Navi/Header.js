import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row} from "reactstrap";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions";

class Header extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <Container>
        <Row>
          LOGO SEARCH USER AREA
        </Row>
        <Row>
          NAVBAR
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory:  bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getProducts : bindActionCreators(productActions.getProducts,dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);