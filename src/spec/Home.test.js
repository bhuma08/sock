import Home from "../Containers/Home"

describe ("Home", () => {
    let component;

    beforeEach(() => {
        component = shallow(<Home/>)
    })

    test ("it renders", () => {
        expect(component.find("#home").text()).toEqual("This is the Home Page!")
    })
})