import Review from "../Components/Review"

describe('Review', () => {
    let component, reviewInput, submit;
    const fakeEvent = { preventDefault: () => "do nothing" };

    beforeEach(() => {
        component = shallow(<Review/>);
    });

    test("updates state when a user enters input", () => {
        reviewInput = component.find('#reviewInput');
        reviewInput.simulate("change", {target: {value: "B"}});
        expect(component.state('review')).toBe("B");
    });

    test("clears user input after submission", () => {
        reviewInput = component.find('#reviewInput');
        reviewInput.simulate("change", {target: {value: "Beth"}})
        submit = component.find("#submit")
        submit.simulate("click", fakeEvent);
        expect(reviewInput.props().value).toBe(" ");
      });
    


})