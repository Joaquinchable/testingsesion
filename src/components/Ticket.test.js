import React from 'react';
import {shallow} from 'enzyme';
import Ticket from './../components/Ticket';

it("Debe de devolver el incremento del evento cuando se haga un click al boton", () => {

 const wrapper = shallow(<Ticket />);
 const tota1 = wrapper.find("h2.total").text() 
 expect(tota1).toBe("0")

 const button = wrapper.find("button");

 button.simulate("click");
 button.simulate("click");
 button.simulate("click");

 const total2 = wrapper.find("h2.total").text();

 expect(total2).toBe("3")

})

it("Nos debe devolver un props", () => {

    const wrapper = shallow(<Ticket name={"Super Bolw Tickets"} />);
    const title = wrapper.find("h2.title").text() 
    expect(title).toBe("Super Bolw Tickets")
   
 })


