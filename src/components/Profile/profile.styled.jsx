import styled from '@emotion/styled';

export const ProfileStyled = styled.div`
width: 480px;

 display: flex;
  flex-direction: column;
  
  align-items: center;
  padding: 20px;
  margin: 0 auto;
  background-color: hsla(195, 11%, 55%, 0.872);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const DescriptionStyled = styled.div`

  text-align: center;
  padding: 20px;
  background-color: white;
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
  
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StatsItemStyled = styled.li`

  display: flex;
  flex-direction: column;
  width: 5%;
  
  align-items: center;
  
  
`;

export const LabelStyled = styled.span`
   font-size: 14px;
  color: white;
`;

export const QuantityStyled = styled.span`
  font-weight: 700;
`;
