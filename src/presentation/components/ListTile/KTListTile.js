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

function KTUserList({ shoppingList }) {
  return (
    shoppingList.map((id, i) => (
      <ListItem key={i} bottomDivider>
        <Avatar
          rounded
          onPress={() => console.log("avatar pressed")}
          title={id.name[0]} />
        <ListItem.Content>
          <ListItem.Title>{id.name}</ListItem.Title>
    <ListItem.Subtitle>{id.count}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron/>
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
