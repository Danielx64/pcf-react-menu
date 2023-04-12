import * as React from 'react';
import { Nav,INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';
import { decode } from "base64-arraybuffer";

const BASE64_MARKER = ";base64,";

export interface IHelloWorldProps {
  name?: string;
  textcolour?:string;
  backgroundcolour?:string;
  dataSet?:string;
}

export class HelloWorld extends React.Component<IHelloWorldProps> {
  
  private convertStringToArray = (pdfString: string) => {    
    const BASE64_MARKER = ";base64,";
    const base64Index = pdfString.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
    const base64 = pdfString.substring(base64Index);
    return decode(base64)   
  };
  docxFilled =  JSON.parse(this.props.dataSet||"{links:[{name:\"Parentlink1\",url:\"\",target:\"_blank\",expandAriaLabel:\"ShowmoreParentlink1\",links:[{name:\"Childlink1\",url:\"http://example.com\",target:\"_blank\"},{name:\"Childlink2\",url:\"http://example.com\",target:\"_blank\",expandAriaLabel:\"ShowmoreChildlink2\",links:[{name:\"3rdlevellink1\",url:\"http://example.com\",target:\"_blank\"},{name:\"3rdlevellink2\",url:\"http://example.com\",target:\"_blank\"},]},{name:\"Childlink3\",url:\"http://example.com\",target:\"_blank\"}]},{name:\"Parentlink2\",url:\"http://example.com\",target:\"_blank\",expandAriaLabel:\"ShowmoreParentlink2\",links:[{name:\"Childlink4\",url:\"http://example.com\",target:\"_blank\"}]}]}");
  navStyles: Partial<INavStyles> = {
    root: {
      width: 250,
      height: 350,
      border: '1px solid #eee',
      overflowY: 'auto',
      background:this.props.backgroundcolour,
    },
    // these link styles override the default truncation behavior
    link: {
      whiteSpace: 'none',
      lineHeight: '',
      color:this.props.textcolour,
      fontSize:12,
      paddingBottom:0,
      paddingTop:0,
    },
  };
  navLinkGroups: INavLinkGroup[] = [

 JSON.parse(this.docxFilled)

 ];
  public render(): React.ReactNode {

   return <Nav ariaLabel="Nav example with nested links" styles={this.navStyles} groups={this.navLinkGroups} />;
  }
}