import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import List from '../component/List';
import EmptyList from '../component/EmptyList';
import InputFAB from '../component/InputFAB';

const ListScreen = () => {
  const { bottom } = useSafeAreaInsets();
  const todos = [];
  return (
    <View style={{ flex: 1, paddingBottom: bottom }}>
      {todos.length ? <List data={todos} /> : <EmptyList />}
      <InputFAB />
    </View>
  );
};

export default ListScreen;
