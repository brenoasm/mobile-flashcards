import { createStackNavigator } from 'react-navigation';

import DecksContainer from '../../containers/DecksContainer';
import DeckDetailContainer from '../../containers/DeckDetailContainer';
import CardFormScreen from '../../screens/CardFormScreen';

const CustomStackNavigator = createStackNavigator({
  Decks: {
    screen: DecksContainer
  },
  DeckDetail: {
    screen: DeckDetailContainer
  },
  CardForm: {
    screen: CardFormScreen,
  }
});

export default CustomStackNavigator;
