/**
 * React Native Starter: TabBarIOS
 * https://github.com/joshbuchea/react-native-starter-tabbarios
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  TabBarIOS,
  StyleSheet,
  Text,
  View,
} = React;

class StarterTabBarIOS extends React.Component {

  constructor(props) {
    super(props);
    this.state = {selectedTab: 'tabFavorites'};
  }

  setTab(tabId) {
    this.setState({selectedTab: tabId});
  }

  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          systemIcon="favorites"
          selected={this.state.selectedTab === 'tabFavorites'}
          onPress={() => this.setTab('tabFavorites')}>
          <TabFavorites/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon="downloads"
          selected={this.state.selectedTab === 'tabDownloads'}
          onPress={() => this.setTab('tabDownloads')}>
          <TabDownloads/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon="more"
          selected={this.state.selectedTab === 'tabMore'}
          onPress={() => this.setTab('tabMore')}>
          <TabMore/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }

}

/**
 * Favorites Tab
 */
class TabFavorites extends React.Component {

  render() {
    return (
      <View style={styles.tabContent}>
        <Text style={styles.tabText}>Favorites</Text>
      </View>
    );
  }

}

/**
 * Downloads Tab
 */
class TabDownloads extends React.Component {

  render() {
    return (
      <View style={styles.tabContent}>
        <Text style={styles.tabText}>Downloads</Text>
      </View>
    );
  }

}

/**
 * More Tab
 */
class TabMore extends React.Component {

  render() {
    return (
      <View style={styles.tabContent}>
        <Text style={styles.tabText}>More</Text>
      </View>
    );
  }

}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center'
  },
  tabText: {
    margin: 50,
    fontSize: 40
  }
});

AppRegistry.registerComponent('StarterTabBarIOS', () => StarterTabBarIOS);
