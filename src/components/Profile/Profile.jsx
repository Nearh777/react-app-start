import PropTypes from 'prop-types';
import {
  ProfileStyled,
  DescriptionStyled,
  AvatarStyled,
  NameStyled,
  TagStyled,
  LocationStyled,
  StatsStyled,
  StatsItemStyled,  
  LabelStyled,
  QuantityStyled
} from './profile.styled';

export default function Profile({
  avatar,
  username,
  tag,
  location,
  followers,
  views,
  likes,
}) {
  // const { avatar, username, tag, location, followers, views, likes } = props;
  return (
    <ProfileStyled>
      <DescriptionStyled>
        <AvatarStyled src={avatar} alt={username} />
        <NameStyled>{username}</NameStyled>
        <TagStyled>@{tag}</TagStyled>
        <LocationStyled>{location}</LocationStyled>
      </DescriptionStyled>

      <StatsStyled>
        <StatsItemStyled>
          <LabelStyled>Followers</LabelStyled>
          <QuantityStyled>{followers}</QuantityStyled>
        </StatsItemStyled>
        <StatsItemStyled>
          <LabelStyled>Views</LabelStyled>
          <QuantityStyled>{views}</QuantityStyled>
        </StatsItemStyled>
        <StatsItemStyled>
          <LabelStyled>Likes</LabelStyled>
          <QuantityStyled>{likes}</QuantityStyled>
        </StatsItemStyled>
      </StatsStyled>
    </ProfileStyled>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
