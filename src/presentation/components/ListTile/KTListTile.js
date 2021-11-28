import React from "react";
import PropTypes from "prop-types";
import { View, } from "react-native";
import { ListItem, Avatar, Icon, Image } from "react-native-elements";




function KTList({ item, index }) {
  return (
    <ListItem bottomDivider>
      <Avatar source={{ uri: item.avatar_url }} />
      <ListItem.Content>
        <ListItem.Title>{item.listName}</ListItem.Title>
        <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
}

function KTUserList({ userList }) {
  return (
    userList.map((user, i) => (
      <ListItem key={i} bottomDivider>
        <Avatar
          rounded
          onPress={() => console.log("avatar pressed")}
          title={user.username[0]}
          source={{ uri: user.avatar_url }} />
        <ListItem.Content>
          <ListItem.Title>{user.username}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    ))
  );
}


function KTListTile(props) {
  return (
    <View>
      <Text>Placeholder for List Tile Components</Text>
    </View>
  );
}

KTListTile.propTypes = {};

export {
  KTListTile,
  KTList,
  KTUserList,
};
