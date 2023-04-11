import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { HelloWorld, IHelloWorldProps } from "./HelloWorld";
import * as React from "react";

export class PCFReactMenu implements ComponentFramework.ReactControl<IInputs, IOutputs> {

    private theComponent: ComponentFramework.ReactControl<IInputs, IOutputs>;
    private notifyOutputChanged: () => void;
    private _textcolour: string;
    private _backgroundcolour: string;
    private docxFilled:object;

    /**
     * Empty constructor.
     */
    constructor() { }

    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     */
    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary
    ): void {
        this._backgroundcolour = context.parameters.backgroundcolour.raw||"";
        this._textcolour = context.parameters.textcolour.raw||"";
        this.docxFilled =  JSON.parse(context.parameters.menuitems.raw)|| [
            {
              "links": [
                {
                  "name": "Parent link 1",
                  "url": "",
                  "target": "_blank",
                  "expandAriaLabel": "Show more Parent link 1",
                  "links": [
                    {
                      "name": "Child link 1",
                      "url": "http://example.com",
                      "target": "_blank"
                    },
                    {
                      "name": "Child link 2",
                      "url": "http://example.com",
                      "target": "_blank",
                      "expandAriaLabel": "Show more Child link 2",
                      "links": [
                        {
                         "name": "3rd level link 1",
                          "url": "http://example.com",
                          "target": "_blank"
                        },
                        {
                          "name": "3rd level link 2",
                          "url": "http://example.com",
                          "target": "_blank"
                        },
                      ]
                    },
                    {
                      "name": "Child link 3",
                      "url": "http://example.com",
                      "target": "_blank"
                    },
                  ]
                },
                {
                  "name": "Parent link 2",
                  "url": "http://example.com",
                  "target": "_blank",
                  "expandAriaLabel": "Show more Parent link 2",
                  "links": [
                    {
                      "name": "Child link 4",
                      "url": "http://example.com",
                      "target": "_blank"
                    }
                  ]
                }
              ]
            }
          ] 
        this.notifyOutputChanged = notifyOutputChanged;
    }

    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     * @returns ReactElement root react element for the control
     */
    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
        const props: IHelloWorldProps = {textcolour: this._textcolour,backgroundcolour:this._backgroundcolour,itemsdata:this.docxFilled};
        return React.createElement(
            HelloWorld, props
        );
    }

    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
     */
    public getOutputs(): IOutputs {
        return { };
    }

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void {
        // Add code to cleanup control if necessary
    }
}