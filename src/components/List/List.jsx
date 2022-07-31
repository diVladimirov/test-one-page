import { useState, useEffect } from 'react';
import { getUsers } from '../../services/api';
import {
  ListSectionStyled,
  TitleStyled,
  ButtonStyled,
  UlStyled,
  LiStyled,
  ImageStyled,
  UserTitleStyled,
  UserInfoStyled,
} from './List.styled';

const List = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setloading] = useState(false);
  const [isDisabledButton, setIsDisabledButton] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setloading(true);
      try {
        const response = await getUsers(page);
        if (page === response.total_pages) {
          setIsDisabledButton(true);
        }
        setUsers(prevUsers => [...prevUsers, ...response.users]);
      } catch (error) {
        return error.message;
      } finally {
        setloading(false);
      }
    };

    fetchUsers();
  }, [page]);

  const handleClick = () => {
    setPage(page + 1);
  };
  return (
    <ListSectionStyled id="users">
      <TitleStyled>Working with GET request</TitleStyled>
      <UlStyled>
        {users.map(user => (
          <LiStyled key={user.id}>
            <ImageStyled src={user.photo} alt={user.name} />
            <UserTitleStyled>{user.name}</UserTitleStyled>
            <ul>
              <li>
                <UserInfoStyled>{user.position}</UserInfoStyled>
              </li>
              <li>
                <UserInfoStyled>{user.email}</UserInfoStyled>
              </li>
              <li>
                <UserInfoStyled>{user.phone}</UserInfoStyled>
              </li>
            </ul>
          </LiStyled>
        ))}
      </UlStyled>
      <ButtonStyled onClick={handleClick} disabled={isDisabledButton}>
        Show more
      </ButtonStyled>
    </ListSectionStyled>
  );
};

export default List;
