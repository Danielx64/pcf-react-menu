import * as React from 'react';
import { Label } from '@fluentui/react';
import { Nav,INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';
const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    height: 350,
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
  },
};
const navLinkGroups: INavLinkGroup[] = [
  
  {
    links: [
      {
        name: 'Child link 1',
        url: 'http://example.com',
        target: '_blank',
      },
      {
        name: 'Parent link 1',
        url: '',
        target: '_blank',
        expandAriaLabel: 'Show more Parent link 1',
        links: [
          {
            name: 'Child link 1',
            url: 'http://example.com',
            target: '_blank',
          },
          {
            name: 'Child link 2',
            url: 'http://example.com',
            target: '_blank',
            expandAriaLabel: 'Show more Child link 2',
            links: [
              {
                name: '3rd level link 1',
                url: 'http://example.com',
                target: '_blank',
              },
              {
                name: '3rd level link 2',
                url: 'http://example.com',
                target: '_blank',
              },
            ],
          },
          {
            name: 'Child link 3',
            url: 'http://example.com',
            target: '_blank',
          },
        ],
        isExpanded: false,
      },
      {
        name: 'Parent link 2',
        url: 'http://example.com',
        target: '_blank',
        expandAriaLabel: 'Show more Parent link 2',
        links: [
          {
            name: 'Child link 4',
            url: 'http://example.com',
            target: '_blank',
          },
        ],
      },
    ],
  },
];
export interface IHelloWorldProps {
  name?: string;
}

export class HelloWorld extends React.Component<IHelloWorldProps> {
  public render(): React.ReactNode {

   return <Nav ariaLabel="Nav example with nested links" styles={navStyles} groups={navLinkGroups} />;
  }
}
