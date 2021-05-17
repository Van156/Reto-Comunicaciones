import {Navigation} from 'react-native-navigation';
import registerScreens from './registerScreens';
import {pushMainStack} from './layouts';
import {HOME} from './screens';
import {pushTabBasedApp} from './layouts/bottomTabs';

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
  pushTabBasedApp();
 //pushMainStack(HOME.name);
}


export const toggleMenu = (bool) => {
  Navigation.mergeOptions('leftSideDrawer', {
    sideMenu: {
      left: {
        visible: bool,
      },
    },
  });
};

export const pushScreen = (componentId, toPush, props = {}) => {
  Navigation.push(componentId, {
    component: {
      name: toPush,
      passProps: props,
      options: {
        sideMenu: {
          left: {
            enabled: false,
            visible: false,
            shouldStretchDrawer: true,
          },
        },
        animations: {
          push: {
            waitForRender: true,
          },
        },
      },
    },
  });
  closeMenu();
};

export const pushScreenNoTabs = (componentId, toPush, props = {}) => {
  Navigation.push(componentId, {
    component: {
      name: toPush,
      passProps: props,
      options: {
        bottomTabs: {
          visible: false,
        },
        sideMenu: {
          openGestureMode: 'bezel',
          left: {
            enabled: false,
            visible: false,
          },
        },
        animations: {
          push: {
            waitForRender: true,
          },
        },
      },
    },
  });

};

export const goingToHome = () => {
  Navigation.mergeOptions('favoritesComponent', {
    bottomTabs: {
      currentTabIndex: 0,
    },
  });

};

export const changeTab = (index) => {
  closeMenu();
  return index
    ? Navigation.mergeOptions('mainComponent', {
        bottomTabs: {
          currentTabIndex: index,
        },
      })
    : null;
};

export const closeMenu = () => {
  Navigation.mergeOptions('leftSideDrawer', {
    sideMenu: {
      left: {
        visible: false,
      },
    },
  });
};

export const showModal = (toShow, props) => {
  Navigation.showModal({
    component: {
      name: toShow,
      passProps: props,
      options: {
        animations: {
          push: {
            waitForRender: true,
          },
        },
        layout: {
          componentBackgroundColor: 'transparent',
        },
        modalPresentationStyle: 'overCurrentContext',
        topBar: {
          visible: false,
          animate: true,
        },
      },
    },
  });
};

export const showOverlay = (toShow, props) => {
  return Navigation.showOverlay({
    component: {
      options: {
        overlay: {
          interceptTouchOutside: false,
        },
        layout: {
          componentBackgroundColor: 'transparent',
        },
      },
      name: toShow,
      passProps: props,
    },
  });
};

export const dismissOverlay = (componentId) => {
  return Navigation.dismissOverlay(componentId);
};

export const dismissModal = (componentId) => {
  return Navigation.dismissModal(componentId);
};

export const popComponent = (componentId) => {
  return Navigation.pop(componentId);
};

export const popToRoot = (componentId) => Navigation.popToRoot(componentId);

export const dismissAllModals = () => Navigation.dismissAllModals();
