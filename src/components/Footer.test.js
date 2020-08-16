import React from 'react';
import {shallow} from 'enzyme';
import Footer  from './Footer';

it('Debe devolver un numero telefonico de servicio al cliente', () => {
const wrapper = shallow(<Footer />);
const span = wrapper.find('span');
const result = span.text();

 expect(result).toBe('Customer Service: 1-800-555-444')
})
