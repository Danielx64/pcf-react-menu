import * as React from 'react';
import { Nav,INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';
import { decode } from "base64-arraybuffer";

const BASE64_MARKER = ";base64,";

export interface IHelloWorldProps {
  name?: string;
  textcolour?:string;
  backgroundcolour?:string;
  itemsdata?:Object;
}

export class HelloWorld extends React.Component<IHelloWorldProps> {
  private convertStringToArray = (pdfString: string) => {    
    const BASE64_MARKER = ";base64,";
    const base64Index = pdfString.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
    const base64 = pdfString.substring(base64Index);
    return decode(base64)   
  };
  public dataSet = this.context.parameters.menuitems?.raw || "{'links': [    {   'name': '3rd level link 1',    'url': 'http://example.com',      'target': '_blank'    }  ]}";
  public dataSetObject = JSON.parse(this.dataSet); 
  public docxFilled = this.convertStringToArray(this.dataSetObject!)
  navStyles: Partial<INavStyles> = {
    root: {
      width: 208,
      height: 350,
      boxSizing: 'border-box',
      border: '1px solid #eee',
      overflowY: 'auto',
      background:this.props.backgroundcolour,
    },
    // these link styles override the default truncation behavior
    link: {
      whiteSpace: 'normal',
      lineHeight: 'inherit',
      color:this.props.textcolour,
    },
  };
  navLinkGroups: INavLinkGroup[] = [

 this.dataSetObject

  ];
  public render(): React.ReactNode {

   return <Nav ariaLabel="Nav example with nested links" styles={this.navStyles} groups={this.navLinkGroups} />;
  }
}