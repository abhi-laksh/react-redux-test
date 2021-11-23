import React from 'react';
import { Provider } from "react-redux";
import Form from "./components/Form";
import View from "./components/View";
import { store } from "./redux/store";

function App() {

    const [data , setData ] = React.useState({})

    const handleSubmit = (values) => {

        console.log("values", values)
        setData(values)

    }

    return (
        <Provider store={store}>
            
            <Form onSubmit={handleSubmit} />

            <View data={data} />
        </Provider>
    );
}

export default App;
