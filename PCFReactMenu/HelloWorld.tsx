import * as React from 'react';
import { Label } from '@fluentui/react';
import { Nav, INavLinkGroup } from '@fluentui/react/lib/Nav';

const navLinkGroups: INavLinkGroup[] = [
  {collapseByDefault:false,
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

   return <Nav ariaLabel="Nav example with nested links" groups={navLinkGroups} />;
  }
}
