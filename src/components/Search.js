// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';

// Iteration 5
function Search(props) {

    const { search, updateSearch } = props;

  return (
    <div
    style={{
        width: '30%'
    }}>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={search} type="text" onChange={updateSearch} />
    </div>
  );
}

export default Search;