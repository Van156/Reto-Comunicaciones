import {Navigation} from 'react-native-navigation';
import {HOME, NOAA15_SCREEN, NOAA19_SCREEN} from '../screens'
export async function pushTabBasedApp() {
  return Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: NOAA15_SCREEN.name,
                    id: 'NOAA15',
                    options: {},
                  },
                },
              ],
              options: {
                bottomTab: {
                  animate: false,
                  backgroundColor: 'transparent',
                  text: 'NOAA 15',
                  testID: 'HOME_SCREEN_BAR_BUTTON',
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    id: 'NOAA19',
                    name: NOAA19_SCREEN.name,
                    options: {},
                  },
                },
              ],
              options: {
                bottomTab: {
                  animate: false,
                  backgroundColor: 'transparent',
                  text: 'NOAA 19',
                  testID: 'MY_PRODUCTS_BAR_BUTTON',
                },
              },
            },
          },
        ],
      },

      options: {
        sideMenu: {
          left: {},
        },
      },
    },
  });
}
