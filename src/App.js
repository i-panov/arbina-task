import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Alignment, Button } from "@blueprintjs/core";
import { Table, Column, Cell } from "@blueprintjs/table";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchValue: '',
      items: ['apple', 'banana', 'cherry'],
    };

    this.onSearchValueChanged = this.onSearchValueChanged.bind(this);
    this.addItem = this.addItem.bind(this);
    this.renderCell = this.renderCell.bind(this);
  }

  onSearchValueChanged(e) {
    this.setState({searchValue: e.target.value});
  }

  addItem() {
    this.state.items.push(this.state.searchValue);
  }

  renderCell(rowIndex) {
    const items = this.state.searchValue ? this.state.items.filter(x => x.includes(this.state.searchValue)) : this.state.items;
    return <Cell>{items[rowIndex]}</Cell>;
  }

  render() {
    return (
      <div className="App">
        <Navbar align={Alignment.CENTER}>
          <Navbar.Group>
            <input type="search" value={this.state.searchValue} onChange={this.onSearchValueChanged} placeholder="Поиск..." style={{marginRight: '5px'}} />
            <Button icon="add" onClick={this.addItem} />
            <Navbar.Divider />
            <Navbar.Heading>Arbina</Navbar.Heading>
          </Navbar.Group>
        </Navbar>
        <Table numRows={this.state.items.length}>
            <Column name="Данные" cellRenderer={this.renderCell} />
        </Table>
      </div>
    );
  }
}

export default App;
