import styled from '@emotion/styled';


export const FriendListItemStyled = styled.li`
  display: flex;
width: 330px;
height: 110px;
box-shadow: 10px 10px 13px -5px rgba(173,130,164,0.58);
box-sizing: border-box;
border: 1px solid rgba(212, 198, 214, 0.815);
border-radius: 5px;
margin: 0 auto;
`;


export const Status = styled.span`
 height: 20px;
width: 20px;
border-radius: 50%;
margin-left: 20px;
margin-top: auto;
margin-bottom: auto;
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;


export const Avatar = styled.img`
  width: 100px;
    height: 100px;
    margin-left: 20px;
    padding-top: 5px;
`;


export const Name = styled.p`
  font-size: 36px;
font-weight: 600;
margin-top: auto;
margin-bottom: auto;
margin-left: 20px;
`;

