import { createStackNavigator } from 'react-navigation';

import DecksContainer from '../../containers/DecksContainer';
import DeckDetailContainer from '../../containers/DeckDetailContainer';

const CustomStackNavigator = createStackNavigator({
  Decks: {
    screen: DecksContainer
  },
  DeckDetail: {
    screen: DeckDetailContainer
  }
});

export default CustomStackNavigator;
