import { useState, useEffect } from 'react';
import { getUsers } from '../../services/api';
import PhotoCover from '../../assets/image/photo-cover.png';
import ClipLoader from 'react-spinners/ClipLoader';
import {
  ListSectionStyled,
  TitleStyled,
  ButtonStyled,
  UlStyled,
  LiStyled,
  ImageStyled,
  UserTitleStyled,
  UserInfoStyled,
  LoadingWrapper,
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
        if (page > 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
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
            <ImageStyled src={user.photo ? user.photo : PhotoCover} alt={user.name} />
            <UserTitleStyled>{user.name.slice(0, 25)}</UserTitleStyled>
            <ul>
              <li>
                <UserInfoStyled>{user.position}</UserInfoStyled>
              </li>
              <li>
                <UserInfoStyled>{user.email.slice(0, 25)}</UserInfoStyled>
              </li>
              <li>
                <UserInfoStyled>{user.phone}</UserInfoStyled>
              </li>
            </ul>
          </LiStyled>
        ))}
      </UlStyled>
      {loading ? (
        <LoadingWrapper>
          <ClipLoader color="#00BDD3" size={48} />
        </LoadingWrapper>
      ) : (
        <ButtonStyled onClick={handleClick} disabled={isDisabledButton}>
          Show more
        </ButtonStyled>
      )}
    </ListSectionStyled>
  );
};

export default List;
