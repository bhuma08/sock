import App from "../App";
// import { mount } from 'enzyme';
// import { MemoryRouter } from 'react-router';
// import About from "../Containers/About"

describe('App', () => {
  let component
  
  beforeEach(() => {
      component = shallow(<App />);
  })

  test("it renders", () => {
      expect(component.find('#app')).toHaveLength(1);
  });

  // test("valid path", ()=> {
  //   const wrapper = mount(
  //     <MemoryRouter initialEntries = {["/about"]}>
  //       <App/>
  //     </MemoryRouter>
  //   )

  // expect(wrapper.find(About)).toHaveLength(1)
  // })
})
