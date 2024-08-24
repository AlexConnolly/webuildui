import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Import your Tailwind CSS

import { Alert, Badge, Button, DrawerMenuHandler, HeaderBar, IconBar, Input, ModalHandler, modalService, Panel } from '../src';  // Import your component
import { StyleModifier } from '../src/modifiers/style-modifiers';
import { WidthModifier } from '../src/modifiers/width-modifiers';
import { StateModifier } from '../src/modifiers/state-modifiers';
import { ButtonType } from '../src/components/Button';
import { drawerMenuService } from '../src/services/DrawerMenuService';

const App = () => (
  <div className="p-4 bg-gray-100">

    <ModalHandler></ModalHandler>
    <DrawerMenuHandler></DrawerMenuHandler>

    <h1 className="text-3xl font-bold p-4">WebuildUI</h1>

    <Panel title='Concepts'>
        <div className="">
            WebuildUI is a simple, easy to understand and un-opinionated UI framework. It is lightweight and has pretty much everything you need to get going.

            The key concepts are:

            <ul className="list-disc p-4">
                <li>Padding and margins are mostly unusued - This allows the developer to define their own styling</li>
                <li>Nothing is animated except for indicators (Loading etc). This reduces motion sickness but also makes the application feel more "lightweight"</li>
            </ul>
        </div>
    </Panel>

    <Panel title={'Buttons'}>
        <div>
            <h5 className="py-2">
                Standard buttons
            </h5>

            <Button style={StyleModifier.Default}>
                Default
            </Button>
            <Button style={StyleModifier.Success}>
                Success
            </Button>
            <Button style={StyleModifier.Primary}>
                Primary
            </Button>
            <Button style={StyleModifier.Error}>
                Error
            </Button>

            <h5 className="py-4">
                Button modifiers
            </h5>


            <Button style={StyleModifier.Default} width={WidthModifier.Fill}>
                Fill
            </Button>

            <Button style={StyleModifier.Default} state={StateModifier.Loading}>
                Loading
            </Button>

            <Button style={StyleModifier.Default} state={StateModifier.Disabled}>
                Disabled
            </Button>

            <Button style={StyleModifier.Default} type={ButtonType.Icon} onClick={() => {
                alert("Clicked icon button!")
            }}>
                <i className="bx bxs-message-square-dots"></i>
            </Button>
        </div>
    </Panel>

    <Panel title={'Inputs'}>
        <Input type={"text"}></Input>

        <Input type={"text"} placeholder={"Placeholder text"}></Input>

        <Input type={"text"} placeholder={"Fill"} width={WidthModifier.Fill}></Input>

        <Input type={"text"} placeholder={"With label"} width={WidthModifier.Fill} label={"Label text"}></Input>
        <Input type={"text"} placeholder={"With icon"} width={WidthModifier.Fill} label={"Label text"} icon="bxs-message-square-dots"></Input>


        <Input type={"text"} placeholder={"With change event"} width={WidthModifier.Fill} label={"With change event"} onChange={(event) => {
            alert(event.currentTarget.value);
        }}></Input>
    </Panel>

    <Panel title='Bars'>
    <h3 className="text-xl font-bold py-4">
        Icon Bar
    </h3>

    <p className="py-4">
        Icon bar is used for navigation in mobile devices.
    </p>

    <IconBar buttons={[
        {
            icon: "bxs-home",
            onSelected: () => {
                alert("Selected home");
            }
        }, 
        {
            icon: "bxs-objects-vertical-bottom",
            onSelected: () => {

            }
        }, 
        {
            icon: "bxs-cart-add"
        }
    ]}></IconBar>



    <h3 className="text-xl font-bold py-4">
        Header Bar
    </h3>

    <HeaderBar title='Navigation Header' onSelectItem={function (click_key: string): void {
                
            } } items={[
                {
                    text: "Menu item 1",
                    click_key: "1"
                }
            ]}></HeaderBar>
    </Panel>

    <Panel title='Modals'>
        <div>
            <div className="text-sm mb-2">
                The modal service allows you to push and pop modals from the stack. Click the button below for an example:
            </div>

            <Button style={StyleModifier.Default} onClick={() => {
                modalService.setModal({
                    title: "New modal",
                    children: <div>Modal body</div>,
                    onClosed: function (closeKey: string): void {
                        if(closeKey == "another") {
                            modalService.setModal({
                                title: 'Nested modal',
                                children: <div>This is a nested modal. This modal is the result of another.</div>,
                                onClosed: function (closeKey: string): void {

                                },
                                buttons: [
                                    {
                                        text: "Close",
                                        close_key: "",
                                        style: StyleModifier.Primary
                                    }
                                ]
                            });
                        }
                    },
                    buttons: [
                        {
                            text: "Close",
                            close_key: "",
                            style: StyleModifier.Default
                        },
                        {
                            text: "Open another",
                            close_key: "another",
                            style: StyleModifier.Primary
                        }
                    ]
                });
            }}>Open Modal</Button>
        </div>
    </Panel>

    <Panel title='Drawer menu'>
        <p className="mb-2">
            The drawer menu is used to show navigation options to the user outside of the icon bar.
        </p>
        <div>
            <Button style={StyleModifier.Default} onClick={() => {
                drawerMenuService.setDrawerMenu({
                    title: 'My menu',
                    items: [
                        {
                            text: "First item",
                            close_key: "first"
                        }, 
                        {
                            text: "Second item",
                            close_key: "second"
                        }
                    ],
                    onClosed: function (close_key: string): void {
                        
                        var close_key_text = close_key;

                        if(close_key == "") {
                            close_key_text = "Clicked outside menu";
                        }

                        modalService.setModal({
                            title: "You selected",
                            buttons: [
                                {
                                    text: "Close",
                                    style: StyleModifier.Default,
                                    close_key: "close"
                                }
                            ],
                            onClosed: (key: string) =>  {

                            },
                            children : <div>{close_key_text}</div>
                        });
                    }
                });
            }}>
                Open drawer menu
            </Button>
        </div>
    </Panel>

    <Panel title='Alerts'>
        <Alert title={'Default'} message={'Its a default alert. Youve done something, havent you?'} style={StyleModifier.Default}></Alert>
        <Alert title={'Success'} message={'Hoorah! You did something... and it worked!'} style={StyleModifier.Success}></Alert>
        <Alert title={'Error'} message={'That... didnt go as expected!'} style={StyleModifier.Error}></Alert>
        <Alert title={'Primary'} message={'Primary - fancy!'} style={StyleModifier.Primary}></Alert>
    </Panel>

    <Panel title='Badges'>

        <p className="mb-2">
            Use badges to add extra context or data to text.
        </p>

        <Badge text={'Default'} style={StyleModifier.Default}></Badge>
        <Badge text={'Primary'} style={StyleModifier.Primary}></Badge>
        <Badge text={'Success'} style={StyleModifier.Success}></Badge>
        <Badge text={'Error'} style={StyleModifier.Error}></Badge>
    </Panel>

  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
