import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import "./styles.css";

function App() {
    return (
        <div className="App">
            <h1>Contact Us</h1>
            <Formik
                initialValues={{ name: "", email: "" }}
                onSubmit={async (values) => {
                    await new Promise((resolve) => setTimeout(resolve, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <Field name="name" type="text" />
                    <Field name="email" type="email" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
