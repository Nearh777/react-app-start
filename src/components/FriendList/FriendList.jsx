import PropTypes from 'prop-types';
import { FriendListStyled } from './friendList.styled';
import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList ({ friends }) {
  return (
    <FriendListStyled>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </FriendListStyled>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};




