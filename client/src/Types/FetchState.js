import union from "folktale/adt/union/union";

const FetchState = union("FetchState", {
    PreFetch: () => ({}),
    Fetched: value => ({ value }),
    Fail: error => ({ error })
});

export default FetchState;
