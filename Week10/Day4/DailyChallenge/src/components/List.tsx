import { Component } from "react";

interface ListProps<T> {
  items: T[]; // Array of items to render
  renderItem: (item: T) => React.ReactNode; // Function to render each item
}

class List<T> extends Component<ListProps<T>> {
  render() {
    const { items, renderItem } = this.props;

    return (
      <div>
        {items.map((item, index) => (
          <div key={index}>{renderItem(item)}</div>
        ))}
      </div>
    );
  }
}

export default List;
