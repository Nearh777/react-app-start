import styled from '@emotion/styled';

export const ProfileStyled = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const DescriptionStyled = styled.div`
  text-align: center;
`;

export const AvatarStyled = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const NameStyled = styled.p`
   font-size: 24px;
  font-weight: 700;
`;

export const TagStyled = styled.p`
  font-size: 18px;
  color: #757575;
`;

export const LocationStyled = styled.p`
  font-size: 16px;
  color: #757575;
`;

export const StatsStyled = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StatsItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const LabelStyled = styled.span`
   font-size: 14px;
  color: #757575;
`;

export const QuantityStyled = styled.span`
  font-weight: 700;
`;
