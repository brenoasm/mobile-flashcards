import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const FLASHCARDS_DECKS_KEY = 'flashcards_decks_key';
const FLASHCARDS_CARDS_KEY = 'flashcards_cards_key';
const NOTIFICATION_KEY = 'notification_key';

export const getDecks = () => {
  return AsyncStorage.getItem(FLASHCARDS_DECKS_KEY).then(
    result => (result ? JSON.parse(result) : [])
  );
};

export const getCards = () => {
  return AsyncStorage.getItem(FLASHCARDS_CARDS_KEY).then(
    result => (result ? JSON.parse(result) : [])
  );
};

export const saveDeck = deck => {
  return AsyncStorage.getItem(FLASHCARDS_DECKS_KEY).then(results => {
    const decks = results ? JSON.parse(results) : [];
    const alteredDecks = [...decks, deck];

    return AsyncStorage.setItem(
      FLASHCARDS_DECKS_KEY,
      JSON.stringify(alteredDecks)
    );
  });
};

export const saveCard = card => {
  return AsyncStorage.getItem(FLASHCARDS_CARDS_KEY).then(results => {
    const cards = results ? JSON.parse(results) : [];
    const alteredCards = [...cards, card];

    return AsyncStorage.setItem(
      FLASHCARDS_CARDS_KEY,
      JSON.stringify(alteredCards)
    );
  });
};

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

function createNotification() {
  return {
    title: "Let's study!",
    body: 'Hey, how about to practice your flashcards today?',
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  };
}

export function setLocalNotification() {
  clearLocalNotification();

  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(20);
            tomorrow.setMinutes(0);

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: 'day'
            });

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}
