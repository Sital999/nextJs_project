import {render,screen,waitFor} from '@testing-library/react'
import user from '@testing-library/user-event'
import QuizPage from '.'
import {Provider} from 'react-redux'
import {store} from "../../store/store"

describe('QuizPage',()=>{
    test('render intial text components',()=>{
        const Wrapper = ({ children }) => (
          <Provider store={store}>{children}</Provider>
        );
        render(<QuizPage/>,{wrapper:Wrapper})
        const textElement=screen.getByRole("heading",{name:/wanna play quiz click below:/i}) 
        expect(textElement).toBeInTheDocument()
        const btnElement1 = screen.getByRole("button", { name: "Play Quiz" });
        expect(btnElement1).toBeInTheDocument()
    })

    test('render after clicking btn Play Quiz',async()=>{
        // for user-event
        user.setup()
        // for provider
        const Wrapper = ({ children }) => (
          <Provider store={store}>{children}</Provider>
        );

        render(<QuizPage />, { wrapper: Wrapper });
        screen.debug()

        const btnElement = screen.getByRole("button", { name: "Play Quiz" });

        user.click(btnElement)


        const btnElement1=await screen.findByRole("button", { name: "Play Again"})
        expect(btnElement1).toBeInTheDocument()
        screen.debug();

        const loadinText=await screen.findByRole('heading',{level:2})
        expect(loadinText).toHaveTextContent('...Loading')


    })
})