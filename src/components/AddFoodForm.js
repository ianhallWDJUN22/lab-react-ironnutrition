
// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm(props) {

const { foodForm, updateFoodForm, handleAddFood } = props;

  return (
      
    <form style={{
      width: '30%'
    }}
    
    onSubmit={handleAddFood}
    >
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={foodForm.name} name="name" type="text" onChange={updateFoodForm} />

      <label>Image</label>
      <Input value={foodForm.image} name="image" type="text" onChange={updateFoodForm} />
      
      <label>Calories</label>
      <Input value={foodForm.calories} name="calories" type="text" onChange={updateFoodForm} />
      
      <label>Servings</label>
      <Input value={foodForm.servings} name="servings" type="text" onChange={updateFoodForm} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;