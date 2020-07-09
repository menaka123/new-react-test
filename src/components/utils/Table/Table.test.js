import React from 'react'
import {shallow} from 'enzyme'
import Table from "./index";
import { csv } from 'd3'

describe('<Table />', () => {
    const title = 'my title';

    it('renders title msg', () => {
        const wrapper = shallow(<Table title={title}/>);
        expect(wrapper.find('h2').text()).toBe(title);
    })

    it('renders rows correctly', () => {
        const wrapper = shallow(<Table title={title}/>);
        csv('./users.csv').then(res => {
            wrapper.setProps({ data: res });
            expect(wrapper.find('tr')).toHaveLength(100);
        })
    })

    // it('renders total correctly', () => {
    //     const wrapper = shallow(<Ticket/>);
    //     expect(wrapper.find('h3').text()).toBe('0');
    //     wrapper.find('button').simulate('click');
    //     expect(wrapper.find('h3').text()).toBe('1');
    // })
});