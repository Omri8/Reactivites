import { Button, Container, Menu } from 'semantic-ui-react';

interface Props {
  openForm: () => void;
}

export default function NavBar({ openForm }: Props) {
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item header>
          <img src='./public/assets/Logo.png' style={{ marginRight: '10px' }} />
          Reactivites
        </Menu.Item>
        <Menu.Item name='Activites'></Menu.Item>
        <Menu.Item>
          <Button onClick={openForm} positive content='Create activity' />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
