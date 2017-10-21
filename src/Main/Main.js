import React from 'react';
import { connect } from 'react-redux';
import { DrawerNavigator } from 'react-navigation';
import Sidebar from '../Sidebar/Sidebar.js';
import LoginMainFrame from '../Login/MainFrame.js';
import TodayMainFrame from '../Today/MainFrame.js';
import CalendarMainFrame from '../Calendar/MainFrame.js';
import NotificationMainFrame from '../Notification/MainFrame.js';

const Main = DrawerNavigator(
  {
    LoginMainFrame: {
      screen: connect(state => state)(LoginMainFrame),
    },
    TodayMainFrame: {
      screen: connect(state => state)(TodayMainFrame),
    },
    CalendarFrame: {
      screen: connect(state => state)(CalendarMainFrame),
    },
    NotificationFrame: {
      screen: connect(state => state)(NotificationMainFrame),
    },
  },
  {
    contentComponent: connect(state => state)(Sidebar),
  }
);

export default Main;
