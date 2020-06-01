import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CollectionsOverviewContainer from "../../components/collection-overview/collection-overview.container";
// import {
//   convertCollectionSnapshotToMap,
//   firestore,
// } from "../../firebase/firebase.utils";
import { fetchCollectionStart } from "../../redux/shop/shop.actions";
import CollectionPageContainer from "../collection/collection.container";

class ShopPage extends React.Component {
  // state = {
  //   loading: true,
  // };

  // unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionStart } = this.props;
    fetchCollectionStart();

    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection("collections");

    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
    //   async (snapshot) => {
    //     const collectionMap = convertCollectionSnapshotToMap(snapshot);
    //     updateCollections(collectionMap);
    //     this.setState({ loading: false });
    //   }
    // );

    // collectionRef.get().then((snapshot) => {
    //   const collectionMap = convertCollectionSnapshotToMap(snapshot);
    //   updateCollections(collectionMap);
    //   this.setState({ loading: false });
    // });

    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/crwn-db-1c904/databases/(default)/documents/collections"
    // )
    //   .then((response) => response.json())
    //   .then((collections) => console.log(collections));
  }

  render() {
    const { match } = this.props;
    // const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          // exact
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // updateCollections: (collectionMap) =>
  //   dispatch(updateCollections(collectionMap)),
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
