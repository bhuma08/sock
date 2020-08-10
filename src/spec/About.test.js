import About from "../Containers/About"

describe ('About', ()=> {
    let component, userInput, submit, addNewSock;
    let fakeEvent = { preventDefault: () => "do nothing" }; 


    beforeEach(() => {
        let list = [
            "Socks= The orugin of the word",
            "Rock those socks",
            "Clocking on",
            "The divorce rate among my sock is astonishing!",
            "90% of my socks are single but I don't see them crying"
        ]

        addNewSock = jest.fn()

        component = shallow(<About.WrappedComponent socksayings={list} addNewSock={addNewSock}/>)
    })

    test ("it remders a list item for each thing", () => {
        expect(component.find("li")).toHaveLength(5)
    });

    test("it should contain Clocking on", ()=>{
        expect(component.find('ul').text()).toContain('Clocking on')
    });

    //functions

    test("user input", ()=>{
        userInput = component.find("#saying")
        userInput.simulate("change", {target: {value: "hello"}});
        expect(component.state("userInput")).toBe("hello")
    });

    test("clears user input after submission", () => {
        userInput = component.find('#saying')
        submit = component.find('#submit')
        userInput.simulate("change", {target: {value: "hello"}});
        submit.simulate("click", fakeEvent);
        expect(userInput.props().value).toBe(" ");
    });

    test("calls on addNewSock passing the input on submission", () => {
        userInput = component.find('#saying')
        submit = component.find('#submit')
        userInput.simulate("change", {target: {value: "chickpeas"}});
        submit.simulate("click", fakeEvent);
        expect(addNewSock.mock.calls.length).toBe(1);
        expect(addNewSock.mock.calls[0][0]).toBe('chickpeas');
    });

    // test("calls on deleteNewSock", ()=> {
    //     deleteUserInput = component.find("#deleteSaying")
    //     deleteUserInput.simulate("click", fakeEvent)

    // })
})