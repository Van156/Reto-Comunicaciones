import {Navigation} from 'react-native-navigation';
import registerScreens from './registerScreens';
import {pushMainStack} from './layouts';
import {HOME} from './screens';

export async function startApp() {
  registerScreens();
  Navigation.setDefaultOptions({
    sideMenu: {
      openGestureMode: 'bezel',
    },
    topBar: {
      visible: false,
      // In case, visible is true
      noBorder: true,
      background: {
        color: 'transparent',
        translucent: true,
      },
      drawBehind: true,
      animate: true,
      elevation: 0,
    },
    statusBar: {
      visible: true,
      translucent: true,
    },
    layout: {
      backgroundColor: 'transparent',
      orientation: ['portrait', 'landscape'],
    },
  });

  pushMainStack(HOME.name);
}
