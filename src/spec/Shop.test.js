import Shop from "../Containers/Shop"

describe ("Shop", () => {
    let component;

    beforeEach(() => {
        component = shallow(<Shop/>)
    })

    test ("it renders", () => {
        expect(component.find("#shop").text()).toEqual("This is the Shop Page!")
    })
})