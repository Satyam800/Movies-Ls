import { render } from "@testing-library/react";
import Header from "../Header"
import {Provider} from "react-redux"
import store from "../Store"
import {StaticRouter} from "react-router-dom/server"
test("header component",()=>{
   const header= render(
    <StaticRouter>
        <Provider store={store}>
        <Header/>
    </Provider>
    </StaticRouter>
    )
    console.log(header);
})