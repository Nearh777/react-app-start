import PropTypes from 'prop-types';
import { FriendListItemStyled, Status, Avatar, Name } from './friendListItem.styled';

export default function FriendListItem ({ friend })  {
  return (
    <FriendListItemStyled>
      <Status isOnline={friend.isOnline} />
      <Avatar src={friend.avatar} alt={friend.name} width="48" />
      <Name>{friend.name}</Name>
    </FriendListItemStyled>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.object.isRequired,
};



