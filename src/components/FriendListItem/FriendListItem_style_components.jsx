import styled from 'styled-components';

const FriendItem = styled.li`
  display: flex;
  align-items: center;
`;
const AvatarImg = styled.img`
  width: 30%;
  margin-right: 20px;
  margin-bottom: 20px;
`;
const AvatarName = styled.p`
  font-size: 30px;
`;
const LabelText = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: ${props => (props.green ? 'green' : 'red')};
`;
export { LabelText, AvatarName, AvatarImg, FriendItem };
