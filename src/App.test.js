import React from "react";
import {render,fireEvent, waitFor} from "@testing-library/react";

import App from './App'

test("App fetches episodes data and render data", async()=>{

    const {getByText, queryAllByText} = render(<App />);
    const Dropdown = getByText(/select a season/);
    fireEvent.click(Dropdown);

    await waitFor(()=> {
        expect(queryAllByText(/Chapter/).toHaveLength(1))
    })
})