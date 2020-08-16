import React from "react";
import {shallow} from 'enzyme';
import App from './App';
import Ticket from './components/Ticket';
import Footer from './components/Footer';

it( "DeBe hacer el render de los compoentes hijos Footer y Ticket" , () => {

      const wrapper = shallow(<App />);
      const footer = wrapper.find(Footer);
      const ticket = wrapper.find(Ticket);


      expect(footer.exists()).toBe(true);
      expect(ticket.exists()).toBe(true);

})
