import React, {ReactNode} from 'react';
import './App.css';
import {InputComponent} from "./InputComponent";

class ToDoItem {

    title: string;

    constructor(title: string) {
        this.title = title;
    }

}

interface AppState {

    items: ToDoItem[];

}

export class App extends React.Component<{}, AppState> {


    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            items: []
        };
    }

    onNewTodoHandle(title: string) {
        let newTodoItem = new ToDoItem(title);
        this.setState({
            items: [...this.state.items, newTodoItem]
        });
    }

    render(): ReactNode {
        return (
            <div className="App">

                <main className="py-md-3 pl-md-5">

                    <div className="container">

                        <InputComponent onNewTodoCreated={title => this.onNewTodoHandle(title)}/>

                        <div id="items-container">
                            {this.state.items.map(todoItem => {
                                return (
                                    <div>{todoItem.title}</div>
                                )
                            })}
                        </div>

                    </div>
                </main>

            </div>
        );
    }

};

export default App;
