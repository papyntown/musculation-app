import "@/styles/globals.css";
import "@/styles/index.scss";
import { Provider } from "react-redux";
import reduxStore from "../app/store";

export default function App({ Component, pageProps }) {
    return (
        <Provider store={reduxStore}>
            <Component {...pageProps} />
        </Provider>
    );
}
