import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import List from '../component/List';
import EmptyList from '../component/EmptyList';

const Separator = () => {
  return <View style={styles.separator}></View>;
};

const ListScreen = () => {
  const { bottom } = useSafeAreaInsets();
  const todos = [];
  return (
    <View style={{ flex: 1, paddingBottom: bottom }}>
      {todos.length ? <List data={todos} /> : <EmptyList />}
    </View>
  );
};

export default ListScreen;
