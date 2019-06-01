import React from 'react';
import {shallow} from 'enzyme'; //2.
// 1. import ReactShallowRenderer from 'react-test-renderer/shallow';
// 3. import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';
//react-test-renderer

test('should render Header correctly', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();

   //3(removed import bc added serializer to setupTestsfile/auto running toJSON now). expect(toJSON(wrapper)).toMatchSnapshot();

    //2 (enzyme). expect(wrapper.find("h1").text()).toBe("Expensify");
   
    // 1(ReactShallowRenderer). const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();

    //console.log(renderer.getRenderOutput());
});