import { createStackNavigator } from 'react-navigation';

import DecksContainer from '../../containers/DecksContainer';
import DeckDetailContainer from '../../containers/DeckDetailContainer';
import QuizContainer from '../../containers/QuizContainer';

import ConfirmationScreen from '../ConfirmationScreen';

import CardFormScreen from '../../screens/CardFormScreen';
import DeckFormScreen from '../../screens/DeckFormScreen';

const CustomStackNavigator = createStackNavigator({
  Decks: {
    screen: DecksContainer
  },
  DeckDetail: {
    screen: DeckDetailContainer
  },
  CardForm: {
    screen: CardFormScreen
  },
  DeckForm: {
    screen: DeckFormScreen
  },
  ConfirmationScreen: {
    screen: ConfirmationScreen,
    navigationOptions: {
      headerLeft: null
    }
  },
  Quiz: {
    screen: QuizContainer,
    navigationOptions: {
      headerLeft: null
    }
  }
});

export default CustomStackNavigator;
