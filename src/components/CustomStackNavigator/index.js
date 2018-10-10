import { createStackNavigator } from 'react-navigation';

import DecksContainer from '../../containers/DecksContainer';
import DeckDetailContainer from '../../containers/DeckDetailContainer';
import CardFormContainer from '../../containers/CardFormContainer';

const CustomStackNavigator = createStackNavigator({
  Decks: {
    screen: DecksContainer
  },
  DeckDetail: {
    screen: DeckDetailContainer
  },
  CardForm: {
    screen: CardFormContainer,
  }
});

export default CustomStackNavigator;
