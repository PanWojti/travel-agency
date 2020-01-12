import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate correct image link', () => {
    const expectedImage = '/trip/abc';
    const expectedTags = ['beach'];
    const component = shallow(<TripSummary id='abc' tags={expectedTags} image='exampleImage' name='exampleName'/>);
    expect(component.find('.link').prop('to')).toEqual(expectedImage);
    //console.log(component.debug());
  });
  it('should render correct image src and alt props', () => {
    const expectedSrc = 'exampleImage';
    const expectedAlt = 'exampleName';
    const expectedTags = ['beach'];
    const component = shallow(<TripSummary tags={expectedTags} image='exampleImage' name='exampleName'/>);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });
  it('should render correct name, cost and days props', () => {
    const expectedName = 'exampleName';
    const expectedCost = '5';
    const expectedDays = 10;
    const expectedTags = ['beach'];
    const component = shallow(<TripSummary tags={expectedTags} name={expectedName} cost={expectedCost}  days={expectedDays} />);
    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details span').at(0).text()).toEqual(`${expectedDays} days`);
    expect(component.find('.details span').at(1).text()).toEqual(`from ${expectedCost}`);
    //console.log(component.debug());
  });
  it('should throw error without required props', () => {
    const expectedTags = ['beach'];
    expect(() => shallow(<TripSummary tags={expectedTags} />)).toThrow();
  });
});
