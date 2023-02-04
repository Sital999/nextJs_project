import {render,screen} from "@testing-library/react"
import Navbar from "./navbar"

describe('Navbar',()=>{
    test("display 'Quiz' as Navbar and is clickable",()=>{
        render(<Navbar/>)
        const linkElement=screen.getByRole('link',{name:/quiz/i})
        expect(linkElement).toBeInTheDocument()
        expect(linkElement).toHaveAttribute('href','/')
        2
    });
})