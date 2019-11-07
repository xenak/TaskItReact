import React, {ReactNode} from 'react';
import './App.css';
import {InputComponent} from "./InputComponent";

class ToDoItem {

    title: string;
    date: Date;
    id: number;

    constructor(title: string, date: Date, id: number) {
        this.title = title;
        this.id = id;
        this.date = date
    }

}

interface AppState {

    items: ToDoItem[];

}

export class App extends React.Component<{}, AppState> {


    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            items: [],
        };
    }

    onNewTodoHandle(title: string, date: Date) {
        const id = this.state.items.length;
        let newTodoItem = new ToDoItem(title, date, id);
        this.setState({
            items: [...this.state.items, newTodoItem],
        });
    }

    onItemRemove(id: number) {
        this.setState({
            items: this.state.items.filter((item) => item.id !== id )
        });
    }




    render(): ReactNode {
        return (
            <div className="App">
                <header className="navbar sticky-top navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
                    <div className="navbar-nav-scroll">
                        <ul className="navbar-nav bd-navbar-nav flex-row">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">TaskIReact</a>
                            </li>
                        </ul>
                    </div>

                </header>
                <main className="py-md-3 pl-md-5">

                    <div className="container">

                        <InputComponent onNewTodoCreated={(title,date) => this.onNewTodoHandle(title, date)}/>

                        <div id="items-container">
                            {this.state.items.map(todoItem => {
                                return (
                                    <div className="block-example border-bottom border-light">
                                        <div className="d-flex p-2 bd-highlight justify-content-between">
                                            <div>{todoItem.title}</div>
                                            <div>{todoItem.date.toLocaleString()}</div>
                                            <button className="btn btn-outline-danger" type="button"
                                                    onClick={() => {
                                                        this.onItemRemove(todoItem.id)
                                                    }}
                                            >Удалить
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </main>

            </div>
        );
    }

}

export default App;
