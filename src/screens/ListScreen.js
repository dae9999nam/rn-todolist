import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import List from '../component/List';
import EmptyList from '../component/EmptyList';
import InputFAB from '../component/InputFAB';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const ListScreen = () => {
  const { bottom } = useSafeAreaInsets();
  const [todos, setTodos] = useState([]);
  const [isBottom, setIsBottom] = useState(false);

  const onInsert = (task) => {
    const id = nanoid();
    setTodos((prev) => [{ id, task, isDone: false }, ...prev]);
  };
  return (
    <View style={{ flex: 1, paddingBottom: bottom }}>
      {todos.length ? (
        <List data={todos} setIsBottom={setIsBottom} />
      ) : (
        <EmptyList />
      )}
      <InputFAB onInsert={onInsert} isBottom={isBottom} />
    </View>
  );
};

export default ListScreen;
