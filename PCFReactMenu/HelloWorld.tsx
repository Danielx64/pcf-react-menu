import * as React from 'react';
import { IInputs } from "./generated/ManifestTypes";
import { Nav,INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';


export interface IHelloWorldProps {
  name?: string;
}

export class HelloWorld extends React.Component<IHelloWorldProps> {
  private _textcolour: string;
	private _bgcolour: string;
	private _menuitems: string;
  context: ComponentFramework.Context<IInputs>
  menuitems = this.context.parameters.menuitems.raw;
  bgcolour = this.context.parameters.backgroundcolour.raw;
  textcolour  = this.context.parameters.textcolour.raw;
  navStyles: Partial<INavStyles> = {
    root: {
      width: 208,
      height: 350,
      boxSizing: 'border-box',
      border: '1px solid #eee',
      overflowY: 'auto',
      backgroundColor: this.context.parameters.backgroundcolour.raw,
    },
  };
  navLinkGroups: INavLinkGroup[] = [
  
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
  public render(): React.ReactNode {

   return <Nav ariaLabel="Nav example with nested links" styles={this.navStyles} groups={this.navLinkGroups} />;
  }
}
