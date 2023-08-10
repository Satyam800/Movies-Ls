import {render} from "@testing-library/react"
import Body from "../Body"
import store from "../Store"
import { Provider } from "react-redux"
import {StaticRouter} from "react-router-dom/server"

test("search test",()=>{
    <StaticRouter>
        <Provider>
            <Body/>
        </Provider>
    </StaticRouter>
})